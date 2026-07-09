const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pt-36 text-white lg:pt-24"
    >
      {/* Animated Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed22,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#ec489922,transparent_45%)]" />

      <div className="absolute -top-40 -left-32 h-[550px] w-[550px] rounded-full bg-purple-600/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[550px] w-[550px] rounded-full bg-pink-600/20 blur-[180px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-24 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT */}

        <div>

          {/* Badge */}

          <div className="inline-flex items-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm text-purple-300 backdrop-blur-xl">

            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

            Open to AI/ML • GenAI • Full Stack Opportunities

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl">

            Hey, I'm

            <br />

            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">

              Shivansh Saxena

            </span>

          </h1>

          {/* Subtitle */}

          <h2 className="mt-6 text-xl font-semibold leading-relaxed md:text-2xl">

            <span className="text-white">

              AI/ML Engineer • Generative AI

            </span>

            <br />

            <span className="text-gray-400">

              Agentic AI • Full Stack Developer

            </span>

          </h2>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

            Final-year B.Tech Artificial Intelligence student passionate
            about building AI-powered products using Machine Learning,
            Deep Learning, Large Language Models, Agentic AI,
            and scalable Full Stack technologies.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap items-center gap-4">

            {/* Contact */}

            <a
              href="#contact"
              className="
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                via-pink-600
                to-orange-500
                px-7
                py-4
                font-semibold
                shadow-lg
                transition
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(168,85,247,.45)]
              "
            >
              Let's Connect
            </a>
                        {/* Resume Dropdown */}

            <div className="relative group">

              <button
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  px-7
                  py-4
                  font-semibold
                  transition-all
                  duration-300
                  hover:border-purple-500
                  hover:bg-white
                  hover:text-black
                  hover:shadow-[0_0_25px_rgba(168,85,247,.35)]
                "
              >
                Resume ▾
              </button>

              <div
                className="
                  invisible
                  opacity-0
                  group-hover:visible
                  group-hover:opacity-100
                  absolute
                  left-0
                  top-full
                  mt-3
                  w-80
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#111111]
                  backdrop-blur-2xl
                  shadow-2xl
                  transition-all
                  duration-300
                  z-50
                "
              >

                <a
                  href="/Shivansh_Saxena_aiml.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b border-white/10 px-6 py-5 transition hover:bg-purple-500/20"
                >
                  🤖 AI / ML Engineer Resume
                </a>

                <a
                  href="/Shivansh_Saxena_Fullstack.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-5 transition hover:bg-purple-500/20"
                >
                  💻 Full Stack Developer Resume
                </a>

              </div>

            </div>

            {/* GitHub */}

            <a
              href="https://github.com/shivansh4565"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-7
                py-4
                font-semibold
                transition-all
                duration-300
                hover:border-purple-500
                hover:bg-white
                hover:text-black
                hover:shadow-[0_0_25px_rgba(168,85,247,.35)]
              "
            >
              GitHub
            </a>

            {/* LinkedIn */}

            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-7
                py-4
                font-semibold
                transition-all
                duration-300
                hover:border-purple-500
                hover:bg-white
                hover:text-black
                hover:shadow-[0_0_25px_rgba(168,85,247,.35)]
              "
            >
              LinkedIn
            </a>

          </div>

          {/* Stats */}

          <div className="mt-16 flex flex-wrap gap-10">

            <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-xl">

              <h3 className="text-5xl font-bold text-purple-400">
                350+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-500">
                LeetCode
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-xl">

              <h3 className="text-5xl font-bold text-purple-400">
                12+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-500">
                Projects
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-xl">

              <h3 className="text-5xl font-bold text-purple-400">
                8.0
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gray-500">
                CGPA
              </p>

            </div>

          </div>

        </div>
                {/* RIGHT */}

        <div className="relative flex justify-center">

          {/* Floating Glow */}

          <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-[120px] animate-pulse"></div>

          {/* Glass Card */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-5
              shadow-[0_0_70px_rgba(168,85,247,.30)]
              transition-all
              duration-500
              hover:scale-[1.02]
              hover:shadow-[0_0_100px_rgba(168,85,247,.45)]
            "
          >

            {/* Gradient Border */}

            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 pointer-events-none"></div>

            <video
              src="/vid3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="
                relative
                z-10
                w-[360px]
                sm:w-[420px]
                xl:w-[470px]
                rounded-[28px]
                object-cover
              "
            />

          </div>

        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#050505] to-transparent"></div>

    </section>
  );
};

export default Hero;
