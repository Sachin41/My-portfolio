import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 120,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
      const navItems = [
          { name: "Home" },
          { name: "About" },
          {name: "Experience"},
          { name: "Skills" },
          { name: "Projects" },
          { name: "Contact" }
      ];
  return (
    <div style={{overflowX: 'hidden'}}>
      <Header navItems={navItems} />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
    </div>
    // <Router>
    //   <div>
    //     {/* Routes */}
    //     <div className="container mt-4">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/projects" element={<Projects />} />
    //         <Route path="/about" element={<About />} />
    //         <Route path="/contact" element={<Contact />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;
