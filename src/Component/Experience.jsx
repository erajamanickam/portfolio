import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
		AOS.init();
		AOS.refresh();
	  }, []);
    return (
        <section className='experience' id='experience'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <h2 className='title' data-aos="fade-down">Experience</h2>
                    <div className='title-bar' data-aos="fade-down"></div>
                    <div className='exp-list'>
                      <ul>
                        <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <div className='icon'></div>
                          <span className='time'>March 2022 - Present</span>
                          <h5>Web Developer - <span className='place'>Xerago</span></h5>
                          <p>Chennai</p>
                        </li>
                        <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <div className='icon'></div>
                          <span className='time'>June 2021 - Jan 2022</span>
                          <h5>Frontend Developer - <span className='place'>WiseWebTek</span></h5>
                          <p>Chennai</p>
                        </li>
                        <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <div className='icon'></div>
                          <span className='time'>July 2020 - June 2021</span>
                          <h5>Web Developer - <span className='place'>eThoughtz Technology </span></h5>
                          <p>Tirunelveli</p>
                        </li>
                      </ul>
                    </div>
                </div>
                <div className='col-12 col-lg-6'>
                    <h2 className='title' data-aos="fade-down">Internship</h2>
                    <div className='title-bar' data-aos="fade-down"></div>
                    <div className='exp-list'>
                      <ul>
                        <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <div className='icon'></div>
                          <span className='time'>Mar 2021 - Apr 2021</span>
                          <h5>Web Development Intern - <span className='place'>The Sparks Foundation</span></h5>
                          <p>Online</p>
                        </li>
                        <li data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                          <div className='icon'></div>
                          <span className='time'>Dec 2020 - Mar 2021</span>
                          <h5>Digital Marketing Intern - <span className='place'>Apponix Technologies</span></h5>
                          <p>Online</p>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Experience;