import React from 'react';

const html = {	width: '95%'}
const react = {	width: '60%'}
const js = { width: '70%'}
const css = { width: '80%'}
const bootstrap = {	width: '80%'}
const wordpress = {	width: '60%'}
const php = { width: '65%'}
const seo = { width: '75%'}


function Skills() {
    return (
        <section className='skills' id='skills'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h1 className='title'>Skills</h1>
						<div className='title-bar'></div>
					</div>
					<div className='col-12 col-lg-6'>
						 <div className='skills'>
						 	<div className='skill'>
			                  <h5 className='skill-title'>HTML5</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={html} data-progress='95%'></div>
			                  </div>
			                </div>
			                <div className='skill'>
			                  <h5 className='skill-title'>React JS</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={react} data-progress='60%' ></div>
			                  </div>
			                </div>
			                <div className='skill'>
			                  <h5 className='skill-title'>Javascript</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={js} data-progress='70%'></div>
			                  </div>
			                </div>
							<div className='skill'>
			                  <h5 className='skill-title'>CSS3</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={css} data-progress='80%'></div>
			                  </div>
			                </div>
			            </div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='skills'>
							<div className='skill'>
			                  <h5 className='skill-title'>Bootstrap</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={bootstrap} data-progress='80%'></div>
			                  </div>
			                </div>
			                <div className='skill'>
			                  <h5 className='skill-title'>WordPress</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={wordpress} data-progress='60%'></div>
			                  </div>
			                </div>
			                <div className='skill'>
			                  <h5 className='skill-title'>PHP / MySQL</h5>
			                  <div className='skill-bar'>
			                    <div className='skill-progress' style={php} data-progress='65%'></div>
			                  </div>
			                </div>
			                <div className='skill'>
			                  <h5 className='skill-title'>SEO</h5>
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