interface ExperienceItem {
  title: string;
  company?: string;
  date: string;
  location?: string;
  description: string;
  type: 'work' | 'education' | 'project' | 'research';
}

interface SkillCategory {
  name: string;
  skills: string[];
}

export const Resume = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Undergraduate Student',
      company: 'The University of Georgia',
      location: 'Athens, GA',
      description: 'Economics & International Affairs',
      date: '2023 - Present',
      type: 'education'
    },
    {
      title: 'Undergraduate Student',
      company: 'Kennesaw State University',
      location: 'Kennesaw, GA',
      description: 'Economics',
      date: '2020 - 2023',
      type: 'education'
    },
    {
      title: 'Quantitative Research/Developer Intern',
      company: 'NEW EIC',
      location: 'Boston, MA',
      description: 'Conducted quantitative analysis to evaluate financial data, risk factors, and investment strategies.\nDesigned and optimized trading strategies while collaborating with the risk management team to mitigate potential risks.\nDeveloped large datasets through APIs and key technical indicators to support research and ensure data integrity.',
      date: 'Spring 2025',
      type: 'work'
    },
    {
      title: 'Price Analyst',
      company: 'Souto Foods',
      location: 'Norcross, GA',
      description: 'As a Pricing Intern at Souto Foods, I analyze market trends, competitor pricing, and consumer behavior to guide new product and vendor introductions. I design processes for data collection and modeling that highlight growth opportunities, monitor risks, and deliver actionable insights. Working closely with purchasing and sales teams, I help build pricing frameworks that integrate costs, market data, and competitive benchmarks, improving efficiency in sourcing and pricing decisions. I also develop dashboards to visualize KPIs and market segmentation, and support the adoption of new analytical tools through training and implementation.',
      date: 'Summer 2025',
      type: 'work'
    },
    {
      title: 'Undergraduate Research Assistant',
      company: 'SNARP',
      location: 'Athens, GA',
      description: 'Executed comprehensive data collection and analysis using Excel, improving research accuracy and advancing SNARP\'s strategic focus.\nReviewed literature sources and collaborated with senior researchers to develop innovative methodologies aimed at reducing subnational repression in 196 countries.',
      date: 'Spring 2024',
      type: 'research'
    },
    {
      title: 'Portfolio Manager and Research Analyst',
      company: 'Delta32 Investment Research & Trading Lab',
      location: 'Atlanta, GA',
      description: 'Managed and provided strategic guidance for four stock portfolios, achieving over 160% cumulative returns over four years by adapting to market trends and leveraging data analysis to mitigate risk and enhance returns.\nConducted market research using analytical software and tracked current events using sentiment analysis to identify opportunities for portfolio improvement and mitigate risk.',
      date: '2020-present',
      type: 'project'
    },
    {
      title: 'Tandem App',
      description: 'Built Tandem, a React Native app for social groups to track shared routines and aspects of their lives (meals, expenses, reminders, etc.) using Expo, Prisma, and PostgreSQL. Features include modular routing, real-time logging, and AI-driven recommendations to improve group cohesion and activities outside of social media.',
      date: '2025',
      type: 'project'
    },
    {
      title: 'English Premier League Prophet',
      description: 'Built a predictive model for the English Premier League using machine learning and data analysis. The model uses historical data to predict the outcome of matches and the likelihood of a team winning or losing.',
      date: '2025',
      type: 'project'
    },
    {
      title: 'Website Development',
      description: 'Develop professional websites for local and small businesses using HTML, CSS, and JavaScript',
      date: '2025',
      type: 'project'
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        "Fluent in Spanish",
        "Conversational French",
        "Beginner in Russian",
        "Beginner in Italian",
        "Experience in Python",
        "Experience in Power BI",
        "Experience in R",
      ]
    },
    {
      name: "Interests & Hobbies",
      skills: [
        "Marathon Training",
        "Pokémon",
        "Vexillology",
        "Reading Philosophy and survivalism literature",
        "Football (Soccer)",
        "Weightlifting",
        "Website and App Development"
      ]
    }
  ];

  const workExperience = experiences.filter(exp => exp.type === 'work');
  const education = experiences.filter(exp => exp.type === 'education');
  const projects = experiences.filter(exp => exp.type === 'project');
  const research = experiences.filter(exp => exp.type === 'research');

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

  return (
    <section id="resume" className="py-20 bg-[#2C3E50]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#F0F0E8] mb-12 text-center">
          Resume
        </h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#7A9CA9] mb-6 text-center">
            Education
          </h3>
          <div className="bg-[#243447] p-8 rounded-xl shadow-lg">
            {education.map((experience) => (
              <div 
                key={experience.title + experience.date} 
                className="mb-8 last:mb-0 bg-[#1E2A3B] p-6 rounded-lg hover:bg-[#2C3E50] transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[#F0F0E8]">
                      {experience.title}
                    </h3>
                    {experience.company && (
                      <p className="text-lg text-[#7A9CA9]">{experience.company}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[#7A9CA9]">{experience.date}</span>
                    {experience.location && (
                      <p className="text-[#F0F0E8]/70 text-sm">{experience.location}</p>
                    )}
                  </div>
                </div>
                <p className="text-[#F0F0E8]/80 whitespace-pre-line">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#7A9CA9] mb-6 text-center">
            Work Experience
          </h3>
          <div className="bg-[#243447] p-8 rounded-xl shadow-lg">
            {workExperience.map((experience) => (
              <div 
                key={experience.title + experience.date} 
                className="mb-8 last:mb-0 bg-[#1E2A3B] p-6 rounded-lg hover:bg-[#2C3E50] transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[#F0F0E8]">
                      {experience.title}
                    </h3>
                    {experience.company && (
                      <p className="text-lg text-[#7A9CA9]">{experience.company}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[#7A9CA9]">{experience.date}</span>
                    {experience.location && (
                      <p className="text-[#F0F0E8]/70 text-sm">{experience.location}</p>
                    )}
                  </div>
                </div>
                <p className="text-[#F0F0E8]/80 whitespace-pre-line">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#7A9CA9] mb-6 text-center">
            Research Experience
          </h3>
          <div className="bg-[#243447] p-8 rounded-xl shadow-lg">
            {research.map((experience) => (
              <div 
                key={experience.title + experience.date} 
                className="mb-8 last:mb-0 bg-[#1E2A3B] p-6 rounded-lg hover:bg-[#2C3E50] transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[#F0F0E8]">
                      {experience.title}
                    </h3>
                    {experience.company && (
                      <p className="text-lg text-[#7A9CA9]">{experience.company}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[#7A9CA9]">{experience.date}</span>
                    {experience.location && (
                      <p className="text-[#F0F0E8]/70 text-sm">{experience.location}</p>
                    )}
                  </div>
                </div>
                <p className="text-[#F0F0E8]/80 whitespace-pre-line">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
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

        <div>
          <h3 className="text-2xl font-semibold text-[#7A9CA9] mb-6 text-center">
            Projects
          </h3>
          <div className="bg-[#243447] p-8 rounded-xl shadow-lg">
            {projects.map((experience) => (
              <div 
                key={experience.title + experience.date} 
                className="mb-8 last:mb-0 bg-[#1E2A3B] p-6 rounded-lg hover:bg-[#2C3E50] transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[#F0F0E8]">
                      {experience.title}
                    </h3>
                    {experience.company && (
                      <p className="text-lg text-[#7A9CA9]">{experience.company}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-[#7A9CA9]">{experience.date}</span>
                    {experience.location && (
                      <p className="text-[#F0F0E8]/70 text-sm">{experience.location}</p>
                    )}
                  </div>
                </div>
                <p className="text-[#F0F0E8]/80 whitespace-pre-line">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};