interface Link {
  internal?: string
  external?: string
}

interface Job {
  type: 'job'
  title: string
  company: string
  timeframe: string
  location: string
  keywords: string
  fontAwesomeIcon: string
  link: Link
}

export interface Review {
  type: 'review'
  name: string
  personPosition: string
  workedTogetherTimeframe: string
  description: string
  link: Link
}

// TODO: Add this data to Contentful
export const data: (Job | Review)[] = [
  {
    type: 'review',
    name: 'Jimin Park',
    personPosition: 'Team Lead at Genie',
    description:
      "I highly recommend Nathan for any software development position. During our time at a start-up where we built the codebase from scratch, Nathan proved himself to be a proactive problem-solver who quickly tackled complex tasks. He's an excellent communicator with a good grasp of best software practices. Nathan's positive attitude and dedication to team culture also made him a valuable asset to our team.",
    workedTogetherTimeframe: 'Apr 2022 - Now',
    link: {
      external: 'https://www.linkedin.com/in/nathan-brachotte/',
    },
  },
  {
    type: 'review',
    name: 'Vitali Yazvinski',
    personPosition: 'Senior Software Engineer at Genie',
    description:
      "I had a chance to work with Nathan for about half a year. Nathan is a great colleague to work with. He has awesome skills in web and for me there were plenty of things to learn from him, especially in organizing ideas and brainstorming them. In addition, it's easy and it's fun to work with him, which I believe is very important too. I would not hesitate to hire him if you want to build a team with healthy relationships in it and build an exceptional product.",
    workedTogetherTimeframe: 'Apr 2022 - Oct 2022',
    link: {
      external: 'https://www.linkedin.com/in/nathan-brachotte/',
    },
  },
  {
    type: 'job',
    title: 'Freelance Senior Software Engineer',
    company: 'Genie',
    keywords: 'React / React Native / ExpressJS',
    timeframe: 'Apr 2022 - Now',
    location: 'Berlin 🇩🇪',
    fontAwesomeIcon: 'laptop',
    link: {
      external: 'https://www.getgenie.io/',
    },
  },
  {
    type: 'review',
    name: 'Roney Castro',
    personPosition: 'Product Manager at Klarna GmbH',
    description:
      'I had the pleasure of working with Nathan for almost one year. He always demonstrated a significant ability to think about the entire user journey beyond the "happy path", proposing solutions and ensuring that the end user experience will always be consistent and optimal. This is also reflected on his behavior as a team member, where he was always very active discussing and proposing solutions and engaging other engineers and designers with the goal of providing the best possible experience for the users.',
    workedTogetherTimeframe: 'Sep 2020 - Sep 2021',
    link: {
      external: 'https://www.linkedin.com/in/nathan-brachotte/',
    },
  },
  {
    type: 'review',
    name: 'Varun Pal',
    personPosition: 'Associate Engineering Manager at Klarna GmbH',
    description:
      'Nathan and I worked in Klarna for 1.5 years. Nathan is a unique engineer who makes everything better for the end customer. He goes beyond the task requirements and adds customer wow features like Accessibility, animations and an improved UX. He continuously aligns with designers and improves the designs so that end users get the best experience. Nathan is very thorough in his work and holds discussions with stakeholders, documents everything properly and presents his work to a wider audience through engaging demos. I was very lucky to have Nathan in my team and I wish him the best for his future.',
    workedTogetherTimeframe: 'Jan 2020 - Aug 2021',
    link: {
      external: 'https://www.linkedin.com/in/nathan-brachotte/',
    },
  },
  {
    type: 'job',
    title: 'Software Engineer',
    company: 'Klarna GmbH',
    keywords: 'React / React Native / ExpressJS',
    timeframe: 'Jan 2020 - Jan 2022',
    location: 'Berlin 🇩🇪',
    fontAwesomeIcon: 'laptop',
    link: {
      external: 'https://www.klarna.com/',
    },
  },
  {
    type: 'review',
    name: 'Erik Waterloo',
    personPosition: 'Head of Software at colorfy GmbH',
    description:
      'Nathan was the first hire I made when I took over the software team at colorfy and I got the chance to work with him starting from an internship in February of 2018. At the time he was joining a small team of 3 developers and took over a challenging and important IoT project as a React Native developer. His deep care and feeling of responsibility for his work paired with him being an excellent team player enabled him to deliver critical contributions right from the start. In the end of 2018 he finished his studies of Software and System Engineering with High Honours and became an even more important member of the team in his new role of a full time React Native developer. Nathan is a quick learner and during the growth of the team to 7 members right now he never stopped being vocal about his ideas on processes and more importantly was also candid when we were deriving from our standards. It was a pleasure being a part of his development from an intern to an intermediate developer. Nathan is constantly learning new technologies and frameworks within the React Native world but is also working on other technologies in his spare time which shows his commitment to software development in general.',
    workedTogetherTimeframe: 'Feb 2018 - Dec 2019',
    link: {
      external: 'https://www.linkedin.com/in/nathan-brachotte/',
    },
  },
  {
    type: 'review',
    name: 'Olfa Karoui',
    personPosition: 'Mobile Developer Intern at colorfy GmbH',
    description:
      "I worked with Nathan when I joined Colorfy GmbH as an intern. He was very supportive and helped me get onboarded on one of the company's most important projects. He always made sure to share his experience with me and guide me in the right direction. Working with him was a huge learning experience, he was a great part of my professional growth. At such a young age, he's already a great mentor. I am very thankful that I got the chance to work closely with him.",
    workedTogetherTimeframe: 'Jun 2019 - Dec 2019',
    link: {
      external: 'https://www.linkedin.com/in/nathan-brachotte/',
    },
  },
  {
    type: 'review',
    name: 'Hemang Pandya',
    personPosition: 'Lead Mobile Developer at colorfy GmbH',
    description:
      "Nathan is one of the most dedicated and driven professionals I have worked with. He will always go that extra mile to look after and deliver for his clients whilst spending as much time in the office as he needs to finish the job and meet his targets. He is always a very good communicator, also when the pressure is rising, calling for clear communication about goals, responsibility, performance, expectations and feedback for every member involved in the project he’s managing. No matter how tense a meeting, Nathan made sure everyone left with a smile. I couldn't recommend Nathan any higher in a professional environment and consider him to be top of my value add list.",
    workedTogetherTimeframe: 'Feb 2018 - Nov 2018',
    link: {
      external: 'https://www.linkedin.com/in/nathan-brachotte/',
    },
  },
  {
    type: 'job',
    title: 'React Native Developer',
    company: 'colorfy GmbH',
    keywords: 'React-Native / React / IoT',
    timeframe: 'Feb 2018 - Dec 2019',
    location: 'Berlin 🇩🇪',
    fontAwesomeIcon: 'laptop',
    link: {
      external: 'https://colorfy.me/',
    },
  },
]
