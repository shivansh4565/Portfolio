
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero"
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      {/* Add scroll-mt to avoid content hiding under the fixed navbar */}
      <div id="hero" className="scroll-mt-24"><Hero /></div>
      <div id="about" className="scroll-mt-24"><About /></div>
      <div id="services" className="scroll-mt-24"><Services /></div>
      <div id="portfolio" className="scroll-mt-24"><Portfolio /></div>
      <div id="contact" className="scroll-mt-24"><Contact /></div>
    </>
  );
};

export default App;
