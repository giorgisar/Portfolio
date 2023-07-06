import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Skills from "./components/skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black">
      <Navbar />
      <Home />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;
