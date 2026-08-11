// Removed unused React import
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#5D7491] to-[#4A6378]">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#F0F0E8] mb-8">
            Hello, I'm Diego!
          </h1>
          <div className="text-2xl md:text-4xl lg:text-5xl text-[#7A9CA9] h-20 md:h-24 mb-16">
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
              className="inline-block px-8 py-4 bg-[#7A9CA9] text-[#F0F0E8] rounded-lg hover:bg-[#7A9CA9]/80 transition-colors shadow-md hover:shadow-lg text-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 border-2 border-[#7A9CA9] text-[#7A9CA9] rounded-lg hover:bg-[#7A9CA9]/10 transition-colors text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};