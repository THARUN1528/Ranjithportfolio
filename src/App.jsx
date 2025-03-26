import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">  
    <Navbar />
    <Hero />
    <About />
    <Technologies/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App;