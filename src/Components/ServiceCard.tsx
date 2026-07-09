import React from "react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-purple-500/40
      hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
      group
    "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-orange-500/10"></div>

      {/* Number */}
      <span className="relative z-10 text-5xl font-black text-white/10">
        {number}
      </span>

      {/* Title */}
      <h2 className="relative z-10 mt-4 text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
        {title}
      </h2>

      {/* Description */}
      <p className="relative z-10 mt-4 leading-7 text-gray-400">
        {description}
      </p>

      {/* Bottom Line */}
      <div className="relative z-10 mt-8 h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></div>
    </div>
  );
};

export default ServiceCard;
