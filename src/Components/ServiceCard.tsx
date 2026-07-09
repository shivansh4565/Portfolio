import React from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
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
      hover:shadow-[0_0_45px_rgba(168,85,247,0.35)]
      group
    "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-orange-500/10"></div>

      {/* Top Gradient */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      {/* Icon */}
      <div
        className="
        relative
        z-10
        w-14
        h-14
        flex
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-purple-500/20
        to-pink-500/20
        text-purple-400
        mb-6
        group-hover:scale-110
        transition
      "
      >
        {icon}
      </div>

      {/* Number */}
      <span className="absolute top-6 right-6 text-6xl font-black text-white/5">
        {number}
      </span>

      {/* Title */}
      <h2 className="relative z-10 text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
        {title}
      </h2>

      {/* Description */}
      <p className="relative z-10 mt-4 text-gray-400 leading-7">
        {description}
      </p>

      {/* Learn More */}
      <div className="relative z-10 mt-8 flex items-center gap-2 text-purple-400 font-medium group-hover:gap-4 transition-all">
        Learn More
        <ArrowRight size={18} />
      </div>
    </div>
  );
};

export default ServiceCard;
