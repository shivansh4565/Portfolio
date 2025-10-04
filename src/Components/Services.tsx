// components/Services.tsx
import React from "react";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    number: "01",
    title: "Web Development",
    description: "Responsive websites using HTML, CSS, JavaScript, and modern frameworks to build pixel-perfect UIs and smooth user experiences."
  },
  {
    number: "02",
    title: "Fullstack Development",
    description: "End-to-end development using React, Node.js, Express, and MongoDB. From frontend design to backend APIs and database handling."
  }
,
  {
    number: "03",
    title: "Data Analysis",
    description: "Turning raw data into insights using Python, Pandas, and visualization libraries like Matplotlib and Seaborn."
  },
  {
    number: "04",
    title: "Data Structures with C++",
    description: "Efficient problem solving and algorithm design using C++ STL, recursion, trees, graphs, and dynamic programming."
  }
,
  {
    number: "05",
    title: "Database Management",
    description: "Design and manage scalable relational and NoSQL databases like MySQL and MongoDB for modern applications."
  }
, 
  {
    number: "06",
    title: "REST API Development",
    description: "Create secure and scalable RESTful APIs using Express.js and Node.js with proper authentication and error handling."
  }
,  
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="relative inline-block">
            Services
            <span className="absolute left-0 bottom-0 w-full h-2 bg-fuchsia-500 rounded-full blur-md"></span>
          </span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {servicesData.map((service, idx) => (
            <ServiceCard
              key={idx}
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
