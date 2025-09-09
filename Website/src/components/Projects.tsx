interface TimelineItem {
  year: number;
  title: string;
  company?: string;
  location?: string;
  description: string;
  type: 'work' | 'education' | 'project' | 'hobby' | 'research';
  side: 'left' | 'right';
  link?: string;
}

interface SkillCategory {
  name: string;
  skills: string[];
}

export const Resume = () => {
  const timelineItems: TimelineItem[] = [
    // Birth/Early Life
    {
      year: 2002,
      title: 'Born in Mexico City',
      description: 'Beginning of my journey, growing up in a vibrant cultural environment that shaped my appreciation for diversity and global perspectives.',
      type: 'hobby' as const,
      side: 'left' as const
    },
    // Education and Early Interests
    {
      year: 2018,
      title: 'Started Marathon Training',
      description: 'Developed passion for long-distance running, building discipline and endurance that translates to all aspects of life.',
      type: 'hobby' as const,
      side: 'left' as const
    },
    {
      year: 2020,
      title: 'Undergraduate Student',
      company: 'Kennesaw State University',
      location: 'Kennesaw, GA',
      description: 'Economics',
      type: 'education' as const,
      side: 'right' as const
    },
    {
      year: 2020,
      title: 'Portfolio Manager',
      company: 'Delta32 Investment Research & Trading Lab',
      location: 'Atlanta, GA',
      description: 'Managed and provided strategic guidance for four stock portfolios, achieving over 160% cumulative returns over four years by adapting to market trends and leveraging data analysis to mitigate risk and enhance returns.\nConducted market research using analytical software and tracked current events using sentiment analysis to identify opportunities for portfolio improvement and mitigate risk.',
      type: 'project' as const,
      side: 'left' as const
    },
    {
      year: 2021,
      title: 'Language Learning Journey',
      description: 'Began intensive language learning: achieving fluency in Spanish, conversational French, and starting Russian and Italian. This reflects my passion for connecting with different cultures.',
      type: 'hobby' as const,
      side: 'left' as const
    },
    {
      year: 2023,
      title: 'Transfer Student',
      company: 'The University of Georgia',
      location: 'Athens, GA',
      description: 'Economics & International Affairs - Focused on combining analytical skills with global perspective. Transferred Fall 2023.',
      type: 'education' as const,
      side: 'right' as const
    },
    {
      year: 2024,
      title: 'Undergraduate Research Assistant',
      company: 'SNARP',
      location: 'Athens, GA',
      description: 'Spring 2024: Executed comprehensive data collection and analysis using Excel, improving research accuracy and advancing SNARP\'s strategic focus.\nReviewed literature sources and collaborated with senior researchers to develop innovative methodologies aimed at reducing subnational repression in 196 countries.',
      type: 'research' as const,
      side: 'right' as const
    },
    {
      year: 2024,
      title: 'Tandem App Development',
      description: 'Built Tandem, a React Native app for social groups to track shared routines and aspects of their lives (meals, expenses, reminders, etc.) using Expo, Prisma, and PostgreSQL. Features include modular routing, real-time logging, and AI-driven recommendations.',
      type: 'project' as const,
      side: 'left' as const
    },
    {
      year: 2024,
      title: 'Vexillology & Geography',
      description: 'Developed deep interest in flags, geography, and geopolitics. This hobby enhances my international affairs studies and cultural understanding.',
      type: 'hobby' as const,
      side: 'left' as const
    },
    {
      year: 2025,
      title: 'Quantitative Research/Developer Intern',
      company: 'NEW EIC',
      location: 'Boston, MA',
      description: 'Spring 2025: Conducted quantitative analysis to evaluate financial data, risk factors, and investment strategies.\nDesigned and optimized trading strategies while collaborating with the risk management team to mitigate potential risks.\nDeveloped large datasets through APIs and key technical indicators to support research and ensure data integrity.',
      type: 'work' as const,
      side: 'right' as const
    },
    {
      year: 2025,
      title: 'Price Analyst',
      company: 'Souto Foods',
      location: 'Norcross, GA',
      description: 'Summer 2025: As a Pricing Intern at Souto Foods, I analyze market trends, competitor pricing, and consumer behavior to guide new product and vendor introductions. I design processes for data collection and modeling that highlight growth opportunities, monitor risks, and deliver actionable insights. Working closely with purchasing and sales teams, I help build pricing frameworks that integrate costs, market data, and competitive benchmarks, improving efficiency in sourcing and pricing decisions.',
      type: 'work' as const,
      side: 'right' as const
    },
    {
      year: 2025,
      title: 'EPL Prophet',
      description: 'Built a predictive model for the English Premier League using machine learning and data analysis. The model uses historical data to predict the outcome of matches with 50.4% accuracy across 4,181 matches.',
      type: 'project' as const,
      side: 'left' as const,
      link: 'https://rcrrtow3r2.github.io/EPL_PROPHET/#prediction'
    }
  ].sort((a, b) => a.year - b.year);

  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        "Fluent in Spanish",
        "Conversational French", 
        "Beginner in Russian",
        "Beginner in Italian",
        "Experience in Python",
        "Experience in R",
      ]
    },
    {
      name: "Interests & Hobbies",
      skills: [
        "Marathon Training",
        "Pokémon",
        "Vexillology", 
        "Reading Philosophy",
        "Football (Soccer)",
        "Weightlifting"
      ]
    }
  ];

  const renderSkillCategory = (category: SkillCategory) => (
    <div key={category.name} className="mb-2 last:mb-0">
      <h4 className="text-xl font-semibold text-[#7A9CA9] mb-2">
        {category.name}
      </h4>
      <ul className="space-y-1">
        {category.skills.map(skill => (
          <li
            key={skill}
            className="flex items-center text-[#F0F0E8] hover:text-[#7A9CA9] transition-colors duration-200"
          >
            <span className="mr-2 text-[#7A9CA9]">•</span>
            <span className="text-base">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-green-500';
      case 'education': return 'bg-blue-500';
      case 'research': return 'bg-purple-500';
      case 'project': return 'bg-orange-500';
      case 'hobby': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work': return 'Work';
      case 'education': return 'Education';
      case 'research': return 'Research';
      case 'project': return 'Project';
      case 'hobby': return 'Personal';
      default: return 'Other';
    }
  };

  return (
    <section id="resume" className="py-20 bg-[#2C3E50]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#F0F0E8] mb-12 text-center">
          My Journey
        </h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#7A9CA9]/30"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Year marker on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#7A9CA9] flex items-center justify-center z-10 shadow-lg">
                  <span className="text-[#F0F0E8] font-bold text-sm">{item.year}</span>
                </div>
                
                {/* Content container */}
                <div className={`flex ${item.side === 'left' ? 'justify-start pr-1/2' : 'justify-end pl-1/2'}`}>
                  <div className={`w-5/12 ${item.side === 'right' ? 'ml-auto' : 'mr-auto'}`}>
                    <div className="group relative">
                      {/* Title card */}
                      <div className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        item.side === 'left' 
                          ? 'bg-[#243447] hover:bg-[#2C3E50] text-right' 
                          : 'bg-[#1E2A3B] hover:bg-[#243447] text-left'
                      }`}>
                        {/* Type badge */}
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-2 ${getTypeColor(item.type)}`}>
                          {getTypeLabel(item.type)}
                        </div>
                        
                        <h3 className="text-xl font-semibold text-[#F0F0E8] mb-1">
                          {item.title}
                        </h3>
                        {item.company && (
                          <p className="text-[#7A9CA9] font-medium">{item.company}</p>
                        )}
                        {item.location && (
                          <p className="text-[#F0F0E8]/70 text-sm">{item.location}</p>
                        )}
                        
                        {/* Hover details */}
                        <div className="absolute inset-0 p-6 rounded-lg bg-[#1E2A3B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-2xl border border-[#7A9CA9]/30">
                          <div className={`h-full flex flex-col justify-center ${item.side === 'left' ? 'text-right' : 'text-left'}`}>
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3 ${getTypeColor(item.type)} ${item.side === 'left' ? 'ml-auto' : 'mr-auto'}`}>
                              {getTypeLabel(item.type)}
                            </div>
                            <h3 className="text-xl font-semibold text-[#F0F0E8] mb-2">
                              {item.title}
                            </h3>
                            {item.company && (
                              <p className="text-[#7A9CA9] font-medium mb-1">{item.company}</p>
                            )}
                            {item.location && (
                              <p className="text-[#F0F0E8]/70 text-sm mb-3">{item.location}</p>
                            )}
                            <p className="text-[#F0F0E8]/80 text-sm leading-relaxed whitespace-pre-line">
                              {item.description}
                            </p>
                            {item.link && (
                              <div className={`mt-4 ${item.side === 'left' ? 'text-right' : 'text-left'}`}>
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-3 py-1 bg-[#7A9CA9] text-[#F0F0E8] rounded text-xs hover:bg-[#7A9CA9]/80 transition-colors"
                                >
                                  View Project
                                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Connection line to timeline */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-px bg-[#7A9CA9]/50 ${
                        item.side === 'left' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills section at bottom */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-[#7A9CA9] mb-6 text-center">
            Additional Skills & Interests
          </h3>
          <div className="bg-[#243447] p-8 rounded-xl shadow-lg">
            <div className="bg-[#1E2A3B] p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map(renderSkillCategory)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};