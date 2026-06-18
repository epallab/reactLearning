export const systemDesignChapters = [
  {
    id: 'sd-chapter-1',
    number: '01',
    title: 'Introduction to System Design',
    sectionLabel: 'Fundamentals',
    subs: [
      { id: 'sd-intro-basics', number: '1.1', title: 'What is System Design?' },
      { id: 'sd-intro-scaling', number: '1.2', title: 'Vertical vs Horizontal Scaling' },
      { id: 'sd-intro-tradeoffs', number: '1.3', title: 'Trade-offs (CAP Theorem)' },
    ],
  },
  {
    id: 'sd-chapter-2',
    number: '02',
    title: 'Data & Databases',
    subs: [
      { id: 'sd-db-sql-nosql', number: '2.1', title: 'SQL vs NoSQL' },
      { id: 'sd-db-sharding', number: '2.2', title: 'Database Sharding & Replication' },
      { id: 'sd-db-caching', number: '2.3', title: 'Caching Strategies' },
    ],
  },
  {
    id: 'sd-chapter-3',
    number: '03',
    title: 'Architecture Patterns',
    subs: [
      { id: 'sd-arch-microservices', number: '3.1', title: 'Microservices Architecture' },
      { id: 'sd-arch-event-driven', number: '3.2', title: 'Event-Driven Architecture' },
      { id: 'sd-arch-serverless', number: '3.3', title: 'Serverless Functions' },
    ],
  },
  {
    id: 'sd-chapter-4',
    number: '04',
    title: 'Networking & APIs',
    sectionLabel: 'Communication',
    subs: [
      { id: 'sd-net-rest-graphql', number: '4.1', title: 'REST vs GraphQL vs gRPC' },
      { id: 'sd-net-load-balancing', number: '4.2', title: 'Load Balancers & API Gateways' },
      { id: 'sd-net-cdn', number: '4.3', title: 'Content Delivery Networks (CDNs)' },
    ],
  },
  {
    id: 'sd-chapter-5',
    number: '05',
    title: 'System Design Interviews',
    sectionLabel: 'Interview Prep',
    subs: [
      { id: 'sd-int-framework', number: '5.1', title: 'Interview Framework (PEDALS)' },
      { id: 'sd-int-url-shortener', number: '5.2', title: 'Design a URL Shortener' },
      { id: 'sd-int-chat-app', number: '5.3', title: 'Design a Chat Application' },
    ],
  }
];
