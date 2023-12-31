import React from "react";
import { Fade } from "react-reveal";
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Fade duration={2000}> 
      <Skills />
      <Projects />
      <Contact />
      </Fade>  
      <Footer />
    </main>
  )
}

export default App;
