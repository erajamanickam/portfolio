import './App.css';
import Header from './Component/Header';
import Hero from './Component/Hero';
import About from './Component/About';
import Experience from './Component/Experience';
import Skills from './Component/Skills';
import Portfolio from './Component/Portfolio';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { useEffect, useState } from 'react';
import ReactGa from 'react-ga';


function App() {

    ReactGa.initialize('G-P52FG9L651');
    ReactGa.pageview(window.location.pathname + window.location.search);
    console.log("GA working");
    //to report page view

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills width='50%'/>
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;