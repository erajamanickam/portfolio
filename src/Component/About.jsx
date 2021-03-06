import React from 'react';
import about from '../img/about.png';

function About() {
    return (
        <section className='about' id='about'>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="title">About Me</h1>
						<div className="title-bar"></div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="about-img animate__animated animate__bounceIn">
							<img src={about} alt="Rajamanickam React Developer" />
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="about-content">
						<p>Web Developer with 1.5+ year of experience. Develop highly interactive Front end / User Interfaces for Websites. </p>
						<p>Interested in the entire frontend spectrum and working on ambitious projects. 
							Proficient at Web Application, Website Design, Ecommerce Development and Search Engine Optimization. 
							I have done my graduated <strong>Bachelor of Computer Science</strong> in 2020 Batch</p>
						<div className="row">
							<div className="col-md-12 col-lg-6">
								<ul>
		        					<li><i className="uil uil-bag-alt"></i> 1.5 yr Experience</li>
		        				</ul>
							</div>
							<div className="col-md-12 col-lg-6">
								<ul>
									<li><i className="uil uil-graduation-cap"></i> B.Sc Graduate</li>
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
				</div>
			</div>
		</section>
    );
}

export default About;