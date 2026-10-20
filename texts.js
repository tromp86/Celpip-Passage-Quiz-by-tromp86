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
      q: "According to the passage, why do supporters believe flexible workspaces improve productivity?",
      options: [
        "Employees spend less time commuting.",
        "Workers can choose an environment that matches their task.",
        "Everyone has a permanent desk.",
        "Companies provide free technology."
      ],
      correct: 1
    },
    {
      q: "What do the survey results mainly suggest?",
      options: [
        "Most employees dislike flexible workspaces.",
        "Employees appreciate having choices more than they believe those choices increase efficiency.",
        "Flexible workspaces always improve productivity.",
        "Employees prefer traditional offices in every situation."
      ],
      correct: 1
    },
    {
      q: "Which statement is NOT supported by the passage?",
      options: [
        "Flexible offices can reduce rent expenses.",
        "Changing work locations can make routines difficult.",
        "Flexible workspaces completely eliminate distractions.",
        "Office redesigns may cost more than expected."
      ],
      correct: 2
    },
    {
      q: "Why does the author mention laptops, wireless monitors, and reservation software?",
      options: [
        "To recommend useful office equipment.",
        "To show examples of unexpected business expenses.",
        "To explain why employees work faster.",
        "To compare old and new technology."
      ],
      correct: 1
    },
    {
      q: "What is the author's main conclusion?",
      options: [
        "Flexible workspaces succeed mainly because of modern furniture.",
        "Flexible workspaces are effective only when managed and communicated well.",
        "Traditional offices should disappear completely.",
        "Employees should always work remotely."
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
      q: "The word 'designated' in the third sentence of the second paragraph is closest in meaning to:",
      options: [
        "Decorated",
        "Reserved for a particular purpose",
        "Frequently visited",
        "Recently constructed"
      ],
      correct: 1
    },
    {
      q: "What can reasonably be inferred about the library administrators?",
      options: [
        "They ignored complaints from regular visitors.",
        "They believed the renovation was perfect.",
        "They were willing to adjust the library based on feedback.",
        "They wanted to eliminate quiet study areas."
      ],
      correct: 2
    },
    {
      q: "In the final paragraph, what does the word 'that balance' refer to?",
      options: [
        "Storing more books than before",
        "Balancing learning, collaboration, and accessibility",
        "Reducing the number of visitors",
        "Separating students from researchers"
      ],
      correct: 1
    },
    {
      q: "Which statement is supported by the passage?",
      options: [
        "Attendance decreased after the renovation.",
        "Every visitor approved of the new layout.",
        "Some noise from collaborative areas could still be heard upstairs.",
        "The library removed all silent study spaces."
      ],
      correct: 2
    },
    {
      q: "What is the author's main purpose in writing this passage?",
      options: [
        "To criticize modern libraries for becoming too noisy.",
        "To explain how one library adapted to changing community needs while facing both benefits and challenges.",
        "To encourage people to borrow more books.",
        "To compare libraries in different cities."
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
      q: "The word 'Consequently' in the third paragraph is closest in meaning to:",
      options: [
        "For example",
        "As a result",
        "At first",
        "In contrast"
      ],
      correct: 1
    },
    {
      q: "What can reasonably be inferred about the participants in the study?",
      options: [
        "Most carefully read every review before making a decision.",
        "Many assumed that an extremely high rating automatically meant greater reliability.",
        "They preferred cheaper products regardless of ratings.",
        "They distrusted all online reviews."
      ],
      correct: 1
    },
    {
      q: "In the fourth paragraph, what does the word 'Such responses' refer to?",
      options: [
        "Removing negative comments from websites.",
        "Leaving only positive reviews.",
        "Responding professionally to criticism and explaining solutions.",
        "Giving products higher ratings."
      ],
      correct: 2
    },
    {
      q: "Which statement is NOT supported by the passage?",
      options: [
        "A perfect review history may appear suspicious to some buyers.",
        "Large numbers of reviews can provide valuable information.",
        "Negative reviews always reduce customer confidence.",
        "Researchers recommend looking beyond the average rating."
      ],
      correct: 2
    },
    {
      q: "Which statement best expresses the author's main message?",
      options: [
        "Consumers should purchase only products with the highest ratings.",
        "The number beside a product is often more important than the reviews themselves.",
        "Making a good purchasing decision requires evaluating evidence beyond the average score.",
        "Businesses should delete negative reviews whenever possible."
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
      q: "The word 'heuristics' in the third paragraph is closest in meaning to:",
      options: [
        "Scientific experiments",
        "Mental shortcuts used to make decisions",
        "Business strategies",
        "Research errors"
      ],
      correct: 1
    },
    {
      q: "What can reasonably be inferred about the business problems used in the experiment?",
      options: [
        "They were designed so that answering quickly was always the best strategy.",
        "Some included misleading information that could influence participants.",
        "Only experienced managers were able to solve them.",
        "Every participant received different questions."
      ],
      correct: 1
    },
    {
      q: "In the third paragraph, what does the word 'they' refer to in the sentence 'Nevertheless, they can also cause people to ignore evidence...?'",
      options: [
        "Researchers",
        "Participants",
        "Mental shortcuts (heuristics)",
        "Business problems"
      ],
      correct: 2
    },
    {
      q: "Which statement is NOT supported by the passage?",
      options: [
        "Spending more time on a decision always leads to better outcomes.",
        "People often seek information that supports their first impression.",
        "Quick decisions can be influenced by mental shortcuts.",
        "Too much analysis can reduce confidence."
      ],
      correct: 0
    },
    {
      q: "Which statement best summarizes the author's main idea?",
      options: [
        "Fast decisions are always superior in professional environments.",
        "Successful decision-making depends on choosing the appropriate amount of reflection for each situation.",
        "Employees should avoid making decisions under time pressure.",
        "Confidence is the most important quality of an effective leader."
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
      q: "According to the passage, what is one reason some meetings are ineffective?",
      options: [
        "They are always too short.",
        "Participants do not know the purpose of the meeting.",
        "Employees refuse to attend.",
        "Managers avoid using technology."
      ],
      correct: 1
    },
    {
      q: "The word 'agenda' in the second paragraph is closest in meaning to:",
      options: [
        "A list of topics to be discussed",
        "A company policy",
        "A business report",
        "A meeting invitation"
      ],
      correct: 0
    },
    {
      q: "What can be inferred about smaller meetings?",
      options: [
        "They never include managers.",
        "They often make decisions more efficiently.",
        "They are only useful for online discussions.",
        "They always last less than 30 minutes."
      ],
      correct: 1
    },
    {
      q: "What does the word 'This' in the final paragraph refer to?",
      options: [
        "Using video conferencing",
        "Assigning more employees to meetings",
        "Ending the meeting with a summary of decisions and tasks",
        "Travelling to different offices"
      ],
      correct: 2
    },
    {
      q: "Which statement best summarizes the passage?",
      options: [
        "Long meetings usually produce better results.",
        "Technology has replaced face-to-face meetings.",
        "Effective meetings require preparation, focused discussion, and a clear conclusion.",
        "Companies should reduce the number of meetings to one per week."
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
      q: "Techniques and tools used to collect ripe grains without damaging the plant crop.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "Sequential methods required to make the harvested grain edible and shelf-stable.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "The botanical nature of wild rice and its cultural significance to Indigenous peoples.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Contemporary environmental threats to natural rice beds and restoration efforts.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Average retail prices and commercial market values of wild rice in Canadian supermarkets.",
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
      q: "The unique biological adaptations of the fall generation and their survival methods during winter.",
      options: ["A", "B", "C", "D", "E"],
      correct: 1
    },
    {
      q: "The vital role of milkweed for caterpillars and how subsequent generations advance northward.",
      options: ["A", "B", "C", "D", "E"],
      correct: 2
    },
    {
      q: "The overall multi-generational nature and geographical scope of the autumn migration.",
      options: ["A", "B", "C", "D", "E"],
      correct: 0
    },
    {
      q: "Major human-driven threats to habitats and ongoing cross-border conservation efforts.",
      options: ["A", "B", "C", "D", "E"],
      correct: 3
    },
    {
      q: "Specific financial rewards offered to private landowners for planting milkweed corridors.",
      options: ["A", "B", "C", "D", "E"],
      correct: 4
    }
  ]
},
];