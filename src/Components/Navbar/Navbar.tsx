import  { useState } from "react";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Expertise", href: "#services" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
      <nav className="w-full max-w-7xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-between px-8 py-4">

          {/* Logo */}

          <a
            href="#hero"
            className="text-xl md:text-2xl font-semibold tracking-tight text-white"
          >
            Shivansh{" "}
            <span className="text-purple-400">Saxena</span>
          </a>

          {/* Desktop */}

          <div className="hidden md:flex items-center gap-10">

            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="
                relative
                text-gray-300
                hover:text-white
                transition-all
                duration-300

                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-[2px]
                after:bg-purple-500
                after:transition-all
                hover:after:w-full
              "
              >
                {link.title}
              </a>
            ))}

          </div>

          {/* Button */}

          <a
            href="#contact"
            className="
            hidden
            md:flex
            items-center
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
          "
          >
            Let's Talk
          </a>

          {/* Mobile */}

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 px-8 pb-6 pt-4">

            <div className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link.title}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-white hover:bg-white hover:text-black transition"
              >
                Let's Talk
              </a>

            </div>

          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
