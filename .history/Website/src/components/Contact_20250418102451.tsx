export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#2C3E50]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#F0F0E8] mb-12">
          Let's get In Touch
        </h2>
        <div className="flex justify-center space-x-12">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A9CA9] hover:text-[#F0F0E8] transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="https://www.duolingo.com/profile/TOW3R2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A9CA9] hover:text-[#F0F0E8] transition-colors"
            aria-label="Duolingo"
          >
            <img
              src="icons/duolingo.png"
              alt="Duolingo"
              className="w-8 h-8 opacity-90 hover:opacity-100"
            />
          </a>
          <a
            href="https://www.strava.com/athletes/82066901"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A9CA9] hover:text-[#F0F0E8] transition-colors"
            aria-label="Strava"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.008 13.828h4.172"/>
            </svg>
          </a>
          <a
            href="mailto:diegomtowers@gmail.com"
            className="text-[#7A9CA9] hover:text-[#F0F0E8] transition-colors"
            aria-label="Email"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
          <a
            href="documents/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A9CA9] hover:text-[#F0F0E8] transition-colors"
            aria-label="Resume"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
              <path d="M9 13h6v2H9zm0 3h6v2H9zm0-6h2v2H9z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};