import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Background from "./Components/Background";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white">

      <Background />

      <div className="relative z-10">

        <Navbar />

        <section id="hero" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        <section id="portfolio" className="scroll-mt-24">
          <Portfolio />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

      </div>

    </div>
  );
};

export default App;
