import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AISidebar from "./components/AISidebar";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <AISidebar />

      <div style={{ marginLeft: "var(--sidebar-width)" }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

