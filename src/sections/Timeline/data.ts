interface Job {
  type: 'job'
  title: string
  company: string
  timeframe: string
  location: string
  keywords: string
  fontAwesomeIcon: string
  isImportant: boolean
}

interface Review {
  type: 'review'
  name: string
  workedTogetherTimeframe: string
  description: string
  link: string
}

export const data: (Job | Review)[] = [
  {
    type: 'job',
    title: 'Software Engineer',
    company: 'Klarna GmbH',
    keywords: 'Klarna Card, React, React Native, SEO, Online Marketing',
    timeframe: 'Jan 2020 - Present',
    location: 'Berlin 🇩🇪',
    fontAwesomeIcon: 'laptop',
    isImportant: true,
  },
  {
    type: 'review',
    name: 'Varun Pal',
    description:
      '"Nathan and I worked in Klarna for 1.5 years. Nathan is a unique engineer who makes everything better for the end customer. He goes beyond the task requirements and adds customer wow features like Accessibility, animations and an improved UX. He continuously aligns with designers and improves the designs so that end users get the best experience. Nathan is very thorough in his work and holds discussions with stakeholders, documents everything properly and presents his work to a wider audience through engaging demos. I was very lucky to have Nathan in my team and I wish him the best for his future."',
    workedTogetherTimeframe: 'July 2020',
    link: 'https://www.linkedin.com/in/nathan-brachotte/',
  },
]
