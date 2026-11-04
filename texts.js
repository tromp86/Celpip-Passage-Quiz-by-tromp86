/* =========================================================
   DATA
   Replace this array with your own texts. Each text has
   exactly 5 "questions". Each question is a "q" string,
   an "options" array, and a "correct" index.

   "body" can be a paragraph-separated string — just paste
   your text with a blank line between paragraphs, same as
   you'd write it anywhere else — or an array of paragraph
   strings if you prefer. Either way it renders as separate
   <p> elements.
   ========================================================= */
const TEXTS = [
  {
    "id": "t1",
    "title": "The Struggle with Constant Connectivity",
    "body": "Many people now spend large parts of their day switching between messages, notifications and short videos. While these tools make communication faster, they also create a sense that attention is always being pulled in different directions. Researchers have begun to notice that frequent interruptions can make it harder to finish complex tasks or remember details from conversations that happened only hours earlier.\n\nSome employers have responded by introducing “focus hours” during which non-urgent messages are delayed. Others encourage staff to turn off notifications for certain periods. Early results suggest that even short stretches of uninterrupted work can improve both the quality of output and how people feel at the end of the day. Yet not every workplace can adopt the same rules, and some roles still require immediate responses.\n\nOutside of work the picture is more complicated. Social platforms are designed to keep users scrolling, and many people report that they open an app without a clear reason and then lose track of time. A growing number of individuals have started setting personal rules — for example, leaving the phone in another room during meals or deleting certain apps for a month. These experiments are rarely perfect, but participants often say they notice small improvements in sleep and mood.\n\nCritics argue that the real problem is not the technology itself but the way people are expected to remain available at all hours. When colleagues or friends routinely send messages late at night, it becomes difficult for any single person to disconnect without feeling they are letting others down. Changing this culture may require more than individual willpower.\n\nDigital tools will almost certainly remain part of daily life. The more useful question is whether people can develop habits that protect their ability to concentrate and rest, rather than treating constant connection as inevitable.",
    "questions": [
      {
        "q": "What does the passage suggest about the effect of frequent interruptions?",
        "options": [
          "They mainly improve memory for short conversations.",
          "They can reduce a person’s ability to complete demanding work.",
          "They are only a problem for people who work from home.",
          "They have no measurable impact on daily performance."
        ],
        "correct": 1
      },
      {
        "q": "Why does the author mention “focus hours” in the second paragraph?",
        "options": [
          "To show that every company has already solved the problem of distractions.",
          "To illustrate one practical response some workplaces have tried.",
          "To argue that notifications should be banned permanently.",
          "To claim that focus hours are more effective than any other method."
        ],
        "correct": 1
      },
      {
        "q": "The phrase “lose track of time” in paragraph three is closest in meaning to:",
        "options": [
          "Become more productive than expected.",
          "Fail to notice how long an activity continues.",
          "Remember every detail of what was viewed.",
          "Decide deliberately to spend more time online."
        ],
        "correct": 1
      },
      {
        "q": "What can be inferred about people who try personal rules for phone use?",
        "options": [
          "They usually abandon the rules within a few days.",
          "They often notice modest positive changes even if the rules are imperfect.",
          "They never experience any improvement in sleep.",
          "They are mainly motivated by pressure from employers."
        ],
        "correct": 1
      },
      {
        "q": "According to the passage, why might individual efforts to disconnect be limited?",
        "options": [
          "Because most people prefer to stay available at all times.",
          "Because social expectations about constant availability remain strong.",
          "Because technology companies have made it impossible to turn devices off.",
          "Because focus hours have already solved the problem for everyone."
        ],
        "correct": 1
      },
      {
        "q": "Which statement best reflects the author’s overall view?",
        "options": [
          "Digital tools should be avoided completely in modern life.",
          "People need only stronger personal discipline to manage technology.",
          "Society must find ways to protect concentration and rest while still using digital tools.",
          "Workplaces alone are responsible for solving problems of constant connectivity."
        ],
        "correct": 2
      }
    ]
  },
  {
    "id": "t2",
    "title": "Why Local Food Markets Keep Attracting Shoppers",
    "body": "In many cities, weekly markets where farmers and small producers sell directly to the public have remained popular even as grocery prices have risen. Shoppers often say they value the chance to ask questions about how food was grown or prepared. For some, the experience feels more personal than selecting items from long supermarket shelves.\n\nProducers also see advantages. By selling face-to-face they can keep a larger share of the final price and receive immediate comments about which products customers prefer. If several people request the same vegetable or baked item, a seller may adjust plans for the following season. This direct feedback is harder to obtain when products move through large distribution networks.\n\nCost remains a real concern. Small-scale growers usually cannot match the low prices of industrial farms, so certain items at a market can be more expensive. Families watching their budgets frequently buy only selected products rather than completing an entire weekly shop. Still, many continue to return because they believe the quality or freshness justifies the extra expense for particular foods.\n\nWeather adds another layer of uncertainty. A heavy rain or unusually cold morning can sharply reduce the number of visitors. Some sellers have begun taking online orders in advance so that customers can collect purchases even if fewer people come in person. This hybrid approach helps protect income on difficult days without replacing the market itself.\n\nBeyond the exchange of goods, these markets often function as informal meeting places. Neighbours run into one another, local musicians sometimes perform, and children see where food originates. The commercial side is essential, yet the social atmosphere appears to be an important reason the markets continue to draw people year after year.",
    "questions": [
      {
        "q": "What advantage do producers gain from selling directly at markets?",
        "options": [
          "They no longer need to grow or transport any of their products.",
          "They can retain more of the money paid by the customer and hear preferences quickly.",
          "They are guaranteed higher prices than any supermarket can offer.",
          "They avoid all forms of customer feedback."
        ],
        "correct": 1
      },
      {
        "q": "The phrase “watching their budgets” in paragraph three most nearly means:",
        "options": [
          "Ignoring the cost of food completely.",
          "Paying careful attention to how much they spend.",
          "Expecting every product to be free.",
          "Preferring imported goods over local ones."
        ],
        "correct": 1
      },
      {
        "q": "What can be inferred about customers who have limited money to spend?",
        "options": [
          "They almost never visit farmers’ markets.",
          "They may purchase only certain items rather than everything they need.",
          "They demand that all prices match supermarket levels.",
          "They prefer to buy only imported products."
        ],
        "correct": 1
      },
      {
        "q": "Why have some sellers started accepting online orders before market day?",
        "options": [
          "To eliminate the need for any physical market.",
          "To reduce the risk that bad weather will leave them with unsold goods.",
          "To prevent customers from asking questions about products.",
          "To force everyone to pay in advance for unknown items."
        ],
        "correct": 1
      },
      {
        "q": "What does the final paragraph suggest about the role of these markets?",
        "options": [
          "Their only important function is commercial.",
          "Social interaction and community atmosphere contribute significantly to their appeal.",
          "Most visitors come mainly to listen to musicians.",
          "They have largely replaced traditional grocery stores."
        ],
        "correct": 1
      },
      {
        "q": "Which of the following best describes the author’s purpose?",
        "options": [
          "To persuade readers to stop shopping in supermarkets.",
          "To examine both practical benefits and ongoing difficulties of farmers’ markets.",
          "To provide a step-by-step guide for starting a market stall.",
          "To argue that online ordering should replace all outdoor markets."
        ],
        "correct": 1
      }
    ]
  },
  {
    "id": "t3",
    "title": "Living with More Frequent Extreme Weather",
    "body": "Communities in many regions are noticing that severe weather events — intense heat, heavy rainfall, or strong winds — seem to occur more often than in previous decades. While no single storm can be attributed solely to long-term climate trends, the overall pattern has prompted cities and towns to rethink how they prepare.\n\nOne common response has been to improve local infrastructure. This can include expanding storm-water systems, planting more trees to reduce heat in urban areas, or reinforcing buildings against high winds. Such projects are expensive and often take years to complete, yet officials argue that the cost of doing nothing would eventually be higher.\n\nResidents also face practical decisions. Some households have invested in backup power sources or improved insulation. Others have joined neighbourhood groups that share information and resources during emergencies. These informal networks can be especially useful when official services are temporarily overwhelmed.\n\nNot every measure is equally effective everywhere. A solution that works well in a coastal city may be less relevant inland. Local knowledge therefore remains important. People who have lived in an area for a long time often notice subtle changes in weather patterns earlier than outsiders and can offer valuable observations to planners.\n\nPublic communication has become another focus. Clear, timely warnings help people decide when to stay indoors or move to safer locations. However, repeated alerts can also lead to fatigue if residents begin to feel that every message is urgent. Finding the right balance between necessary caution and unnecessary alarm is an ongoing challenge for authorities.\n\nExtreme weather will continue to test communities. The most useful preparations appear to combine physical improvements, neighbour-to-neighbour support, and realistic public information rather than relying on any single approach.",
    "questions": [
      {
        "q": "What point does the author make about individual severe weather events?",
        "options": [
          "Each one can be directly blamed on long-term climate change.",
          "No single event proves a long-term trend by itself, yet the overall pattern is noticeable.",
          "They have become less common in recent decades.",
          "They only affect coastal regions."
        ],
        "correct": 1
      },
      {
        "q": "Why does the author mention the high cost of infrastructure projects?",
        "options": [
          "To argue that such projects should never be started.",
          "To acknowledge a difficulty while noting that inaction may prove more expensive later.",
          "To claim that only wealthy cities can protect themselves.",
          "To suggest that residents should pay for all improvements themselves."
        ],
        "correct": 1
      },
      {
        "q": "The word “overwhelmed” in paragraph three is closest in meaning to:",
        "options": [
          "Fully prepared and efficient.",
          "Unable to respond adequately because of too many demands.",
          "Completely unused during an emergency.",
          "Focused only on long-term planning."
        ],
        "correct": 1
      },
      {
        "q": "What can be inferred about long-term local residents?",
        "options": [
          "They usually ignore changes in weather.",
          "Their experience can provide useful information that outsiders may miss.",
          "They are less affected by extreme weather than newcomers.",
          "They prefer not to share observations with city planners."
        ],
        "correct": 1
      },
      {
        "q": "According to the passage, what difficulty can arise from frequent public alerts?",
        "options": [
          "People may stop taking warnings seriously if they feel every message is presented as urgent.",
          "Residents will always move to safer locations too early.",
          "Officials will no longer need to issue any warnings.",
          "Communication systems will automatically improve."
        ],
        "correct": 0
      },
      {
        "q": "Which statement best captures the author’s main conclusion?",
        "options": [
          "Only expensive infrastructure can protect communities.",
          "Effective preparation requires a combination of physical measures, local cooperation and careful communication.",
          "Individual households should handle all preparations without government help.",
          "Extreme weather events are no longer a serious concern."
        ],
        "correct": 1
      }
    ]
  },
{
    id: "t4",
    title: "Should School Start Later in the Morning?",
    body: `In many communities, the school day begins before eight in the morning. Although this schedule may suit some families, it can be difficult for teenagers. During adolescence, changes in the body's internal clock can make young people feel alert later in the evening and sleepy earlier in the morning. As a result, a student who goes to bed at a reasonable hour may still find it difficult to feel fully awake when the first lesson begins.

Some school districts have tested later starting times. In several cases, students reported getting more sleep, and schools recorded fewer late arrivals. A few districts also noticed modest improvements in academic results. However, these findings do not prove that changing the timetable will improve performance everywhere. Researchers point out that schools differ in their students' needs, teaching conditions, and surrounding communities.

Changing the schedule can affect more than students. Parents may arrange their working hours around the time their children leave and return from school. If the school day ends later, some parents may struggle to provide supervision in the afternoon. Sports practices, clubs, and part-time jobs may also need to be reorganized. In regions with limited daylight during winter, later dismissal could leave less time for outdoor activities.

Transportation presents another challenge. School buses sometimes complete several routes in the morning, collecting students from different schools. Changing the start time at one school may affect the entire schedule. A district might need additional buses or drivers, which could increase costs. For communities already working with tight budgets, this expense may be difficult to manage.

Supporters of later start times argue that better planning can reduce these difficulties and that student well-being deserves serious attention. Critics agree that sleep matters but question whether one timetable can work for every community. Some districts have chosen to introduce small trials before making permanent changes. These trials allow administrators to collect information about attendance, transport, and family routines instead of relying only on assumptions.

The debate is therefore not simply about choosing an earlier or later hour. It is about weighing possible benefits against practical consequences and deciding whether a change suits the needs of a particular community.`,
    questions: [
      {
        q: "Why do biological shifts during adolescence complicate early morning academic engagement?",
        options: [
          "Teenagers naturally require significantly more hours of sleep than younger students.",
          "Circadian changes shift natural alertness to later hours, impairing morning wakefulness.",
          "Late-night study habits prevent students from maintaining reasonable bedtimes.",
          "Early schedules force schools to compress core lessons into morning hours."
        ],
        correct: 1
      },
      {
        q: "How does the passage contextualize the reported academic gains from later start times?",
        options: [
          "As definitive proof that delayed timetables enhance performance across all districts.",
          "As preliminary observations that may not translate universally due to local variables.",
          "As evidence that student attendance has a direct correlation with test results.",
          "As findings that researchers dismissed due to flawed data collection methods."
        ],
        correct: 1
      },
      {
        q: "In paragraph three, the term 'supervision' specifically refers to:",
        options: [
          "Direct parental or adult oversight of students after the delayed school day ends.",
          "Professional coaching provided during rescheduled extracurricular activities.",
          "Employer monitoring of high school students working part-time evening jobs.",
          "School board evaluation of district transportation and scheduling efficiency."
        ],
        correct: 0
      },
      {
        q: "Adjusting start times at a single institution can create district-wide financial strain because:",
        options: [
          "Driver union agreements mandate higher hourly wages for delayed afternoon routes.",
          "Interconnected busing routes may demand additional vehicles and personnel to operate.",
          "Parents are forced to request subsidized municipal transit for after-school care.",
          "Winter daylight limitations require installing costly lighting on outdoor fields."
        ],
        correct: 1
      },
      {
        q: "What primary rationale leads administrative boards to implement provisional pilot schedules?",
        options: [
          "To satisfy critic demands for a permanent return to traditional morning schedules.",
          "To gather empirical data on local family patterns and transit logistics before deciding.",
          "To eliminate the financial need for additional morning transportation drivers.",
          "To guarantee immediate improvements in district-wide standardized test scores."
        ],
        correct: 1
      },
      {
        q: "Which statement best characterizes the author's overarching perspective on the schedule debate?",
        options: [
          "The physiological benefits of extra sleep strictly outweigh any logistical inconvenience.",
          "The financial burdens on municipal transit make schedule changes impractical for most.",
          "The decision requires balancing potential wellness benefits against specific community logistics.",
          "The policy should be universally mandated across all regions to ensure educational equity."
        ],
        correct: 2
      }
    ]
  },
  {
    id: "t5",
    title: "The Growing Use of Electric Bikes",
    body: `Electric bikes, commonly known as e-bikes, are becoming more visible in cities and smaller communities. They resemble ordinary bicycles but include a motor that provides assistance while the rider pedals. This support can make hills easier to climb and longer journeys less tiring. For people who would otherwise avoid cycling because of distance or physical effort, an e-bike may offer a practical alternative.

Cost is one reason for their growing popularity. Compared with owning and operating a car, an e-bike generally requires less money for energy and parking. Riders can also avoid some traffic delays, particularly on routes with suitable cycling infrastructure. These savings do not mean that e-bikes are inexpensive for everyone, however. A reliable model can require a significant initial payment, and battery replacement may add to the cost after several years of use.

E-bikes may also change how people think about commuting. Someone who lives several kilometres from work might avoid cycling because they do not want to arrive exhausted or need to change clothes. Motor assistance can make the journey more manageable. This may encourage some commuters to leave their cars at home, although the effect depends on factors such as weather, distance, and the availability of safe routes.

Their increasing use has raised questions about shared spaces. In some places, cyclists and pedestrians use the same paths. Pedestrians may feel uncomfortable when faster e-bikes pass close to them, while riders may be uncertain about which paths they are allowed to use. Local authorities are responding in different ways, including reviewing speed rules, improving signs, and separating walking and cycling areas where space permits.

Safety depends on more than regulations. Riders need to understand how their particular e-bike operates, remain aware of other path users, and follow local requirements. Cities also have a role to play by designing routes that are clear and suitable for different types of travel. If these responsibilities are addressed together, e-bikes could become a useful part of a wider transportation system rather than simply a replacement for cars.

Their future popularity will likely depend not only on the technology itself but also on whether communities can adapt streets and rules to accommodate it.`,
    questions: [
      {
        q: "How do e-bikes primarily alter the physical demand placed on commuters?",
        options: [
          "They utilize fully automated propulsion, eliminating the necessity for pedaling.",
          "They provide motorized pedal support, mitigating exhaustion on difficult terrain.",
          "They restrict travel speeds automatically on steep inclines to maintain safety.",
          "They allow riders to bypass municipal regulations on pedestrian walkways."
        ],
        correct: 1
      },
      {
        q: "Why does the author cite battery replacement alongside initial purchase prices?",
        options: [
          "To demonstrate that long-term vehicle maintenance matches automobile expenses.",
          "To clarify that overall affordability is qualified by ongoing capital requirements.",
          "To argue that municipal subsidies are necessary for widespread adoption.",
          "To prove that e-bikes deteriorate faster than traditional non-motorized cycles."
        ],
        correct: 1
      },
      {
        q: "In paragraph three, the phrase 'the effect' specifically refers to:",
        options: [
          "The extent to which motor assistance motivates commuters to replace automobile trips.",
          "The physical fatigue experienced when riding over several kilometers in bad weather.",
          "The financial savings achieved by avoiding paid parking and fuel purchases.",
          "The necessity for workplace facilities allowing cyclists to change clothing."
        ],
        correct: 0
      },
      {
        q: "Friction between pedestrians and e-bike riders on shared infrastructure stems mainly from:",
        options: [
          "Riders exceeding mechanical speed limits established for urban roads.",
          "Pedestrians refusing to yield right-of-way on designated cycling corridors.",
          "Speed differentials causing discomfort and ambiguous path use regulations.",
          "Local authorities banning motorized vehicles from all municipal parks."
        ],
        correct: 2
      },
      {
        q: "According to the text, achieving a safe, integrated urban transit network requires:",
        options: [
          "Restricting e-bikes exclusively to roadways populated by passenger cars.",
          "A combination of rider accountability, operational knowledge, and municipal planning.",
          "Replacing all conventional bicycles and public buses with motorized alternatives.",
          "Mandating that e-bike manufacturers cap vehicle speeds to match pedestrian movement."
        ],
        correct: 1
      },
      {
        q: "What can be inferred regarding the long-term integration of e-bikes into urban transit?",
        options: [
          "Technological advancements in battery life alone will guarantee widespread adoption.",
          "Success relies on civic willingness to update physical infrastructure and legal frameworks.",
          "E-bikes will eventually make traditional public bus and train networks obsolete.",
          "Most municipalities plan to restrict e-bike usage as pedestrian populations grow."
        ],
        correct: 1
      }
    ]
  },

  {
    id: "t6",
    title: "The Benefits of Volunteering",
    body: `Every year, millions of people give their time to help others without receiving payment. Volunteers work in food banks, hospitals, animal shelters, and youth programs. Although their efforts are usually described as a gift to the community, research suggests that volunteers also gain a great deal themselves.

One benefit is the opportunity to develop new skills. A person who helps organize a charity event, for example, may learn how to manage a schedule, communicate with strangers, and solve unexpected problems. Many employers value these abilities, and some job seekers include volunteer work on their résumés to show initiative.

Volunteering can also improve a person's sense of well-being. Surveys show that people who help others regularly often report feeling more connected to their neighbourhood. For those who have recently moved to a new city, volunteering can be an easy way to meet people who share similar interests.

However, volunteering is not always easy. Some organizations expect a regular commitment, which can be difficult for people with busy schedules. Others do not provide enough training, leaving new volunteers unsure about what to do. As a result, some people stop participating after only a few weeks.

Experts suggest that anyone interested in volunteering should start small. Choosing a cause that feels personally meaningful and asking about the time required can prevent disappointment. Even a few hours each month can make a difference, both to the organization and to the volunteer.`,
    questions: [
      {
        q: "Engaging in unpaid community service serves as a practical platform for participants primarily because:",
        options: [
          "It yields direct monetary incentives for career advancement.",
          "It cultivates transferable competencies sought after by hiring managers.",
          "It grants guaranteed employment contracts within non-profit sectors.",
          "It replaces the need for formal academic or professional credentials."
        ],
        correct: 1
      },
      {
        q: "Regarding individuals relocating to unfamiliar urban areas, civic engagement functions as:",
        options: [
          "An effective channel for fostering localized social integration with like-minded peers.",
          "A compulsory civic duty required for permanent residential settlement.",
          "A strategy designed primarily to lower personal living expenditures.",
          "An alternative method to secure affordable permanent housing."
        ],
        correct: 0
      },
      {
        q: "In paragraph four, the noun 'commitment' denotes:",
        options: [
          "A binding obligation to dedicate time consistently",
          "A formal performance evaluation conducted by supervisors",
          "A temporary departure from routine responsibilities",
          "A financial contribution pledge toward organizational goals"
        ],
        correct: 0
      },
      {
        q: "Premature withdrawal among novice volunteers is largely attributed to:",
        options: [
          "Inadequate initial orientation alongside strict scheduling expectations.",
          "Sudden geographical relocation mandated by host organizations.",
          "Excessive financial burdens associated with unpaid labor.",
          "Strict regulatory bans prohibiting long-term volunteer involvement."
        ],
        correct: 0
      },
      {
        q: "Which proposition reflects the strategy advocated by specialists for prospective volunteers?",
        options: [
          "Gradually initiating participation aligned with personal values to avoid burnout.",
          "Exclusively committing to large-scale international non-governmental agencies.",
          "Committing to daily operational shifts to maximize personal well-being.",
          "Refraining from requesting details regarding time requirements."
        ],
        correct: 0
      },
      {
        q: "What can be inferred about employers' perceptions of candidates with volunteer experience?",
        options: [
          "They interpret it as evidence of proactivity and adaptable problem-solving capability.",
          "They assume such candidates lack competitive professional drive.",
          "They prioritize unpaid work experience over all technical qualifications.",
          "They view community service as a distraction from core job duties."
        ],
        correct: 0
      }
    ]
  },
  {
  "id": "t7",
  "title": "The Convenience of Grocery Delivery",
  "body": "Online grocery delivery has changed the way many people shop for food. Instead of driving to a store, customers can choose products on a website or app, and the order arrives at their door within a few hours. This service is especially helpful for people who are busy, have limited mobility, or do not own a car.\n\nMany customers also say that online shopping helps them stay within their budget. When they shop in a store, they often notice extra items near the checkout and add them to the cart. At home, they can review their list calmly and remove anything they do not need before placing the order.\n\nNevertheless, there are some disadvantages. Delivery fees can quickly add up, particularly for small orders. Some customers also complain that they cannot inspect fresh products themselves. A shopper may prefer to choose ripe fruit or check the date on a carton of milk, but with a delivery service, a store employee makes those decisions. In response, a number of platforms now allow customers to leave specific instructions or rate the quality of the items they receive.\n\nSubstitutions can cause frustration as well. If an item is out of stock, the store may send a similar product instead. Sometimes the replacement is acceptable, but at other times it is not what the customer wanted. Most services now allow shoppers to refuse substitutions in advance, which helps to reduce this problem.\n\nOverall, grocery delivery has become a practical option rather than a luxury. Many people use it only occasionally — for example when the weather is bad or when they are unwell — and continue to visit stores for fresh items they prefer to select themselves. This combination allows them to enjoy the convenience of delivery while still keeping control over the products they value most.",
  "questions": [
    {
      "q": "E-grocery platforms primarily offer enhanced utility to consumers who:",
      "options": [
        "Face physical constraints or severe time limitations regarding store visits.",
        "Seek exclusive access to imported artisanal food products.",
        "Intend to eliminate all personal contact with retail staff.",
        "Wish to secure wholesale commercial volume discounts."
      ],
      "correct": 0
    },
    {
      "q": "Digital order curation supports fiscal discipline mainly by:",
      "options": [
        "Mitigating exposure to point-of-sale impulse merchandise.",
        "Guaranteeing lower base prices than brick-and-mortar outlets.",
        "Waiving service charges on low-volume transactions.",
        "Providing automatic government food subsidy credits."
      ],
      "correct": 0
    },
    {
      "q": "A notable operational drawback of doorstep fulfillment cited in the passage is:",
      "options": [
        "The delegation of perishable item quality assessment to store personnel.",
        "The total prohibition of digital payment methods across platforms.",
        "An inherent delay requiring several business days for order dispatch.",
        "Frequent structural errors in electronic billing records."
      ],
      "correct": 0
    },
    {
      "q": "In the context of the fourth paragraph, the term 'substitutions' pertains to:",
      "options": [
        "Alternative items fulfilled when original stock is depleted",
        "Promotional price reductions applied to recurring purchases",
        "Coupled delivery personnel assigned to heavy orders",
        "Adjustments made to store operating hours during peak periods"
      ],
      "correct": 0
    },
    {
      "q": "The concluding paragraph indicates that the prevalent pattern among modern consumers is to:",
      "options": [
        "Adopt a hybrid approach, combining digital delivery with selective in-person buying.",
        "Transition entirely to automated digital fulfillment for all dietary needs.",
        "Restrict e-commerce purchases strictly to non-perishable household items.",
        "Utilize fulfillment services exclusively during severe winter weather events."
      ],
      "correct": 0
    },
    {
      "q": "What can be inferred about the evolution of user controls in grocery delivery apps?",
      "options": [
        "Platforms have adapted to customer feedback by offering options to decline unwanted item replacements.",
        "Companies have removed substitution policies to cut operational costs.",
        "Delivery platforms now compel users to accept any available alternative.",
        "Retailers have standardized product selection to eliminate out-of-stock occurrences."
      ],
      "correct": 0
    }
  ]
},
{
  id: "t8",
  title: "Starting a Home Compost",
  body: `Composting is the process of turning food scraps and garden waste into rich soil. Instead of sending banana peels, coffee grounds, and leaves to a landfill, people collect them in a bin and allow them to break down naturally. The finished compost can then be used to improve the soil in a garden or in flower pots.

Starting a compost bin is not complicated, but it does require some attention. Experts recommend mixing two types of material. "Green" materials, such as vegetable scraps and fresh grass, provide moisture and nutrients. "Brown" materials, such as dry leaves and paper, add structure and help air move through the pile. When these two types are balanced, the compost decomposes more quickly.

There are also items that should be avoided. Meat, dairy products, and oily foods can create unpleasant smells and attract animals such as rats or raccoons. For this reason, many beginners are advised to compost only plant-based waste at first.

Some people hesitate to begin because they live in apartments without gardens. Fortunately, small indoor containers are available, and some cities offer collection programs that take compost away for processing. Others share a bin with neighbours or bring their scraps to a community garden.

Although composting takes a little effort, many people find it rewarding. It reduces the amount of garbage they throw away, and it provides free fertilizer for their plants. Over time, it can also change the way people think about waste, encouraging them to see leftovers as a resource instead of a problem.`,
  questions: [
    {
      q: "The ultimate agricultural utility of organic waste processing lies in its ability to:",
      options: [
        "Enhance soil fertility and structural quality for cultivation.",
        "Sterilize indoor living environments against pests.",
        "Produce fuel for domestic heating systems.",
        "Manufacture durable outdoor garden furniture."
      ],
      correct: 0
    },
    {
      q: "Carbon-rich 'brown' inputs play a critical operational role in a compost pile by:",
      options: [
        "Facilitating structural aeration necessary for efficient breakdown.",
        "Increasing moisture levels to accelerate bacterial growth.",
        "Neutralizing all acidic compounds within organic refuse.",
        "Deterring scavengers through strong chemical odor suppression."
      ],
      correct: 0
    },
    {
      q: "The exclusion of animal-derived products from early-stage composting is recommended primarily to prevent:",
      options: [
        "Noxious odorous emissions and pest infestation.",
        "Excessive soil dehydration within plant beds.",
        "The complete halt of organic decomposition.",
        "Severe chemical corrosion of plastic containment units."
      ],
      correct: 0
    },
    {
      q: "In paragraph four, the verb 'hesitate' indicates that prospective participants:",
      options: [
        "Show reluctance or uncertainty prior to initiating the practice",
        "Act with excessive speed without prior planning",
        "Refuse on principle to participate in environmental schemes",
        "Demonstrate immediate confidence in managing organic waste"
      ],
      correct: 0
    },
    {
      q: "Apartment dwellers lacking personal green spaces can overcome logistical barriers by:",
      options: [
        "Utilizing compact indoor vessels or municipal collection services.",
        "Incinerating organic waste within residential spaces.",
        "Relying exclusively on commercial synthetic fertilizers.",
        "Transporting all domestic waste directly to regional landfills."
      ],
      correct: 0
    },
    {
      q: "What broader psychological shift does the author associate with sustained composting?",
      options: [
        "A transition from viewing discarded matter as trash to recognizing its value as a renewable resource.",
        "A complete decline in personal grocery expenditure over time.",
        "A growing distrust in municipal waste collection frameworks.",
        "An inclination to avoid consuming fresh produce."
      ],
      correct: 0
    }
  ]
},
{
  id: "t9",
  title: "Overcoming the Fear of Public Speaking",
  body: `For many people, speaking in front of a group is one of the most stressful experiences imaginable. Their hearts beat faster, their hands shake, and their minds seem to go blank. Surveys often show that people fear public speaking more than many situations that are objectively more dangerous.

Psychologists explain that this reaction is connected to a natural worry about being judged. When we stand in front of an audience, we may assume that everyone is watching for mistakes. In reality, most listeners are focused on the message and are far less critical than the speaker imagines.

Preparation is one of the best ways to reduce anxiety. Speakers who practise their presentation several times usually feel more confident. Some experts advise rehearsing in front of a friend or recording yourself, so that you can notice habits such as speaking too quickly or looking at the floor.

Breathing techniques can also help. Taking slow, deep breaths before speaking lowers the heart rate and calms the body. Another useful strategy is to begin with a short personal story or a question for the audience, which can make the speaker feel more connected to the listeners.

Finally, it is important to remember that confidence usually grows with experience. A first speech may feel uncomfortable, but each additional one becomes easier. Many professional speakers admit that they still feel nervous before a presentation. The difference is that they have learned to use that energy to keep the talk lively instead of allowing it to stop them.`,
  questions: [
    {
      q: "According to psychological analysis, glossophobia primarily stems from:",
      options: [
        "An exaggerated apprehension of negative peer evaluation.",
        "A fundamental lack of subject matter comprehension.",
        "A physiological inability to regulate speech cadence.",
        "An inherent aversion to large physical venues."
      ],
      correct: 0
    },
    {
      q: "In contrast to a speaker's self-conscious perceptions, most audience members are:",
      options: [
        "Predominantly attentive to the core substance of the presentation.",
        "Actively searching for minor verbal and non-verbal errors.",
        "Indifferent to the speaker's overall communicative goal.",
        "Primarily focused on assessing the speaker's visual presence."
      ],
      correct: 0
    },
    {
      q: "Self-recording during trial runs serves as an effective diagnostic tool because it:",
      options: [
        "Exposes unconscious behavioral mannerisms requiring correction.",
        "Eliminates the necessity for advance content preparation.",
        "Guarantees absolute immunity from physiological anxiety.",
        "Ensures total audience agreement with the presentation thesis."
      ],
      correct: 0
    },
    {
      q: "In paragraph three, the term 'rehearsing' is synonymous with:",
      options: [
        "Systematically practicing prior to the actual delivery",
        "Memorizing a text verbatim without understanding",
        "Spontaneously improvising key arguments on stage",
        "Critiquing another speaker's performance"
      ],
      correct: 0
    },
    {
      q: "Seasoned public speakers differ from inexperienced ones primarily in their ability to:",
      options: [
        "Channel nervous arousal productively to enhance delivery dynamism.",
        "Eradicate all traces of autonomic anxiety before speaking.",
        "Deliver complex lectures without prior preparation.",
        "Avoid engaging directly with audience members."
      ],
      correct: 0
    },
    {
      q: "What can be inferred about the role of audience interaction techniques, such as opening questions?",
      options: [
        "They serve to reduce psychological distance between the speaker and the audience.",
        "They are designed to test the audience's baseline knowledge.",
        "They function as a tactic to prolong presentation length.",
        "They force listeners to take over the speaking responsibility."
      ],
      correct: 0
    }
  ]
},
{
  id: "t10",
  title: "The Debate Over the Four-Day Work Week",
  body: `The traditional five-day work week has been standard in many countries for decades. Recently, however, a number of companies have tested a shorter schedule in which employees work four days a week while receiving the same pay. Supporters believe this model could improve both productivity and employee happiness.

In several trials, workers reported feeling less stressed and more satisfied with their lives. They said that the extra day off gave them time for appointments, family activities, and rest. Some managers also noticed that employees seemed more focused during working hours, perhaps because they wanted to finish their tasks on time.

Despite these positive reports, the idea is not suitable for every business. A hospital or a restaurant, for example, must stay open every day, so scheduling shorter weeks can be complicated. In some jobs, customers expect service at all times, and fewer working days may require hiring additional staff.

Critics also worry that employees might feel pressure to complete five days of work in four. If workers are expected to do the same amount of work in less time, the benefits of the shorter week could disappear. Some employees may end up working longer hours on the remaining days, which can be tiring.

For this reason, experts suggest that companies test the idea carefully. A trial period allows managers to see what works and to listen to employee feedback. If the experiment is well planned, it may help organizations decide whether a four-day week is a realistic choice for their particular workplace.`,
  questions: [
    {
      q: "The fundamental premise of the modern four-day work framework involves:",
      options: [
        "Compressing operational days without reducing employee compensation.",
        "Proportionately reducing salary in exchange for fewer working hours.",
        "Mandating extended ten-hour daily shifts across all sectors.",
        "Restricting all professional duties exclusively to weekend shifts."
      ],
      correct: 0
    },
    {
      q: "Empirical trial results indicate that condensed work schedules led to:",
      options: [
        "Heightened job satisfaction combined with enhanced operational focus.",
        "A universal surge in employee turnover across participating firms.",
        "A preference among staff for longer daily workplace commutes.",
        "A decline in overall output due to widespread procrastination."
      ],
      correct: 0
    },
    {
      q: "Continuous-service industries struggle with four-day schedules primarily because:",
      options: [
        "Uninterrupted operational requirements complicate staffing coverage.",
        "Employees in service sectors express opposition to additional time off.",
        "Administrative regulations forbid flexible scheduling in healthcare.",
        "Customer traffic disappears during non-traditional business hours."
      ],
      correct: 0
    },
    {
      q: "In paragraph four, the phrase 'the benefits' refers to:",
      options: [
        "The positive health and productivity gains linked to reduced work days",
        "Overtime compensation earned by working extended hours",
        "Financial savings accrued from downsizing corporate staff",
        "Tax incentives granted to businesses adopting compressed schedules"
      ],
      correct: 0
    },
    {
      q: "Organizational consultants advise that firms considering compressed work schedules should:",
      options: [
        "Execute controlled pilot testing accompanied by structured feedback mechanisms.",
        "Implement immediate, permanent schedule shifts without preliminary trials.",
        "Restrict compressed scheduling options strictly to executive leadership.",
        "Reject compressed work models owing to potential implementation risks."
      ],
      correct: 0
    },
    {
      q: "What potential vulnerability of the four-day model is highlighted by critics?",
      options: [
        "The risk of work intensification leading to exhaustion on active workdays.",
        "The complete loss of client communication during off days.",
        "The inevitable drop in overall product manufacturing quality.",
        "The inability of management to track employee attendance."
      ],
      correct: 0
    }
  ]
},
{
  id: "t11",
  title: "Why Fewer People Carry Cash",
  body: `Not long ago, most people carried cash in their wallets. Today, many pay for everything with a card or a phone, from a cup of coffee to a monthly rent. Mobile payment systems allow customers to tap their device on a terminal, and the purchase is completed in seconds.

The main reason for this shift is convenience. Cards and phones are quick to use, and customers do not need to count coins or wait for change. Many apps also keep a record of each purchase, which helps users track their spending and prepare for tax season.

Businesses have found advantages as well. Handling cash takes time, and employees must count it at the end of each day. There is also a risk of theft or counting mistakes. Electronic payments reduce these problems, although merchants usually pay a small fee for each transaction.

However, not everyone benefits equally from the change. Some older customers feel uncomfortable with new technology, and some people do not have bank accounts at all. In addition, a power failure or a network problem can make it impossible to pay with a card. For these reasons, certain governments have required stores to continue accepting cash.

Financial experts suggest that carrying a small amount of money is still a sensible idea. Cash works without electricity, does not depend on a connection, and can be useful in emergencies. As payment methods continue to change, a balanced approach may be the most reliable choice.`,
  questions: [
    {
      q: "The societal transition away from physical currency toward digital transactions is propelled mainly by:",
      options: [
        "Enhanced transactional speed and operational convenience.",
        "Government mandates prohibiting paper currency circulation.",
        "Substantial price markdowns on digital purchases.",
        "The complete elimination of merchant transaction fees."
      ],
      correct: 0
    },
    {
      q: "In addition to settlement speed, mobile financial software assists users by:",
      options: [
        "Automating expenditure logging and fiscal documentation.",
        "Absorbing personal income tax obligations on behalf of users.",
        "Eliminating the necessity for institutional bank accounts.",
        "Preventing all forms of retail impulse buying."
      ],
      correct: 0
    },
    {
      q: "From a commercial perspective, adopting digital point-of-sale systems involves a trade-off between:",
      options: [
        "Reduced cash-handling risks and transaction processing costs.",
        "Higher employee wages and lower customer volume.",
        "Shorter store operating hours and higher inventory loss.",
        "Increased physical security needs and slower checkout lines."
      ],
      correct: 0
    },
    {
      q: "Legislative interventions mandating physical cash acceptance aim to protect:",
      options: [
        "Demographics vulnerable to technological exclusion or network outages.",
        "Banking institutions seeking to expand paper note production.",
        "Large retail conglomerates seeking to avoid card interchange fees.",
        "Technology firms marketing mobile payment infrastructure."
      ],
      correct: 0
    },
    {
      q: "Financial advisors advocate maintaining a modest physical cash reserve because:",
      options: [
        "It provides non-contingent utility during technological grid failures.",
        "It yields higher interest rates than digital accounts.",
        "It guarantees immunity from retail price inflation.",
        "It remains legally required for all minor transactions."
      ],
      correct: 0
    },
    {
      q: "What can be inferred about the author's ultimate stance on payment methods?",
      options: [
        "Prudence lies in maintaining a dual approach rather than relying exclusively on digital systems.",
        "Complete reliance on mobile applications represents the safest long-term strategy.",
        "Physical currency should be phased out entirely within urban centers.",
        "Digital payments pose unacceptable security risks for average consumers."
      ],
      correct: 0
    }
  ]
},
{
  id: "t12",
  title: "The Rising Cost of Youth Sports",
  body: `Playing sports has long been seen as a healthy and affordable activity for young people. Today, however, many parents say that the cost of children's sports has increased sharply. Registration fees, uniforms, equipment, and travel to tournaments can add up to thousands of dollars each year.

One reason for the increase is the growing number of competitive leagues. Some teams now hold practices several times a week and travel to other cities for games. Coaches with professional training are often hired, and these services are usually paid for by the families.

This trend can create problems. Children from families with lower incomes may be unable to join teams that require expensive equipment or long trips. As a result, talented players sometimes leave sports simply because their families cannot afford to continue.

Some communities are trying to address the issue. Local clubs have started equipment exchanges, where families can donate or borrow used skates, shoes, and helmets. Certain cities also provide grants that reduce fees for families who need help. In addition, some schools offer after-school programs where students can play for free.

Experts remind parents that the main goal of youth sports should be enjoyment and healthy habits, not constant competition. A child can gain confidence, teamwork skills, and friendships in a simple neighbourhood league just as easily as in an expensive travelling team. By focusing on participation rather than prestige, communities may keep sports accessible to more children.`,
  questions: [
    {
      q: "Financial inflation in youth athletics is primarily driven by:",
      options: [
        "The professionalization of coaching and elite travel league structures.",
        "Mandatory state taxation on amateur recreational activities.",
        "A decline in overall youth participation across regional leagues.",
        "The rising cost of basic public facility rentals."
      ],
      correct: 0
    },
    {
      q: "The escalation of participation costs poses an equity challenge because:",
      options: [
        "Socioeconomic barriers force underfunded youth out of athletic programs.",
        "Municipalities are legally forced to close recreational facilities.",
        "Professional coaches refuse to train non-elite athletes.",
        "School districts are eliminating physical education classes."
      ],
      correct: 0
    },
    {
      q: "Equipment recycled-gear drives function within communities to:",
      options: [
        "Alleviate financial burdens by providing shared athletic gear.",
        "Generate revenue for elite competitive travel teams.",
        "Standardize equipment models across all regional clubs.",
        "Replace municipal recreation subsidies entirely."
      ],
      correct: 0
    },
    {
      q: "In paragraph five, the word 'accessible' is closest in meaning to:",
      options: [
        "Attainable for participation regardless of socioeconomic background",
        "Exclusively reserved for high-performing athletic prospects",
        "Geographically restricted to central urban locations",
        "Technically simple for beginner athletes to comprehend"
      ],
      correct: 0
    },
    {
      q: "Pediatric and athletic experts advocate that community sports frameworks should prioritize:",
      options: [
        "Holistic development and active engagement over status-driven competition.",
        "Early athletic specialization to secure professional opportunities.",
        "Maximized travel schedules to foster resilience under pressure.",
        "Strict skill-based screening to eliminate non-elite players."
      ],
      correct: 0
    },
    {
      q: "What can be inferred about the comparative developmental value of local versus traveling leagues?",
      options: [
        "Community-based leagues foster social and health benefits comparable to elite teams at a fraction of the cost.",
        "Travel leagues offer vastly superior psychological benefits to developing youth.",
        "Local leagues fail to teach fundamental teamwork and discipline.",
        "Expensive travel programs are necessary for building true self-confidence."
      ],
      correct: 0
    }
  ]
},
{
  id: "t13",
  title: "Noise in the Modern City",
  body: `City life is rarely quiet. Traffic, construction work, sirens, and crowds create a constant background of sound. Many residents become so used to this noise that they hardly notice it, yet researchers say that it can affect health and daily life.

Studies have linked long-term exposure to loud sounds with sleep problems, stress, and difficulty concentrating. Children who attend schools near busy roads or airports may find it harder to focus on their lessons. Even when the noise does not seem very loud, it can interrupt rest and slowly reduce a person's well-being.

To reduce these effects, some cities have introduced new rules. Construction work may be limited to certain hours, and delivery trucks may be directed to quieter routes at night. Other cities plant trees and build barriers along highways, which can absorb some of the sound. Quieter pavement materials are also being tested on major roads.

Residents can take steps as well. Thick curtains, double-glazed windows, and rugs help block sound inside the home. Some people use white noise machines to cover sudden sounds that might wake them. Choosing a bedroom at the back of the building, away from the street, can also make a noticeable difference.

However, not all noise is considered negative. Music from street performers, children playing in parks, and the sound of a lively market can make a neighbourhood feel energetic. The challenge for planners is to reduce harmful noise while preserving the sounds that give a city its character.`,
  questions: [
    {
      q: "Chronic exposure to acoustic pollution in urban environments is associated with:",
      options: [
        "Cognitive fatigue, elevated stress, and disrupted sleep architecture.",
        "Immediate and irreversible physiological hearing loss in all citizens.",
        "Improved psychological resilience among long-term residents.",
        "Enhanced academic focus among students in high-traffic zones."
      ],
      correct: 0
    },
    {
      q: "Municipal strategies for noise abatement include:",
      options: [
        "Structural sound barriers, traffic rerouting, and acoustic paving.",
        "A total ban on private vehicular travel during daytime hours.",
        "Mandatory relocation of commercial airports away from provinces.",
        "The complete prohibition of outdoor public gatherings."
      ],
      correct: 0
    },
    {
      q: "Residential soundproofing can be achieved domestically through:",
      options: [
        "Deploying dense textiles, dual-pane glass, and masking acoustics.",
        "Keeping windows open to equalize interior and exterior pressure.",
        "Removing soft floor coverings to reflect ambient sound waves.",
        "Positioning sleeping quarters directly adjacent to main roadways."
      ],
      correct: 0
    },
    {
      q: "In paragraph three, the phrase 'these effects' pertains to:",
      options: [
        "The adverse physiological and cognitive impacts of chronic noise",
        "The economic costs of implementing citywide infrastructure projects",
        "The beneficial social energy produced by outdoor urban markets",
        "The architectural guidelines governing modern building design"
      ],
      correct: 0
    },
    {
      q: "The primary dilemma facing contemporary urban planners involves:",
      options: [
        "Mitigating hazardous noise while retaining vibrant cultural sounds.",
        "Eradicating all ambient sound sources to achieve total silence.",
        "Prioritizing industrial traffic movement over residential comfort.",
        "Relocating public parks outside municipal residential zones."
      ],
      correct: 0
    },
    {
      q: "What can be inferred about human habituation to urban noise?",
      options: [
        "Psychological adaptation to noise does not protect individuals from its physiological harms.",
        "Residents who claim to ignore city noise suffer no measurable health consequences.",
        "Subconscious awareness of noise completely vanishes after a few months.",
        "Acoustic habituation enhances a person's overall quality of sleep."
      ],
      correct: 0
    }
  ]
},
{
  id: "t14",
  title: "The Shift toward Electric Vehicles in Urban Transit",
  body: `Across major metropolitan areas, public transit authorities are accelerating the transition from diesel-powered buses to fully electric fleets. Proponents highlight that electric buses generate zero tailpipe emissions, significantly improving urban air quality and advancing municipal climate targets. Furthermore, despite higher initial purchase prices, electric transit vehicles offer substantially lower long-term maintenance and fuel expenditures over their operational lifespan.

However, the widespread deployment of electric transit networks presents complex infrastructure challenges. Transit agencies must construct high-capacity charging facilities at central depots and along route terminals to ensure uninterrupted scheduling. Additionally, grid capacity must be expanded to manage peak charging loads without overburdening municipal electricity networks. Cold winter climates also present operational hurdles, as subzero temperatures temporarily diminish battery storage capacity and increase energy consumption for cabin heating.

To mitigate these constraints, municipalities are adopting hybrid strategies. Transit planners are deploying high-output rapid chargers that recharge bus batteries during brief driver rest breaks at end-of-line stations. Agencies are also integrating smart grid management software to schedule fleet charging during off-peak night hours when electricity rates and power grid demands are lowest.

Urban transportation experts emphasize that electrification represents only one aspect of sustainable mobility. Achieving true environmental resilience requires expanding overall transit network capacity, improving service frequency, and encouraging public participation to reduce reliance on private automobiles.`,
  questions: [
    {
      q: "According to the passage, a primary financial advantage of electric buses over diesel vehicles is:",
      options: [
        "Reduced operational and maintenance costs over the vehicle's lifetime.",
        "Lower initial purchase prices from automotive manufacturers.",
        "Immediate federal subsidies that cover all infrastructure expenditures.",
        "The complete elimination of depot storage facility costs."
      ],
      correct: 0
    },
    {
      q: "What infrastructure demand is necessary to support city-wide electric bus fleets?",
      options: [
        "Upgrading power grid capacity and building specialized charging stations.",
        "Replacing all urban roads with high-friction pavement.",
        "Constructing underground subways to replace surface routes.",
        "Converting central depots into solar energy generating farms."
      ],
      correct: 0
    },
    {
      q: "Why do subzero temperatures pose an operational challenge for electric transit buses?",
      options: [
        "They reduce battery efficiency and increase energy draw for heating.",
        "They cause fast-charging terminal software to shut down completely.",
        "They prevent driver break schedules from being maintained.",
        "They permanently damage the structural chassis of the vehicles."
      ],
      correct: 0
    },
    {
      q: "In paragraph three, the word 'mitigate' is closest in meaning to:",
      options: [
        "Lessen the severity or impact of operational limitations",
        "Completely eliminate the need for electrical energy",
        "Ignore underlying problems until they resolve naturally",
        "Expand the scope of technical problems to new areas"
      ],
      correct: 0
    },
    {
      q: "How are transit agencies addressing the high power demand of fleet charging?",
      options: [
        "By using automated systems to schedule charging during off-peak hours.",
        "By operating buses exclusively during afternoon daylight hours.",
        "By relying entirely on onboard solar panel collection systems.",
        "By reducing the overall number of active transit routes."
      ],
      correct: 0
    },
    {
      q: "What is the author's main conclusion regarding urban environmental resilience?",
      options: [
        "Fleet electrification must be paired with service expansion to reduce reliance on private cars.",
        "Electric buses alone will solve all municipal traffic and climate issues.",
        "Private automobiles should be completely banned from city centers.",
        "Municipalities should delay transit electrification until grid technology improves."
      ],
      correct: 0
    }
  ]
},

// information

{
  id: "t14",
  title: "The Kelford Aqueduct of British Columbia",
  body: `A. Constructed during the early decades of the twentieth century, the Kelford Aqueduct represents one of British Columbia’s most ambitious historical engineering endeavors. Designed to transport freshwater across rugged mountainous terrain, the system was built primarily to supply rapidly expanding industrial operations and agricultural communities in the region. Engineers faced immense logistical hurdles, including navigating dense rainforests, steep rock faces, and unpredictable seasonal streamflows. Despite these challenges, the completion of the conduit provided a reliable hydrologic supply line that proved instrumental in fostering long-term economic settlement throughout the surrounding valley.

B. The structural design of the aqueduct relies on a sophisticated combination of elevated wooden flumes, excavated earth canals, and reinforced concrete conduits. To maintain a consistent gradient over vast distances without relying on heavy mechanical pumping, designers utilized gravity-driven hydrodynamics. Water was diverted from high-altitude glacial streams, flowing through precise slopes engineered to prevent both erosion of the channel walls and excessive silt accumulation. Maintenance crews were stationed at strategic intervals along the route to inspect timber supports, clear seasonal debris, and manage flow control gates.

C. Beyond its primary civil function, the Kelford Aqueduct profoundly altered the local ecological landscape. By redirecting significant volumes of surface water from original tributaries, the infrastructure unexpectedly altered riparian habitats downstream. Certain fish populations experienced disruptions in traditional spawning routes due to reduced water depths and altered flow velocities. Conversely, the newly created artificial water channels created micro-habitats that supported secondary vegetation growth and attracted various mammal species, demonstrating the complex ecological trade-offs associated with large-scale historic water management projects.

D. As regional infrastructure modernized in the post-war era, reliance on the Kelford Aqueduct gradually diminished. Advanced subterranean pipeline networks and modern municipal filtration facilities eventually superseded the open-air conduit system. By the late 1970s, primary water diversion through the aqueduct was officially halted. While portions of the wooden flume structures deteriorated over time due to weather exposure, significant sections of the concrete pathways and stone masonry support pillars remained intact across the forest canopy.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Which paragraph describes how the aqueduct changed the surrounding natural environment and wildlife?",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "Which paragraph explains the technical engineering principles and gravity-driven water flow used in the structure?",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Which paragraph discusses the initial construction goals and the early economic impact of the project?",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Which paragraph details why the aqueduct was eventually abandoned and replaced by modern infrastructure?",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Which paragraph mentions the total financial cost incurred during the construction of the aqueduct?",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},

{
  id: "t15",
  title: "The Aurora Borealis Explained",
  body: `A. The Aurora Borealis, commonly known as the Northern Lights, is a breathtaking atmospheric phenomenon primarily visible in high-latitude regions surrounding the Arctic. For millennia, these luminous displays of green, purple, and red light captivated indigenous populations and early explorers, inspiring numerous cultural myths and folklore. Today, modern atmospheric science has demystified the phenomenon, revealing that these vibrant nocturnal light shows are the direct result of complex energetic interactions between solar radiation and Earth’s protective magnetic field.

B. The primary mechanism behind the aurora begins roughly 150 million kilometres away on the surface of the Sun. During periods of heightened solar activity, the Sun releases continuous streams of charged subatomic particles—mostly electrons and protons—known as the solar wind. As these high-speed particles stream toward Earth, the planet’s magnetosphere deflects the majority of them. However, near the magnetic poles, where the geomagnetic field lines funnel downward toward the atmosphere, some particles manage to penetrate the upper layers of Earth’s magnetosphere.

C. Once inside the upper atmosphere, these energetic solar particles collide directly with gas molecules, predominantly oxygen and nitrogen, located between 80 and 300 kilometres above the surface. These collisions transfer energy to the atmospheric gas molecules, exciting their electrons to higher energy levels. As the excited electrons naturally return to their baseline ground state, they release this excess energy in the form of photons. The specific color of the light emitted depends on both the altitude of the collision and the type of gas involved; for instance, collision with oxygen at lower altitudes produces the characteristic brilliant emerald green, whereas high-altitude oxygen generates rare deep red hues.

D. While auroras occur year-round, human visibility of the phenomenon varies significantly depending on several environmental factors. Geographic location within the "auroral oval"—a ring-shaped zone centered around Earth's magnetic poles—provides the highest probability of sightings, making regions in northern Canada, Alaska, and Scandinavia prime viewing locations. Additionally, optimal viewing requires clear, cloudless skies and extreme darkness, free from both artificial light pollution and bright moonlight. Solar cycles also play a crucial role, with auroral activity peaking every eleven years during periods known as the solar maximum.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Which paragraph explains how solar particles collide with atmospheric gases to produce different colors of light?",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "Which paragraph details the conditions and geographic locations required for optimal human observation of the lights?",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Which paragraph introduces the phenomenon and its shift from historical mythology to modern scientific understanding?",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Which paragraph describes the origin of charged particles on the Sun and how they enter Earth's magnetic field?",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Which paragraph mentions the exact cost of commercial tours designed for viewing the Northern Lights?",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t16",
  title: "The Nassagaweya Canal",
  body: `A. Engineered during the expansion of southern Ontario’s industrial corridors, the Nassagaweya Canal was designed to overcome significant geographical barriers to freight transport. Before its construction, local manufacturers and agricultural producers relied heavily on slow, weather-dependent overland routes to move timber, crushed limestone, and grain. The proposal to carve a navigable waterway through the rugged terrain of the Niagara Escarpment was initially met with skepticism. However, visionary regional planners argued that a controlled inland passage would dramatically reduce transit times and lower shipping overhead for growing settlements.

B. The physical construction of the canal required exceptional manual labor and innovative engineering solutions for its time. Workers utilized heavy explosives, steam-powered shovels, and teams of draft horses to cut through dense rock formations and dense clay soil. A primary challenge involved managing the steep elevation drops along the route, which required the design of a series of stone-masonry locks. These lock systems allowed barges to be safely raised and lowered using controlled water displacement, ensuring smooth navigation even during dry summer months when river levels dropped.

C. Beyond its immediate commercial benefits, the canal served as a catalyst for socio-economic transformation across the surrounding municipality. Small trading posts along the waterway rapidly expanded into thriving mill towns equipped with sawmills, iron foundries, and warehouses. The reliable access to raw materials attracted skilled tradespeople and immigrant laborers, accelerating urbanization in the region. Furthermore, the canal’s construction fostered early investments in supporting infrastructure, including wooden toll bridges and connecting gravel roads.

D. By the early twentieth century, the strategic importance of the Nassagaweya Canal began to decline rapidly following the expansion of regional railway networks. Trains offered significantly faster year-round transport that was unaffected by winter ice freezes that regularly paralyzed canal traffic for months. As commercial barge traffic dwindled, maintenance of the locks was eventually abandoned. Today, while large sections of the original waterway have been reclaimed by local wetland vegetation, preserved masonry ruins along the historic route now form part of a protected heritage trail.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Which paragraph describes the engineering techniques and lock systems used to handle elevation changes?",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Which paragraph explains how the canal stimulated urban growth and economic development in local communities?",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "Which paragraph outlines the initial purpose of the canal and the transport difficulties that existed prior to its construction?",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Which paragraph details why the canal lost its commercial importance and what remains of it today?",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Which paragraph states the exact amount of toll fees charged to barges passing through the canal locks?",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t17",
  title: "Wild Rice in Canada",
  body: `A. Despite its common name, wild rice (known as manoomin in Indigenous languages) is not a true rice species, but rather an aquatic grain-producing grass native to the shallow lakes and slow-moving rivers of North America. For centuries, this nutrient-dense cereal was a crucial staple food for Indigenous nations across the Canadian Shield and Great Lakes regions, including the Ojibwe and Cree. Beyond its dietary importance as a rich source of protein and complex carbohydrates, wild rice holds deep cultural and spiritual significance, often tied to traditional creation stories, community gatherings, and seasonal food sovereignty.

B. The traditional harvesting of wild rice is a labor-intensive process that demands precise timing, environmental awareness, and specialized techniques. Harvesting typically takes place in late summer using canoes to navigate the dense aquatic beds without damaging the fragile plants. One person gently bends the mature stalks over the edge of the canoe with a smooth wooden stick, while using a second stick to lightly strike the seed heads, causing the ripe grains to fall into the boat. This selective hand-harvesting method ensures that unripened seeds remain intact on the stalk to mature, while a portion drops into the water bed to naturally seed the following year’s crop.

C. Once gathered from the water, the raw grain must undergo several meticulous processing steps before it becomes edible and shelf-stable. First, the harvested grains are spread out in thin layers to air-dry and cure, preventing spoilage. Next, the rice is parched over a controlled fire, a crucial step that loosens the tough outer hull while imparting a distinct smoky flavor. The husks are then separated through a process known as dancing or treading, followed by winnowing, where the grains are tossed into the air so the light wind blows away the chaff, leaving behind the dark, glossy kernels.

D. In modern Canada, wild rice faces growing ecological pressures from industrial development and environmental change. Fluctuating water levels caused by hydroelectric dams, shoreline development, and agricultural runoff have severely disrupted traditional growing habitats. Furthermore, commercial farming operations that utilize mechanical harvesters have altered the market dynamics of this ancestral grain. In response, Indigenous communities and conservation groups are actively working to protect natural waterways, restore historic rice beds, and secure legal recognition for traditional harvesting rights to preserve this vital ecological and cultural resource.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Navigational practices, physical tools, and non-destructive gathering routines designed to sustain future aquatic crop cycles.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Multi-stage post-harvest preparation techniques involving thermal treatment, hull separation, and airflow residue removal.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "The biological classification of the native plant alongside its nutritional and ceremonial roles among First Nations populations.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Modern industrial disruptions to freshwater ecosystems, commercial market shifts, and community-led preservation movements.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Specific per-kilogram retail markups and grocery distribution costs for wild rice across Canadian provinces.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t18",
  title: "Monarch Butterfly Migration",
  body: `A. The annual migration of the monarch butterfly is widely regarded as one of the most extraordinary natural phenomena in the animal kingdom. Every autumn, millions of these delicate insects undertake a multi-thousand-kilometer journey from their breeding grounds in southern Canada and the northern United States toward the high-altitude oyamel fir forests of central Mexico. Unlike birds or whales that make repetitive seasonal round trips as individuals, no single butterfly completes the entire round trip. Instead, the migration is a multi-generational voyage, requiring up to four successive generations to complete the full journey back north each spring.

B. The specific generation that performs the arduous southward trek in the fall is biologically distinct from its predecessors. Known as the "super-generation," these monarchs enter a state of reproductive diapause, postponing sexual maturity to conserve energy. Powered by a combination of internal magnetic cues and a solar compass, they navigate vast distances while feeding on flower nectar to store lipids. Upon reaching their overwintering sanctuaries, they cluster closely together on tree branches by the millions, creating a dense thermal microclimate that protects them from freezing alpine temperatures until spring arrives.

C. In spring, the overwintered monarchs awaken, mate, and begin the first leg of the northern return journey, laying eggs on milkweed plants in the southern regions of North America before dying. Milkweed is essential to the monarch’s lifecycle, as it serves as the sole food source for emerging caterpillars. The toxins contained within the plant are absorbed by the larvae, making both the caterpillars and adult butterflies unpalatable to predators. As subsequent generations hatch, mature, and continue migrating further north, they progressively recolonize the Canadian landscape, filling meadows and gardens by mid-summer.

D. Despite their evolutionary resilience, monarch populations have experienced a dramatic decline over recent decades due to human activities. Industrial agriculture has severely depleted native milkweed supplies through widespread herbicide use, while deforestation and illegal logging in Mexico have threatened their delicate wintering habitats. Additionally, climate change presents new hazards, as erratic weather patterns and extreme temperature shifts disrupt migratory timing and nectar availability. In response, international conservation initiatives and community-driven projects are focused on planting milkweed corridors and restoring natural habitats across North America.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Physiological dormancy mechanisms, internal navigation tools, and defensive clustering strategies used to withstand extreme cold.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "The necessity of a host plant for larval nourishment and defense, followed by the sequential push toward northern territories.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "The vast spatial scale of the autumnal passage and its reliance on sequential successional lifespans rather than individual return trips.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Anthropogenic degradation of essential habitats and multi-national ecological restoration projects.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Government monetary subsidies provided to agricultural landowners who construct protected floral reserves.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t19",
  title: "The Klondike Gold Rush",
  body: `A. In August 1896, local prospectors discovered rich gold deposits in Rabbit Creek, a tributary of the Klondike River near Dawson City, Yukon. When news of the strike reached major North American cities the following year, it triggered an unprecedented influx of hopeful stampeders. Driven by the promise of sudden wealth during a period of widespread economic depression, an estimated 100,000 individuals set out for the remote northern territory. However, due to the extreme hazards of arctic travel and rigorous physical demands, only about a third of those who embarked on the journey successfully reached the goldfields.

B. Reaching the Klondike required navigating brutal geographic terrain and harsh subarctic conditions. Most stampeders traveled by sea to coastal Alaska before attempting steep mountain passes, such as the infamous Chilkoot Trail. To prevent mass starvation in the wilderness, Canadian authorities enforced a strict policy requiring each prospector to carry a year’s supply of food and equipment—roughly one ton of goods—over the mountains. This mandated haul forced stampeders to climb the ice-carved trails dozens of times, carrying heavy loads on their backs before constructing wooden boats to navigate the treacherous Yukon River system toward Dawson City.

C. The sudden arrival of tens of thousands of prospectors permanently transformed both the local landscape and the social structure of the region. Dawson City, once a quiet Indigenous fishing site, exploded almost overnight into the largest urban center northwest of Winnipeg, complete with supply stores, hotels, and newspapers. However, the economic prosperity was unevenly distributed; the vast majority of latecomers found that all lucrative creek claims had already been staked. Furthermore, the rapid industrialization severely disrupted the traditional hunting and fishing grounds of the local Tr’ondëk Hwëch’in First Nation, forcing them to adapt to severe environmental degradation and cultural displacement.

D. The Klondike Gold Rush was historically brief, reaching its peak between 1897 and 1899. By the summer of 1899, news of fresh gold discoveries in Nome, Alaska, prompted thousands of disillusioned prospectors to abandon Dawson City as quickly as they had arrived. While individual panning was rapidly replaced by large-scale corporate mining machinery, the legacy of the event endured. The gold rush accelerated the administrative development of the Canadian Northwest, directly leading to the establishment of the Yukon as an independent territory and embedding the region’s dramatic history into national folklore.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Government-enforced provisions for travelers and the grueling physical effort needed to transport cargo across alpine passes.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "The swift growth of a settlement into a commercial hub and the subsequent upheaval experienced by Indigenous communities.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "The initial mineral finding in the northern wilderness and the low completion rate among traveling fortune seekers.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "The sudden decline of the migration, the shift toward industrial extraction, and the resulting administrative boundary changes.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "The precise metric tonnage of refined precious metal harvested from Yukon deposits throughout the decade.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t20",
  title: "Canadian Peatlands: Formation and Ecological Role",
  body: `A. Covering vast stretches of the Canadian boreal and subarctic landscapes, peatlands—comprising bogs and fens—represent one of the country's most significant wetland ecosystems. These unique environments began forming thousands of years ago following the retreat of glacial ice sheets. In poorly drained depressions characterized by waterlogged conditions and low oxygen levels, dead plant matter, primarily sphagnum mosses, decomposes at an exceptionally slow rate. Over millennia, layers of partially decayed organic material accumulate into dense deposits known as peat, establishing vast freshwater reservoirs and shaping regional hydrology.

B. The ecological importance of Canadian peatlands extends far beyond their immediate geographic boundaries, particularly regarding global climate regulation. Although covering only a fraction of the Earth's surface, these wetlands function as immense terrestrial carbon sinks, storing substantially more carbon per hectare than tropical rainforests. By trapping atmospheric carbon dioxide within dense organic layers, peatlands prevent greenhouse gases from contributing to atmospheric warming. However, when these delicate ecosystems are drained or disturbed, the stored carbon reacts with oxygen and releases vast quantities of carbon dioxide and methane back into the atmosphere.

C. In addition to carbon sequestration, peatlands provide specialized habitats for a diverse array of plant and animal species adapted to acidic and nutrient-poor conditions. Iconic wildlife, such as the woodland caribou, relies on extensive, undisturbed peatland networks for foraging and protection from predators during calving seasons. Rare flora, including carnivorous pitcher plants and specialized orchids, thrive in these nutrient-scarce aquatic soils. Furthermore, the thick moss layers act as natural water filtration systems, absorbing pollutants and regulating the downstream flow of clean freshwater into surrounding river basins.

D. Despite their critical environmental functions, Canadian peatlands face increasing pressure from human activities and changing climate patterns. Commercial peat moss harvesting for horticulture, along with infrastructure development for mining, oil extraction, and forestry, has fragmented and degraded significant wetland areas. Additionally, rising global temperatures and prolonged summer droughts increase the risk of severe peat fires, which burn deep underground and are notoriously difficult to extinguish. In response, environmental organizations and governments are implementing conservation policies focused on peatland restoration and sustainable land-use management.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "The capacity of wetlands to capture greenhouse emissions worldwide and the atmospheric risks associated with habitat disruption.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "The unique flora and fauna that thrive in low-nutrient environments, as well as the natural purification services these ecosystems provide.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "The ancient geological origins of wetlands and the gradual, low-oxygen process of organic mass buildup.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Industrial hazards, subterranean fire dangers, and regulatory steps taken to protect vulnerable wetland terrains.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "The exact financial profits earned by Canadian horticultural companies exporting peat products overseas.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t21",
  title: "Honey Bees in Canada: Behaviour and Ecological Role",
  body: `A. Introduced to North America by European settlers in the seventeenth century, honey bees (Apis mellifera) have become an integral component of Canada’s agricultural infrastructure. Though not native to the continent, these highly social insects play a crucial role in supporting food security across the provinces. Commercial apiculture contributes hundreds of millions of dollars annually to the Canadian economy, both through direct honey production and, more importantly, by providing paid pollination services for major cash crops, including canola, apples, blueberries, and hybrid seed crops.

B. The complex social organization of a honey bee colony enables it to survive Canada’s drastic seasonal climate shifts. A single hive operates as a superorganism comprising a single reproductive queen, thousands of female worker bees, and seasonal male drones. During the short summer months, worker bees demonstrate remarkable foraging behavior, traveling several kilometers from the hive to collect nectar and pollen. Through a series of intricate movements known as the "waggle dance," returning foragers communicate precise directions, distance, and resource quality to other colony members, ensuring efficient division of labor.

C. Surviving the subzero temperatures of Canadian winters requires unique physiological and behavioral adaptations. Unlike native solitary bees that hibernate individually, honey bees remain active inside the hive throughout the winter. As outdoor temperatures drop, the colony forms a tight cluster around the queen, continuously vibrating their flight muscles to generate thermal energy. By consuming stored honey reserves accumulated during the warmer months, the bees keep the interior core of the cluster at a stable temperature of roughly 35°C, even when exterior conditions fall well below freezing.

D. Despite their importance, honey bee populations in Canada face ongoing threats from complex environmental stressors. Beekeepers regularly report elevated winter colony losses caused by parasitic mites, particularly Varroa destructor, which weaken bees and transmit devastating viral infections. Furthermore, exposure to agricultural pesticides, loss of diverse floral habitats due to monoculture farming, and unpredictable weather patterns driven by climate change further compromise hive immune systems. In response, Canadian researchers and apiculturists are actively breeding cold-hardy, disease-resistant bee lineages and implementing sustainable management protocols.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "How the internal organization of a hive functions alongside physical signaling to optimize gatherer efficiency during warmer months.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "The physical strategies and energy-generating behaviors utilized by colonies to maintain a constant internal climate during severe freezing conditions.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "The non-indigenous origins of the species and its significant financial impact on agricultural yields across the nation.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Biological hazards and modern agricultural practices that harm hives, as well as ongoing efforts to cultivate stronger stocks.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "The specific commercial valuation and consumer pricing structure of organic honey sold across Canadian grocery chains.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t22",
  title: "Churchill, Manitoba: Polar Bear Capital of the World",
  body: `A. Situated on the rugged western shore of Hudson Bay, the small northern town of Churchill, Manitoba, is globally recognized as the "Polar Bear Capital of the World." Every autumn, hundreds of polar bears (Ursus maritimus) migrate toward the coast, congregating near the town while awaiting the annual freezing of the bay. For centuries, this area served as a crucial hunting ground for Indigenous peoples and later as a remote fur-trading post. Today, however, Churchill’s international reputation stems primarily from its unique position as one of the few human settlements where people can safely observe these massive Arctic predators in their natural habitat.

B. The seasonal concentration of polar bears around Churchill is directly tied to the unique oceanographic conditions of Hudson Bay. As autumn temperatures drop, freshwater rivers emptying into the bay lower the salinity of the coastal water, causing sea ice to form earlier here than in surrounding regions. This early ice formation provides the bears with an essential platform to begin their winter hunting season, where they rely heavily on preying upon ringed seals to rebuild vital fat reserves. Before the ice solidifies completely, the bears wait along the coastline in a state of walking hibernation, conserving energy after months of summer fasting.

C. Living in such close proximity to apex predators presents significant safety challenges for local residents, prompting the community to develop specialized wildlife management strategies. The local government operates a comprehensive "Polar Bear Alert Program," which includes a 24-hour hotline, town patrols, and designated holding facilities—often referred to as the polar bear jail. Bears that wander too close to residential areas are safely captured using non-lethal deterrents or live traps, held temporarily until ice forms on the bay, and then transported via helicopter deep into the wilderness to prevent dangerous human-bear conflicts.

D. In recent decades, Churchill’s seasonal bear population has faced growing threats from environmental changes. Climate change has caused Hudson Bay’s sea ice to freeze significantly later in the autumn and melt earlier in the spring, shortening the crucial hunting season for the bears by several weeks. This reduced ice coverage forces bears to spend longer periods on land, leading to declining body mass and lower reproductive rates. Consequently, local conservation organizations and scientists use Churchill as a vital research hub to monitor populations and study the long-term impacts of Arctic warming on marine ecosystems.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Specific oceanographic factors causing early ice formation and seal hunting habits.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Local safety protocols, patrol systems, and relocation procedures for wandering predators.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "Geographic setting, historical context, and modern status as a polar bear viewing destination.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Warming trends shortening hunting seasons and scientific research monitoring health decline.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Annual revenue figures generated by local hotel operators during the peak tourist season.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t23",
  title: "Permafrost in Canada: Thawing Impacts",
  body: `A. Permafrost—ground that remains continuously frozen for two or more consecutive years—underlies nearly half of Canada’s landmass, primarily across the northern territories and subarctic regions. Consisting of a mixture of soil, gravel, and organic matter bound together by ice, this frozen foundation has maintained structural stability across the Arctic landscape for thousands of years. However, rapidly rising global temperatures are causing permafrost to thaw at an unprecedented rate, transforming what was once considered permanently solid ground into an unstable and shifting environment.

B. The degradation of permafrost poses an immediate and severe threat to Northern infrastructure and human settlements. Buildings, roads, airport runways, and industrial pipelines constructed on top of frozen soil rely on its load-bearing capacity. As the underground ice melts, the supporting earth slumps and collapses—a process known as thermokarst subsidence. This shift causes building foundations to crack, highway surfaces to buckle, and critical transport routes to become impassable, resulting in astronomical maintenance costs for northern municipalities and remote Indigenous communities.

C. Beyond local structural damage, the thawing of Canadian permafrost carries profound global climate implications. Deep within the frozen soil lie vast quantities of ancient, un-decayed organic material from dead plants and animals. When the ground warms, soil microbes awaken and decompose this organic matter, releasing massive volumes of greenhouse gases—specifically carbon dioxide and methane—into the atmosphere. This release creates a dangerous positive feedback loop: emitted gases accelerate atmospheric warming, which in turn speeds up further permafrost thaw.

D. Adapting to these environmental transformations requires innovative engineering solutions and proactive policy changes. Researchers and civil engineers across Canada are developing specialized techniques, such as installing thermosyphon tubes that extract heat from the ground to keep underlying soils frozen beneath critical structures. Concurrently, environmental scientists are using satellite monitoring and remote sensing technology to map vulnerable zones. These efforts aim to help planners mitigate infrastructure damage and prepare for long-term ecological shifts in Canada’s North.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Structural hazards, ground slumping, and financial burdens on northern communities.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Decomposition of ancient organic matter releasing gases into a feedback loop.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "Geographic extent, composition of frozen soil, and recent climate-driven instability.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Technical cooling adaptations, satellite mapping, and planning strategies.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Exact monetary compensation packages provided to residents relocated due to ground collapse.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t24",
  title: "Tidal Energy in the Bay of Fundy",
  body: `A. Located between the provinces of Nova Scotia and New Brunswick, the Bay of Fundy is globally renowned for experiencing the highest tidal range on Earth. Driven by gravitational forces from the moon and sun combined with the bay’s unique funnel-like shape, more than 160 billion tonnes of seawater flow in and out of the basin twice daily. This colossal movement of water creates powerful currents that hold immense potential for clean, renewable power generation. For decades, green energy advocates and engineers have viewed the region as an extraordinary natural laboratory for harnessing marine hydrokinetic energy.

B. Extracting electricity from such aggressive aquatic movements requires specialized turbine technology capable of withstanding extreme environmental forces. Unlike conventional hydroelectric dams that block river flows, modern in-stream tidal turbines are installed directly on the seabed. As the tide shifts, the rushing currents spin massive submerged rotor blades, turning generators that transmit electricity to the mainland grid via underwater cables. Because tides are governed by celestial mechanics, tidal energy offers an unprecedented advantage over solar and wind power: complete, long-term predictability in power output.

C. Despite its tremendous promises, deploying heavy technology in the Bay of Fundy presents unprecedented engineering and maintenance obstacles. The dynamic marine environment features crushing water pressures, heavy silt sediment, and severe winter ice floes that can damage delicate rotor mechanisms. Early prototype turbines deployed in the passage suffered severe structural degradation, with multi-tonne blades snapping under the force of the surging current. These failures underscored the necessity for ultra-durable materials, advanced biofouling coatings, and modular designs that allow for easier submerged servicing.

D. Beyond technical viability, environmental researchers are carefully evaluating the potential impact of underwater turbines on local marine ecosystems. The Bay of Fundy serves as a critical habitat for migrating fish populations, marine mammals, and endangered North Atlantic right whales. Concerns focus on acoustic disturbance from turbine rotation and the risk of marine life colliding with moving blades. In response, acoustic monitoring arrays and environmental tracking sensors are continuously deployed alongside test turbines to ensure that commercial-scale energy production does not compromise regional biodiversity.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Seabed turbine mechanics, underwater electricity transmission, and predictable power output advantages.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Extreme marine hazards, prototype structural failures, and required material durability improvements.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "Geographic setting, extreme tidal volume, and potential for marine hydrokinetic power generation.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Ecological impacts on marine species and continuous monitoring sensors deployed alongside test turbines.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Exact wholesale price per kilowatt-hour of tidal electricity sold to provincial utility companies.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t25",
  title: "The Discovery of Insulin in Canada",
  body: `A. Before the early 1920s, a diagnosis of Type 1 diabetes was effectively a terminal sentence. Patients suffering from the metabolic disorder were unable to process blood glucose, leading to rapid physical wasting, severe diabetic ketoacidosis, and inevitable early death. The only existing treatment was a strict starvation diet, which merely prolonged life by a few grueling months. Scientists worldwide had long suspected that a hormone produced by the pancreas regulated sugar metabolism, but isolating this delicate substance without it being destroyed by the digestive enzymes of the organ remained an elusive medical challenge.

B. In 1921, Dr. Frederick Banting, a young Canadian physician, formulated a novel surgical method to isolate the internal pancreatic secretions. He presented his theory to Professor John Macleod at the University of Toronto, who provided laboratory space, equipment, and a skilled assistant, graduate student Charles Best. Working through the hot summer months, Banting and Best successfully tied off the pancreatic ducts of experimental canines, causing the digestive tissues to atrophy while keeping the hormone-producing Islets of Langerhans intact. They then extracted a crude fluid, initially named "isletin," which dramatically lowered blood sugar levels in diabetic dogs.

C. Recognizing the profound potential of the discovery, Macleod expanded the research team by recruiting biochemist James Collip to refine and purify the extract for safe human administration. In January 1922, fourteen-year-old Leonard Thompson, who lay dying of severe diabetes in a Toronto hospital, became the first human patient to receive an injection of purified bovine insulin. The results were miraculous: the boy’s critical blood glucose levels dropped rapidly, his symptoms stabilized, and his strength returned. News of the successful clinical trial spread globally, transforming diabetes overnight from a fatal disease into a manageable chronic condition.

D. In recognition of their historic breakthrough, Banting and Macleod were awarded the Nobel Prize in Physiology or Medicine in 1923. Demonstrating remarkable scientific altruism, Banting immediately shared his prize money with Best, while Macleod shared his with Collip. Furthermore, the discovery team made the conscious decision to sell the original patent for insulin to the University of Toronto for just one dollar, believing that a life-saving medication should belong to the world rather than be exploited for commercial profit. This monumental Canadian achievement remains one of the most significant triumphs in the history of modern medicine.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Early isolation experiments, surgical techniques on pancreatic duct tissues, and initial canine trials.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Purification of the extract, successful human trials on a pediatric patient, and global medical impact.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "The fatal nature of diabetes prior to 1920, early treatment limits, and pancreatic enzyme difficulties.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Nobel Prize recognition, sharing of award funds, and selling the patent for symbolic value.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Specific manufacturing protocols and modern synthetic production costs for synthetic insulin variants.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t26",
  title: "Niagara Escarpment: Formation and Ecosystem",
  body: `A. Extending over 1,000 kilometers from New York State through southern Ontario to the Upper Peninsula of Michigan, the Niagara Escarpment is one of Eastern North America’s most prominent geological landforms. This continuous, cliff-like ridge is best known for creating the precipitous ledge over which Niagara Falls plunges. Beyond its famous waterfalls, the escarpment forms a massive natural wall that dictates local topography, hydrological flow patterns, and regional biodiversity. In recognition of its unique environmental importance, UNESCO designated the Canadian portion of the Niagara Escarpment as a Biosphere Reserve in 1990.

B. The origin of the escarpment dates back over 400 million years to the Silurian Period, when a vast, shallow inland sea covered the region. Over millions of years, layers of marine sediments—including mud, sand, and calcium-rich shell deposits—accumulated and compacted into distinct strata of sedimentary rock. The defining structural feature of the escarpment is its hard upper caprock of durable dolostone (dolomitic limestone), which rests atop softer underlying layers of shale and sandstone. Differential erosion caused by ancient glaciers, water currents, and weathering gradually wore away the softer bottom rocks, causing the hard caprock to periodically break off in vertical cliffs.

C. The steep, varied topography of the escarpment creates a wide diversity of microclimates and habitats within a highly urbanized and agricultural region. The cliff faces, ancient talus slopes, and deciduous forests provide critical refuge for hundreds of native species, including rare ferns, orchids, and wildlife such as the Jefferson salamander. Notably, the cliff edges support some of the oldest living trees in eastern North America, with gnarled eastern white cedars clinging to the bare rock faces, some exceeding 1,000 years in age. These ancient, slow-growing trees provide invaluable paleoclimate data for scientists studying historic weather patterns.

D. Modern preservation of the Niagara Escarpment requires a delicate balance between environmental conservation and economic activity. The landform’s rich limestone deposits make it a primary target for commercial aggregate quarrying, while rapid urban expansion in southern Ontario threatens to fragment its ecological corridors. To safeguard the corridor, the Ontario government established the Niagara Escarpment Plan, a land-use policy designed to control development while promoting public access. Today, the Bruce Trail—Canada’s oldest and longest marked footpath—runs along the entire length of the escarpment, allowing millions of hikers to experience its natural beauty annually.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Sedimentary rock layering, hard caprock composition, and differential erosion mechanisms.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Microclimates, refuge habitats for rare species, and thousand-year-old cedar trees on cliff edges.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "Geographic span, relation to Niagara Falls, and international UNESCO designation.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Commercial quarrying threats, regional land-use planning, and the Bruce Trail footpath.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Annual maintenance costs and permit fees for operating commercial quarries along the ridge.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t27",
  title: "Prairie Wheat: Canada's Grain Empire",
  body: `A. The vast expanses of the Canadian Prairies—comprising Manitoba, Saskatchewan, and Alberta—form one of the world’s most productive agricultural regions. In the late nineteenth and early twentieth centuries, the settlement of western Canada was largely driven by the promise of fertile topsoil and agricultural expansion. Transforming millions of hectares of native grassland into cultivated farmland, early homesteaders established wheat as the dominant staple crop. Today, Canada ranks among the top global exporters of high-quality wheat, supplying international markets with essential grain products and maintaining a reputation for exceptional milling quality.

B. The successful cultivation of wheat in western Canada was made possible through groundbreaking agricultural innovation and crop breeding. The region’s harsh subarctic climate, characterized by short growing seasons and cold, dry conditions, initially posed a major threat to traditional European grain varieties. In the early 1900s, Canadian scientists developed "Marquis" wheat, an early-maturing, rust-resistant strain that could consistently ripen before the onset of early autumn frosts. This scientific breakthrough revolutionized prairie agriculture, allowing farmers to push the northern boundaries of crop production and dramatically increasing annual yields.

C. Beyond its agricultural importance, the wheat industry served as the primary engine for western Canada’s infrastructural and economic development. The necessity of moving millions of tonnes of harvested grain from landlocked prairie farms to ocean ports spurred the rapid construction of transcontinental railway lines and extensive networks of grain elevators. These iconic wooden structures, often called "prairie skyscrapers," lined railway tracks every few kilometers, functioning as local commercial hubs. The grain trade supported entire rural economies, giving rise to equipment manufacturers, financial institutions, and bustling transportation corridors.

D. In the modern era, Canadian prairie grain farming continues to evolve in response to shifting global demands and climate pressures. Farmers increasingly adopt precision agriculture technologies, such as GPS-guided machinery, soil moisture sensors, and direct-seeding methods to conserve topsoil and reduce fuel consumption. Modern wheat varieties are continuously bred to resist emerging plant diseases and endure extreme climate conditions, such as prolonged droughts. As a core component of Canada’s national GDP, the prairie wheat sector remains vital for both domestic food security and global agricultural trade.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Breeding early-maturing crop strains to overcome harsh subarctic weather and short growing seasons.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Transport networks, railway construction, and grain elevators fueling regional economic growth.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "Historical transformation of prairie grassland into farmland and Canada's role as a major global grain exporter.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Adoption of precision farming tools, GPS technology, and drought-resistant crop breeding for future resilience.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Government-subsidized freight shipping tariffs per metric tonne for wheat transport along major rail routes.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t28",
  title: "Lacrosse: Canada's Ancient Sport",
  body: `A. Long before European settlers arrived in North America, the game of lacrosse was played by Indigenous nations across the continent, particularly among the First Nations of the eastern woodlands and Great Lakes regions. Known by various traditional names, such as Tewaaraton in the Mohawk language, the sport held deep spiritual, social, and cultural significance. It was far more than a simple athletic competition; games were played to give thanks to the Creator, settle diplomatic disputes between nations, heal the sick, and prepare young warriors for the physical demands of hunting and combat.

B. Traditional Indigenous lacrosse was vast in scale and dramatically different from the modern structured sport. Contests could involve hundreds or even thousands of players on a single field that stretched for several kilometers without formal boundaries. Matches often lasted from sunrise to sunset over multiple days. Players utilized wooden sticks crafted from hickory with raw-hide netting to cradle and pass a small ball made of wood, deerskin, or solid rock. The game demanded extraordinary endurance, physical toughness, and strategic teamwork under highly intense conditions.

C. In the mid-nineteenth century, European Canadians in Montreal adopted the game and began formalizing its rules for urban competition. Dr. George Beers, a Montreal dentist, standardized the regulations in the 1860s by establishing set team sizes, defining field dimensions, and introducing a rubber ball. This modernization rapidly transformed lacrosse into a structured commercial sport across the country. In 1994, the Parliament of Canada officially recognized lacrosse's profound cultural heritage by declaring it Canada’s official national summer sport, alongside ice hockey as the national winter sport.

D. Today, lacrosse continues to thrive in both indoor arenas ("box lacrosse") and open fields ("field lacrosse") across Canada and internationally. While modern equipment features synthetic materials, titanium shafts, and protective padding, the core athleticism and strategic spirit of the game remain unchanged. Crucially, Indigenous teams, such as the Haudenosaunee Nationals, compete as independent sovereign nations in international world championships. This unique representation honors the ancestral roots of lacrosse, bridging ancient traditions with contemporary global sports culture.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Traditional equipment crafting, multi-day game durations, and vast field sizes.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Standardization of rules in the 1860s and official federal recognition as a national sport.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "Spiritual ceremonial origins, diplomatic dispute resolution, and traditional names among First Nations.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Contemporary variations, modern gear, and sovereign Indigenous team participation in global tournaments.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Specific manufacturing costs and sales revenues for professional titanium lacrosse sticks.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t29",
  title: "Sourdough Bread: History, Science, and Craft",
  body: `A. Sourdough is one of the oldest forms of grain leavening in human history, dating back thousands of years to ancient Egypt and the Fertile Crescent. Long before the isolation of commercial baker's yeast in the nineteenth century, traditional breadmaking relied entirely on wild fermentation. As European settlers, fur traders, and prospectors traveled across North America, wild yeast starters became a vital staple for survival. During the Klondike Gold Rush in northern Canada, miners famously carried sourdough starters close to their bodies to prevent the delicate microbial cultures from freezing in subzero Arctic temperatures.

B. The fundamental engine of sourdough bread is the starter culture, a symbiotic community of wild yeasts and lactic acid bacteria (LAB) living in a fermented flour and water mixture. Unlike commercial baker's yeast, which consists of a single isolated strain (Saccharomyces cerevisiae), a wild sourdough culture hosts complex ecosystems dominated by species like Lactobacillus sanfranciscensis. The wild yeasts metabolize starches to produce carbon dioxide gas and ethanol, creating the atmospheric bubbles that expand the dough structure, while the bacteria ferment simple sugars into lactic and acetic acids, giving the bread its signature tangy flavor profile.

C. Beyond flavor, the biological process of sourdough fermentation alters the physical and chemical properties of the dough in profound ways. The organic acids generated by lactic acid bacteria lower the pH of the mixture, creating an acidic environment that activates internal enzymes within the flour. This process breaks down complex proteins and partially degrades phytic acid, a compound found in whole grains that typically hinders nutrient absorption in human digestion. Consequently, long-fermented sourdough bread enhances the bioavailability of essential minerals like iron, zinc, and magnesium, while simultaneously softening the gluten structure.

D. In contemporary baking, sourdough has experienced a major resurgence as consumers seek natural, minimally processed alternatives to industrial factory loaves. Modern artisan bakers blend ancient fermentation traditions with precise temperature control, hydration ratios, and flour selection to tailor crumb structure and crust blister. The natural acidity of sourdough also acts as a natural preservative, inhibiting mold growth and extending shelf life without synthetic additives. Today, sourdough bread stands at the intersection of culinary heritage, biochemical complexity, and functional nutrition.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "Microbial interactions between wild yeast strains and acid-producing bacteria during fermentation.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Enzymatic protein breakdown, phytic acid reduction, and enhanced mineral absorption benefits.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "Ancient origin of wild leavening and historical reliance on starter cultures during Arctic gold exploration.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Modern artisanal breadmaking trends, natural acidity preservation, and consumer preference shifts.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Specific retail price comparisons between industrial factory loaves and sourdough breads in grocery stores.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
{
  id: "t30",
  title: "Birchbark Canoe: Craft and Heritage",
  body: `A. For thousands of years, the birchbark canoe served as the principal mode of transportation for Indigenous peoples across the vast boreal forests and waterways of North America. Perfectly adapted to the Canadian landscape, these lightweight, resilient watercraft enabled First Nations—including the Algonquin, Ojibwe, and Haudenosaunee—to navigate interconnected river networks, lakes, and coastal areas. The design was so exceptionally practical that early European fur traders and explorers quickly adopted it as the primary vehicle for expanding trade routes across the continent.

B. The construction of a traditional birchbark canoe is a masterpiece of indigenous engineering, relying entirely on natural materials harvested sustainably from the surrounding forest. The outer hull is constructed from the flexible bark of the paper birch (Betula papyrifera), harvested in large sheets during early summer when sap flow allows easy peeling without killing the tree. The structural framework—comprising ribs, gunwales, and thwarts—is crafted from split white cedar, chosen for its lightweight durability and bending flexibility. Rather than using metal fasteners, artisans stitch the bark panels together using pliable roots of the white spruce tree.

C. Waterproofing and sealing the vessel requires sophisticated natural chemistry. Craftsmen melt and combine pine or spruce resin with animal fat and finely powdered charcoal. The resin acts as a durable adhesive, the fat provides flexibility to prevent cracking in cold waters, and the charcoal hardens the compound while offering protection against degradation from solar radiation. This sealant is carefully applied over all stitched seams and root lashings. The resulting craft possesses a remarkably high weight-to-payload ratio, capable of carrying hundreds of kilograms of cargo while remaining light enough to be carried by a single person across overland portages.

D. Beyond its historical utility, the craft of building birchbark canoes represents a profound living cultural heritage. The intricate knowledge of timber selection, seasonal harvesting, and hand-shaping techniques was traditionally passed down orally through generations of master builders. Although modern synthetic materials like aluminum and fiberglass replaced birchbark canoes in commercial transport during the twentieth century, Indigenous artisans and cultural historians actively preserve this traditional craft today. Through community workshops and educational programs, the birchbark canoe remains a enduring symbol of ecological harmony and cultural resilience.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "An example of foreign traders using native boat designs to expand commercial networks.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "A description of specific plant materials used to assemble the hull and frame.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "A reason why charcoal is mixed into the natural waterproof sealant compound.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "A method used by modern cultural historians to preserve ancient building traditions.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "A policy establishing protected forest reserves specifically for harvesting birch trees.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    },
    {
      q: "Why was early summer the best time to collect paper birch bark?",
      options: [
        "The flowing sap made it simple to remove without damaging the tree.",
        "Warmer forest temperatures allowed the bark to dry out much faster.",
        "Tree roots were pliable enough to be pulled easily from the soil.",
        "Traders required fresh bark sheets before autumn navigation began."
      ],
      correct: 0
    },
    {
      q: "According to paragraph C, what benefit does animal fat add to the sealant mixture?",
      options: [
        "It hardens the compound to protect against strong solar radiation.",
        "It acts as a sticky glue to hold heavy wooden ribs together.",
        "It keeps the mixture pliable so it does not split in cold water.",
        "It reduces the overall weight of heavy cargo carried on portages."
      ],
      correct: 2
    },
    {
      q: "What made the birchbark canoe ideal for travelling across overland portages?",
      options: [
        "Its flexible spruce roots prevented structural damage on rocky ground.",
        "It could carry immense weight while being light enough for one person.",
        "Its cedar frame could be taken apart quickly before walking on land.",
        "It was built using synthetic coatings that resisted ground scratching."
      ],
      correct: 1
    },
    {
      q: "How was traditional canoe-building knowledge preserved across generations?",
      options: [
        "Master builders recorded detailed instructions in historical trade journals.",
        "Community elders established formal apprentice schools in urban centers.",
        "Crafting secrets were shared orally through spoken instruction over time.",
        "Museum curators published step-by-step guides for modern workshops."
      ],
      correct: 2
    }
  ]
},
{
  id: "t31",
  title: "Flax in Canada: Fibre, Food, and Industry",
  body: `A. Flax (Linum usitatissimum) is one of the oldest cultivated crops in human history, valued for thousands of years for both its strong plant fibers and oil-rich seeds. Introduced to North America by early European settlers, flax found ideal growing conditions in the fertile soil and cool climate of the Canadian Prairies. Today, Canada stands as a dominant global producer and exporter of flaxseed, with major cultivation concentrated in Saskatchewan, Manitoba, and Alberta. The crop plays a vital role in diversified agricultural crop rotations, offering farmers an effective alternative to traditional cereal grains and oilseeds.

B. Historically, the long, durable bast fibers extracted from the outer stem of the flax plant were primary raw materials for the textile industry. Through processes known as retting, scutching, and hackling, these natural fibers were separated and spun into high-quality linen fabric, thread, and marine cordage. In modern industrial applications, flax fiber continues to gain traction as an eco-friendly composite material. Automobile manufacturers increasingly utilize compressed flax fibers to reinforce interior door panels, dashboards, and structural insulation, replacing heavy synthetic plastics with lightweight, biodegradable alternatives.

C. Beyond industrial fiber applications, flaxseed has earned widespread recognition as a nutritional powerhouse in the human diet and health food sector. The small, glossy seeds are exceptionally rich in alpha-linolenic acid (ALA)—an essential plant-based omega-3 fatty acid—as well as dietary fiber and lignans, which act as potent antioxidants. Whole and ground flaxseeds are widely incorporated into artisanal breads, cereals, and health supplements to support cardiovascular health and digestion. Additionally, cold-pressed flaxseed oil is a popular dietary supplement valued for its concentrated nutritional properties.

D. The chemical profile of flaxseed oil—traditionally referred to as linseed oil—also makes it an indispensable component in non-food commercial industries. Because linseed oil is a drying oil that reacts with oxygen to form a tough, flexible film, it has long served as a primary binder in traditional oil paints, wood finishes, and protective exterior varnishes. Furthermore, linseed oil combined with wood flour and ground cork forms the core raw material for linoleum flooring, a durable, all-natural floor covering. As global demand grows for sustainable, bio-based alternatives to petroleum products, Canadian flax continues to hold high economic and industrial value.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "A benefit of using plant fibers as lightweight substitutes for synthetic auto parts.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "An example of a plant-based fatty acid in seeds that promotes heart health.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "A comparison of prairie climate conditions with major European crop growing regions.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    },
    {
      q: "A reason why linseed oil forms a flexible coating in wood finishes.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "An example of an alternative crop used by farmers during grain rotations.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Why do car manufacturers use compressed flax fibers in vehicle interiors?",
      options: [
        "They offer a biodegradable alternative that replaces heavier synthetic plastics.",
        "They lower the overall manufacturing costs of luxury vehicle dashboards.",
        "They absorb high levels of solar radiation to prevent interior heat damage.",
        "They eliminate the need for chemical adhesives during factory assembly."
      ],
      correct: 0
    },
    {
      q: "What characteristic makes linseed oil useful in linoleum flooring and varnishes?",
      options: [
        "It acts as a potent antioxidant that prevents fungal degradation.",
        "It hardens into a durable, protective film when exposed to oxygen.",
        "It binds easily with synthetic petroleum solvents to speed up drying.",
        "It repels water while maintaining a soft, highly flexible surface."
      ],
      correct: 1
    },
    {
      q: "According to paragraph A, what role does flax play in prairie agriculture?",
      options: [
        "It restores depleted nitrogen levels in soil after cereal harvests.",
        "It serves as a alternative crop to diversify traditional grain rotations.",
        "It protects surrounding wheat fields from insect pest infestations.",
        "It requires significantly less water than traditional oilseed crops."
      ],
      correct: 1
    },
    {
      q: "How does incorporating ground flaxseed into foods benefit human health?",
      options: [
        "It reduces the risk of food allergies caused by gluten proteins.",
        "It supplies essential omega-3 fatty acids and antioxidants for digestion.",
        "It lowers the calorie content of artisanal breads and cereals.",
        "It speeds up the body's natural absorption of synthetic vitamins."
      ],
      correct: 1
    }
  ]
},
{
  id: "t32",
  title: "Glassblowing: Technique, History, and Artistry",
  body: `A. Glassblowing is an ancient material art form that revolutionized the production of everyday vessels and artistic objects. Before its discovery around the first century BCE in the Syro-Palestinian region of the Roman Empire, glass objects were crafted through laborious core-forming or casting techniques, making them rare luxury items. The invention of the blowpipe allowed artisans to shape molten glass rapidly and in far larger quantities. This technological breakthrough democratized glass usage across the ancient world, transforming it from an exclusive status symbol into a practical material for utilitarian containers, window panes, and decorative glassware.

B. The technical process of traditional off-hand glassblowing requires exceptional physical coordination, speed, and precise thermal control. Working around a specialized furnace heated to temperatures exceeding 1,100°C, the glassblower gathers a mass of molten silica-based batch onto the tip of a hollow steel blowpipe. By inflating short bursts of air into the pipe while continuously rotating it, the artist creates an expanding hollow glass bulb known as a parison. Using specialized wooden blocks, wet jacks, and iron shears, the glassblower shapes, trims, and opens the viscous material before it cools and loses its malleability.

C. Throughout history, specific geographic regions became world-renowned centers for glassblowing innovation and artistic mastery. During the Renaissance, the island of Murano in Venice held a global monopoly on luxury glassware, famous for inventing cristallo—a remarkably clear, colorless glass—and developing intricate filigree techniques using embedded enamel threads. In the twentieth century, the Studio Glass Movement shifted the craft away from commercial industrial factories and into individual artist studios, encouraging experimental forms, bold color palettes, and sculptural expression across North America and Europe.

D. Today, contemporary glassblowing blends traditional craftsmanship with modern scientific technology and material design. Electric furnaces, precise digital pyrometers, and specialized annealing ovens—which slowly cool finished glass over many hours to relieve internal structural stress—have made the medium far more accessible to independent artists. Furthermore, the incorporation of specialized chemical colorants, such as metallic oxides, enables creators to achieve complex visual effects and gradients. Despite these technical advancements, the core fundamentals of the craft remain anchored in human dexterity, timing, and an intimate understanding of molten glass physics.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "A change caused by the blowpipe invention that made glass accessible to everyday users.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "A description of physical tools and blowing methods used to shape molten glass.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "An example of a specialized glass type invented on the island of Murano.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "A benefit of using digital pyrometers and annealing ovens to cool completed objects.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "A policy regulating safety standards and ventilation requirements in commercial glass factories.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    },
    {
      q: "How did the introduction of the blowpipe affect the glass market in ancient times?",
      options: [
        "It reduced the physical temperature required to melt silica batch.",
        "It transformed rare status items into widespread practical goods.",
        "It replaced traditional clay moulds with automated iron machinery.",
        "It restricted glass production exclusively to Venetian island workshops."
      ],
      correct: 1
    },
    {
      q: "According to paragraph B, why must a glassblower work quickly while shaping the parison?",
      options: [
        "To prevent air bubbles from forming inside the hollow blowpipe.",
        "To stop the silica mixture from sticking to the wet wooden blocks.",
        "To mold the viscous material before it cools and hardens.",
        "To keep the furnace temperature from dropping below 1,100°C."
      ],
      correct: 2
    },
    {
      q: "What shift occurred in the glass industry during the Studio Glass Movement?",
      options: [
        "Production moved from industrial factories into individual artist studios.",
        "Artisans stopped using metallic oxides to color decorative glassware.",
        "European workshops gained an exclusive global monopoly over clear glass.",
        "Glassblowers abandoned hand tools in favor of electric molding machinery."
      ],
      correct: 0
    },
    {
      q: "What is the primary function of an annealing oven in modern glassblowing?",
      options: [
        "It rapidly heats metallic oxides to produce vibrant color gradients.",
        "It inflates steady bursts of air to maintain an even hollow bulb shape.",
        "It slowly cools finished glass to relieve internal structural tension.",
        "It melts raw silica batch into viscous liquid before blowing begins."
      ],
      correct: 2
    }
  ]
},
{
  id: "t33",
  title: "The Kelford Aqueduct of British Columbia",
  body: `A. Constructed during the early decades of the twentieth century, the Kelford Aqueduct represents one of British Columbia’s most ambitious historical engineering endeavors. Designed to transport freshwater across rugged mountainous terrain, the system was built primarily to supply rapidly expanding industrial operations and agricultural communities in the region. Engineers faced immense logistical hurdles, including navigating dense rainforests, steep rock faces, and unpredictable seasonal streamflows. Despite these challenges, the completion of the conduit provided a reliable hydrologic supply line that proved instrumental in fostering long-term economic settlement throughout the surrounding valley.

B. The structural design of the aqueduct relies on a sophisticated combination of elevated wooden flumes, excavated earth canals, and reinforced concrete conduits. To maintain a consistent gradient over vast distances without relying on heavy mechanical pumping, designers utilized gravity-driven hydrodynamics. Water was diverted from high-altitude glacial streams, flowing through precise slopes engineered to prevent both erosion of the channel walls and excessive silt accumulation. Maintenance crews were stationed at strategic intervals along the route to inspect timber supports, clear seasonal debris, and manage flow control gates.

C. Beyond its primary civil function, the Kelford Aqueduct profoundly altered the local ecological landscape. By redirecting significant volumes of surface water from original tributaries, the infrastructure unexpectedly altered riparian habitats downstream. Certain fish populations experienced disruptions in traditional spawning routes due to reduced water depths and altered flow velocities. Conversely, the newly created artificial water channels created micro-habitats that supported secondary vegetation growth and attracted various mammal species, demonstrating the complex ecological trade-offs associated with large-scale historic water management projects.

D. As regional infrastructure modernized in the post-war era, reliance on the Kelford Aqueduct gradually diminished. Advanced subterranean pipeline networks and modern municipal filtration facilities eventually superseded the open-air conduit system. By the late 1970s, primary water diversion through the aqueduct was officially halted. While portions of the wooden flume structures deteriorated over time due to weather exposure, significant sections of the concrete pathways and stone masonry support pillars remained intact across the forest canopy.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "A benefit of using precise slopes to control water movement without mechanical pumps.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "An example of environmental consequences affecting downstream fish populations and local wildlife.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "A reason why the water conduit was built across mountainous terrain in the early 1900s.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "A change caused by post-war infrastructure modernization that led to the aqueduct closing.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "A policy offering provincial tax relief to private companies restoring historic stone masonry.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    },
    {
      q: "Why was the Kelford Aqueduct originally built in British Columbia?",
      options: [
        "To generate hydroelectric power for growing urban municipalities.",
        "To supply freshwater to expanding local industries and farms.",
        "To prevent severe seasonal flooding in low-lying river valleys.",
        "To transport harvested timber logs down steep mountain slopes."
      ],
      correct: 1
    },
    {
      q: "According to paragraph B, how did engineers keep water moving over long distances?",
      options: [
        "By installing large mechanical pumps at high-altitude stream sites.",
        "By constructing underground pressurized steel pipes through mountains.",
        "By using gravity and carefully planned slopes to guide the water flow.",
        "By clearing natural riverbeds of all silt and seasonal forest debris."
      ],
      correct: 2
    },
    {
      q: "How did the redirection of river water affect downstream ecosystems?",
      options: [
        "It completely destroyed secondary forest growth along artificial canals.",
        "It disrupted historical fish spawning paths by altering water levels.",
        "It caused major soil erosion along the main concrete support pillars.",
        "It forced local mammal species to migrate out of the mountain region."
      ],
      correct: 1
    },
    {
      q: "What eventually caused the closure of the open-air aqueduct system in the late 1970s?",
      options: [
        "Severe weather destroyed the concrete support pillars across the canopy.",
        "Local forestry agencies declared the wooden structures unsafe for water.",
        "New subterranean pipelines and filtration systems replaced its function.",
        "Glacial streams dried up due to long-term changing climate patterns."
      ],
      correct: 2
    }
  ]
},
{
  id: "t34",
  title: "The Nassagaweya Canal",
  body: `A. Engineered during the expansion of southern Ontario’s industrial corridors, the Nassagaweya Canal was designed to overcome significant geographical barriers to freight transport. Before its construction, local manufacturers and agricultural producers relied heavily on slow, weather-dependent overland routes to move timber, crushed limestone, and grain. The proposal to carve a navigable waterway through the rugged terrain of the Niagara Escarpment was initially met with skepticism. However, visionary regional planners argued that a controlled inland passage would dramatically reduce transit times and lower shipping overhead for growing settlements.

B. The physical construction of the canal required exceptional manual labor and innovative engineering solutions for its time. Workers utilized heavy explosives, steam-powered shovels, and teams of draft horses to cut through dense rock formations and dense clay soil. A primary challenge involved managing the steep elevation drops along the route, which required the design of a series of stone-masonry locks. These lock systems allowed barges to be safely raised and lowered using controlled water displacement, ensuring smooth navigation even during dry summer months when river levels dropped.

C. Beyond its immediate commercial benefits, the canal served as a catalyst for socio-economic transformation across the surrounding municipality. Small trading posts along the waterway rapidly expanded into thriving mill towns equipped with sawmills, iron foundries, and warehouses. The reliable access to raw materials attracted skilled tradespeople and immigrant laborers, accelerating urbanization in the region. Furthermore, the canal’s construction fostered early investments in supporting infrastructure, including wooden toll bridges and connecting gravel roads.

D. By the early twentieth century, the strategic importance of the Nassagaweya Canal began to decline rapidly following the expansion of regional railway networks. Trains offered significantly faster year-round transport that was unaffected by winter ice freezes that regularly paralyzed canal traffic for months. As commercial barge traffic dwindled, maintenance of the locks was eventually abandoned. Today, while large sections of the original waterway have been reclaimed by local wetland vegetation, preserved masonry ruins along the historic route now form part of a protected heritage trail.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "A reason why planners proposed an inland waterway through difficult rock terrain.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "A description of stone lock systems designed to manage steep elevation changes.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "An example of small posts expanding into busy mill towns with sawmills and foundries.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "A change caused by expanding railway lines that made year-round transport faster.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "A government grant offered to local property owners for maintaining heritage trails.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    },
    {
      q: "Why was the Nassagaweya Canal originally built in southern Ontario?",
      options: [
        "To replace unreliable overland routes for transporting goods and timber.",
        "To generate hydroelectric energy for newly established iron foundries.",
        "To prevent seasonal flooding in low-lying agricultural communities.",
        "To create a direct naval defense passage across the Niagara Escarpment."
      ],
      correct: 0
    },
    {
      q: "According to paragraph B, how did lock systems help barges navigate the canal?",
      options: [
        "They used steam-powered winches to tow heavy boats up steep clay banks.",
        "They controlled water displacement to raise and lower vessels safely.",
        "They cleared winter ice freezes to maintain continuous summer depth.",
        "They stored excess river water in underground masonry reservoirs."
      ],
      correct: 1
    },
    {
      q: "How did the canal influence urbanization in surrounding areas?",
      options: [
        "It funded the construction of iron bridges across all regional rivers.",
        "It attracted skilled workers and turned small outposts into thriving mill towns.",
        "It forced local agricultural producers to relocate near main railway lines.",
        "It reduced shipping tolls for foreign cargo vessels entering the region."
      ],
      correct: 1
    },
    {
      q: "What advantage did railways have over the Nassagaweya Canal?",
      options: [
        "Railways required much less manual labor and stone maintenance to operate.",
        "Trains provided faster travel and were not shut down by winter ice.",
        "Rail networks were cheaper to construct through dense forest terrain.",
        "Rail transport eliminated the need for toll bridges and gravel roads."
      ],
      correct: 1
    }
  ]
},
{
  id: "t35",
  title: "AI Alignment and Risk",
  body: `A. AI alignment is the field of research concerned with ensuring that advanced artificial intelligence systems pursue goals consistent with human intentions and values. The challenge begins with the difficulty of describing precisely what people want. A system trained to maximize a simple, measurable objective may discover unexpected shortcuts that satisfy the metric while defeating the purpose of the task, a problem often called specification gaming. For example, a cleaning robot rewarded for hiding visible dirt might simply cover it rather than remove it.

B. As models become more capable, researchers face growing technical obstacles in understanding and controlling them. Interpretability research attempts to map the internal computations of neural networks so that engineers can detect hidden flaws. Another difficulty is that human evaluators cannot always judge outputs on tasks that exceed their expertise. To address this, scalable oversight techniques use AI assistants to help people examine the work of other AI systems, allowing reliable feedback even when a task is too complex for unaided review.

C. The risks associated with advanced AI range from immediate to long-term. Present-day concerns include biased automated decisions, the spread of misinformation, and the misuse of powerful tools for cyberattacks. Looking further ahead, some experts warn that highly autonomous systems could pursue objectives that conflict with human interests, or that control over the most capable technology could become concentrated in a small number of organizations. Many researchers emphasize that addressing short-term harms and long-term dangers need not be competing priorities.

D. Governments and research laboratories have responded with a growing set of safeguards. Safety evaluations and red-teaming exercises, in which specialists deliberately try to provoke harmful behavior, are now common before powerful models are released. Some countries have also proposed incident-reporting requirements and international agreements on shared standards. Supporters argue that testing before deployment is essential to prevent avoidable harm, while critics worry that regulation may lag behind the technology or slow beneficial innovation. The debate remains unresolved.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "A description of how a system can meet a numerical target while ignoring the real purpose of the task.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "A method in which AI assistants help people evaluate work that is too complex for them to judge alone.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "A list of present-day dangers together with a worry about power being held by few organizations.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "An example of testing practices used before powerful models are released to the public.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "A claim that one particular AI system has been proven to be completely free of alignment problems.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    },
    {
      q: "What is the main goal of AI alignment research?",
      options: [
        "To ensure advanced AI systems pursue goals consistent with human intentions and values.",
        "To make AI systems run faster on less expensive hardware.",
        "To replace human evaluators with fully automated review systems.",
        "To prevent companies from developing any form of advanced AI."
      ],
      correct: 0
    },
    {
      q: "According to paragraph B, why are scalable oversight techniques needed?",
      options: [
        "Because neural networks cannot be trained on complex tasks.",
        "Because humans cannot always judge outputs on tasks beyond their expertise.",
        "Because interpretability research has already solved all hidden flaws.",
        "Because AI assistants are cheaper than human evaluators."
      ],
      correct: 1
    },
    {
      q: "What view do many researchers hold about short-term and long-term AI risks?",
      options: [
        "Only long-term risks deserve serious attention.",
        "Short-term harms have already been completely eliminated.",
        "Both can be addressed without being treated as competing priorities.",
        "Long-term risks are impossible to study scientifically."
      ],
      correct: 2
    },
    {
      q: "Why do supporters of pre-deployment testing favor it?",
      options: [
        "It guarantees that regulation will never lag behind technology.",
        "It helps prevent avoidable harm before models are released.",
        "It removes the need for international agreements.",
        "It makes powerful models cheaper to build."
      ],
      correct: 1
    }
  ]
},
{
  id: "t36",
  title: "Flax in Canada: Fibre, Food, and Farming",
  body: `A. Flax (Linum usitatissimum) has played a pivotal role in Canada’s agricultural history, originating as a multi-purpose crop cultivated for both its stem fibres and oil-rich seeds. Historically, the plant’s strong, flexible fibres were essential for manufacturing linen textiles, ropes, and coarse canvas. While early European settlers relied on localized flax production for domestic textile supply, the commercial expansion of the crop in North America shifted progressively toward seed cultivation. Today, Canada stands among the world's leading exporters of flaxseed, with the vast majority of commercial acreage situated across the fertile soils of the Prairie provinces, particularly Saskatchewan and Manitoba.

B. From a nutritional perspective, flaxseed has experienced a significant resurgence due to its rich concentration of dietary compounds. High in alpha-linolenic acid (ALA)—an essential omega-3 fatty acid—flaxseed is widely recognized for supporting cardiovascular health and reducing systemic inflammation. Additionally, the seed contains exceptional levels of soluble and insoluble fibre, alongside lignans, which are phytoestrogenic antioxidants linked to hormonal balance and cellular protection. As consumer demand for functional foods rises, commercial food processors routinely incorporate whole, milled, or cold-pressed flaxseed oil into breads, cereals, and dietary supplements.

C. Agronomically, flax presents both distinct advantages and specific management challenges for modern farmers. As a broadleaf crop integrated into cereal-dominated crop rotations, flax helps break disease and pest cycles in the soil. However, its shallow root structure makes it relatively sensitive to early-season drought and weed competition, requiring precise field preparation and weed control strategies. Furthermore, harvesting flax can be mechanically demanding; the tough, slow-decaying straw frequently entangles threshing equipment, forcing growers to either burn the residual stems, chop them finely, or process the bi-product for industrial applications, such as specialized paper or insulation materials.

D. Looking to the future, Canadian agricultural researchers are focused on expanding the high-value utilization of both seed and fibre components. Plant breeders continue to develop cold-tolerant and disease-resistant cultivars tailored to withstand unpredictable climate patterns. Simultaneously, clean-technology innovators are pioneering methods to extract high-grade natural fibres from post-harvest flax straw. These extracted fibres serve as eco-friendly reinforcements in composite plastics for the automotive and construction sectors, turning a traditional crop waste material into a sustainable biological resource for modern manufacturing.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "A shift from early textile harvesting to large-scale global seed export.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "An example of a plant-based omega-3 fatty acid promoting heart health.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "A difficulty in harvesting caused by tough plant stems tangling machinery.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "An example of post-harvest crop waste converted into eco-friendly auto materials.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "A federal subsidy granted to prairie growers for purchasing specialized harvesting machinery.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    },
    {
      q: "Where is the majority of commercial flaxseed grown in Canada today?",
      options: [
        "Across the fertile soils of the Prairie provinces.",
        "In coastal greenhouse facilities near the eastern border.",
        "Along northern forest belts affected by cold climates.",
        "In small experimental plots owned by food processors."
      ],
      correct: 0
    },
    {
      q: "Why do food manufacturers commonly add flaxseed to healthy food products?",
      options: [
        "To extend the shelf life of breads without synthetic additives.",
        "To meet growing consumer demand for omega-3s and antioxidants.",
        "To lower the production costs of commercial cereal brands.",
        "To replace synthetic food dye with natural seed oil pigments."
      ],
      correct: 1
    },
    {
      q: "What agronomic benefit does flax provide when planted in crop rotations?",
      options: [
        "It protects shallow topsoil from heavy early-season flooding.",
        "It helps interrupt soil-borne disease and pest cycles.",
        "It eliminates the need for field preparation before planting.",
        "It prevents weed growth without requiring weed control strategies."
      ],
      correct: 1
    },
    {
      q: "How are clean-technology innovators utilizing post-harvest flax straw?",
      options: [
        "By burning it to generate renewable thermal energy for farms.",
        "By turning it into organic fertilizer for cereal crop rotations.",
        "By extracting fibres to reinforce composite plastics in manufacturing.",
        "By grinding it into powder for human dietary supplements."
      ],
      correct: 2
    }
  ]
},
{
  id: "t37",
  title: "Glassblowing: Technique, Chemistry, and Canadian Heritage",
  body: `A. Glassblowing is an ancient artisanal craft that transforms raw silica sand into complex, functional, and decorative objects through controlled heating and physical manipulation. The fundamental process begins in a high-temperature furnace, where silica is fused with fluxing agents, such as soda ash and limestone, to reduce its melting threshold. Artisans gather the molten material onto the end of a hollow blowpipe, introduced air to expand a hollow core, and continuously shape the dynamic medium using specialized wooden block tools, shears, and graphite paddles before transferring the piece to an annealing oven for gradual cooling.

B. At its core, glass manufacturing relies heavily on precise chemical dynamics to govern structural stability, thermal resistance, and coloration. Pure silica creates durable glass but demands extreme temperatures to liquefy, making additives structurally necessary. Sodium oxide lowers the requisite melting temperature, while calcium oxide restores chemical durability to prevent water solubility. To achieve vibrant hues, craftspeople introduce minor quantities of metal oxides into the molten batch—cobalt yields deep blues, chromium produces vivid greens, and gold chloride creates rich ruby reds—requiring exact thermal management to stabilize the desired shade.

C. In Canada, glassblowing evolved from early industrial utility into a celebrated facet of national artistic heritage. During the nineteenth century, Canadian glass factories primarily produced practical items, such as container glass, kerosene lamp chimneys, and window panes, to support a growing population. Over time, independent studios emerged across the country, particularly in Ontario and Quebec, shifting the focus from mass-produced utilitarian goods toward studio glass movement art. Canadian artisans gained international acclaim for integrating natural landscape motifs and innovative techniques into contemporary sculptural designs.

D. Modern Canadian glass studios face ongoing challenges regarding energy consumption and material sustainability. Operating high-temperature furnaces requires substantial natural gas or electrical resources, prompting institutions to explore energy-efficient kiln designs and heat-recovery infrastructure. Additionally, contemporary artists increasingly incorporate recycled cullet—crushed discarded glass—into their raw formulations to lessen environmental impact. Through these technical adaptations and educational apprenticeships, Canadian glassblowing preserves its historical traditions while aligning with modern ecological standards.

E. Not mentioned in any paragraph.`,
  questions: [
    {
      q: "A description of basic tools and furnaces used to shape molten silica sand.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "An example of metal oxides mixed into batch materials to create specific colors.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "A shift in Canadian glassmaking from 19th-century utility items to studio artwork.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "An example of using crushed recycled material to reduce environmental impacts in studios.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "A tax rebate offered by provincial governments to studios upgrading their heating systems.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    },
    {
      q: "Why are soda ash and limestone added to pure silica sand during melting?",
      options: [
        "To lower the temperature required to melt the silica material.",
        "To prevent air bubbles from forming inside the hollow blowpipe.",
        "To color the batch with deep blue and green hues.",
        "To speed up the cooling process inside the annealing oven."
      ],
      correct: 0
    },
    {
      q: "According to paragraph B, why is calcium oxide necessary in glass formulations?",
      options: [
        "It acts as a primary flux to lower extreme melting points.",
        "It restores chemical durability to stop glass from dissolving in water.",
        "It creates rich ruby red shades when combined with gold chloride.",
        "It stabilizes the furnace temperature during thermal management."
      ],
      correct: 1
    },
    {
      q: "What did Canadian glass factories primarily manufacture during the 19th century?",
      options: [
        "Intricate landscape sculptures for international art displays.",
        "Specialized graphite paddles and wooden block hand tools.",
        "Practical household items like lamp chimneys and window panes.",
        "Energy-efficient kilns and heat-recovery infrastructure systems."
      ],
      correct: 2
    },
    {
      q: "How are modern Canadian studios addressing high energy requirements?",
      options: [
        "By replacing natural gas with low-temperature chemical fluxes.",
        "By exporting raw silica sand processing to overseas facilities.",
        "By exploring energy-efficient kiln designs and heat-recovery systems.",
        "By limiting furnace operations to short seasonal production schedules."
      ],
      correct: 2
    }
  ]
},

// viewpoints
{
  id: "t38",
  title: "Canada's Long-Term Care Funding Crisis",
  body: `Every Monday morning, Eleanor Vance sits by the window of her mother’s small room in a suburban Ottawa long-term care facility, helping her finish breakfast before the understaffed nursing team arrives for the morning rounds. Over the past two years, Vance has watched the monthly accommodation fees for her 84-year-old mother rise by nearly 15 percent, while the number of dedicated personal care workers on duty has visibly thinned. Her mother is one of more than 200,000 elderly Canadians living in long-term care homes—a vulnerable demographic at the epicenter of a structural funding crisis that threatens to overwhelm provincial healthcare systems across the country.

Vance, a middle school teacher and primary caregiver, is vocal about the growing strain on families. "We are paying significantly more each month, yet the staff are stretched so thin they barely have time to speak with the residents," she told The Globe and Mail. "The workers are doing everything they can, but the system is burnt out. It feels like we are paying premium prices for a service that is constantly operating in survival mode." Her experience reflects recent findings from the Canadian Institute for Health Information (CIHI), which reported that 64 percent of long-term care homes across Canada face persistent staffing shortages, leading to increased rates of burnout and family dissatisfaction.

Yet the financial pressure on families is only one side of the equation, argues Dr. David Kensington, a health economics researcher at the University of Toronto who has studied senior care infrastructure for over fifteen years. "The current funding model was designed for a demographic profile that no longer exists," he said. "Our data shows that over the next decade, the population of Canadians aged 85 and older will increase by more than 50 percent. Without a fundamental restructuring of how long-term care is financed, provinces will either face catastrophic budget deficits or be forced to ration essential care services." His 2023 study published in the Canadian Journal of Public Health estimated that closing the national care gap will require an additional $12 billion in annual public investment by 2030.

For Sarah Lin, policy director at the senior advocacy organization CareAge Canada, the solution requires a national standard supported by federal transfers. "What we currently have is a patchwork system where the quality and affordability of care depend entirely on which province—or even municipality—you live in," she said. A 2024 Nanos Research poll cited by CareAge found that 78 percent of Canadians support integrating long-term care directly into the Canada Health Act to ensure universal standards and funding. Lin argues that Ottawa must tie federal health transfers to mandatory nurse-to-resident ratios and standardized facility benchmarks.

Arthur Pendelton, a senior fellow at the Fraser Institute, pushes back strongly against expanding federal oversight and public spending. "Imposing rigid federal mandates on provincial healthcare budgets will only create bureaucratic red tape without addressing the core inefficiency," he said. "Long-term care delivery benefits from competition, innovation, and private-sector involvement. Rather than increasing government spending, policy makers should focus on expanding tax credits for home care and encouraging private insurance models that allow seniors to age in their own communities."

With provincial governments from Ontario to British Columbia currently reviewing their long-term care budgets, the debate over how to fund the country's aging population remains deeply contested. For caregivers like Vance, the resolution cannot come soon enough: "This isn't just a political debate about budgets; it's about whether we, as a society, are willing to provide dignity to the people who built this country."`,
  questions: [
    {
      q: "According to the passage, what dual problem has Eleanor Vance observed over the past two years?",
      options: [
        "Higher accommodation fees alongside fewer personal care workers",
        "Poorer food quality and reduced visiting hours",
        "Fewer medical supplies and increased facility privatization",
        "Higher insurance premiums and longer waiting lists for admission"
      ],
      correct: 0
    },
    {
      q: "What statistic from the Canadian Institute for Health Information (CIHI) supports Eleanor Vance's experience?",
      options: [
        "15 percent of staff leave long-term care homes annually",
        "64 percent of care homes experience persistent staffing shortages",
        "50 percent of care facilities rely on private funding models",
        "78 percent of family caregivers report high levels of exhaustion"
      ],
      correct: 1
    },
    {
      q: "Why does Dr. David Kensington believe the current funding model for senior care is obsolete?",
      options: [
        "It focuses exclusively on private insurance models",
        "It was created for a demographic profile that has changed significantly",
        "It relies entirely on municipal government taxes",
        "It prioritizes home care over long-term facility funding"
      ],
      correct: 1
    },
    {
      q: "According to Dr. Kensington's 2023 study, how much additional annual public investment will be required by 2030 to close the care gap?",
      options: [
        "15 percent of total provincial health budgets",
        "$200,000 per facility",
        "$12 billion",
        "50 percent more than current federal transfers"
      ],
      correct: 2
    },
    {
      q: "What main problem with the current long-term care system does Sarah Lin point out?",
      options: [
        "It lacks competition among private service providers",
        "It forces all seniors into facility care rather than home care",
        "It is a patchwork system where quality depends on location",
        "It relies too heavily on federal oversight and red tape"
      ],
      correct: 2
    },
    {
      q: "What change does Sarah Lin suggest to improve the long-term care system?",
      options: [
        "Integrating long-term care into the Canada Health Act",
        "Expanding tax credits for family caregivers",
        "Removing federal health transfers to give provinces full control",
        "Privatizing non-essential personal care services"
      ],
      correct: 0
    },
    {
      q: "Why does Arthur Pendelton oppose mandatory federal standards for long-term care?",
      options: [
        "He believes provinces are already spending too much on tax credits",
        "He claims federal mandates create bureaucratic red tape without fixing inefficiency",
        "He argues that senior care should be managed exclusively by municipal authorities",
        "He thinks the population of elderly Canadians will decline after 2030"
      ],
      correct: 1
    },
    {
      q: "Which solution does Arthur Pendelton support instead of increasing public spending?",
      options: [
        "Integrating long-term care into universal healthcare",
        "Establishing national nurse-to-resident ratios",
        "Expanding tax credits for home care and encouraging private insurance",
        "Raising monthly accommodation fees for private rooms"
      ],
      correct: 2
    },
    {
      q: "In paragraph three, the word 'demographic' is closest in meaning to:",
      options: [
        "Economic forecast",
        "Population group",
        "Geographic region",
        "Medical diagnosis"
      ],
      correct: 1
    },
    {
      q: "What is the primary theme of the passage?",
      options: [
        "The political rivalry between provincial and federal governments in Canada",
        "The contrasting approaches and urgent need to address Canada's long-term care funding crisis",
        "The benefits of private healthcare insurance over public funding models",
        "The daily medical routines of personal care workers in suburban Ottawa"
      ],
      correct: 1
    }
  ]
},
{
  id: "t39",
  title: "Modernising Canadian K–12 Education",
  body: `Every Monday morning, Marcus Thorne stands at the front of his ninth-grade classroom in a suburban Calgary high school, adjusting a digital projector while his students log into their school-issued laptops. Over the past three years, Thorne has watched his school board implement sweeping digital literacy initiatives and modernized curricula designed to prepare students for a rapidly changing global economy. However, as outdated textbooks remain stacked in the corners of his classroom and funding for special education support continues to shrink, Thorne finds himself on the frontlines of a growing national debate over whether Canada’s K–12 education system is being genuinely modernized or merely rebranded.

Thorne, a high school history teacher with over fifteen years of classroom experience, is vocal about the widening gap between policy goals and operational reality. "We are asking students to engage with cutting-edge digital platforms, yet our physical infrastructure and essential support services are falling apart," he told The Globe and Mail. "Technology is a wonderful tool, but it cannot replace smaller class sizes, specialized reading specialists, or basic classroom resources. In many ways, the push for modernization feels like a distraction from fundamental funding deficits." His experience reflects recent findings from a Canadian Teachers' Federation survey, which revealed that 68 percent of public school educators feel their classrooms lack the core funding and support staff necessary to meet modernized curriculum standards.

Yet the shift toward updated educational frameworks is critical for the country's long-term prosperity, argues Dr. Aris Thorne, an educational policy analyst at the University of Toronto. "Canada's traditional K–12 curriculum was built for an industrial era, not a digital knowledge economy," he said. "Our longitudinal research demonstrates that students enrolled in modern, STEM-focused, and project-based learning programs score 28 percent higher in critical thinking and complex problem-solving by the time they reach secondary graduation. If Canadian provinces fail to update their learning models, our future workforce will fall behind on the global stage." His 2023 study published in the Canadian Journal of Education emphasized that modernizing education is an economic imperative that requires systemic curriculum reform across all provinces.

For Sarah Jenkins, spokesperson for the parent advocacy group Education First Canada, the path forward requires a balanced approach that prioritizes foundational skills alongside new technologies. "What parents are seeing is a false dichotomy between traditional academics and modern skills," she said. A 2024 Angus Reid poll cited by the organization showed that 72 percent of parents in Canada believe public schools should focus more heavily on foundational mathematics, writing, and financial literacy before integrating complex technological platforms. Jenkins argues that provincial ministries of education must establish clear, standardized metrics for core competencies rather than rushing to adopt every new pedagogical trend.

David O'Connor, a senior policy fellow at the Fraser Institute, offers a different perspective, advocating for expanded school choice and decentralized decision-making. "Top-down curriculum overhauls imposed by provincial bureaucracies often fail to account for the unique needs of local communities," he said. "Instead of funneling more capital into rigid public monopolies under the guise of modernization, governments should empower parents with educational savings accounts and funding flexibility. Market competition among schools naturally drives innovation and raises academic standards far more effectively than government mandates."

As provincial ministries of education from Ontario to Alberta continue to roll out updated curricula and technology frameworks, the debate over how to properly educate Canada's youth shows no sign of cooling down. For teachers like Thorne, the core objective remains unchanged: "At the end of the day, modernization shouldn't just be about fancy gadgets in the classroom—it has to be about giving every child the tools and support they need to succeed in life."`,
  questions: [
    {
      q: "What concern does Marcus Thorne raise regarding the modernization initiatives in his school?",
      options: [
        "Students refuse to use the new school-issued laptops",
        "Digital tools are being introduced while basic infrastructure and support services are underfunded",
        "The new curriculum focuses exclusively on history and social studies",
        "School boards are reducing the overall number of digital literacy programs"
      ],
      correct: 1
    },
    {
      q: "According to the Canadian Teachers' Federation survey, what percentage of educators feel their classrooms lack necessary core funding and staff?",
      options: [
        "28 percent",
        "50 percent",
        "68 percent",
        "72 percent"
      ],
      correct: 2
    },
    {
      q: "Why does Dr. Aris Thorne advocate for updating Canada's K–12 curriculum?",
      options: [
        "Traditional curricula were designed for an industrial era rather than a digital economy",
        "Digital learning platforms are less expensive than physical textbooks",
        "Teachers strongly prefer technology over traditional classroom instruction",
        "Provincial ministries have already eliminated all industrial training programs"
      ],
      correct: 0
    },
    {
      q: "According to Dr. Aris Thorne's research, how do students in STEM-focused and project-based learning programs perform?",
      options: [
        "They graduate two years earlier than other students",
        "They score 28 percent higher in critical thinking and complex problem-solving",
        "They require 68 percent less special education support",
        "They perform equally well regardless of technology adoption"
      ],
      correct: 1
    },
    {
      q: "What does Sarah Jenkins suggest provincial ministries of education should prioritize?",
      options: [
        "Replacing teachers with automated digital platforms",
        "Focusing heavily on foundational skills like math, writing, and financial literacy",
        "Eliminating standardized tests in favor of project-based learning",
        "Transferring curriculum design directly to private technology firms"
      ],
      correct: 1
    },
    {
      q: "What statistic from the 2024 Angus Reid poll is mentioned to support parent advocacy?",
      options: [
        "68 percent of parents favor removing laptops from schools",
        "72 percent of parents believe schools should focus more on foundational skills before adding complex tech platforms",
        "28 percent of parents support government educational mandates",
        "15 percent of parents prefer private schools over public education"
      ],
      correct: 1
    },
    {
      q: "What alternative model does David O'Connor advocate for to drive innovation in education?",
      options: [
        "Centralizing all curriculum planning within provincial bureaucracies",
        "Market competition, expanded school choice, and educational savings accounts for parents",
        "Increasing direct government grants to public school monopolies",
        "Banning modern technology in elementary classrooms"
      ],
      correct: 1
    },
    {
      q: "Why does David O'Connor criticize top-down curriculum overhauls?",
      options: [
        "They require too many standardized digital platforms",
        "They fail to account for the unique needs of local communities",
        "They focus too much on financial literacy and mathematics",
        "They give parents too much control over school funding"
      ],
      correct: 1
    },
    {
      q: "In paragraph two, the word 'deficits' is closest in meaning to:",
      options: [
        "Shortages",
        "Surpluses",
        "Improvements",
        "Regulations"
      ],
      correct: 0
    },
    {
      q: "What is the main subject discussed throughout the passage?",
      options: [
        "The rising popularity of online high school courses in Calgary",
        "The ongoing debate and differing views on modernizing Canada's K–12 education system",
        "The financial benefits of school choice for private institutions",
        "The history of traditional teaching methods in Canadian public schools"
      ],
      correct: 1
    }
  ]
},
{
  id: "t40",
  title: "Urban Greening Versus City Infrastructure Spending",
  body: `Every Monday morning, Julian Mercier steps onto the balcony of his third-floor apartment in downtown Montreal, looking out over a bustling intersection where heavy construction equipment is breaking up asphalt. Over the past three years, Mercier has watched his municipality allocate millions of dollars toward urban greening projects, transforming former parking spots into rain gardens and planting thousands of new trees along transit corridors. Yet, as water main breaks continue to flood nearby basements and aging road surfaces damage vehicles across his neighborhood, Mercier finds himself questioning whether his city’s financial priorities have become dangerously misaligned.

Mercier, an urban planner with a private civil engineering firm, is vocal about the trade-offs involved in municipal budgeting. "Adding green canopies and bioswales to our urban landscape is undoubtedly valuable for heat reduction and aesthetics," he told The Globe and Mail. "However, when a city allocates substantial capital to new green infrastructure while core subterranean pipes and basic road networks are critically deteriorating, we are postponing a inevitable collapse. Trees are wonderful, but they cannot stop an eighty-year-old water main from bursting." His concerns align with a recent Canadian Federation of Services report indicating that 58 percent of municipal infrastructure managers believe deferred maintenance on core utilities poses an immediate risk to local economies.

Yet the investment in natural infrastructure is far more than cosmetic, argues Dr. Maya Lin, an environmental scientist at McGill University who specializes in urban climate adaptation. "Urban greening is not an optional luxury; it is a critical component of modern climate resilience," she said. "Our research demonstrates that dense tree canopies and permeable surfaces reduce urban heat island effects by up to 4 degrees Celsius and absorb up to 40 percent of heavy storm runoff. Investing in natural green infrastructure actually reduces long-term stress on traditional stormwater systems, preventing far costlier disaster repairs down the road." Her 2023 paper, published in the Canadian Journal of Urban Research, highlighted that Canadian cities lose billions annually in indirect health and infrastructure costs due to extreme weather events that green spaces help mitigate.

For Carlos Ramirez, director of the advocacy group Cities for Tomorrow, the debate represents a false choice fueled by short-term fiscal planning. "What we need is an integrated infrastructure approach rather than competing silos," he said. A 2024 Angus Reid poll cited by the group showed that 65 percent of urban Canadians support increased federal funding specifically earmarked for dual-purpose infrastructure—such as flood-retention parks and green roofs on municipal buildings. Ramirez argues that provincial and federal grants should mandate that traditional road and utility upgrades automatically incorporate green elements, ensuring both systems are modernized simultaneously.

Elena Rostova, a senior policy analyst at the Canadian Taxpayers Federation, strongly opposes using green initiatives to justify expanding municipal budgets. "Cities have a fundamental obligation to deliver core services—clean water, functional roads, and emergency access—before taking on broad environmental mandates," she said. "When local governments raise property taxes to finance high-profile green projects while basic roads remain in disrepair, they place an unsustainable financial burden on residents. Municipalities must prioritize essential infrastructure maintenance and leave non-core spending for when budgets are truly balanced."

As municipal councils from Vancouver to Halifax finalize their upcoming capital budgets, the debate over how to balance green climate targets with essential civil infrastructure remains deeply contentious. For residents like Mercier, the answer lies in striking a practical equilibrium: "We all want greener, healthier cities, but those cities first need to function reliably under the surface."`,
  questions: [
    {
      q: "What visual contrast leads Julian Mercier to question his city's financial priorities?",
      options: [
        "New green projects being created while subterranean pipes and roads deteriorate",
        "High-tech transit corridors replacing traditional bus lines",
        "Private construction firms building parking structures instead of parks",
        "Public parks closing early due to a lack of municipal funding"
      ],
      correct: 0
    },
    {
      q: "According to the Canadian Federation of Services report, what percentage of infrastructure managers view deferred maintenance as an immediate economic risk?",
      options: [
        "40 percent",
        "58 percent",
        "65 percent",
        "80 percent"
      ],
      correct: 1
    },
    {
      q: "According to Dr. Maya Lin's research, how do tree canopies and permeable surfaces help cities during severe weather?",
      options: [
        "They completely eliminate the need for underground water mains",
        "They reduce heat island effects by up to 4°C and absorb up to 40 percent of storm runoff",
        "They reduce property tax rates by preventing basement flooding",
        "They lower the cost of asphalt road maintenance by half"
      ],
      correct: 1
    },
    {
      q: "What central point does Dr. Maya Lin make in defense of urban greening?",
      options: [
        "It is cheaper to implement than replacing basic road networks",
        "It is a critical component of climate resilience that reduces long-term stress on traditional systems",
        "It generates immediate tax revenue for municipal governments",
        "It primarily serves aesthetic purposes for downtown residents"
      ],
      correct: 1
    },
    {
      q: "What solution does Carlos Ramirez propose to resolve the tension between green targets and traditional infrastructure?",
      options: [
        "Privatizing stormwater management systems",
        "An integrated infrastructure approach that combines dual-purpose green elements with traditional upgrades",
        "Canceling all federal health and environmental grants to municipalities",
        "Prioritizing road repairs exclusively over natural green spaces"
      ],
      correct: 1
    },
    {
      q: "According to the 2024 Angus Reid poll cited by Carlos Ramirez, what percentage of urban Canadians support federal funding for dual-purpose infrastructure?",
      options: [
        "40 percent",
        "58 percent",
        "65 percent",
        "78 percent"
      ],
      correct: 2
    },
    {
      q: "Why does Elena Rostova criticize high-profile municipal green projects?",
      options: [
        "She believes trees worsen storm runoff problems",
        "She argues cities should prioritize core services like clean water and roads before environmental mandates",
        "She claims green projects cause property values to decline significantly",
        "She feels provincial governments should manage all city parks"
      ],
      correct: 1
    },
    {
      q: "What financial burden does Elena Rostova warn against placing on residents?",
      options: [
        "Paying high toll rates on suburban highways",
        "Raising property taxes to fund green projects while basic infrastructure is neglected",
        "Funding private civil engineering firms directly through income taxes",
        "Covering disaster repair costs without municipal assistance"
      ],
      correct: 1
    },
    {
      q: "In paragraph two, the word 'deteriorating' is closest in meaning to:",
      options: [
        "Expanding",
        "Decaying",
        "Modernizing",
        "Surfacing"
      ],
      correct: 1
    },
    {
      q: "What is the primary objective of the passage?",
      options: [
        "To argue that urban greening initiatives should be completely abolished in Canada",
        "To explore the debate on balancing municipal budgets between urban greening and core infrastructure",
        "To detail the engineering techniques used to replace 80-year-old water mains",
        "To compare property tax rates across major Canadian cities"
      ],
      correct: 1
    }
  ]
},
{
  id: "t41",
  title: "The Crisis in Indigenous Mental Health Services",
  body: `Every Monday morning, Elijah Harper logs into a telehealth portal from a remote community center in Northern Ontario, waiting for a connection that frequently drops. For the past three years, Harper, a community health coordinator, has been trying to secure consistent psychological support for local youth facing unprecedented levels of trauma and distress. Yet, with flying-in specialists remaining scarce and federal funding streams trapped in bureaucratic delays, Harper is forced to manage a escalating mental health crisis with virtually no professional resources on the ground. His community is one of hundreds across Canada struggling with a severe shortage of culturally appropriate, long-term mental health services.

Harper is vocal about the human cost of these systemic shortfalls. "We are constantly operating in emergency response mode, dealing with crises after they happen rather than preventing them," he told The Globe and Mail. "When a young person reaches out for help, waiting six months for a visiting therapist is simply not an option. The lack of sustained, culturally grounded care is costing lives." His experience reflects broader national data showing that Indigenous populations in remote areas face suicide rates significantly higher than the national average, compounded by historical trauma and severe service deficits.

The fundamental issue lies in how federal and provincial funding models are structured, argues Dr. Niigaan Sinclair, an Indigenous health researcher and policy analyst. "Mental health funding for Indigenous communities has historically been short-term, proposal-based, and heavily centralized," he explained. "This creates a patchwork system where programs disappear just as they start building trust within a community. Effective care requires predictable, long-term investments in community-led initiatives that integrate traditional healing practices with modern clinical care." His research emphasizes that self-determined healthcare frameworks yield substantially better long-term wellness outcomes.

For Evelyn Bellerose, an advocate with the First Nations Health Council, the solution requires a full transfer of administrative authority and funding directly to local nations. "Ottawa and the provinces continue to debate jurisdictional boundaries while our people suffer," she said. A recent national survey cited by the council indicated that over 75 percent of Indigenous respondents felt that existing healthcare programs failed to incorporate traditional wellness approaches effectively. Bellerose argues that true reconciliation in healthcare means granting full autonomy to communities to design and staff their own mental health infrastructure.

On the other hand, Gordon Hayes, a public policy analyst specializing in northern administration, cautions against rapid institutional restructuring without established oversight. "Ensuring clinical standards, accountability, and equitable distribution of funds across hundreds of isolated communities presents immense logistical challenges," he noted. "Direct transfers must be paired with robust administrative frameworks and training pipelines to ensure long-term operational sustainability and consistent quality of care."

As government leaders meet to review federal-provincial health accords, the debate over how to reform Indigenous mental health services remains urgent. For leaders like Harper, the priority is clear: "We don't need more studies or temporary grants; we need a permanent, community-led system that treats our people with the care and dignity they deserve."`,
  questions: [
    {
      q: "What main obstacle does Elijah Harper face when trying to secure psychological support for local youth?",
      options: [
        "Unreliable telehealth connections and a lack of on-the-ground professional specialists",
        "A refusal from local youth to participate in community mental health programs",
        "High subscription fees for private remote therapy platforms",
        "Strict provincial laws banning visiting therapists from entering remote regions"
      ],
      correct: 0
    },
    {
      q: "According to Elijah Harper, how does the current system handle mental health issues in remote communities?",
      options: [
        "It focuses primarily on long-term preventative community care",
        "It relies on automated digital portals instead of human therapists",
        "It operates constantly in emergency response mode after crises occur",
        "It provides full administrative control to local community health coordinators"
      ],
      correct: 2
    },
    {
      q: "Why does Dr. Niigaan Sinclair criticize historical funding models for Indigenous mental health?",
      options: [
        "They spend too much money on long-term infrastructure",
        "They are short-term, proposal-based, and heavily centralized",
        "They rely exclusively on traditional healing practices without clinical oversight",
        "They require communities to manage millions in federal block grants"
      ],
      correct: 1
    },
    {
      q: "What approach does Dr. Niigaan Sinclair recommend for long-term wellness outcomes?",
      options: [
        "Replacing traditional practices with standardized modern clinical care",
        "Centralizing all mental health administration within Ottawa",
        "Self-determined healthcare frameworks integrating traditional healing with modern clinical care",
        "Increasing short-term grants for visiting urban therapists"
      ],
      correct: 2
    },
    {
      q: "According to the national survey cited by Evelyn Bellerose, what percentage of Indigenous respondents felt healthcare programs failed to incorporate traditional wellness effectively?",
      options: [
        "Over 75 percent",
        "68 percent",
        "58 percent",
        "50 percent"
      ],
      correct: 0
    },
    {
      q: "What solution does Evelyn Bellerose propose for healthcare reconciliation?",
      options: [
        "Merging provincial and federal health oversight into a single committee",
        "Transferring full administrative authority and funding autonomy directly to local nations",
        "Establishing temporary pilot projects in remote communities",
        "Expanding privatized mental health insurance across northern regions"
      ],
      correct: 1
    },
    {
      q: "What concern does Gordon Hayes express regarding direct funding transfers to isolated communities?",
      options: [
        "He fears remote communities will reject modern medical technology",
        "He cautions that rapid restructuring without robust oversight creates logistical and clinical challenges",
        "He believes provincial governments will lose all interest in northern administration",
        "He argues that local training pipelines are too expensive to maintain"
      ],
      correct: 1
    },
    {
      q: "What condition does Gordon Hayes believe must accompany direct financial transfers?",
      options: [
        "A mandate requiring all specialists to relocate permanently",
        "Robust administrative frameworks, accountability, and training pipelines",
        "The complete removal of federal clinical standards",
        "Short-term annual review boards for all community initiatives"
      ],
      correct: 1
    },
    {
      q: "In paragraph three, the word 'patchwork' refers to a system that is:",
      options: [
        "Highly unified and efficient",
        "Disorganized and composed of inconsistent parts",
        "Strictly regulated by local law",
        "Financed entirely by private donations"
      ],
      correct: 1
    },
    {
      q: "What is the central focus of the passage?",
      options: [
        "The technical difficulties of setting up internet access in Northern Ontario",
        "The systemic shortfalls and debate surrounding Indigenous mental health services funding and delivery",
        "The statistical comparison of suicide rates across major Canadian cities",
        "The logistical requirements for flying medical specialists across isolated regions"
      ],
      correct: 1
    }
  ]
},
{
  id: "t42",
  title: "Solving Canada's Urban Affordable Housing Crisis",
  body: `Every Monday morning, Marcus Vance scans the latest residential real estate listings in downtown Vancouver, watching average rental prices push further out of reach for middle-income workers. Over the past three years, Vance, a secondary school teacher, has seen a growing number of his colleagues leave the city entirely due to astronomical housing costs. As municipal permit delays, rising interest rates, and soaring construction costs slow new developments to a crawl, Vance finds himself at the center of an escalating national debate over how Canada can restore housing affordability in its major urban centers.

Vance is straightforward about how the crisis impacts daily life and public services. "When teachers, nurses, and transit workers can no longer afford to live in the cities where they work, the entire social fabric begins to fray," he told The Globe and Mail. "I spend more than half my monthly income on a modest one-bedroom apartment, leaving almost no room for savings. The current market dynamics are driving out the very people who keep this city running." His situation aligns with recent housing data showing that home price-to-income ratios in major Canadian metropolitan areas have reached historic highs over the past decade.

The root of the crisis stems from a chronic supply deficit combined with restrictive municipal planning regulations, argues Dr. Aris Thorne, a housing economist at the University of British Columbia. "Canada has built fewer homes per capita over the last twenty years than almost any other G7 country," he explained. "Outdated single-family zoning laws, lengthy approval processes, and high development charges have severely choked off the supply of multi-family and non-market housing. Without aggressive zoning reform and streamlined development timelines, market supply will never keep pace with demographic growth." His recent research indicates that reducing municipal approval times by half could unlock tens of thousands of new units annually.

For Catherine Roy, director of the housing advocacy coalition Homes for All, market-rate construction alone will not solve the shortage for low- and middle-income families. "Relying strictly on private developers to build luxury condos in the hope that affordability trickles down has clearly failed," she said. A recent national poll cited by the group showed that 70 percent of urban Canadians favor massive public investment in non-profit, cooperative, and social housing projects. Roy argues that federal and provincial governments must step in directly with subsidized financing and public land contributions to build housing that is permanently decoupled from speculative market forces.

Conversely, Derek Miller, a senior fellow at a private economic policy institute, warns that heavy-handed government intervention and rent control measures will ultimately backfire. "Imposing strict price controls or forcing developers to include unprofitable below-market units simply discourages private investment and stifles construction," he said. "The most effective way to lower prices is to remove bureaucratic barriers, cut development taxes, and let private capital increase overall housing inventory as rapidly as possible."

With municipal, provincial, and federal governments facing intense pressure from voters, the debate over urban housing policy remains a primary political battleground. For residents like Vance, the clock is ticking: "If our leaders cannot find a way to make housing accessible, our cities will become gated communities for the wealthy.`,
  questions: [
    {
      q: "What impact of astronomical housing costs does Marcus Vance highlight regarding middle-income workers?",
      options: [
        "They are forcing essential workers like teachers and nurses to leave major cities",
        "They are causing workers to demand remote work arrangements from employers",
        "They are driving a surge in new high-density condominium construction",
        "They are convincing workers to invest heavily in suburban real estate"
      ],
      correct: 0
    },
    {
      q: "What personal financial challenge does Marcus Vance describe in the text?",
      options: [
        "He spends more than half his monthly income on a modest one-bedroom apartment",
        "He is unable to secure a mortgage due to high municipal development fees",
        "He pays excessive development taxes on his downtown rental unit",
        "He lost his savings during recent interest rate increases"
      ],
      correct: 0
    },
    {
      q: "According to Dr. Aris Thorne, what is a primary cause of Canada's housing crisis?",
      options: [
        "Excessive federal grants for non-profit cooperative housing",
        "A chronic supply deficit combined with restrictive municipal planning regulations",
        "A sharp decline in demographic population growth across G7 nations",
        "The overbuilding of multi-family housing units in downtown Vancouver"
      ],
      correct: 1
    },
    {
      q: "What outcome does Dr. Aris Thorne predict if municipal approval times are cut in half?",
      options: [
        "Tens of thousands of new housing units could be unlocked annually",
        "Private developers will stop investing in urban centers",
        "Property taxes for middle-income workers will decrease by half",
        "Single-family zoning laws will automatically be abolished nationwide"
      ],
      correct: 0
    },
    {
      q: "What solution does Catherine Roy advocate to address the housing shortage for low- and middle-income families?",
      options: [
        "Allowing private developers to focus exclusively on luxury condo projects",
        "Direct government intervention through public investment in non-profit, cooperative, and social housing",
        "Eliminating all subsidized financing programs for multi-family units",
        "Reducing property taxes for private real estate investors"
      ],
      correct: 1
    },
    {
      q: "According to the poll cited by Catherine Roy, what percentage of urban Canadians favor massive public investment in non-market housing?",
      options: [
        "50 percent",
        "65 percent",
        "70 percent",
        "78 percent"
      ],
      correct: 2
    },
    {
      q: "Why does Derek Miller oppose strict price controls and mandatory below-market units?",
      options: [
        "He believes they increase municipal permit delays",
        "He argues they discourage private investment and stifle construction",
        "He claims they reduce the demand for social and cooperative housing",
        "He thinks they force governments to increase development taxes"
      ],
      correct: 1
    },
    {
      q: "What approach does Derek Miller propose to lower housing prices?",
      options: [
        "Decoupling real estate from speculative market forces using public land",
        "Removing bureaucratic barriers, cutting development taxes, and encouraging private capital",
        "Imposing mandatory rent control measures in all metropolitan areas",
        "Restricting new development approvals to municipal non-profit agencies"
      ],
      correct: 1
    },
    {
      q: "In paragraph three, the word 'streamlined' is closest in meaning to:",
      options: [
        "Simplified and accelerated",
        "Delayed and complicated",
        "Regulated and taxed",
        "Expanded and decentralized"
      ],
      correct: 0
    },
    {
      q: "What is the main topic of the passage?",
      options: [
        "The effect of interest rate hikes on private real estate investors in Vancouver",
        "The economic and policy debate surrounding Canada's urban affordable housing crisis",
        "The history of single-family zoning regulations across G7 countries",
        "The step-by-step process of applying for municipal building permits"
      ],
      correct: 1
    }
  ]
},
];