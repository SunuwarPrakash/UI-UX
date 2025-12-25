import { useState } from "react";

// Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";

export default function Home({ dark, setDark }) {
  // State variables
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  
  // Navigation sections
  const sections = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] transition-colors">
      {/* NAVBAR */}
      <Navbar 
        dark={dark} 
        setDark={setDark} 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        sections={sections} 
      />

      {/* MAIN CONTENT */}
      <main>
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <About />

        {/* SERVICES */}
        <Services />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* PROJECTS */}
        <Projects setActiveProject={setActiveProject} />

        {/* CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* PROJECT MODAL */}
      <ProjectModal 
        activeProject={activeProject} 
        setActiveProject={setActiveProject} 
      />
    </div>
  );
}
