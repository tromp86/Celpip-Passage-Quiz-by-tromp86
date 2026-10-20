// Runs the Kokoro model off the main thread so the page never freezes.
import {
  KokoroTTS,
  TextSplitterStream,
} from "https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm";

const MODEL_ID = "onnx-community/Kokoro-82M-v1.0-ONNX";

let ttsPromise = null;
let chain = Promise.resolve(); // requests are generated one at a time
const cancelled = new Set();

function init() {
  if (!ttsPromise) {
    ttsPromise = (async () => {
      // WebGPU is many times faster; fall back to WASM if unavailable
      if (self.navigator && navigator.gpu) {
        try {
          const t = await KokoroTTS.from_pretrained(MODEL_ID, {
            dtype: "fp32",
            device: "webgpu",
          });
          postMessage({ type: "device", device: "webgpu" });
          return t;
        } catch (e) {
          console.warn("[TTS worker] WebGPU failed, using WASM", e);
        }
      }
      const t = await KokoroTTS.from_pretrained(MODEL_ID, {
        dtype: "q8",
        device: "wasm",
      });
      postMessage({ type: "device", device: "wasm" });
      return t;
    })();
    ttsPromise.catch(() => {
      ttsPromise = null; // allow retry
    });
  }
  return ttsPromise;
}

async function generate({ id, text, voice }) {
  try {
    const tts = await init();
    if (cancelled.has(id)) return;

    const splitter = new TextSplitterStream();
    const stream = tts.stream(splitter, { voice });
    splitter.push(text);
    splitter.close();

    // each sentence is sent as soon as it's ready
    for await (const { audio } of stream) {
      if (cancelled.has(id)) return;
      const data = audio.audio; // Float32Array
      postMessage(
        { type: "chunk", id, audio: data, rate: audio.sampling_rate },
        [data.buffer]
      );
    }
    if (!cancelled.has(id)) postMessage({ type: "done", id });
  } catch (err) {
    postMessage({ type: "error", id, message: String((err && err.message) || err) });
  }
}

onmessage = (e) => {
  const m = e.data;
  if (m.type === "init") {
    init().catch((err) =>
      postMessage({ type: "error", id: null, message: String((err && err.message) || err) })
    );
  } else if (m.type === "cancel") {
    cancelled.add(m.id);
  } else if (m.type === "speak") {
    chain = chain.then(() => generate(m));
  }
};
