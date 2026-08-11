// Removed unused React import
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#2C3E50] to-[#2C3E50]/90">
      <div className="text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-[#F0F0E8] mb-6">
          I am Diego.
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
    </section>
  );
};