import React from "react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    number: "01",
    title: "Machine Learning",
    description:
      "Develop predictive models using supervised & unsupervised learning, feature engineering, model evaluation, and Scikit-learn.",
  },
  {
    number: "02",
    title: "Deep Learning",
    description:
      "Build intelligent AI systems using CNNs, RNNs, LSTMs, TensorFlow, and PyTorch for computer vision and sequence modeling.",
  },
  {
    number: "03",
    title: "Generative AI",
    description:
      "Develop LLM-powered applications using Prompt Engineering, RAG, Embeddings, Hugging Face, and Vector Databases.",
  },
  {
    number: "04",
    title: "Agentic AI",
    description:
      "Create autonomous AI agents using LangChain, LangGraph, multi-agent workflows, tool calling, and AI orchestration.",
  },
  {
    number: "05",
    title: "Full Stack Development",
    description:
      "Build scalable web applications using React, Next.js, Node.js, Express.js, MongoDB, REST APIs, and Tailwind CSS.",
  },
  {
    number: "06",
    title: "AI Application Development",
    description:
      "Design production-ready AI applications integrating LLMs, vector search, Streamlit, REST APIs, and modern AI frameworks.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-transparent py-24 text-white"
    >
      {/* Soft Background Glow */}

      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-violet-600/15 blur-[160px]" />

      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold">

            Core{" "}

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">

              Expertise

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">

            Passionate about building intelligent AI systems and scalable
            full-stack applications by combining Machine Learning,
            Deep Learning, Generative AI, Agentic AI, and modern web
            technologies.

          </p>

        </div>

        {/* Cards */}


        {/* Cards */}

<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

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
