import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const html = {	width: '95%'}
const react = {	width: '60%'}
const js = { width: '70%'}
const css = { width: '80%'}
const bootstrap = {	width: '80%'}
const wordpress = {	width: '60%'}
const php = { width: '65%'}
const seo = { width: '75%'}
const drupal = { width: '60%' }
const opencart = { width: '79%' }


function Skills() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	  }, []);
    return (
        <section className='skills' id='skills'>
			<div className='container'>
				<div className='row'>
					<div className='col-12' data-aos="fade-down">
						<h1 className='title'>Skills</h1>
						<div className='title-bar'></div>
					</div>
					<div className='col-12 col-lg-6'>
						 <div className='skills' data-aos="flip-up">
						 	<div className='skill'>
			                  <h5 className='skill-title'><i className="fa-brands fa-html5"></i> HTML5</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={html} data-progress='95%'></div>
			                  </div>
			                </div>
			                <div className='skill' data-aos="flip-up">
			                  <h5 className='skill-title'><i className="fa-brands fa-react"></i> React JS</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={react} data-progress='60%' ></div>
			                  </div>
			                </div>
			                <div className='skill' data-aos="flip-up">
			                  <h5 className='skill-title'><i className="fa-brands fa-js"></i> Javascript</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={js} data-progress='70%'></div>
			                  </div>
			                </div>
							<div className='skill' data-aos="flip-up">
			                  <h5 className='skill-title'><i className="fa-brands fa-css3"></i> CSS3</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={css} data-progress='80%'></div>
			                  </div>
			                </div>
							<div className='skill' data-aos="flip-up">
			                  <h5 className='skill-title'><i className="fa-brands fa-bootstrap"></i> Bootstrap</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={bootstrap} data-progress='80%'></div>
			                  </div>
			                </div>
			            </div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='skills'>
			                <div className='skill' data-aos="flip-down">
			                  <h5 className='skill-title'><i className="fa-brands fa-wordpress"></i> WordPress</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={wordpress} data-progress='60%'></div>
			                  </div>
			                </div>
							<div className='skill' data-aos="flip-down">
			                  <h5 className='skill-title'><i className="fa-brands fa-opencart"></i> Opencart</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={opencart} data-progress='79%'></div>
			                  </div>
			                </div>
							<div className='skill' data-aos="flip-down">
			                  <h5 className='skill-title'><i className="fa-brands fa-drupal"></i> Drupal</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={drupal} data-progress='65%'></div>
			                  </div>
			                </div>
			                <div className='skill' data-aos="flip-down">
			                  <h5 className='skill-title'><i className="fa-brands fa-php"></i> PHP / MySQL</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={php} data-progress='65%'></div>
			                  </div>
			                </div>
			                <div className='skill' data-aos="flip-down">
			                  <h5 className='skill-title'><i className="fa-brands fa-google"></i> SEO</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={seo} data-progress='75%'></div>
			                  </div>
			                </div>
			              </div>
					</div>
				</div>
			</div>
		</section>
    );
}

export default Skills;