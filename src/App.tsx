import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* ================= GLOBAL BACKGROUND ================= */}

      {/* Left Purple Glow */}
      <div className="fixed -top-40 -left-52 h-[700px] w-[700px] rounded-full bg-violet-700/20 blur-[180px] pointer-events-none" />

      {/* Right Pink Glow */}
      <div className="fixed top-40 -right-60 h-[750px] w-[750px] rounded-full bg-fuchsia-600/20 blur-[220px] pointer-events-none" />

      {/* Bottom Glow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-purple-700/10 blur-[200px] pointer-events-none" />

      {/* Extra Small Glows */}
      <div className="fixed top-[30%] left-[20%] h-60 w-60 rounded-full bg-pink-500/10 blur-[120px] pointer-events-none" />

      <div className="fixed bottom-[20%] right-[20%] h-80 w-80 rounded-full bg-violet-500/10 blur-[150px] pointer-events-none" />

      {/* Grid Effect */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10">
        <Navbar />

        <div id="hero" className="scroll-mt-24">
          <Hero />
        </div>

        <div id="about" className="scroll-mt-24">
          <About />
        </div>

        <div id="services" className="scroll-mt-24">
          <Services />
        </div>

        <div id="portfolio" className="scroll-mt-24">
          <Portfolio />
        </div>

        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
