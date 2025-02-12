import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Testemonial from "./components/Testemonial/Testemonial";
import Work from "./components/Work/Work";

function App() {
  // Criando referências para as seções
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const testemonialRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      {/* Passando as referências para o Navbar */}
      <Navbar
        homeRef={homeRef} 
        aboutRef={aboutRef}
        workRef={workRef}
        testemonialRef={testemonialRef}
        contactRef={contactRef}
      />

      {/* Adicionando as referências às seções */}

      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={workRef}>
        <Work />
      </div>

      <div ref={testemonialRef}>
        <Testemonial />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
