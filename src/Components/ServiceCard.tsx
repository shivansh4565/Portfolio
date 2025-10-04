import React from "react";

interface ServiceCardProps {
    number: string;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, description }) => {
    return (
        <div
            className={`
        group p-6 rounded-xl border border-white/10 
        bg-black text-white
        hover:bg-gradient-to-br hover:from-purple-800 hover:to-pink-700
        hover:border-pink-500
        transition-all duration-300 ease-in-out
        relative overflow-hidden
      `}
        >
            {/* Bottom border on hover */}
            <div
                className="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 group-hover:w-full transition-all duration-300"
            ></div>

            <h3 className="text-white font-bold text-lg mb-2">{number}</h3>

            <h2 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-500 to-orange-400 text-transparent bg-clip-text">
                {title}
            </h2>

            <p className="text-gray-300 mt-2">{description}</p>

            <a
                href="#"
                className="mt-4 inline-block text-white font-medium group-hover:underline transition duration-200"
            >
                Read More →
            </a>
        </div>
    );
};

export default ServiceCard;
