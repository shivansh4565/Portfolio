import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle?: string;
  demo: string;
  github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  subtitle,
  demo,
  github,
}) => {
  return (
    <div
      className="
      group overflow-hidden rounded-3xl
      bg-white/5 backdrop-blur-xl
      border border-white/10
      hover:border-purple-500/40
      hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
      transition-all duration-500
      hover:-translate-y-2
    "
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover transition duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          {title}
        </h3>

        <p className="mt-3 text-gray-400 leading-7">
          {subtitle}
        </p>

        <div className="flex gap-3 mt-6">

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex-1
            rounded-xl
            bg-gradient-to-r
            from-purple-600
            to-pink-600
            py-2.5
            text-center
            font-semibold
            text-white
            hover:opacity-90
            transition
          "
          >
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex-1
            rounded-xl
            border
            border-white/20
            py-2.5
            text-center
            font-semibold
            text-white
            hover:bg-white
            hover:text-black
            transition
          "
          >
            GitHub
          </a>

        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      image: "/AskAKTU.png",
      title: "AskAKTU",
      subtitle:
        "AI College Assistant built using Conditional RAG, LangGraph, FAISS & Groq LLM.",
      demo: "https://askaktu.streamlit.app",
      github: "https://github.com/shivansh4565/AskAKTU",
    },
    {
      image: "/DeepScope.png",
      title: "DeepScope",
      subtitle:
        "Multi-Agent AI Research Assistant using LangGraph, LangChain, Tavily Search & Streamlit.",
      demo: "https://deepscope-ai.streamlit.app",
      github: "https://github.com/shivansh4565/DeepScope",
    },
    {
      image: "/Intervia.png",
      title: "Intervia",
      subtitle:
        "AI Interview Platform with resume-based question generation, evaluation, analytics & PDF reports.",
      demo: "https://intervia-client.onrender.com",
      github: "https://github.com/shivansh4565/Intervia",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-center text-5xl font-bold text-white mb-4">
        Featured{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>

      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14">
        A collection of AI/ML and Full Stack projects showcasing my experience
        in Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG),
        and scalable web application development.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            subtitle={project.subtitle}
            demo={project.demo}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
