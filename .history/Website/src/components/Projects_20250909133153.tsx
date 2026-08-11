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

import { useState, useEffect } from 'react';

export const Resume = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDelta, setScrollDelta] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      
      // Accumulate scroll delta
      setScrollDelta(prev => prev + delta);
      
      // Close folder if user scrolls more than 200px (accounts for normal reading scroll)
      if (scrollDelta > 200 && openFolder) {
        setOpenFolder(null);
        setScrollDelta(0);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDelta, openFolder]);

  const handleFolderHover = (folderName: string) => {
    setOpenFolder(folderName);
    setScrollDelta(0); // Reset scroll delta when opening a folder
  };

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
      title: 'French Language Learning',
      description: 'Began learning French as my first foreign language beyond Spanish, developing conversational skills and cultural appreciation that would enhance my international perspective.',
      type: 'hobby' as const,
      side: 'left' as const
    },
    {
      year: 2020,
      title: 'High School Graduate',
      company: 'Collins Hill High School',
      location: 'Lawrenceville, GA',
      description: 'Graduated from Collins Hill High School, preparing for the next chapter in higher education and personal development.',
      type: 'education' as const,
      side: 'right' as const
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
      title: 'Soccer Player Journey',
      description: 'Pursued competitive soccer playing from 2021-2023, developing teamwork, strategic thinking, and athletic discipline. This experience enhanced my ability to work under pressure and collaborate effectively in team environments.',
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
      year: 2023,
      title: 'Russian Language Learning',
      description: 'Started learning Russian to expand my linguistic capabilities and cultural understanding. This new challenge demonstrates my commitment to continuous learning and global awareness.',
      type: 'hobby' as const,
      side: 'left' as const
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
      title: 'Vibe Coding Websites',
      description: 'Spring 2024: Founded and launched Vibe Coding, developing professional websites for local and small businesses using modern web technologies. Focused on creating responsive, user-friendly designs that help businesses establish their digital presence and connect with customers.',
      type: 'project' as const,
      side: 'left' as const
    },
    {
      year: 2024,
      title: 'Tandem App Development',
      description: 'Built Tandem, a React Native app for social groups to track shared routines and aspects of their lives (meals, expenses, reminders, etc.) using Expo, Prisma, and PostgreSQL. Features include modular routing, real-time logging, and AI-driven recommendations.',
      type: 'project' as const,
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
        "Pokémon",
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

        {/* Folder-style Projects Section */}
        <div className="mt-32">
          <h3 className="text-3xl font-semibold text-[#7A9CA9] mb-12 text-center">
            Project Portfolio
          </h3>
          
          <div className="relative max-w-7xl mx-auto px-4">
            {/* Stack of project folders */}
            <div className="space-y-6">
              {/* EPL Prophet Folder */}
              <div className="group relative">
                {/* Folder Tab */}
                <div className="relative z-10">
                  <div 
                    className="w-48 h-12 bg-gradient-to-r from-[#7A9CA9] to-[#7A9CA9]/80 rounded-t-lg flex items-center px-4 cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={() => handleFolderHover('epl-prophet')}
                  >
                    <span className="text-[#F0F0E8] font-semibold text-sm">EPL Prophet</span>
                  </div>
                </div>
                
                {/* Folder Content */}
                <div className={`w-full bg-[#F0F0E8] rounded-lg shadow-2xl transition-all duration-500 ease-out z-20 border-2 border-[#7A9CA9]/30 ${
                  openFolder === 'epl-prophet' 
                    ? 'opacity-100 translate-y-0 pointer-events-auto max-h-96' 
                    : 'opacity-0 translate-y-4 pointer-events-none max-h-0 overflow-hidden'
                }`}>
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Project Image */}
                      <div className="order-2 lg:order-1">
                        <img 
                          src="assets/indigoleague1.png" 
                          alt="EPL Prophet Preview" 
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      
                      {/* Project Details */}
                      <div className="order-1 lg:order-2">
                        <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">EPL Prophet</h4>
                        <p className="text-[#2C3E50]/80 mb-6 leading-relaxed">
                          AI-powered Premier League match prediction system with 50.4% accuracy across 4,181 matches. 
                          Features explainable AI with SHAP analysis, weather impact modeling, and real-time predictions 
                          with confidence intervals.
                        </p>
                        <a
                          href="https://rcrrtow3r2.github.io/EPL_PROPHET/#prediction"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-[#7A9CA9] text-[#F0F0E8] rounded-lg hover:bg-[#7A9CA9]/80 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
                        >
                          View Live Demo
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tandem App Folder */}
              <div className="group relative">
                <div className="relative z-10">
                  <div 
                    className="w-48 h-12 bg-gradient-to-r from-[#2C3E50] to-[#2C3E50]/80 rounded-t-lg flex items-center px-4 cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-lg ml-auto"
                    onClick={() => handleFolderHover('tandem-app')}
                  >
                    <span className="text-[#F0F0E8] font-semibold text-sm">Tandem App</span>
                  </div>
                </div>
                
                <div className={`w-full bg-[#F0F0E8] rounded-lg shadow-2xl transition-all duration-500 ease-out z-20 border-2 border-[#2C3E50]/30 ${
                  openFolder === 'tandem-app' 
                    ? 'opacity-100 translate-y-0 pointer-events-auto max-h-96' 
                    : 'opacity-0 translate-y-4 pointer-events-none max-h-0 overflow-hidden'
                }`}>
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="order-2 lg:order-1">
                        <img 
                          src="assets/indigoleague1.png" 
                          alt="Tandem App Preview" 
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      
                      <div className="order-1 lg:order-2">
                        <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">Tandem App</h4>
                        <p className="text-[#2C3E50]/80 mb-6 leading-relaxed">
                          React Native social app for groups to track shared routines including meals, expenses, and reminders. 
                          Built with Expo, Prisma, and PostgreSQL featuring modular routing, real-time logging, and 
                          AI-driven recommendations for group activities.
                        </p>
                        <button className="inline-flex items-center px-6 py-3 bg-[#2C3E50] text-[#F0F0E8] rounded-lg hover:bg-[#2C3E50]/80 transition-colors duration-200 font-medium shadow-md hover:shadow-lg opacity-50 cursor-not-allowed">
                          Coming Soon
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vibe Coding Folder */}
              <div className="group relative">
                <div className="relative z-10">
                  <div 
                    className="w-48 h-12 bg-gradient-to-r from-[#1E2A3B] to-[#1E2A3B]/80 rounded-t-lg flex items-center px-4 cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={() => handleFolderHover('vibe-coding')}
                  >
                    <span className="text-[#F0F0E8] font-semibold text-sm">Vibe Coding</span>
                  </div>
                </div>
                
                <div className={`w-full bg-[#F0F0E8] rounded-lg shadow-2xl transition-all duration-500 ease-out z-20 border-2 border-[#1E2A3B]/30 ${
                  openFolder === 'vibe-coding' 
                    ? 'opacity-100 translate-y-0 pointer-events-auto max-h-96' 
                    : 'opacity-0 translate-y-4 pointer-events-none max-h-0 overflow-hidden'
                }`}>
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="order-2 lg:order-1">
                        <img 
                          src="assets/indigoleague1.png" 
                          alt="Vibe Coding Preview" 
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      
                      <div className="order-1 lg:order-2">
                        <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">Vibe Coding</h4>
                        <p className="text-[#2C3E50]/80 mb-6 leading-relaxed">
                          Professional web development business creating responsive, user-friendly websites for local and small businesses. 
                          Specializing in modern web technologies to help businesses establish their digital presence and 
                          connect effectively with their customers.
                        </p>
                        <button className="inline-flex items-center px-6 py-3 bg-[#1E2A3B] text-[#F0F0E8] rounded-lg hover:bg-[#1E2A3B]/80 transition-colors duration-200 font-medium shadow-md hover:shadow-lg opacity-50 cursor-not-allowed">
                          Portfolio Coming Soon
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Website Folder */}
              <div className="group relative">
                <div className="relative z-10">
                  <div 
                    className="w-48 h-12 bg-gradient-to-r from-[#243447] to-[#243447]/80 rounded-t-lg flex items-center px-4 cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-lg ml-auto"
                    onClick={() => handleFolderHover('portfolio-site')}
                  >
                    <span className="text-[#F0F0E8] font-semibold text-sm">Portfolio Site</span>
                  </div>
                </div>
                
                <div className={`w-full bg-[#F0F0E8] rounded-lg shadow-2xl transition-all duration-500 ease-out z-20 border-2 border-[#243447]/30 ${
                  openFolder === 'portfolio-site' 
                    ? 'opacity-100 translate-y-0 pointer-events-auto max-h-96' 
                    : 'opacity-0 translate-y-4 pointer-events-none max-h-0 overflow-hidden'
                }`}>
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="order-2 lg:order-1">
                        <img 
                          src="assets/indigoleague1.png" 
                          alt="Portfolio Website Preview" 
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      
                      <div className="order-1 lg:order-2">
                        <h4 className="text-2xl font-bold text-[#2C3E50] mb-4">Portfolio Website</h4>
                        <p className="text-[#2C3E50]/80 mb-6 leading-relaxed">
                          This interactive portfolio website featuring a timeline-based resume, responsive design, 
                          and modern UI/UX principles. Built with React, TypeScript, and Tailwind CSS, 
                          showcasing both technical skills and design sensibility.
                        </p>
                        <span className="inline-flex items-center px-6 py-3 bg-[#243447] text-[#F0F0E8] rounded-lg font-medium shadow-md">
                          You're Here! 🎉
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Videogame Style Skills Dashboard */}
        <div className="mt-32">
          <h3 className="text-3xl font-semibold text-[#7A9CA9] mb-12 text-center">
            Character Stats & Skills
          </h3>
          
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#1E2A3B] to-[#243447] rounded-xl p-8 border-2 border-[#7A9CA9]/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Character Display - Left Side */}
              <div className="flex flex-col items-center">
                <div className="bg-[#2C3E50] rounded-lg p-8 border border-[#7A9CA9]/20 shadow-lg mb-6">
                  <h4 className="text-xl font-bold text-[#F0F0E8] mb-4 text-center">Character: Diego</h4>
                  
                  {/* Stick Figure SVG */}
                  <div className="flex justify-center mb-6">
                    <svg width="120" height="180" viewBox="0 0 120 180" className="text-[#7A9CA9]">
                      {/* Head */}
                      <circle cx="60" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="3"/>
                      
                      {/* Body */}
                      <line x1="60" y1="40" x2="60" y2="120" stroke="currentColor" strokeWidth="3"/>
                      
                      {/* Arms */}
                      <line x1="60" y1="60" x2="30" y2="80" stroke="currentColor" strokeWidth="3"/>
                      <line x1="60" y1="60" x2="90" y2="80" stroke="currentColor" strokeWidth="3"/>
                      
                      {/* Legs */}
                      <line x1="60" y1="120" x2="40" y2="160" stroke="currentColor" strokeWidth="3"/>
                      <line x1="60" y1="120" x2="80" y2="160" stroke="currentColor" strokeWidth="3"/>
                      
                      {/* Feet */}
                      <line x1="40" y1="160" x2="35" y2="165" stroke="currentColor" strokeWidth="3"/>
                      <line x1="80" y1="160" x2="85" y2="165" stroke="currentColor" strokeWidth="3"/>
                      
                      {/* Hands */}
                      <circle cx="30" cy="80" r="3" fill="currentColor"/>
                      <circle cx="90" cy="80" r="3" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  {/* Character Info */}
                  <div className="text-center space-y-2">
                    <div className="text-[#F0F0E8]">
                      <span className="text-sm text-[#7A9CA9]">Level:</span> 
                      <span className="ml-2 font-bold text-lg">23</span>
                    </div>
                    <div className="text-[#F0F0E8]">
                      <span className="text-sm text-[#7A9CA9]">Class:</span> 
                      <span className="ml-2 font-semibold">Full-Stack Developer</span>
                    </div>
                    <div className="text-[#F0F0E8]">
                      <span className="text-sm text-[#7A9CA9]">Location:</span> 
                      <span className="ml-2">Athens, GA</span>
                    </div>
                  </div>
                </div>
                
              </div>

              {/* Skills Panel - Right Side */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#F0F0E8] mb-6 text-center">Skill Tree</h4>
                
                {/* Languages */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-[#7A9CA9] border-b border-[#7A9CA9]/30 pb-1">🌍 Languages</h5>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Spanish</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-4 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">95</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">English</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-4 rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">100</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">French</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-4 rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">65</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Russian</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full transition-all duration-1000" style={{ width: '35%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">35</span>
                    </div>
                  </div>
                </div>

                {/* Health */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-[#7A9CA9] border-b border-[#7A9CA9]/30 pb-1">❤️ Health</h5>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Fitness</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">88</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Stamina</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-4 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">92</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Mental Health</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">85</span>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-[#7A9CA9] border-b border-[#7A9CA9]/30 pb-1">💻 Technical Skills</h5>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Python</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">85</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">JavaScript</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-4 rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">78</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">React</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full transition-all duration-1000" style={{ width: '82%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">82</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">R</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-4 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">75</span>
                    </div>
                  </div>
                </div>

                {/* Hobbies */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-[#7A9CA9] border-b border-[#7A9CA9]/30 pb-1">🎮 Hobbies</h5>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Gaming</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-500 h-4 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">90</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Reading</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-4 rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">80</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Football</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-green-600 to-green-500 h-4 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">85</span>
                    </div>
                  </div>
                </div>

                {/* Attributes */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-[#7A9CA9] border-b border-[#7A9CA9]/30 pb-1">⚡ Attributes</h5>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Leadership</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-gold-500 to-yellow-500 h-4 rounded-full transition-all duration-1000" style={{ width: '82%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">82</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Teamwork</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-pink-500 to-pink-400 h-4 rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">88</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Problem Solving</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-4 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">92</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Adaptability</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-4 rounded-full transition-all duration-1000" style={{ width: '89%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">89</span>
                    </div>
                  </div>
                </div>

                {/* Data Analysis */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-[#7A9CA9] border-b border-[#7A9CA9]/30 pb-1">📊 Data Analysis</h5>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Excel</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-green-600 to-green-500 h-4 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">90</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">SQL</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-4 rounded-full transition-all duration-1000" style={{ width: '70%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">70</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Machine Learning</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full transition-all duration-1000" style={{ width: '72%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">72</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Statistics</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-4 rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">78</span>
                    </div>
                  </div>
                </div>

                {/* My Teams */}
                <div className="space-y-3">
                  <h5 className="text-lg font-semibold text-[#7A9CA9] border-b border-[#7A9CA9]/30 pb-1">🏆 My Teams</h5>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">NEW EIC</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 h-4 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">95</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Souto Foods</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-4 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">90</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">SNARP</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-500 h-4 rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">88</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-20 text-sm text-[#F0F0E8] font-medium">Delta32</div>
                    <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-gold-500 to-yellow-500 h-4 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                      <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">92</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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