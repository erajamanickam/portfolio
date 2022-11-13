import React, { useEffect } from 'react';
import Typical from 'react-typical';
import hero from '../img/rajamanickam-webdev.png';
import AOS from 'aos';
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
		AOS.init();
		AOS.refresh();
	  }, []);
  return (
    <section className='hero' id='hero'>
        <div className='container'>
          <div className='row'>
          <div className='col-12 col-lg-6'>
        			<div className='hero-img' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="500">
        				<img src={hero} alt='Rajamanickam at Xerago' />
        			</div>
        		</div>
        		<div className='col-12 col-lg-6 hero-content' data-aos="fade-down" data-aos-duration="700">
              <div className='d-flex'>
                <h4>Hi, I'm Raja </h4>
                <h4 className='hi'>👋</h4>
              </div>
              {" "}
	                <h1 className=' '>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                          "Reactjs Developer",
                          1000,
                          "Web Developer",
                          1000,
                        ]}
                        />
                    </h1>
        			<p className='pt-10'>
                A passionate Web Developer having an experience of building Web Application and Websites with user friendly...
              </p>
        			<a href='#about' className='learn-more'>
                <span className='circle' aria-hidden='true'>
                <span className='icon arrow'></span>
                </span>
                <span className='button-text'>Read More</span>
              </a>
              <div className='social-icons'>
                <ul>
                  <li><a href='https://www.linkedin.com/in/rajamanickamweb/' target='_blank'><i className='uil uil-linkedin'></i></a></li>
                  <li><a href='https://github.com/erajamanickam/' target='_blank'><i className='uil uil-github'></i></a></li>
                  <li><a href='mailto:erajamanickam72@gmail.com' target='_blank'><i className='uil uil-envelope-info'></i></a></li>
                  <li><a href='https://codepen.io/erajamanickam' target='_blank'><i className='fab fa-codepen'></i></a></li>
                  <li><a href='https://www.youtube.com/channel/UCQqbJ6jeyqk1_bGwGjVSJvw' target='_blank'><i className='uil uil-youtube'></i></a></li>
                </ul>
              </div>
        		</div>
          </div>
        </div>    
        </section>
  );
}

export default Hero;
