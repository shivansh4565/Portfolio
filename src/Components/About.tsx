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
    <section className="bg-black text-white py-20 px-6 md:px-20">
      {/* Heading */}
      <h2 className="relative text-4xl font-bold text-center mb-12 hover:scale-105 transition duration-300">
        About{" "}
        <span className="relative inline-block">
          Me
          <span className="absolute -inset-2 -z-10 rounded blur-md animate-blob bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">

        {/* Image */}

        <div className="lg:w-1/3">
          <img
            src="/img2.jpeg"
            alt="Profile"
            className="w-full rounded-2xl object-cover border border-zinc-800 shadow-xl"
          />
        </div>

        {/* Right */}

        <div className="lg:w-2/3">

          <p className="text-gray-300 leading-8 text-lg">
            I'm <span className="font-semibold text-white">Shivansh Saxena</span>,
            a 4th-year B.Tech Computer Science (Artificial Intelligence)
            student passionate about building intelligent AI systems and
            scalable full-stack applications.
          </p>

          <p className="mt-5 text-gray-400 leading-8">
            My expertise includes Machine Learning, Deep Learning,
            Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG),
            Large Language Models, and MERN Stack development.
            I enjoy solving real-world problems by combining AI with
            modern web technologies.
          </p>

          {/* Specializations */}

          <div className="grid md:grid-cols-2 gap-5 mt-10">

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">
                AI & Machine Learning
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                Machine Learning, Deep Learning, Generative AI,
                LLMs, RAG, LangChain, LangGraph,
                Hugging Face, TensorFlow, PyTorch.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-3">
                Full Stack Development
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                React, Next.js, Node.js, Express.js,
                MongoDB, REST APIs,
                Tailwind CSS, Git & GitHub.
              </p>
            </div>

          </div>

          {/* Skills */}

          <h3 className="text-xl font-semibold mt-10 mb-5">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-3">

            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-gray-300 hover:border-purple-500 hover:text-white transition"
              >
                {skill}
              </span>
            ))}

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                350+
              </h2>
              <p className="text-gray-400 text-sm mt-2 uppercase">
                LeetCode
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                12+
              </h2>
              <p className="text-gray-400 text-sm mt-2 uppercase">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                8.0
              </h2>
              <p className="text-gray-400 text-sm mt-2 uppercase">
                CGPA
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-500">
                2027
              </h2>
              <p className="text-gray-400 text-sm mt-2 uppercase">
                Graduation
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
