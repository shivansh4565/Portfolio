import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  subtitle?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, subtitle }) => {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-900">
      <img
        src={image}
        alt={title}
        className="w-full h-58 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-white text-lg font-bold ">{title}</h3>
        {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      image: "/ecom.png",
      title: "VIVIDVEDORS  ",
      subtitle: " E-commerce Website",
    },
    {
      image: "/doc.png",
      title: "SummaDoc",
      subtitle: " Merges your pdfs ",
    },
    {
      image: "/analyze.png",
      title: "SUMMAXAI",
      subtitle: " AI-Powered Text Summarizer of your pdfs",
    },
    {
      image: "/pass.png",
      title: "<Passop/>",
      subtitle: "A Password Manager Application developed for storing your passwords securely",
    },
    {
      image: "/todos2.jpeg",
      title: "Taskify",
      subtitle: "Task Management Application to organize your tasks efficiently",
    },
    {
      image: "/data.jpeg",
      title: "Hotel cancellation prediction & analysis-using Data analytics",
      subtitle: "Data Analysis Project on Hotel booking cancellations",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h2 className="text-white text-4xl font-bold mb-8">
        My latest <span className="text-pink-500">work</span>
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <ProjectCard
            key={i}
            image={proj.image}
            title={proj.title}
            subtitle={proj.subtitle}
          />
        ))}
      </div>
      <div className="button mt-10 justify-center flex">
        <button className="border border-white text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-black group">
          Show More
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>

      </div>
    </section>
  );
};

export default PortfolioSection;
