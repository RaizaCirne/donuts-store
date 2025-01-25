import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Testemonial from "./components/Testemonial/Testemonial";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testemonial />
      <Contact />
    </div>
  );
}

export default App;
