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
        bg-white/[0.03]
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-violet-400/50
        hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
        group
      "
    >

            {/* Glow Background */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-br
          from-violet-500/10
          via-fuchsia-500/5
          to-pink-500/10
        "
      ></div>

      {/* Animated Top Border */}

      <div
        className="
          absolute
          top-0
          left-0
          h-1
          w-full
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-pink-500
          scale-x-0
          group-hover:scale-x-100
          transition-transform
          duration-500
          origin-left
        "
      ></div>

      {/* Number */}

      <span className="absolute top-6 right-6 text-6xl font-black text-white/10 select-none">
        {number}
      </span>

      {/* Title */}

      <h2 className="relative z-10 text-2xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
        {title}
      </h2>

      {/* Description */}

      <p className="relative z-10 mt-5 text-zinc-400 leading-7">
        {description}
      </p>

      {/* Animated Divider */}

      <div
        className="
          relative
          z-10
          mt-8
          h-[2px]
          w-12
          bg-gradient-to-r
          from-violet-500
          to-fuchsia-500
          group-hover:w-full
          transition-all
          duration-500
        "
      ></div>

            {/* Learn More */}

      <button
        type="button"
        className="
          relative
          z-10
          mt-6
          font-medium
          text-violet-400
          transition-all
          duration-300
          group-hover:translate-x-2
          group-hover:text-fuchsia-400
        "
      >
        Learn More →
      </button>

    </div>
  );
};

export default ServiceCard;
