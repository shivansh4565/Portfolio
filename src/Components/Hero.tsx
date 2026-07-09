const Hero = () => {
  return (
   <section
  id="hero"
  className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex items-center px-6 pt-36 lg:pt-24"
>
      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-[180px]" />

     <div className="relative z-10 mx-auto max-w-7xl w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
        {/* Left */}
        <div>
        

          {/* Heading */}
         <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
  Hi, I'm
  <br />

  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
    Shivansh Saxena
  </span>
</h1>

         <h2 className="mt-6 text-xl md:text-2xl font-semibold leading-relaxed">
  <span className="text-white">
    AI/ML Engineer • Generative AI
  </span>

  <br />

  <span className="text-5xl">
    Agentic AI • Full Stack Developer
  </span>
</h2>
          {/* Description */}
         <p className="mt-8 max-w-xl text-lg leading-8 text-5xl">
  Final-year B.Tech Artificial Intelligence student passionate about
  building AI-powered applications using Machine Learning, Deep Learning,
  Large Language Models, Agentic AI, and scalable Full Stack technologies.
</p>

          {/* Buttons */}
         <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Contact */}
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-4 font-semibold shadow-lg hover:scale-105 transition hover:shadow-[0_0_30px_rgba(168,85,247,.4)]"
            >
              Let's Connect
            </a>

            {/* Resume Dropdown */}
            <div className="relative group">
              <button
                className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold backdrop-blur-xl hover:bg-white hover:text-black transition"
              >
                Resume ▼
              </button>

              <div
                className="
                invisible opacity-0
                group-hover:visible
                group-hover:opacity-100
                absolute left-0 top-full mt-3
                w-72 overflow-hidden
                rounded-2xl
                border border-white/10
                bg-[#111]
                backdrop-blur-xl
                shadow-2xl
                transition-all duration-300
                z-50
              "
              >
                <a
                  href="/Shivansh_Saxena_Fullstack.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-4 hover:bg-purple-500/20 transition"
                >
                  💻 Full Stack Developer Resume
                </a>

                <a
                  href="/Shivansh_Saxena_aiml.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-4 hover:bg-purple-500/20 transition"
                >
                  🤖 AI / ML Engineer Resume
                </a>
              </div>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/shivansh4565"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold backdrop-blur-xl hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          </div>

          {/* Stats */}
         <div className="mt-16 flex gap-12 flex-wrap">
            <div>
              <h3 className="text-5xl font-bold text-purple-400">350+</h3>
              <p className="text-5xl">LeetCode Problems</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-purple-400">12+</h3>
              <p className="text-5xl">Projects</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-purple-400">8.0</h3>
              <p className="text-5xl">CGPA</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div
            className="
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            p-5
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(168,85,247,.25)]
          "
          >
            <video
              src="/vid3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-md rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
