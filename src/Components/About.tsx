const skills = [
  "Python",
  "C++",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Agentic AI",
  "LangChain",
  "LangGraph",
  "LLMs",
  "RAG",
  "Hugging Face",
  "TensorFlow",
  "PyTorch",
  "FAISS",
  "Git",
  "GitHub",
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white py-24 px-6 md:px-20">

      {/* Animated Background */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px] animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"></div>

      <div className="relative z-10">

        {/* Heading */}

        <h2 className="text-center text-5xl font-bold mb-16">

          About{" "}

          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Me
          </span>

        </h2>

        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left */}

          <div className="lg:w-1/3">

            <div
              className="
              rounded-3xl
              overflow-hidden
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              shadow-[0_0_60px_rgba(168,85,247,0.25)]
              hover:scale-105
              transition-all
              duration-700
            "
            >
              <img
                src="/img2.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* Right */}

          <div className="lg:w-2/3">

            <p className="text-lg leading-8 text-gray-300">
              I'm{" "}
              <span className="font-semibold text-white">
                Shivansh Saxena
              </span>
              , a 4th-year B.Tech Computer Science (Artificial Intelligence)
              student passionate about building AI-powered applications and
              scalable full-stack software.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              I specialize in Machine Learning, Deep Learning, Generative AI,
              Agentic AI, Retrieval-Augmented Generation (RAG), Large Language
              Models, and MERN Stack development. My goal is to build
              intelligent software that solves real-world problems.
            </p>

            {/* Cards */}

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div
                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-6
                hover:border-purple-500/40
                hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
                hover:-translate-y-2
                transition-all
                duration-500
              "
              >
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                  AI & ML
                </h3>

                <p className="text-gray-400 leading-7">
                  Machine Learning, Deep Learning, Generative AI,
                  LangChain, LangGraph, Hugging Face,
                  TensorFlow, PyTorch, LLMs and RAG.
                </p>
              </div>

              <div
                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-6
                hover:border-orange-400/40
                hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]
                hover:-translate-y-2
                transition-all
                duration-500
              "
              >
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">
                  Full Stack
                </h3>

                <p className="text-gray-400 leading-7">
                  React, Next.js, Node.js, Express.js,
                  MongoDB, REST APIs,
                  Tailwind CSS, Git & GitHub.
                </p>
              </div>

            </div>

            {/* Technologies */}

            <h3 className="text-2xl font-semibold mt-12 mb-6">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-4">

              {skills.map((skill) => (

                <span
                  key={skill}
                  className="
                  px-5
                  py-2.5
                  rounded-full
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  text-gray-300
                  hover:text-white
                  hover:border-purple-500
                  hover:bg-purple-500/20
                  hover:shadow-[0_0_20px_rgba(168,85,247,0.45)]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  cursor-default
                "
                >
                  {skill}
                </span>

              ))}

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

              {[
                { number: "350+", label: "LeetCode" },
                { number: "12+", label: "Projects" },
                { number: "8.0", label: "CGPA" },
                { number: "2027", label: "Graduation" },
              ].map((item) => (

                <div
                  key={item.label}
                  className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                  text-center
                  hover:border-purple-500
                  hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
                >

                  <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    {item.number}
                  </h2>

                  <p className="uppercase text-xs tracking-widest text-gray-400 mt-3">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
