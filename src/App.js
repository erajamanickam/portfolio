import './App.css';
import Header from './Component/Header';
import Hero from './Component/Hero';
import About from './Component/About';
import Experience from './Component/Experience';
import Skills from './Component/Skills';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import React from 'react';
import ReactGa from 'react-ga';
import Youtube from './Component/Youtube';


function App() {

    ReactGa.initialize('G-P52FG9L651');
    ReactGa.pageview(window.location.pathname + window.location.search);
    // console.log("GA working");
    //to report page view

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills width='50%'/>
      <Blog />
      <Youtube />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;