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

import { useState } from 'react';

export const Resume = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);
  const [expandedSkillSection, setExpandedSkillSection] = useState<string | null>(null);

  const handleFolderClick = (folderName: string) => {
    setOpenFolder(openFolder === folderName ? null : folderName);
  };

  const toggleSkillSection = (section: string) => {
    setExpandedSkillSection(expandedSkillSection === section ? null : section);
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

        {/* Gradient Separator */}
        <div className="h-4 bg-gradient-to-r from-[#2C3E50] via-[#7A9CA9] to-[#2C3E50]"></div>

        {/* Project Portfolio Section */}
        <div className="bg-[#2C3E50] py-20 px-4" id="project-portfolio">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-[#F0F0E8] text-center mb-4">
              Project Portfolio
            </h3>
            <p className="text-center text-[#7A9CA9] mb-16 max-w-3xl mx-auto">
              Click anywhere on each folder to explore my projects - each folder contains detailed information about my work and achievements.
            </p>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Stack of project folders */}
              <div className="relative space-y-12">
                
                {/* EPL Prophet Folder - Top */}
                <div className="relative">
                  <div className="relative">
                    {/* Folder Body */}
                    <div className={`bg-[#F0F0E8] rounded-lg shadow-2xl border-4 border-[#2C3E50] transition-all duration-500 ease-out ${
                      openFolder === 'epl-prophet' 
                        ? 'transform translate-y-0 scale-100 opacity-100' 
                        : 'transform translate-y-2 scale-98 opacity-90'
                    }`}>
                      
                      {/* Folder Content */}
                      <div className={`transition-all duration-500 ease-out overflow-hidden ${
                        openFolder === 'epl-prophet' 
                          ? 'max-h-96 opacity-100 p-8' 
                          : 'max-h-16 opacity-70 p-4'
                      }`}>
                        
                        {openFolder === 'epl-prophet' ? (
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                            <div className="space-y-4">
                              <h4 className="text-2xl font-bold text-[#2C3E50] mb-3">EPL Prophet</h4>
                              <p className="text-[#2C3E50] leading-relaxed">
                                Built a predictive model for the English Premier League using machine learning and data analysis. 
                                The model uses historical data to predict match outcomes with 50.4% accuracy across 4,181 matches.
                              </p>
                              <a 
                                href="https://rcrrtow3r2.github.io/EPL_PROPHET/#prediction" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-[#7A9CA9] text-[#F0F0E8] rounded-lg hover:bg-[#7A9CA9]/80 transition-colors duration-200"
                              >
                                View Project
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            </div>
                            <div className="flex justify-center">
                              <img 
                                src="assets/indigoleague1.png" 
                                alt="EPL Prophet Preview" 
                                className="w-48 h-32 object-cover rounded-lg shadow-lg border-2 border-[#2C3E50]/20"
                              />
                            </div>
                          </div>
                        ) : (
                          <div 
                            className="text-[#2C3E50] font-semibold opacity-70 cursor-pointer"
                            onClick={() => handleFolderClick('epl-prophet')}
                          >
                            EPL Prophet - ML Prediction Model
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Tandem App Folder */}
                  <div className="relative">
                    <div className="relative">
                      {/* Folder Body */}
                      <div className={`bg-[#F0F0E8] rounded-lg shadow-2xl border-4 border-[#2C3E50] transition-all duration-500 ease-out ${
                        openFolder === 'tandem-app' 
                          ? 'transform translate-y-0 scale-100 opacity-100' 
                          : 'transform translate-y-2 scale-98 opacity-90'
                      }`}>
                        
                        {/* Folder Content */}
                        <div className={`transition-all duration-500 ease-out overflow-hidden ${
                          openFolder === 'tandem-app' 
                            ? 'max-h-96 opacity-100 p-8' 
                            : 'max-h-16 opacity-70 p-4'
                        }`}>
                          
                          {openFolder === 'tandem-app' ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                              <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-[#2C3E50] mb-3">Tandem App</h4>
                                <p className="text-[#2C3E50] leading-relaxed">
                                  A comprehensive language learning platform that connects users with native speakers for 
                                  real-time conversation practice and cultural exchange.
                                </p>
                                <div className="inline-flex items-center px-4 py-2 bg-gray-400 text-[#F0F0E8] rounded-lg cursor-not-allowed opacity-70">
                                  Project Demo
                                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <img 
                                  src="assets/indigoleague1.png" 
                                  alt="Tandem App Preview" 
                                  className="w-48 h-32 object-cover rounded-lg shadow-lg border-2 border-[#2C3E50]/20"
                                />
                              </div>
                            </div>
                          ) : (
                            <div 
                              className="text-[#2C3E50] font-semibold opacity-70 cursor-pointer"
                              onClick={() => handleFolderClick('tandem-app')}
                            >
                              Tandem App - Language Learning Platform
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vibe Coding Folder */}
                  <div className="relative">
                    <div className="relative">
                      {/* Folder Body */}
                      <div className={`bg-[#F0F0E8] rounded-lg shadow-2xl border-4 border-[#2C3E50] transition-all duration-500 ease-out ${
                        openFolder === 'vibe-coding' 
                          ? 'transform translate-y-0 scale-100 opacity-100' 
                          : 'transform translate-y-2 scale-98 opacity-90'
                      }`}>
                        
                        {/* Folder Content */}
                        <div className={`transition-all duration-500 ease-out overflow-hidden ${
                          openFolder === 'vibe-coding' 
                            ? 'max-h-96 opacity-100 p-8' 
                            : 'max-h-16 opacity-70 p-4'
                        }`}>
                          
                          {openFolder === 'vibe-coding' ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                              <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-[#2C3E50] mb-3">Vibe Coding</h4>
                                <p className="text-[#2C3E50] leading-relaxed">
                                  Custom website development business focused on creating modern, responsive websites 
                                  for small businesses and personal brands.
                                </p>
                                <div className="inline-flex items-center px-4 py-2 bg-gray-400 text-[#F0F0E8] rounded-lg cursor-not-allowed opacity-70">
                                  Business Portfolio
                                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <img 
                                  src="assets/indigoleague1.png" 
                                  alt="Vibe Coding Preview" 
                                  className="w-48 h-32 object-cover rounded-lg shadow-lg border-2 border-[#2C3E50]/20"
                                />
                              </div>
                            </div>
                          ) : (
                            <div 
                              className="text-[#2C3E50] font-semibold opacity-70 cursor-pointer"
                              onClick={() => handleFolderClick('vibe-coding')}
                            >
                              Vibe Coding - Web Development Business
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Portfolio Site Folder - Bottom */}
                  <div className="relative">
                    <div className="relative">
                      {/* Folder Body */}
                      <div className={`bg-[#F0F0E8] rounded-lg shadow-2xl border-4 border-[#2C3E50] transition-all duration-500 ease-out ${
                        openFolder === 'portfolio-site' 
                          ? 'transform translate-y-0 scale-100 opacity-100' 
                          : 'transform translate-y-2 scale-98 opacity-90'
                      }`}>
                        
                        {/* Folder Content */}
                        <div className={`transition-all duration-500 ease-out overflow-hidden ${
                          openFolder === 'portfolio-site' 
                            ? 'max-h-96 opacity-100 p-8' 
                            : 'max-h-16 opacity-70 p-4'
                        }`}>
                          
                          {openFolder === 'portfolio-site' ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                              <div className="space-y-4">
                                <h4 className="text-2xl font-bold text-[#2C3E50] mb-3">Portfolio Site</h4>
                                <p className="text-[#2C3E50] leading-relaxed">
                                  This very website! Built with React, TypeScript, and Tailwind CSS featuring 
                                  interactive timeline, RPG-style skill dashboard, and responsive design.
                                </p>
                                <div className="inline-flex items-center px-4 py-2 bg-[#7A9CA9] text-[#F0F0E8] rounded-lg">
                                  <span>You're Here!</span>
                                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              </div>
                              <div className="flex justify-center">
                                <img 
                                  src="assets/indigoleague1.png" 
                                  alt="Portfolio Site Preview" 
                                  className="w-48 h-32 object-cover rounded-lg shadow-lg border-2 border-[#2C3E50]/20"
                                />
                              </div>
                            </div>
                          ) : (
                            <div 
                              className="text-[#2C3E50] font-semibold opacity-70 cursor-pointer"
                              onClick={() => handleFolderClick('portfolio-site')}
                            >
                              Portfolio Site - This Website
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

        {/* Gradient Separator */}
        <div className="h-4 bg-gradient-to-r from-[#2C3E50] via-[#7A9CA9] to-[#2C3E50]"></div>

        {/* Videogame Style Skills Dashboard */}
        <div className="mt-32">
          <h3 className="text-3xl font-semibold text-[#7A9CA9] mb-12 text-center">
            Character Stats & Skills
          </h3>
          
          {/* Gradient Separator */}
          <div className="h-4 bg-gradient-to-r from-[#2C3E50] via-[#7A9CA9] to-[#2C3E50] mb-8"></div>
          
          <div className="bg-[#2C3E50] py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-3xl font-bold text-[#F0F0E8] text-center mb-4">
                Character Stats & Skills
              </h3>
              <p className="text-center text-[#7A9CA9] mb-16 max-w-3xl mx-auto">
                My personal achievements compared to average benchmarks - see how I stack up across different skill categories.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left side - Character */}
                <div className="flex flex-col items-center">
                  <div className="bg-[#F0F0E8] rounded-xl p-8 shadow-xl border-2 border-[#7A9CA9]/30">
                    <h4 className="text-xl font-bold text-[#2C3E50] text-center mb-6">Character Profile</h4>
                    
                    {/* Stick Figure */}
                    <div className="flex justify-center mb-6">
                      <svg width="120" height="160" viewBox="0 0 120 160" className="text-[#2C3E50]">
                        {/* Head */}
                        <circle cx="60" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="3"/>
                        {/* Body */}
                        <line x1="60" y1="35" x2="60" y2="90" stroke="currentColor" strokeWidth="3"/>
                        {/* Arms */}
                        <line x1="60" y1="50" x2="40" y2="70" stroke="currentColor" strokeWidth="3"/>
                        <line x1="60" y1="50" x2="80" y2="70" stroke="currentColor" strokeWidth="3"/>
                        {/* Legs */}
                        <line x1="60" y1="90" x2="45" y2="130" stroke="currentColor" strokeWidth="3"/>
                        <line x1="60" y1="90" x2="75" y2="130" stroke="currentColor" strokeWidth="3"/>
                        {/* Feet */}
                        <line x1="45" y1="130" x2="35" y2="135" stroke="currentColor" strokeWidth="3"/>
                        <line x1="75" y1="130" x2="85" y2="135" stroke="currentColor" strokeWidth="3"/>
                      </svg>
                    </div>
                    
                    {/* Character Info */}
                    <div className="space-y-3 text-center">
                      <div className="flex justify-between items-center">
                        <span className="text-[#2C3E50] font-medium">Level:</span>
                        <span className="text-[#7A9CA9] font-bold">25</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#2C3E50] font-medium">Class:</span>
                        <span className="text-[#7A9CA9] font-bold">Data Analyst</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#2C3E50] font-medium">Location:</span>
                        <span className="text-[#7A9CA9] font-bold">Atlanta, GA</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Skills */}
                <div className="space-y-6">
                  
                  {/* Languages */}
                  <div className="border border-[#7A9CA9]/30 rounded-lg overflow-hidden">
                    <div 
                      className="bg-[#2C3E50] px-4 py-3 cursor-pointer hover:bg-[#34495E] transition-colors duration-200"
                      onClick={() => toggleSkillSection('languages')}
                    >
                      <h5 className="text-lg font-semibold text-[#7A9CA9] flex items-center justify-between">
                        Languages
                        <span className="text-sm">
                          {expandedSkillSection === 'languages' ? '−' : '+'}
                        </span>
                      </h5>
                    </div>
                    
                    {expandedSkillSection === 'languages' && (
                      <div className="bg-[#1E2A3B] p-4 space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>Spanish (Native) - 559M speakers worldwide</span>
                            <span className="text-emerald-400">Top 4 language</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">Spanish</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-4 rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">100</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>English (Native) - 1.5B speakers worldwide</span>
                            <span className="text-emerald-400">Global lingua franca</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">English</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-4 rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">100</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>French (B2 level) - 280M speakers worldwide</span>
                            <span className="text-blue-400">6 years learning</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">French</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-4 rounded-full transition-all duration-1000" style={{ width: '67%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">67</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>Russian (A2 level) - 258M speakers worldwide</span>
                            <span className="text-yellow-400">2 years learning</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">Russian</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-4 rounded-full transition-all duration-1000" style={{ width: '30%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Health & Fitness */}
                  <div className="border border-[#7A9CA9]/30 rounded-lg overflow-hidden">
                    <div 
                      className="bg-[#2C3E50] px-4 py-3 cursor-pointer hover:bg-[#34495E] transition-colors duration-200"
                      onClick={() => toggleSkillSection('health')}
                    >
                      <h5 className="text-lg font-semibold text-[#7A9CA9] flex items-center justify-between">
                        Health & Fitness vs Average
                        <span className="text-sm">
                          {expandedSkillSection === 'health' ? '−' : '+'}
                        </span>
                      </h5>
                    </div>
                    
                    {expandedSkillSection === 'health' && (
                      <div className="bg-[#1E2A3B] p-4 space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>5K Time: 28:12 vs 34:33 avg</span>
                            <span className="text-emerald-400">18% faster</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">5K Speed</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full transition-all duration-1000" style={{ width: '82%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">82</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>Half Marathon: 2:08:40 vs 2:30:00 avg</span>
                            <span className="text-emerald-400">14% faster</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">Endurance</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full transition-all duration-1000" style={{ width: '86%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">86</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>VO2 Max: 53 vs 42 avg</span>
                            <span className="text-emerald-400">26% higher</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">Cardio Fitness</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full transition-all duration-1000" style={{ width: '89%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">89</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>Bench Press: 265 lbs vs 160 lbs avg</span>
                            <span className="text-emerald-400">66% stronger</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">Upper Strength</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">95</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>Pull-ups: 24 vs 8 avg</span>
                            <span className="text-emerald-400">3x stronger</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">Pull Strength</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-red-500 to-red-400 h-4 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">92</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Technical Skills */}
                  <div className="border border-[#7A9CA9]/30 rounded-lg overflow-hidden">
                    <div 
                      className="bg-[#2C3E50] px-4 py-3 cursor-pointer hover:bg-[#34495E] transition-colors duration-200"
                      onClick={() => toggleSkillSection('technical')}
                    >
                      <h5 className="text-lg font-semibold text-[#7A9CA9] flex items-center justify-between">
                        Technical Skills
                        <span className="text-sm">
                          {expandedSkillSection === 'technical' ? '−' : '+'}
                        </span>
                      </h5>
                    </div>
                    
                    {expandedSkillSection === 'technical' && (
                      <div className="bg-[#1E2A3B] p-4 space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>R - 2 years academic experience</span>
                            <span className="text-blue-400">University level</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">R</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">75</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>Python - 2 years self-taught</span>
                            <span className="text-emerald-400">Intermediate</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">Python</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full transition-all duration-1000" style={{ width: '70%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">70</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>Excel - 3 years experience</span>
                            <span className="text-green-400">Advanced</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">Excel</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">85</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>Power BI - Summer intensive learning</span>
                            <span className="text-blue-400">Beginner+</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">Power BI</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full transition-all duration-1000" style={{ width: '55%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">55</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>React - Vibe coding projects</span>
                            <span className="text-purple-400">Experimental</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">React</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full transition-all duration-1000" style={{ width: '45%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">45</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-[#F0F0E8]">
                            <span>JavaScript/CSS - Vibe coding projects</span>
                            <span className="text-purple-400">Experimental</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="w-20 text-sm text-[#F0F0E8] font-medium">JS/CSS</div>
                            <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                              <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-4 rounded-full transition-all duration-1000" style={{ width: '40%' }}></div>
                              <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">40</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hobbies */}
                  <div className="border border-[#7A9CA9]/30 rounded-lg overflow-hidden">
                    <div 
                      className="bg-[#2C3E50] px-4 py-3 cursor-pointer hover:bg-[#34495E] transition-colors duration-200"
                      onClick={() => toggleSkillSection('hobbies')}
                    >
                      <h5 className="text-lg font-semibold text-[#7A9CA9] flex items-center justify-between">
                        Hobbies & Interests
                        <span className="text-sm">
                          {expandedSkillSection === 'hobbies' ? '−' : '+'}
                        </span>
                      </h5>
                    </div>
                    
                    {expandedSkillSection === 'hobbies' && (
                      <div className="bg-[#1E2A3B] p-4 space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Pokémon</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-4 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">95</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Reading</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-4 rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">80</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Football</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-4 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">85</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Car Mechanic</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-4 rounded-full transition-all duration-1000" style={{ width: '70%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">70</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Cooking</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-4 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">75</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Attributes */}
                  <div className="border border-[#7A9CA9]/30 rounded-lg overflow-hidden">
                    <div 
                      className="bg-[#2C3E50] px-4 py-3 cursor-pointer hover:bg-[#34495E] transition-colors duration-200"
                      onClick={() => toggleSkillSection('attributes')}
                    >
                      <h5 className="text-lg font-semibold text-[#7A9CA9] flex items-center justify-between">
                        Attributes
                        <span className="text-sm">
                          {expandedSkillSection === 'attributes' ? '−' : '+'}
                        </span>
                      </h5>
                    </div>
                    
                    {expandedSkillSection === 'attributes' && (
                      <div className="bg-[#1E2A3B] p-4 space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Leadership</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-4 rounded-full transition-all duration-1000" style={{ width: '82%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">82</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Teamwork</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-4 rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">88</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Problem Solving</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-4 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">92</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Adaptability</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-4 rounded-full transition-all duration-1000" style={{ width: '89%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">89</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Data Analysis */}
                  <div className="border border-[#7A9CA9]/30 rounded-lg overflow-hidden">
                    <div 
                      className="bg-[#2C3E50] px-4 py-3 cursor-pointer hover:bg-[#34495E] transition-colors duration-200"
                      onClick={() => toggleSkillSection('data')}
                    >
                      <h5 className="text-lg font-semibold text-[#7A9CA9] flex items-center justify-between">
                        Data Analysis
                        <span className="text-sm">
                          {expandedSkillSection === 'data' ? '−' : '+'}
                        </span>
                      </h5>
                    </div>
                    
                    {expandedSkillSection === 'data' && (
                      <div className="bg-[#1E2A3B] p-4 space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Excel</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">90</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">SQL</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full transition-all duration-1000" style={{ width: '70%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">70</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Machine Learning</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full transition-all duration-1000" style={{ width: '72%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">72</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Statistics</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">78</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* My Teams */}
                  <div className="border border-[#7A9CA9]/30 rounded-lg overflow-hidden">
                    <div 
                      className="bg-[#2C3E50] px-4 py-3 cursor-pointer hover:bg-[#34495E] transition-colors duration-200"
                      onClick={() => toggleSkillSection('teams')}
                    >
                      <h5 className="text-lg font-semibold text-[#7A9CA9] flex items-center justify-between">
                        My Teams
                        <span className="text-sm">
                          {expandedSkillSection === 'teams' ? '−' : '+'}
                        </span>
                      </h5>
                    </div>
                    
                    {expandedSkillSection === 'teams' && (
                      <div className="bg-[#1E2A3B] p-4 space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">NEW EIC</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-4 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">95</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Souto Foods</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-4 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">90</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">SNARP</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-4 rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">88</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-[#F0F0E8] font-medium">Delta32</div>
                          <div className="flex-1 bg-[#1E2A3B] rounded-full h-4 relative">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-4 rounded-full transition-all duration-1000" style={{ width: '92%' }}></div>
                            <span className="absolute right-2 top-0 text-xs text-[#F0F0E8] leading-4">92</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      </div>
      </div>
    </section>
  );
};