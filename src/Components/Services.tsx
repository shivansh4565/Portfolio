import React from "react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    number: "01",
    title: "Machine Learning",
    description:
      "Developing predictive models using supervised and unsupervised learning, feature engineering, model evaluation, and Scikit-learn.",
  },
  {
    number: "02",
    title: "Deep Learning",
    description:
      "Building intelligent solutions using CNNs, RNNs, LSTMs, TensorFlow, and PyTorch for computer vision and sequence modeling.",
  },
  {
    number: "03",
    title: "Generative AI",
    description:
      "Creating LLM-powered applications with Prompt Engineering, RAG, Embeddings, Hugging Face, and Vector Databases.",
  },
  {
    number: "04",
    title: "Agentic AI",
    description:
      "Developing autonomous AI agents using LangChain, LangGraph, multi-agent workflows, tool calling, and AI orchestration.",
  },
  {
    number: "05",
    title: "Full Stack Development",
    description:
      "Building responsive and scalable web applications using React, Next.js, Node.js, Express.js, MongoDB, REST APIs, and Tailwind CSS.",
  },
  {
    number: "06",
    title: "AI Application Development",
    description:
      "Designing production-ready AI applications by integrating LLMs, vector search, Streamlit, REST APIs, and modern AI frameworks.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      className="relative py-24 bg-[#050505] text-white overflow-hidden"
      id="services"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Core{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Combining Artificial Intelligence, Generative AI, and Full Stack
          Development to build intelligent, scalable, and production-ready
          software solutions.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
