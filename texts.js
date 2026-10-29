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
  id: "t1",
  title: "The Rise of Flexible Workspaces",
  body: `During the last decade, many companies have changed the way employees work. Instead of renting large office buildings, some organizations now prefer flexible workspaces, where employees can choose different locations depending on the task they are completing. These workplaces often include quiet rooms for concentration, open areas for teamwork, and small meeting spaces for private discussions.

Supporters argue that this approach improves productivity because employees can select an environment that matches their needs. For example, a designer creating a new project may prefer a silent room, while a marketing team planning an advertising campaign might work more effectively in an open collaborative space.

However, not everyone agrees. Some employees report that constantly changing work locations makes it difficult to build routines. Others believe that noise from nearby conversations can reduce concentration, even in offices designed to encourage collaboration. A recent workplace survey found that although 68% of employees appreciated having more choices, only 42% believed the new system helped them accomplish tasks faster than before.

Companies also claim flexible offices reduce operating costs because fewer permanent desks are required. This can lower rent and utility expenses, especially when employees work remotely several days each week. Nevertheless, critics point out that businesses often underestimate the cost of redesigning offices and purchasing mobile technology such as laptops, wireless monitors, and reservation software.

Experts generally agree that flexible workspaces are most successful when organizations clearly explain how employees should use them. Without clear expectations, workers may become frustrated by the constant need to search for available desks or meeting rooms. In other words, the success of a flexible office depends less on the furniture itself than on thoughtful planning and effective communication.`,
  questions: [
    {
      q: "Proponents argue that non-traditional seating arrangements boost output primarily because:",
      options: [
        "Travel times to the facility are significantly minimized.",
        "Personnel can tailor their physical setting to their immediate assignment.",
        "Every team member receives an assigned workstation.",
        "Employers subsidize high-tech home setups."
      ],
      correct: 1
    },
    {
      q: "Statistical feedback regarding staff satisfaction indicates that:",
      options: [
        "The majority of staff express strong opposition to desk-sharing.",
        "Autonomy of choice is valued more than its actual impact on work pace.",
        "Flexible setups guaranteed higher speed across all departments.",
        "Conventional layouts remain superior in every single aspect."
      ],
      correct: 1
    },
    {
      q: "Which claim contradicts the information provided in the passage?",
      options: [
        "Leasing overheads can be reduced through reduced square footage.",
        "Varied seating hinders the establishment of daily work habits.",
        "Agile layouts fully eliminate ambient noise and disruptions.",
        "Structural modifications frequently exceed initial financial projections."
      ],
      correct: 2
    },
    {
      q: "Specific hardware and software items are listed in the text to highlight:",
      options: [
        "Recommended tools for boosting individual daily output.",
        "Hidden financial liabilities associated with workplace transition.",
        "The fundamental reasons behind improved processing speed.",
        "Technological advancements between past and modern offices."
      ],
      correct: 1
    },
    {
      q: "The author concludes that successful implementation depends mostly on:",
      options: [
        "Ergonomic furniture investments and interior design.",
        "Strategic managerial guidance and clear operational rules.",
        "Phasing out physical corporate headquarters entirely.",
        "Transitioning the workforce to full-time remote arrangements."
      ],
      correct: 1
    }
  ]
},
{
  id: "t2",
  title: "The City's New Library Policy",
  body: `For many years, the downtown public library was known as one of the quietest places in the city. Students often spent entire afternoons preparing for exams, while researchers appreciated the peaceful environment. However, as the number of visitors increased, library staff noticed that people's expectations had begun to change.

Instead of using the library only to borrow books, many visitors wanted spaces where they could work together on school assignments, attend workshops, or participate in community events. In response, the library introduced a new layout. The first floor became a collaborative zone where conversation was allowed, while the upper floors remained designated for silent study.

Although the change was welcomed by many residents, it also received criticism. Some regular visitors argued that the library had lost its traditional atmosphere. Others complained that sounds from the collaborative area occasionally reached the quiet floors despite additional soundproofing. Nevertheless, library administrators reported that attendance increased by nearly 30% during the first year after the renovation.

To address ongoing concerns, the library introduced several additional measures. Visitors can now reserve silent study rooms in advance, and staff members regularly monitor noise levels throughout the building. The administration also encourages visitors to provide feedback through monthly surveys so future improvements can be based on community needs rather than assumptions.

Experts in public space management suggest that libraries are evolving because communities now expect them to serve multiple purposes. According to these experts, a successful modern library is not simply one that stores books but one that balances learning, collaboration, and accessibility. Achieving that balance, however, requires continuous adjustments instead of relying on a single solution.`,
  questions: [
    {
      q: "In the context of the passage, the term 'designated' indicates that the upper levels were:",
      options: [
        "Elaborately furnished and styled",
        "Assigned for a specific intended function",
        "Consistently congested with patrons",
        "Erected as part of a recent expansion"
      ],
      correct: 1
    },
    {
      q: "Regarding the management team, it can be logically deduced that:",
      options: [
        "They dismissed patron dissatisfaction regarding acoustic disruptions.",
        "They viewed the structural reorganisation as flawless.",
        "They demonstrated flexibility by refining policies according to public input.",
        "They aimed to eliminate quiet zones entirely."
      ],
      correct: 2
    },
    {
      q: "The phrase 'that balance' in the concluding paragraph pertains directly to:",
      options: [
        "Expanding printed inventory collections",
        "Harmonising educational opportunities, group work, and public access",
        "Restricting visitor volume during peak hours",
        "Segregating academic researchers from student groups"
      ],
      correct: 1
    },
    {
      q: "Which assertion aligns directly with the details in the text?",
      options: [
        "Patron turnout experienced a sharp decline post-renovation.",
        "The spatial restructuring met with unanimous public endorsement.",
        "Acoustic isolation measures failed to completely prevent sound spillover.",
        "Quiet study provisions were wholly discarded."
      ],
      correct: 2
    },
    {
      q: "The overarching intent of the author in this text is to:",
      options: [
        "Condemn contemporary municipal facilities for losing academic rigor.",
        "Examine how a public institution navigated changing user demands, highlighting both advantages and obstacles.",
        "Urge the public to increase traditional book borrowing.",
        "Evaluate architectural differences between regional library networks."
      ],
      correct: 1
    }
  ]
},
  {
  id: "t3",
  title: "The Unexpected Effect of Customer Reviews",
  body: `When shopping online, many consumers assume that products with the highest ratings are automatically the best choice. As a result, some buyers spend very little time reading individual reviews and instead focus almost entirely on the average score displayed beside a product. Researchers, however, have found that this strategy can sometimes lead to disappointing purchases.

In a recent study, participants were asked to choose between several products with similar prices but different review patterns. One product had an average rating of 4.9 stars based on only twelve reviews. Another received 4.6 stars but had been reviewed by more than two thousand customers. Surprisingly, many participants selected the first product despite the much smaller sample size. Later analysis suggested that people often overestimated the reliability of extremely high ratings while underestimating the value of large amounts of consistent feedback.

The researchers also discovered that negative reviews were not always harmful. In fact, products with a small number of thoughtful criticisms were frequently considered more trustworthy than products with nothing but praise. According to the report, buyers tended to suspect that a perfect review history might not accurately represent real customer experiences. Consequently, a few well-explained complaints sometimes increased rather than decreased consumer confidence.

Although businesses often encourage satisfied customers to leave positive reviews, experts caution against attempting to remove every negative comment. Instead, they recommend responding professionally to criticism and explaining how problems have been addressed. Such responses not only demonstrate accountability but also provide future customers with additional information that numerical ratings alone cannot communicate.

Ultimately, the researchers concluded that informed shoppers evaluate both the quantity and quality of reviews instead of relying on a single number. Ironically, the highest-rated product is not always the one consumers trust the most once they examine the evidence more carefully.`,
  questions: [
    {
      q: "The term 'Consequently' in the third paragraph serves to signal:",
      options: [
        "A practical illustration of the claim",
        "A logical outcome derived from the previous premise",
        "An initial phase in a multi-step sequence",
        "A sharp divergence from prior evidence"
      ],
      correct: 1
    },
    {
      q: "What inference can be drawn regarding the decision-making tendencies of trial participants?",
      options: [
        "They meticulously scrutinized individual text entries prior to selection.",
        "They equated near-perfect numerical scores with superior dependability.",
        "They prioritized lower retail pricing regardless of feedback metrics.",
        "They exhibited widespread skepticism toward all digital testimonials."
      ],
      correct: 1
    },
    {
      q: "The phrase 'Such responses' in paragraph four refers explicitly to:",
      options: [
        "Systematically suppressing unfavorable public testimonials",
        "Soliciting exclusively favorable feedback from satisfied clients",
        "Constructive management engagement that addresses feedback transparently",
        "Artificially inflating overall numerical score averages"
      ],
      correct: 2
    },
    {
      q: "Which proposition contradicts the findings outlined in the text?",
      options: [
        "Flawless rating histories can trigger buyer skepticism.",
        "Substantial sample sizes offer critical statistical reliability.",
        "Critical feedback invariably undermines buyer trust.",
        "Analyst consensus advises looking past surface-level aggregate metrics."
      ],
      correct: 2
    },
    {
      q: "Which assertion captures the overarching premise of the passage?",
      options: [
        "Purchasing choices should be guided solely by top-tier numerical averages.",
        "Aggregate scores provide more analytical depth than qualitative feedback.",
        "Wise acquisition choices necessitate examining qualitative depth and data volume.",
        "Commercial enterprises ought to eliminate critical feedback to maintain credibility."
      ],
      correct: 2
    }
  ]
},
{
  id: "t4",
  title: "Why Waiting Can Improve Decisions",
  body: `People often believe that making decisions quickly is a sign of confidence and competence. In fast-moving workplaces, employees who respond immediately are frequently viewed as decisive leaders, while those who hesitate may be perceived as uncertain. However, psychologists argue that this assumption can be misleading.

In one experiment, participants were asked to solve a series of business problems. Half of them were required to submit an answer within thirty seconds, whereas the remaining participants were instructed to spend at least three minutes considering the available information before making a decision. Although the second group completed fewer tasks, they consistently made more accurate judgments, particularly when the problems contained information that appeared relevant but was actually intended to distract them.

Researchers believe that rapid decisions rely heavily on mental shortcuts, known as heuristics. These shortcuts are useful because they reduce the effort required to process information. Nevertheless, they can also cause people to ignore evidence that contradicts their initial impressions. Once an individual forms an early opinion, there is a natural tendency to search for information that confirms it rather than information that challenges it.

Interestingly, delaying a decision does not always produce better results. The researchers observed that excessive analysis occasionally led participants to become less confident, even when they had already identified the correct solution. In these cases, additional thinking introduced unnecessary doubt instead of improving accuracy. Consequently, the relationship between decision time and decision quality proved to be more complex than the researchers had originally expected.

The researchers concluded that effective decision-makers are not simply those who think the fastest or the longest. Rather, they recognize when a situation requires immediate action and when it is worthwhile to pause, reconsider the evidence, and question their own assumptions. According to the report, this ability distinguishes experienced professionals from individuals who merely appear confident.`,
  questions: [
    {
      q: "In paragraph three, the technical term 'heuristics' denotes:",
      options: [
        "Structured empirical test protocols",
        "Cognitive shortcuts applied during judgment tasks",
        "Commercial management frameworks",
        "Analytical calculation flaws"
      ],
      correct: 1
    },
    {
      q: "What inference can be made regarding the scenarios presented to participants?",
      options: [
        "They favored split-second intuition over deliberate review.",
        "They incorporated irrelevant data intended to skew immediate conclusions.",
        "They were solvable exclusively by senior corporate executives.",
        "They presented unique parameters for every individual subject."
      ],
      correct: 1
    },
    {
      q: "The pronoun 'they' in the second sentence of paragraph three refers specifically to:",
      options: [
        "Empirical investigators",
        "Experimental subjects",
        "Cognitive heuristics",
        "Task variables"
      ],
      correct: 2
    },
    {
      q: "Which proposition is explicitly contradicted by the text?",
      options: [
        "Extending deliberation time guarantees superior accuracy in every instance.",
        "Individuals naturally seek out data validating their initial hypotheses.",
        "Spontaneous choices frequently stem from simplified cognitive mechanisms.",
        "Overthinking can generate unwarranted uncertainty and undermine self-trust."
      ],
      correct: 0
    },
    {
      q: "Which statement best articulates the primary thesis of the passage?",
      options: [
        "Prompt choices remain the definitive hallmark of modern leadership success.",
        "Optimal decision-making requires adjusting cognitive deliberation to the specific context.",
        "Personnel should systematically decline to answer under tight constraints.",
        "Unwavering self-assurance constitutes the most critical managerial attribute."
      ],
      correct: 1
    }
  ]
},
{
  id: "t5",
  title: "The Hidden Cost of Multitasking",
  body: `Many employees pride themselves on their ability to multitask. Answering emails while attending virtual meetings, replying to text messages during presentations, and switching between several projects in a single hour are often viewed as signs of efficiency. However, cognitive scientists argue that what people commonly describe as multitasking is usually rapid task-switching rather than performing multiple complex activities simultaneously.

To investigate this idea, researchers recruited office workers and assigned them two sets of tasks. The first group completed one assignment before moving to the next. The second group was instructed to switch tasks whenever they received a notification. Although both groups spent the same amount of time working, the task-switching group made nearly 40% more errors and required considerably more time to correct them. Surprisingly, many participants believed they had been equally productive despite objective evidence to the contrary.

The researchers explained that each interruption carries a hidden cost. Before resuming a task, the brain must reconstruct information that was temporarily pushed aside. This process may take only a few seconds, but when interruptions occur dozens of times throughout the day, those seconds accumulate into a significant loss of productive time. Consequently, workers often underestimate how much their concentration has been disrupted.

Not all interruptions, however, are avoidable. Emergency situations, urgent customer requests, and technical failures require immediate attention. The researchers therefore emphasized that the goal is not to eliminate interruptions entirely but to distinguish between those that are genuinely important and those that merely create the illusion of urgency. They also suggested scheduling specific times to check email instead of reacting to every notification as soon as it appears.

Ultimately, the study concluded that productivity depends less on how many tasks people begin than on how consistently they finish them. Individuals who deliberately protect periods of uninterrupted focus generally accomplish more work than those who constantly divide their attention, even if the latter appear busier throughout the day.`,
  questions: [
    {
      q: "In the context of paragraph three, the verb 'accumulate' means to:",
      options: [
        "Diminish progressively over time",
        "Amass gradually into a substantial sum",
        "Lose relevance during daily operations",
        "Occur without prior warning or structure"
      ],
      correct: 1
    },
    {
      q: "What can be inferred regarding subjects in the frequent task-switching category?",
      options: [
        "They demonstrated an accurate awareness of their reduced accuracy.",
        "They maintained an inflated self-assessment of their output efficacy.",
        "They finalized a higher volume of assignments than single-taskers.",
        "They disregarded the majority of incoming digital prompts."
      ],
      correct: 1
    },
    {
      q: "The demonstrative pronoun 'those' in paragraph four corresponds directly to:",
      options: [
        "Investigating scientists",
        "Organizational objectives",
        "Workplace disruptions",
        "Electronic message alerts"
      ],
      correct: 2
    },
    {
      q: "Which premise aligns with the perspective presented by the author?",
      options: [
        "Instantaneous communication management optimizes worker throughput.",
        "Eliminating every workplace distraction is essential for organizational success.",
        "Essential disruptions exist, yet non-critical interruptions can be strategically regulated.",
        "Concurrent execution enables professionals to achieve superior speed."
      ],
      correct: 2
    },
    {
      q: "Which option encapsulates the central thesis of the text?",
      options: [
        "Maximal output requires engaging with numerous projects concurrently.",
        "Efficiency improves when sustained focus is preserved over fragmented attention.",
        "Digital tools represent the primary cause of employee underperformance.",
        "Corporate environments should permanently ban all electronic alerts."
      ],
      correct: 1
    }
  ]
},
{
  id: "t6",
  title: "Choosing the Best Time to Shop",
  body: `Many people believe that shopping on weekends is the most convenient option because they have more free time. However, convenience does not always mean a better shopping experience. Retail experts say that the time and day people choose to shop can affect prices, product availability, and the amount of time they spend in stores.

Large supermarkets are usually busiest on Saturday afternoons and Sunday mornings. During these periods, customers may need to wait longer at checkout lines, and popular products are more likely to sell out. In contrast, weekday mornings are often quieter, making it easier to compare products and receive assistance from store employees.

Some shoppers also believe that stores lower their prices at the end of each day. While this may be true for certain fresh foods, such as bakery items or prepared meals, it does not apply to most products. Electronics, clothing, and household items are typically discounted according to planned sales rather than the time of day. As a result, customers who wait until the evening may not save as much money as they expect.

Another common mistake is shopping without a list. Researchers found that people who plan their purchases before arriving at the store spend less money and finish shopping more quickly. They are also less likely to buy products they did not originally intend to purchase.

Experts recommend choosing a shopping time that matches your priorities. If saving time is your main goal, visiting during quiet hours may be the best option. If you are looking for special discounts, paying attention to weekly sales is usually more effective than simply shopping late in the day.`,
  questions: [
    {
      q: "The preference for weekend store visits among consumers stems primarily from:",
      options: [
        "Consistent storewide price reductions",
        "Greater personal schedule flexibility",
        "Superior merchandise inventory levels",
        "Expedited point-of-sale processing"
      ],
      correct: 1
    },
    {
      q: "In paragraph one, the noun 'availability' corresponds to:",
      options: [
        "Consumer demand metrics",
        "Product grade or quality",
        "Stock accessibility for purchase",
        "Retail pricing structure"
      ],
      correct: 2
    },
    {
      q: "Which assertion is substantiated by the information in the passage?",
      options: [
        "Price markdowns apply to all inventory near closing hours.",
        "Early weekday slots generally exhibit lower customer density than weekends.",
        "Consumer electronics experience daily evening price cuts.",
        "Shoppers express satisfaction with extended line delays."
      ],
      correct: 1
    },
    {
      q: "The pronoun 'They' in the fourth paragraph identifies:",
      options: [
        "Market research analysts",
        "Supermarket staff members",
        "Consumers who prepare shopping lists in advance",
        "Promotional price reductions"
      ],
      correct: 2
    },
    {
      q: "The primary objective of the text is to:",
      options: [
        "Demonstrate how strategic timing and preparation optimize retail visits.",
        "Persuade consumers to restrict retail activity to weekends.",
        "Outline corporate pricing strategies used by retail chains.",
        "Argue for the extension of supermarket operating hours."
      ],
      correct: 0
    }
  ]
},
{
  id: "t7",
  title: "Why Some Meetings Are More Effective Than Others",
  body: `Meetings are an important part of many workplaces, but not all of them are productive. Some employees leave a meeting with a clear understanding of what needs to be done, while others feel that their time has been wasted. According to management experts, the difference often depends on preparation rather than the length of the meeting.

One common problem is that participants arrive without knowing the purpose of the discussion. As a result, conversations may move from one topic to another without reaching a decision. In contrast, meetings with a written agenda usually stay focused because everyone understands which subjects will be discussed and how much time has been set aside for each one.

Another factor is the number of people attending. Some managers believe that inviting more employees leads to better decisions because more opinions are shared. However, research suggests that larger meetings often require more time and make it harder for everyone to contribute. Smaller groups are generally able to make decisions more quickly, especially when participants have different responsibilities.

Technology has also changed the way meetings are organized. Video conferencing allows employees in different cities to work together without travelling. Although this saves both time and money, technical problems or poor internet connections can interrupt discussions and reduce efficiency.

Experts recommend ending every meeting with a short summary of the decisions that were made and the tasks assigned to each participant. This simple step helps prevent misunderstandings and ensures that everyone leaves with the same expectations. In many cases, a clear conclusion is just as important as the discussion itself.`,
  questions: [
    {
      q: "A primary contributor to unproductive sessions cited in the text is:",
      options: [
        "An insufficient allocation of meeting time",
        "A lack of clarity regarding the session's core objective",
        "Widespread employee non-attendance",
        "A managerial refusal to adopt digital tools"
      ],
      correct: 1
    },
    {
      q: "In the second paragraph, the term 'agenda' refers to:",
      options: [
        "A structured outline of planned discussion points",
        "An official corporate compliance policy",
        "A formal financial performance report",
        "An electronic calendar appointment request"
      ],
      correct: 0
    },
    {
      q: "What can be inferred about lower-capacity meeting gatherings?",
      options: [
        "They exclude leadership figures entirely.",
        "They tend to reach consensus with greater expediency.",
        "They function effectively only via virtual platforms.",
        "They strictly adhere to sub-thirty-minute durations."
      ],
      correct: 1
    },
    {
      q: "The demonstrative pronoun 'This' in the final paragraph designates:",
      options: [
        "Leveraging virtual telecommunication platforms",
        "Expanding the general attendee list",
        "Concluding with a recap of decisions and action items",
        "Commuting between geographical office locations"
      ],
      correct: 2
    },
    {
      q: "Which option best encapsulates the core message of the passage?",
      options: [
        "Extended duration remains necessary for high-quality outcomes.",
        "Virtual communication has made in-person contact obsolete.",
        "Meeting success hinges on thorough preparation, targeted dialogue, and explicit wrap-ups.",
        "Organizations ought to limit workplace assemblies to a single weekly event."
      ],
      correct: 2
    }
  ]
},
{
  id: "t8",
  title: "The Return of Urban Gardens",
  body: `In many cities, empty lots and unused pieces of land are being transformed into community gardens. These gardens allow residents to grow vegetables, herbs, and flowers in areas that might otherwise remain unused. Although urban gardening is not a new idea, its popularity has increased as cities look for ways to improve neighbourhoods and provide residents with access to fresh food.

One reason community gardens have become popular is that they can bring people together. Residents who might rarely speak to one another can work side by side while planting and maintaining the garden. Some communities also organize workshops where experienced gardeners teach beginners how to grow different types of plants. As a result, the gardens can become places for both social activity and learning.

However, creating a successful garden is not always simple. Finding suitable land can be difficult, particularly in crowded neighbourhoods where space is expensive. Gardens also require regular maintenance. If volunteers stop participating, plants may not receive enough water or attention. For this reason, some community organizations create schedules so that different residents are responsible for the garden on different days.

Another challenge is deciding what should happen to the land in the future. A city may allow residents to use an empty lot for several years but later decide that the property is needed for housing or another public project. In such cases, gardeners may have to move their plants and equipment to another location.

Despite these challenges, urban gardening programs continue to attract support. Experts say their greatest value may not be the amount of food they produce but the way they improve community connections and encourage residents to take an active role in their neighbourhoods. In other words, a successful community garden can produce benefits that extend well beyond the vegetables growing in it.`,
  questions: [
    {
      q: "The surge in urban agricultural initiatives is primarily driven by municipal efforts to:",
      options: [
        "Halt all prospective residential construction projects.",
        "Revitalize local districts while enhancing produce availability.",
        "Reduce the hourly rates of professional horticulturists.",
        "Shift public leisure preferences toward agricultural labor."
      ],
      correct: 1
    },
    {
      q: "In paragraph three, the adjective 'suitable' is synonymous with:",
      options: [
        "Financially lucrative for commercial developers",
        "Designated exclusively for private acquisition",
        "Appropriate and fit for a specific function",
        "Recently cleared for civil engineering"
      ],
      correct: 2
    },
    {
      q: "What can be inferred regarding community plots managed solely through volunteerism?",
      options: [
        "Their operational continuity is vulnerable to shifts in public engagement.",
        "Their annual crop yields consistently surpass industrial farms.",
        "Their establishment in high-density urban areas is strictly prohibited.",
        "Their physical relocation is mandated by civic law every few years."
      ],
      correct: 0
    },
    {
      q: "The transitional phrase 'In such cases' in paragraph four pertains to scenarios where:",
      options: [
        "Horticultural experts conduct educational community seminars.",
        "Municipal authorities reclaim property for urban development projects.",
        "Local populations encounter systemic nutritional deficiencies.",
        "Irrigation demands exceed existing water supply limits."
      ],
      correct: 1
    },
    {
      q: "The central thesis expressed in the concluding paragraph highlights that:",
      options: [
        "Agricultural yield represents the primary metric of garden success.",
        "Spatial scarcity inevitably leads to the demise of urban plots.",
        "Civic cohesion and social capital outweigh mere dietary production.",
        "Municipalities must permanently restrict vacant land from future development."
      ],
      correct: 2
    }
  ]
},
{
  id: "t9",
  title: "The Changing Role of Public Transit",
  body: `Public transportation systems have traditionally been designed around a simple idea: move large numbers of people from residential areas to busy city centres. Buses and trains were often busiest during the morning and afternoon rush hours, when people were travelling to and from work. However, changes in working habits and city life are forcing transit agencies to reconsider how their services should operate.

One important change is the growth of flexible work schedules. Some employees now work from home several days a week, while others begin and finish work at different times. As a result, the number of passengers travelling during traditional rush hours may be lower than it was in the past. At the same time, people still need transportation for shopping, appointments, education, and social activities throughout the day.

To respond to these changes, some transit agencies are experimenting with more flexible services. Instead of operating large buses on routes that have relatively few passengers, an agency may use smaller vehicles during quieter periods. Some systems are also testing on-demand services, allowing passengers to request a vehicle through an app rather than waiting for a regular bus at a fixed time.

These changes can make transportation more efficient, but they also create challenges. A service that is convenient for one group of passengers may be less useful for another. For example, reducing the number of buses on a low-demand route could save money, but it might cause problems for people who depend on that route and have no other transportation options. Transit planners therefore have to consider not only the number of passengers using a service but also how important that service is to the people who rely on it.

The goal is not necessarily to make public transportation cheaper or faster in every situation. Instead, many transit agencies are trying to create systems that respond better to how people actually travel. This may mean moving away from a one-size-fits-all model and toward services that can change according to demand, time of day, and the needs of different communities.`,
  questions: [
    {
      q: "Transit authorities are restructuring conventional peak-hour operations primarily because:",
      options: [
        "A growing proportion of the population is relocating to urban cores.",
        "Adaptable professional schedules have shifted commuter transit patterns.",
        "Fleet maintenance expenditures escalate drastically during winter months.",
        "Ridership overwhelmingly favors rail transport over municipal buses."
      ],
      correct: 1
    },
    {
      q: "In the context of the fourth paragraph, the term 'demand' denotes:",
      options: [
        "The volume of patrons requiring or seeking transit availability",
        "The geographical distance separating consecutive transit stops",
        "The operational expenditure required to maintain service networks",
        "The total duration spent in transit by an individual patron"
      ],
      correct: 0
    },
    {
      q: "What can be inferred regarding service reductions along underutilized transit corridors?",
      options: [
        "They invariably optimize systemic operational efficiency.",
        "They disproportionately impact transit-dependent populations with limited mobility choices.",
        "They actively incentivize commuters to adopt remote work arrangements.",
        "They stem directly from formal petitions submitted by transit riders."
      ],
      correct: 1
    },
    {
      q: "The phrase 'These changes' at the beginning of paragraph four references:",
      options: [
        "Demographic shifts in metropolitan residential density",
        "Technological advancements in automotive manufacturing",
        "Strategic shifts toward adaptable, dynamic transit models",
        "Revisions to employee compensation packages and employment terms"
      ],
      correct: 2
    },
    {
      q: "Which element is NOT cited as a variable shaping future public transportation policy?",
      options: [
        "Diurnal operational timing",
        "Fluctuating patron volume",
        "Distinct neighborhood requirements",
        "The mechanical age of fleet vehicles"
      ],
      correct: 3
    }
  ]
},
{
  id: "t10",
  title: "The Value of Repairing Old Products",
  body: `For many years, replacing a broken product was often easier and cheaper than repairing it. A damaged appliance, piece of furniture, or electronic device could simply be thrown away and replaced with a newer model. However, this habit is beginning to change as more people become interested in reducing waste and keeping products in use for longer.

One reason for this change is the growing availability of repair services. Some communities have opened repair cafés where people can bring damaged household items and receive help from volunteers. These events are not designed only to fix products. They also teach people basic repair skills, such as replacing a cable, tightening a loose part, or identifying the cause of a simple problem.

Manufacturers are also becoming part of the discussion. Some companies now provide replacement parts, repair instructions, or longer warranties. Supporters of these policies argue that customers should not have to replace an entire product when only one small component has stopped working. In addition, products that are easier to repair may remain useful for many more years.

However, repairing an item is not always the best option. In some cases, the cost of labour can be higher than the value of the product. Older devices may also require parts that are no longer available. There are situations where replacing an inefficient appliance with a newer, more energy-efficient model may make more sense in the long term.

Despite these limitations, the repair movement has changed the way some consumers think about damaged products. Instead of immediately asking whether something should be replaced, they may first ask whether it can be repaired. This small change in attitude can reduce unnecessary waste while helping people develop practical skills and make more informed purchasing decisions.`,
  questions: [
    {
      q: "A primary objective of community repair initiatives mentioned in the text is to:",
      options: [
        "Facilitate the retail sale of modern home goods",
        "Impart practical trouble-shooting and restoration competencies to citizens",
        "Offer specialized maintenance for high-value automotive machinery",
        "Assist corporations in manufacturing lower-cost goods"
      ],
      correct: 1
    },
    {
      q: "According to the author, restoring older items may prove impractical due to:",
      options: [
        "Excessive unit weight impeding physical transport",
        "Legal prohibitions preventing personal maintenance",
        "The obsolescence and scarcity of necessary components",
        "Service venue restrictions excluding non-electronic goods"
      ],
      correct: 2
    },
    {
      q: "In the context of the fourth paragraph, the adjective 'efficient' means:",
      options: [
        "Optimizing performance while minimizing resource consumption",
        "Presenting operational complexity to the user",
        "Displaying contemporary aesthetic features",
        "Carrying a low initial purchase cost"
      ],
      correct: 0
    },
    {
      q: "What can be inferred regarding the broader impact of the right-to-repair movement?",
      options: [
        "It prompts consumers to evaluate restoration viability prior to disposal.",
        "It has rendered the manufacturing of new consumer goods obsolete.",
        "It receives backing exclusively from consumer electronics producers.",
        "It guarantees that item restoration is invariably less costly than replacement."
      ],
      correct: 0
    },
    {
      q: "Which proposition encapsulates the core thesis of the text?",
      options: [
        "Restoration remains categorically superior to acquiring replacement items.",
        "Producers ought to bear sole financial liability for product maintenance.",
        "Fostering a repair mindset mitigates ecological waste and shifts consumer habits.",
        "The practice of discarding damaged home goods has been wholly abandoned."
      ],
      correct: 2
    }
  ]
},
{
  id: "t11",
  title: "Why Some Small Businesses Choose to Share Space",
  body: `Running a small business can be difficult, especially when the cost of renting an office or commercial space is high. For this reason, some small business owners have started sharing workplaces with other companies. Instead of paying for an entire office, several businesses may use the same building and divide the costs.

Shared workspaces can offer more than just a cheaper place to work. Many provide meeting rooms, internet access, kitchen areas, printing equipment, and other facilities that would otherwise be expensive for a small company to purchase. Business owners can therefore avoid some of the costs associated with setting up a traditional office.

Another advantage is the opportunity to meet other professionals. A graphic designer, for example, might work near a marketing consultant or a software developer. Although these people may operate separate businesses, they can exchange ideas or recommend one another to clients. In some cases, these informal connections can lead to new projects.

However, shared workplaces are not suitable for everyone. Some businesses handle confidential information and require private offices. Others may need specialized equipment or a quiet environment that a busy shared space cannot provide. Noise can also become a problem when several companies are working in the same area.

Despite these limitations, shared workspaces continue to attract entrepreneurs who value flexibility. Instead of committing to a long-term lease and purchasing everything they need themselves, business owners can choose a workspace that matches their current situation. If their company grows, they may move into a larger private office. If their needs decrease, they can often reduce the amount of space they use.

The popularity of shared workspaces suggests that small businesses are looking for ways to control expenses without giving up access to useful facilities. For some entrepreneurs, the greatest benefit may be the combination of lower costs and the chance to build professional connections with people they would otherwise never meet.`,
  questions: [
    {
      q: "Why do some small businesses decide to use shared workplaces?",
      options: [
        "They want to eliminate contact with other companies.",
        "They need to reduce the expense of maintaining a traditional office.",
        "They are required to work in the same building as other businesses.",
        "They want to avoid using meeting rooms and other facilities."
      ],
      correct: 1
    },
    {
      q: "According to the passage, shared workplaces can provide businesses with access to facilities that would otherwise be ______.",
      options: [
        "unnecessary",
        "unavailable to clients",
        "costly to obtain",
        "difficult to advertise"
      ],
      correct: 2
    },
    {
      q: "What does the phrase 'these informal connections' in the third paragraph refer to?",
      options: [
        "Relationships between business owners working in the same space",
        "Agreements between landlords and tenants",
        "Meetings between companies and their customers",
        "Online conversations between software developers"
      ],
      correct: 0
    },
    {
      q: "Which of the following is suggested as a possible drawback of shared workplaces?",
      options: [
        "They prevent businesses from finding new customers.",
        "They require companies to purchase their own buildings.",
        "They may not provide enough privacy for certain businesses.",
        "They make it impossible for companies to expand."
      ],
      correct: 2
    },
    {
      q: "What does the final paragraph imply about the appeal of shared workspaces?",
      options: [
        "Their main purpose is to help large companies reduce their workforce.",
        "Their popularity is partly due to a balance between affordability and useful resources.",
        "Most entrepreneurs prefer them because they provide completely private offices.",
        "They are becoming popular mainly because traditional offices are disappearing."
      ],
      correct: 1
    }
  ]
},{
  id: "t12",
  title: "How Weather Forecasts Influence Local Tourism",
  body: `Weather forecasts play an important role in the tourism industry. Many travellers check expected conditions before deciding where to go, what activities to book, and how long to stay. Although weather has always influenced travel, modern forecasting tools allow visitors to make decisions with more information than was available in the past.

For businesses that depend on tourism, accurate forecasts can make a significant difference. A company offering boat tours, for example, may receive fewer bookings when strong winds or heavy rain are expected. By monitoring weather reports, the company can adjust its schedule, notify customers, and avoid sending boats out in unsuitable conditions. This preparation may reduce lost income and improve passenger safety.

However, forecasts do not always provide a complete picture. A prediction of rain throughout the day may discourage visitors, even if the actual rainfall lasts only a short time. As a result, some tourists may cancel their plans unnecessarily. Businesses that understand this problem sometimes provide alternative activities, such as indoor exhibitions, cooking classes, or guided visits to local historical sites.

Technology has also changed how tourists respond to unexpected conditions. Mobile applications can send updates about approaching storms, temperature changes, or road closures. These notifications help travellers modify their plans while they are already on a trip. Nevertheless, depending too heavily on digital information can create difficulties when mobile coverage is limited, particularly in remote areas.

Some tourism operators have therefore started promoting experiences that are less dependent on the weather. Museums, craft workshops, cultural performances, and local food tours can attract visitors throughout the year. This approach may also help destinations that traditionally receive most of their income during a short summer season.

Ultimately, weather forecasts are useful planning tools, but they do not determine whether a trip will be successful. Businesses that prepare for different conditions and offer flexible alternatives may be better positioned to satisfy their customers. For travellers, a little preparation can turn an unexpected change in the weather into an opportunity to discover something they had not originally considered.`,
  questions: [
    {
      q: "Why might a boat tour company change its schedule after checking a forecast?",
      options: [
        "To guarantee that every customer books another tour",
        "To avoid operating in potentially unsafe conditions",
        "To prevent tourists from visiting historical sites",
        "To increase the number of rainy days"
      ],
      correct: 1
    },
    {
      q: "In the third paragraph, the word 'discourage' is closest in meaning to:",
      options: [
        "Persuade someone not to do something",
        "Remind someone of a previous experience",
        "Encourage someone to spend more money",
        "Prepare someone for a difficult task"
      ],
      correct: 0
    },
    {
      q: "What can be inferred about tourists who rely entirely on weather forecasts?",
      options: [
        "They are more likely to visit remote locations.",
        "They rarely change their travel arrangements.",
        "They may miss enjoyable activities because forecasts can be misleading.",
        "They usually prefer indoor attractions to outdoor activities."
      ],
      correct: 2
    },
    {
      q: "What does the phrase 'This approach' in the fifth paragraph refer to?",
      options: [
        "Sending weather notifications to mobile phones",
        "Cancelling tourism activities during the winter",
        "Offering experiences that can attract visitors in different weather conditions",
        "Concentrating business operations in the summer"
      ],
      correct: 2
    },
    {
      q: "Which statement is best supported by the passage?",
      options: [
        "Modern forecasts have removed most risks associated with tourism.",
        "Tourism businesses can become more resilient by preparing alternatives for poor weather.",
        "Visitors generally prefer to cancel trips whenever rain is predicted.",
        "Indoor attractions are profitable only during the summer season."
      ],
      correct: 1
    }
  ]
},
{
  id: "t13",
  title: "The Challenge of Preserving Historic Buildings",
  body: `Historic buildings often give a town or city its distinctive character. Old railway stations, factories, schools, and residential buildings can reveal how a community developed and how people lived in earlier times. However, preserving these structures can be complicated, particularly when they no longer meet modern standards or serve their original purpose.

One major obstacle is the cost of renovation. Older buildings may have damaged foundations, outdated electrical systems, or materials that require specialist treatment. Before work begins, owners often need detailed inspections to determine which parts can be repaired and which must be replaced. These investigations can be expensive, but skipping them may result in unexpected problems later.

Another difficulty is finding a suitable new use for the property. A former factory, for example, might be converted into apartments, offices, or a cultural centre. The best option depends on the building's location, condition, and architectural design. A successful conversion can attract visitors and create jobs, while an unsuitable project may leave the owner with high maintenance costs and limited income.

Local governments sometimes provide financial assistance or tax incentives to encourage preservation. Such support can make renovation more affordable for property owners. However, public funding is usually limited, and communities must decide which buildings deserve priority. Some residents may favour preserving a historically important structure, while others may argue that the same money would be better spent on schools, roads, or affordable housing.

There is also a balance to be found between protecting the past and meeting present-day needs. Strict preservation rules may prevent owners from making changes that would improve accessibility or energy efficiency. On the other hand, allowing unrestricted alterations could remove the very features that make a building historically valuable.

For these reasons, successful preservation usually requires cooperation among property owners, architects, historians, and local authorities. Rather than treating an old building as something that must remain completely unchanged, communities increasingly look for ways to give it a useful new role while retaining its most significant features. This approach can protect local heritage without preventing neighbourhoods from evolving.`,
  questions: [
    {
      q: "Why can renovating historic buildings become expensive?",
      options: [
        "Modern construction companies refuse to work on older properties.",
        "Older structures may require specialist inspections and repairs.",
        "Historic buildings must always be converted into museums.",
        "Local governments charge owners for every visitor."
      ],
      correct: 1
    },
    {
      q: "The word 'obstacle' in the second paragraph is closest in meaning to:",
      options: [
        "Advantage",
        "Requirement",
        "Difficulty",
        "Opportunity"
      ],
      correct: 2
    },
    {
      q: "What can be inferred about converting an old factory into a cultural centre?",
      options: [
        "It is always less expensive than building new apartments.",
        "It may succeed if the proposed use suits the building and its surroundings.",
        "It removes the need for future maintenance.",
        "It guarantees that the local government will provide funding."
      ],
      correct: 1
    },
    {
      q: "What does the phrase 'Such support' in the fourth paragraph refer to?",
      options: [
        "Financial assistance and tax incentives offered by local governments",
        "Arguments against spending money on historic buildings",
        "Inspections carried out before renovation begins",
        "Changes that improve a building's energy efficiency"
      ],
      correct: 0
    },
    {
      q: "According to the passage, what is a key consideration when preserving historic buildings?",
      options: [
        "Keeping every part of a building exactly as it was originally",
        "Replacing all old structures with modern developments",
        "Prioritizing tourism over the needs of local residents",
        "Protecting important historical features while allowing practical changes"
      ],
      correct: 3
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
];