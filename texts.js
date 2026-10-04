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
//  {
//   id: "t1",
//   title: "The Rise of Flexible Workspaces",
//   body: `During the last decade, many companies have changed the way employees work. Instead of renting large office buildings, some organizations now prefer flexible workspaces, where employees can choose different locations depending on the task they are completing. These workplaces often include quiet rooms for concentration, open areas for teamwork, and small meeting spaces for private discussions.

// Supporters argue that this approach improves productivity because employees can select an environment that matches their needs. For example, a designer creating a new project may prefer a silent room, while a marketing team planning an advertising campaign might work more effectively in an open collaborative space.

// However, not everyone agrees. Some employees report that constantly changing work locations makes it difficult to build routines. Others believe that noise from nearby conversations can reduce concentration, even in offices designed to encourage collaboration. A recent workplace survey found that although 68% of employees appreciated having more choices, only 42% believed the new system helped them accomplish tasks faster than before.

// Companies also claim flexible offices reduce operating costs because fewer permanent desks are required. This can lower rent and utility expenses, especially when employees work remotely several days each week. Nevertheless, critics point out that businesses often underestimate the cost of redesigning offices and purchasing mobile technology such as laptops, wireless monitors, and reservation software.

// Experts generally agree that flexible workspaces are most successful when organizations clearly explain how employees should use them. Without clear expectations, workers may become frustrated by the constant need to search for available desks or meeting rooms. In other words, the success of a flexible office depends less on the furniture itself than on thoughtful planning and effective communication.`,
//   questions: [
//     {
//       q: "According to the passage, why do supporters believe flexible workspaces improve productivity?",
//       options: [
//         "Employees spend less time commuting.",
//         "Workers can choose an environment that matches their task.",
//         "Everyone has a permanent desk.",
//         "Companies provide free technology."
//       ],
//       correct: 1
//     },
//     {
//       q: "What do the survey results mainly suggest?",
//       options: [
//         "Most employees dislike flexible workspaces.",
//         "Employees appreciate having choices more than they believe those choices increase efficiency.",
//         "Flexible workspaces always improve productivity.",
//         "Employees prefer traditional offices in every situation."
//       ],
//       correct: 1
//     },
//     {
//       q: "Which statement is NOT supported by the passage?",
//       options: [
//         "Flexible offices can reduce rent expenses.",
//         "Changing work locations can make routines difficult.",
//         "Flexible workspaces completely eliminate distractions.",
//         "Office redesigns may cost more than expected."
//       ],
//       correct: 2
//     },
//     {
//       q: "Why does the author mention laptops, wireless monitors, and reservation software?",
//       options: [
//         "To recommend useful office equipment.",
//         "To show examples of unexpected business expenses.",
//         "To explain why employees work faster.",
//         "To compare old and new technology."
//       ],
//       correct: 1
//     },
//     {
//       q: "What is the author's main conclusion?",
//       options: [
//         "Flexible workspaces succeed mainly because of modern furniture.",
//         "Flexible workspaces are effective only when managed and communicated well.",
//         "Traditional offices should disappear completely.",
//         "Employees should always work remotely."
//       ],
//       correct: 1
//     }
//   ]
// },
//  {
//   id: "t2",
//   title: "The City's New Library Policy",
//   body: `For many years, the downtown public library was known as one of the quietest places in the city. Students often spent entire afternoons preparing for exams, while researchers appreciated the peaceful environment. However, as the number of visitors increased, library staff noticed that people's expectations had begun to change.

// Instead of using the library only to borrow books, many visitors wanted spaces where they could work together on school assignments, attend workshops, or participate in community events. In response, the library introduced a new layout. The first floor became a collaborative zone where conversation was allowed, while the upper floors remained designated for silent study.

// Although the change was welcomed by many residents, it also received criticism. Some regular visitors argued that the library had lost its traditional atmosphere. Others complained that sounds from the collaborative area occasionally reached the quiet floors despite additional soundproofing. Nevertheless, library administrators reported that attendance increased by nearly 30% during the first year after the renovation.

// To address ongoing concerns, the library introduced several additional measures. Visitors can now reserve silent study rooms in advance, and staff members regularly monitor noise levels throughout the building. The administration also encourages visitors to provide feedback through monthly surveys so future improvements can be based on community needs rather than assumptions.

// Experts in public space management suggest that libraries are evolving because communities now expect them to serve multiple purposes. According to these experts, a successful modern library is not simply one that stores books but one that balances learning, collaboration, and accessibility. Achieving that balance, however, requires continuous adjustments instead of relying on a single solution.`,
//   questions: [
//     {
//       q: "The word 'designated' in the third sentence of the second paragraph is closest in meaning to:",
//       options: [
//         "Decorated",
//         "Reserved for a particular purpose",
//         "Frequently visited",
//         "Recently constructed"
//       ],
//       correct: 1
//     },
//     {
//       q: "What can reasonably be inferred about the library administrators?",
//       options: [
//         "They ignored complaints from regular visitors.",
//         "They believed the renovation was perfect.",
//         "They were willing to adjust the library based on feedback.",
//         "They wanted to eliminate quiet study areas."
//       ],
//       correct: 2
//     },
//     {
//       q: "In the final paragraph, what does the word 'that balance' refer to?",
//       options: [
//         "Storing more books than before",
//         "Balancing learning, collaboration, and accessibility",
//         "Reducing the number of visitors",
//         "Separating students from researchers"
//       ],
//       correct: 1
//     },
//     {
//       q: "Which statement is supported by the passage?",
//       options: [
//         "Attendance decreased after the renovation.",
//         "Every visitor approved of the new layout.",
//         "Some noise from collaborative areas could still be heard upstairs.",
//         "The library removed all silent study spaces."
//       ],
//       correct: 2
//     },
//     {
//       q: "What is the author's main purpose in writing this passage?",
//       options: [
//         "To criticize modern libraries for becoming too noisy.",
//         "To explain how one library adapted to changing community needs while facing both benefits and challenges.",
//         "To encourage people to borrow more books.",
//         "To compare libraries in different cities."
//       ],
//       correct: 1
//     }
//   ]
// },
//   {
//   id: "t3",
//   title: "The Unexpected Effect of Customer Reviews",
//   body: `When shopping online, many consumers assume that products with the highest ratings are automatically the best choice. As a result, some buyers spend very little time reading individual reviews and instead focus almost entirely on the average score displayed beside a product. Researchers, however, have found that this strategy can sometimes lead to disappointing purchases.

// In a recent study, participants were asked to choose between several products with similar prices but different review patterns. One product had an average rating of 4.9 stars based on only twelve reviews. Another received 4.6 stars but had been reviewed by more than two thousand customers. Surprisingly, many participants selected the first product despite the much smaller sample size. Later analysis suggested that people often overestimated the reliability of extremely high ratings while underestimating the value of large amounts of consistent feedback.

// The researchers also discovered that negative reviews were not always harmful. In fact, products with a small number of thoughtful criticisms were frequently considered more trustworthy than products with nothing but praise. According to the report, buyers tended to suspect that a perfect review history might not accurately represent real customer experiences. Consequently, a few well-explained complaints sometimes increased rather than decreased consumer confidence.

// Although businesses often encourage satisfied customers to leave positive reviews, experts caution against attempting to remove every negative comment. Instead, they recommend responding professionally to criticism and explaining how problems have been addressed. Such responses not only demonstrate accountability but also provide future customers with additional information that numerical ratings alone cannot communicate.

// Ultimately, the researchers concluded that informed shoppers evaluate both the quantity and quality of reviews instead of relying on a single number. Ironically, the highest-rated product is not always the one consumers trust the most once they examine the evidence more carefully.`,
//   questions: [
//     {
//       q: "The word 'Consequently' in the third paragraph is closest in meaning to:",
//       options: [
//         "For example",
//         "As a result",
//         "At first",
//         "In contrast"
//       ],
//       correct: 1
//     },
//     {
//       q: "What can reasonably be inferred about the participants in the study?",
//       options: [
//         "Most carefully read every review before making a decision.",
//         "Many assumed that an extremely high rating automatically meant greater reliability.",
//         "They preferred cheaper products regardless of ratings.",
//         "They distrusted all online reviews."
//       ],
//       correct: 1
//     },
//     {
//       q: "In the fourth paragraph, what does the word 'Such responses' refer to?",
//       options: [
//         "Removing negative comments from websites.",
//         "Leaving only positive reviews.",
//         "Responding professionally to criticism and explaining solutions.",
//         "Giving products higher ratings."
//       ],
//       correct: 2
//     },
//     {
//       q: "Which statement is NOT supported by the passage?",
//       options: [
//         "A perfect review history may appear suspicious to some buyers.",
//         "Large numbers of reviews can provide valuable information.",
//         "Negative reviews always reduce customer confidence.",
//         "Researchers recommend looking beyond the average rating."
//       ],
//       correct: 2
//     },
//     {
//       q: "Which statement best expresses the author's main message?",
//       options: [
//         "Consumers should purchase only products with the highest ratings.",
//         "The number beside a product is often more important than the reviews themselves.",
//         "Making a good purchasing decision requires evaluating evidence beyond the average score.",
//         "Businesses should delete negative reviews whenever possible."
//       ],
//       correct: 2
//     }
//   ]
// },
// {
//   id: "t4",
//   title: "Why Waiting Can Improve Decisions",
//   body: `People often believe that making decisions quickly is a sign of confidence and competence. In fast-moving workplaces, employees who respond immediately are frequently viewed as decisive leaders, while those who hesitate may be perceived as uncertain. However, psychologists argue that this assumption can be misleading.

// In one experiment, participants were asked to solve a series of business problems. Half of them were required to submit an answer within thirty seconds, whereas the remaining participants were instructed to spend at least three minutes considering the available information before making a decision. Although the second group completed fewer tasks, they consistently made more accurate judgments, particularly when the problems contained information that appeared relevant but was actually intended to distract them.

// Researchers believe that rapid decisions rely heavily on mental shortcuts, known as heuristics. These shortcuts are useful because they reduce the effort required to process information. Nevertheless, they can also cause people to ignore evidence that contradicts their initial impressions. Once an individual forms an early opinion, there is a natural tendency to search for information that confirms it rather than information that challenges it.

// Interestingly, delaying a decision does not always produce better results. The researchers observed that excessive analysis occasionally led participants to become less confident, even when they had already identified the correct solution. In these cases, additional thinking introduced unnecessary doubt instead of improving accuracy. Consequently, the relationship between decision time and decision quality proved to be more complex than the researchers had originally expected.

// The researchers concluded that effective decision-makers are not simply those who think the fastest or the longest. Rather, they recognize when a situation requires immediate action and when it is worthwhile to pause, reconsider the evidence, and question their own assumptions. According to the report, this ability distinguishes experienced professionals from individuals who merely appear confident.`,
//   questions: [
//     {
//       q: "The word 'heuristics' in the third paragraph is closest in meaning to:",
//       options: [
//         "Scientific experiments",
//         "Mental shortcuts used to make decisions",
//         "Business strategies",
//         "Research errors"
//       ],
//       correct: 1
//     },
//     {
//       q: "What can reasonably be inferred about the business problems used in the experiment?",
//       options: [
//         "They were designed so that answering quickly was always the best strategy.",
//         "Some included misleading information that could influence participants.",
//         "Only experienced managers were able to solve them.",
//         "Every participant received different questions."
//       ],
//       correct: 1
//     },
//     {
//       q: "In the third paragraph, what does the word 'they' refer to in the sentence 'Nevertheless, they can also cause people to ignore evidence...?'",
//       options: [
//         "Researchers",
//         "Participants",
//         "Mental shortcuts (heuristics)",
//         "Business problems"
//       ],
//       correct: 2
//     },
//     {
//       q: "Which statement is NOT supported by the passage?",
//       options: [
//         "Spending more time on a decision always leads to better outcomes.",
//         "People often seek information that supports their first impression.",
//         "Quick decisions can be influenced by mental shortcuts.",
//         "Too much analysis can reduce confidence."
//       ],
//       correct: 0
//     },
//     {
//       q: "Which statement best summarizes the author's main idea?",
//       options: [
//         "Fast decisions are always superior in professional environments.",
//         "Successful decision-making depends on choosing the appropriate amount of reflection for each situation.",
//         "Employees should avoid making decisions under time pressure.",
//         "Confidence is the most important quality of an effective leader."
//       ],
//       correct: 1
//     }
//   ]
// },
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
      q: "The word 'accumulate' in the third paragraph is closest in meaning to:",
      options: [
        "Disappear gradually",
        "Increase over time",
        "Become less important",
        "Happen unexpectedly"
      ],
      correct: 1
    },
    {
      q: "What can reasonably be inferred about the participants in the task-switching group?",
      options: [
        "They accurately recognized how much their performance had declined.",
        "They believed they were more productive than the evidence suggested.",
        "They completed significantly more assignments than the first group.",
        "They ignored most of the notifications they received."
      ],
      correct: 1
    },
    {
      q: "In the fourth paragraph, what does the word 'those' refer to in the phrase 'those that merely create the illusion of urgency'?",
      options: [
        "Researchers",
        "Goals",
        "Interruptions",
        "Email notifications"
      ],
      correct: 2
    },
    {
      q: "Which statement is best supported by the passage?",
      options: [
        "Checking email immediately always improves productivity.",
        "Every interruption should be avoided whenever possible.",
        "Some interruptions are necessary, but many can be managed more effectively.",
        "Multitasking allows employees to complete more work in less time."
      ],
      correct: 2
    },
    {
      q: "Which statement best expresses the author's central message?",
      options: [
        "People become productive by working on as many tasks as possible at once.",
        "Productivity is improved by protecting focused work rather than constantly switching between tasks.",
        "Modern technology is the primary reason employees perform poorly.",
        "Notifications should be permanently disabled in every workplace."
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
      q: "According to the passage, why do some people prefer shopping on weekends?",
      options: [
        "Stores always offer lower prices.",
        "They usually have more free time.",
        "More products are available.",
        "Checkout lines are shorter."
      ],
      correct: 1
    },
    {
      q: "The word 'availability' in the first paragraph is closest in meaning to:",
      options: [
        "Popularity",
        "Quality",
        "Whether something can be found",
        "Price"
      ],
      correct: 2
    },
    {
      q: "Which statement is supported by the passage?",
      options: [
        "All products become cheaper in the evening.",
        "Weekday mornings are often less crowded than weekends.",
        "Electronics are discounted every evening.",
        "Most customers enjoy waiting in long checkout lines."
      ],
      correct: 1
    },
    {
      q: "What does the word 'They' in the fourth paragraph refer to?",
      options: [
        "Researchers",
        "Store employees",
        "People who plan their purchases before shopping",
        "Special discounts"
      ],
      correct: 2
    },
    {
      q: "What is the main purpose of the passage?",
      options: [
        "To explain how shopping at the right time and planning ahead can improve the shopping experience.",
        "To convince readers to shop only on weekends.",
        "To describe how supermarkets choose their prices.",
        "To explain why stores should stay open later."
      ],
      correct: 0
    }
  ]
},
// {
//   id: "t7",
//   title: "Why Some Meetings Are More Effective Than Others",
//   body: `Meetings are an important part of many workplaces, but not all of them are productive. Some employees leave a meeting with a clear understanding of what needs to be done, while others feel that their time has been wasted. According to management experts, the difference often depends on preparation rather than the length of the meeting.

// One common problem is that participants arrive without knowing the purpose of the discussion. As a result, conversations may move from one topic to another without reaching a decision. In contrast, meetings with a written agenda usually stay focused because everyone understands which subjects will be discussed and how much time has been set aside for each one.

// Another factor is the number of people attending. Some managers believe that inviting more employees leads to better decisions because more opinions are shared. However, research suggests that larger meetings often require more time and make it harder for everyone to contribute. Smaller groups are generally able to make decisions more quickly, especially when participants have different responsibilities.

// Technology has also changed the way meetings are organized. Video conferencing allows employees in different cities to work together without travelling. Although this saves both time and money, technical problems or poor internet connections can interrupt discussions and reduce efficiency.

// Experts recommend ending every meeting with a short summary of the decisions that were made and the tasks assigned to each participant. This simple step helps prevent misunderstandings and ensures that everyone leaves with the same expectations. In many cases, a clear conclusion is just as important as the discussion itself.`,
//   questions: [
//     {
//       q: "According to the passage, what is one reason some meetings are ineffective?",
//       options: [
//         "They are always too short.",
//         "Participants do not know the purpose of the meeting.",
//         "Employees refuse to attend.",
//         "Managers avoid using technology."
//       ],
//       correct: 1
//     },
//     {
//       q: "The word 'agenda' in the second paragraph is closest in meaning to:",
//       options: [
//         "A list of topics to be discussed",
//         "A company policy",
//         "A business report",
//         "A meeting invitation"
//       ],
//       correct: 0
//     },
//     {
//       q: "What can be inferred about smaller meetings?",
//       options: [
//         "They never include managers.",
//         "They often make decisions more efficiently.",
//         "They are only useful for online discussions.",
//         "They always last less than 30 minutes."
//       ],
//       correct: 1
//     },
//     {
//       q: "What does the word 'This' in the final paragraph refer to?",
//       options: [
//         "Using video conferencing",
//         "Assigning more employees to meetings",
//         "Ending the meeting with a summary of decisions and tasks",
//         "Travelling to different offices"
//       ],
//       correct: 2
//     },
//     {
//       q: "Which statement best summarizes the passage?",
//       options: [
//         "Long meetings usually produce better results.",
//         "Technology has replaced face-to-face meetings.",
//         "Effective meetings require preparation, focused discussion, and a clear conclusion.",
//         "Companies should reduce the number of meetings to one per week."
//       ],
//       correct: 2
//     }
//   ]
// },
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
      q: "Why have community gardens become more popular in some cities?",
      options: [
        "Cities have stopped building new houses.",
        "They can improve neighbourhoods and provide access to fresh food.",
        "Professional gardeners are becoming less expensive.",
        "Most residents prefer gardening to other activities."
      ],
      correct: 1
    },
    {
      q: "The word 'suitable' in the third paragraph is closest in meaning to:",
      options: [
        "Large enough to be profitable",
        "Available for private ownership",
        "Appropriate for a particular purpose",
        "Recently developed"
      ],
      correct: 2
    },
    {
      q: "What can be inferred about community gardens that depend entirely on volunteers?",
      options: [
        "They may face difficulties if residents lose interest in participating.",
        "They usually produce more food than professional farms.",
        "They cannot be created in crowded neighbourhoods.",
        "They are required to move every few years."
      ],
      correct: 0
    },
    {
      q: "What does the phrase 'In such cases' in the fourth paragraph refer to?",
      options: [
        "When gardeners organize educational workshops",
        "When a city decides to use the land for another purpose",
        "When residents have difficulty finding fresh food",
        "When plants require additional water"
      ],
      correct: 1
    },
    {
      q: "What is the main point of the final paragraph?",
      options: [
        "Urban gardens are valuable mainly because they produce large amounts of food.",
        "Most urban gardening programs eventually fail because of land shortages.",
        "The social and community benefits of urban gardens may be more important than their food production.",
        "Cities should replace unused land with permanent gardens."
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
      q: "What is one reason transit agencies are reconsidering traditional rush-hour services?",
      options: [
        "More people are moving into city centres.",
        "Flexible work arrangements have changed when some people travel.",
        "Buses have become more expensive to operate during winter.",
        "Most passengers now prefer travelling by train."
      ],
      correct: 1
    },
    {
      q: "The word 'demand' in the fourth paragraph is closest in meaning to:",
      options: [
        "The number of people who want or need a service",
        "The distance between two transportation stops",
        "The cost of operating a transportation system",
        "The amount of time a passenger spends travelling"
      ],
      correct: 0
    },
    {
      q: "What can be inferred about reducing service on a low-demand route?",
      options: [
        "It will always make the transportation system more efficient.",
        "It may negatively affect passengers who have few alternatives.",
        "It will encourage passengers to work from home.",
        "It is usually requested by passengers themselves."
      ],
      correct: 1
    },
    {
      q: "What does the phrase 'These changes' in the fourth paragraph refer to?",
      options: [
        "Changes in the number of people living in cities",
        "Changes made to vehicle manufacturing",
        "Changes toward more flexible transportation services",
        "Changes in employees' salaries and working conditions"
      ],
      correct: 2
    },
    {
      q: "Which of the following is NOT mentioned as a factor that may influence future transit services?",
      options: [
        "The time of day",
        "Passenger demand",
        "The needs of different communities",
        "The age of the transportation vehicles"
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
      q: "What is one purpose of repair cafés?",
      options: [
        "To sell new household appliances",
        "To teach people how to repair simple problems",
        "To provide professional repairs for expensive vehicles",
        "To help manufacturers design cheaper products"
      ],
      correct: 1
    },
    {
      q: "According to the passage, why might repairing an older product be difficult?",
      options: [
        "Older products are usually too heavy to move.",
        "Customers are not allowed to repair them.",
        "Replacement parts may no longer be available.",
        "Repair cafés only accept electronic devices."
      ],
      correct: 2
    },
    {
      q: "The word 'efficient' in the fourth paragraph is closest in meaning to:",
      options: [
        "Using resources effectively",
        "Being difficult to operate",
        "Having a modern appearance",
        "Being inexpensive to purchase"
      ],
      correct: 0
    },
    {
      q: "What can be inferred from the passage about the repair movement?",
      options: [
        "It encourages people to consider alternatives before replacing products.",
        "It has completely eliminated the need to buy new products.",
        "It is mainly supported by manufacturers of electronic devices.",
        "It makes repairing every product cheaper than replacing it."
      ],
      correct: 0
    },
    {
      q: "Which statement best expresses the main idea of the passage?",
      options: [
        "Repairing products is always better than buying new ones.",
        "Manufacturers should be responsible for repairing all damaged products.",
        "Repairing products can reduce waste and change how consumers think about replacement.",
        "Most people no longer replace broken household products."
      ],
      correct: 2
    }
  ]
},
];