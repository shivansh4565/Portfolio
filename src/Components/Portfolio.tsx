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
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-60 object-cover
            transition duration-700
            group-hover:scale-110
          "
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3
          className="
            text-2xl font-bold
            bg-gradient-to-r
            from-purple-400
            via-pink-400
            to-orange-400
            bg-clip-text
            text-transparent
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-400 leading-7">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          {/* Live Demo */}
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 rounded-xl
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

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1 rounded-xl
              border border-white/20
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
    // 1. DubSync AI 2.0
    {
      image: "/dubsync.png",
      title: "DubSync AI 2.0",
      subtitle:
        "Autonomous Multilingual Video Dubbing & Translation engine powered by Faster-Whisper, Edge-TTS, LLM translation, time-aligned audio synthesis & subtitle generation.",
      demo: "https://dub-sync-ai-2-0.vercel.app/",
      github: "https://github.com/shivansh4565/DubSync-AI-2.0",
    },

    // 2. SplitPay
    {
      image: "/SplitPay.png",
      title: "SplitPay",
      subtitle:
        "MERN-based UPI payment splitting platform that scans merchant QR codes and divides large payments into smaller transactions below ₹2,000 with UPI intent, payment tracking & retry support.",
      demo: "https://splitpay-hkny.onrender.com/",
      github: "https://github.com/shivansh4565/SplitPay",
    },

    // 3. ATSense
    {
      image: "/ATSense.png",
      title: "ATSense",
      subtitle:
        "AI Resume Intelligence Platform for ATS scoring, keyword analysis, actionable feedback, AI-powered improvements & PDF export.",
      demo: "https://atsense-frontend.onrender.com",
      github: "https://github.com/shivansh4565/ATSense",
    },

    // 4. Intervia
    {
      image: "/Intervia.png",
      title: "Intervia",
      subtitle:
        "AI Interview Platform with resume-based question generation, evaluation, analytics & PDF reports.",
      demo: "https://intervia-client.onrender.com",
      github: "https://github.com/shivansh4565/Intervia",
    },

    // 5. AskAKTU
    {
      image: "/AKTU.png",
      title: "AskAKTU",
      subtitle:
        "AI College Assistant built using Conditional RAG, LangGraph, FAISS & Groq LLM.",
      demo: "https://askaktu.streamlit.app",
      github: "https://github.com/shivansh4565/AskAKTU",
    },

    // 6. DeepScope
    {
      image: "/DeepScope.png",
      title: "DeepScope",
      subtitle:
        "Multi-Agent AI Research Assistant using LangGraph, LangChain, Tavily Search & Streamlit.",
      demo: "https://deepscope-ai.streamlit.app",
      github: "https://github.com/shivansh4565/DeepScope",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Section Heading */}
      <h2 className="text-center text-5xl font-bold text-white mb-4">
        Featured{" "}
        <span
          className="
            bg-gradient-to-r
            from-purple-400
            via-pink-400
            to-orange-400
            bg-clip-text
            text-transparent
          "
        >
          Projects
        </span>
      </h2>

      {/* Section Description */}
      <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14">
        A collection of AI/ML and Full Stack projects showcasing my experience
        in Generative AI, Agentic AI, Retrieval-Augmented Generation (RAG),
        and scalable web application development.
      </p>

      {/* Projects Grid */}
      <div
        className="
          grid
          gap-8
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
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
