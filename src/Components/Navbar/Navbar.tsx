import React, { useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">

      <nav
        className="
        w-full
        max-w-7xl
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-[0_0_30px_rgba(168,85,247,0.15)]
      "
      >
        <div className="flex items-center justify-between px-8 py-4">

          {/* Logo */}

          <a
            href="#hero"
            className="text-3xl font-bold tracking-wide"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Shivansh
            </span>
          </a>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-10">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                relative
                text-gray-300
                hover:text-white
                transition

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-gradient-to-r
                after:from-purple-500
                after:to-pink-500
                after:transition-all
                hover:after:w-full
              "
              >
                {item.name}
              </a>
            ))}

          </div>

          {/* CTA */}

          <a
            href="#contact"
            className="
            hidden
            lg:flex
            items-center
            rounded-full
            bg-gradient-to-r
            from-purple-600
            via-pink-600
            to-orange-500
            px-6
            py-3
            font-semibold
            text-white
            shadow-[0_0_20px_rgba(168,85,247,.35)]
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(168,85,247,.55)]
            transition-all
            duration-300
          "
          >
            Let's Connect
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative h-8 w-8"
          >
            <span
              className={`absolute h-[2px] w-7 bg-white transition-all ${
                isOpen ? "rotate-45 top-4" : "top-2"
              }`}
            />

            <span
              className={`absolute top-4 h-[2px] w-7 bg-white transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute h-[2px] w-7 bg-white transition-all ${
                isOpen ? "-rotate-45 top-4" : "top-6"
              }`}
            />
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`
          overflow-hidden
          transition-all
          duration-500
          ${isOpen ? "max-h-96 py-6" : "max-h-0"}
        `}
        >
          <div className="flex flex-col items-center gap-6">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="text-lg text-gray-300 hover:text-purple-400 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="
              rounded-full
              bg-gradient-to-r
              from-purple-600
              via-pink-600
              to-orange-500
              px-6
              py-3
              font-semibold
              text-white
            "
            >
              Let's Connect
            </a>

          </div>
        </div>

      </nav>

    </header>
  );
};

export default Navbar;
