import React, { useEffect } from 'react';
import about from '../img/about-rajamanickam.png';
import AOS from 'aos';
import "aos/dist/aos.css";

function About() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	  }, []);
    return (
        <section className='about' id='about'>
			<div className="container">
				<div className="row">
					<div className="col-12" >
						<h2 className="title">About Me</h2>
						<div className="title-bar"></div>
					</div>
					<div className="col-12 col-lg-6" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
						<div className="about-content">
						<p>Web Developer with 2+ years of experience. Develop highly interactive Front end / User Interfaces for Websites. </p>
						<p>Interested in the entire frontend spectrum and working on ambitious projects. 
							Proficient at Web Application, UI Design, Ecommerce Development and Search Engine Optimization. 
							I have done my under graduatee Bachelor of Computer Science and pursuing Master of Science in information Technology at alagappa University.</p>
						<div className="row">
							<div className="col-md-12 col-lg-6">
								<ul>
		        					<li><i className="uil uil-bag-alt"></i> 2+ yrs of Experience</li>
		        				</ul>
							</div>
							<div className="col-md-12 col-lg-6">
								<ul>
									<li><i className="uil uil-graduation-cap"></i> M.Sc IT</li>
		        				</ul>
							</div>
							<a href='#contact' className='learn-more animate__animated animate__bounceInUp'>
								<span className='circle' aria-hidden='true'>
								<span className='icon arrow'></span>
								</span>
								<span className='button-text'>Contact Me</span>
							</a>
						</div>
				        </div>
					</div>
					<div className="col-12 col-lg-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
						<div className="about-img" >
							<img src={about} alt="Rajamanickam React Developer" />
						</div>
					</div>
				</div>
			</div>
		</section>
    );
}
export default About;