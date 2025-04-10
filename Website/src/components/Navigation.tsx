import { Link } from 'react-scroll';
import { useState } from 'react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Home', 'About', 'Resume', 'Contact'];

  return (
    <nav className="fixed top-0 w-full bg-[#F0F0E8]/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6 sm:px-0">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/icons/logoDMT.png"
              alt="DMT Logo"
              className="h-12 w-12"
            />
            <span className="ml-2 text-lg font-semibold text-[#2C3E50]">DMT</span>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#2C3E50] hover:text-[#7A9CA9] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-[#2C3E50] hover:text-[#7A9CA9] cursor-pointer transition-colors"
                activeClass="text-[#7A9CA9] font-medium"
                spy={true}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map(item => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-[#2C3E50] hover:text-[#7A9CA9] cursor-pointer transition-colors"
                activeClass="text-[#7A9CA9] font-medium"
                spy={true}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};