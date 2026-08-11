// Removed unused React import
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2C3E50] to-[#2C3E50]/90">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src="assets/indigoleague1.png"
                alt="Diego"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-[#7A9CA9]/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7A9CA9]/20 to-transparent"></div>
            </div>
          </div>
          
          {/* Right side - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-[#F0F0E8] mb-6">
              Hello, I'm Diego!
            </h1>
            <div className="text-xl md:text-3xl text-[#7A9CA9] h-16 mb-12">
              <Typewriter
                options={{
                  strings: [
                    'an economics student.',
                    'a runner.',
                    'a culture enthusiast.',
                    'a gamer.',
                    'curious.',
                    'a problem solver.'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  cursor: '|'
                }}
              />
            </div>
            <div className="space-x-4">
              <a
                href="#projects"
                className="inline-block px-6 py-3 bg-[#7A9CA9] text-[#F0F0E8] rounded-lg hover:bg-[#7A9CA9]/80 transition-colors shadow-md hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 border-2 border-[#7A9CA9] text-[#7A9CA9] rounded-lg hover:bg-[#7A9CA9]/10 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};