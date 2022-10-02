import './App.css';
import Header from './Component/Header';
import Hero from './Component/Hero';
import About from './Component/About';
import Experience from './Component/Experience';
import Skills from './Component/Skills';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { useEffect } from 'react';
import ReactGa from 'react-ga';

function App() {

  useEffect(() => {
    ReactGa.initialize('G-P52FG9L651')

    //to report page view
    ReactGa.pageview('/')
  }, [])
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills width='50%'/>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;