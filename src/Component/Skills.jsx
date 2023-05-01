import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import react from '../img/react.png';
import express from '../img/expressjs.png';
import mysql from '../img/mysql.png';
import node from '../img/nodejs.png';
import jquery from '../img/jquery.png';
import javascript from '../img/javascript.png';
import php from '../img/php.png';
import bootstrap from '../img/bootstrap.png';



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
						<h2 className='title'>Skills</h2>
						<div className='title-bar'></div>
					</div>
				</div>

				<div className='row'>
					<div className='col-lg-3 col-md-6 col-sm-6 col-6'>
						<img src={react} alt='React'/>
						<p className='text-center pt-3'>React</p>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6 col-6'>
						<img src={node} alt='NodeJS' />
						<p className='text-center pt-3'>NodeJS</p>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6 col-6'>
						<img src={express} alt='Express' />
						<p className='text-center pt-3'>Express</p>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6 col-6'>
						<img src={mysql} alt='MySQL' />
						<p className='text-center pt-3'>MySQL</p>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6 col-6'>
						<img src={javascript} className="pt-3" alt='Javascript' />
						<p className='text-center pt-3'>Javascript</p>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6 col-6'>
						<img src={jquery} className="pt-3" alt='jquery' />
						<p className='text-center pt-3'>jQuery</p>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6 col-6'>
						<img src={php} className="pt-3" alt='PHP' />
						<p className='text-center pt-3'>PHP</p>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-6 col-6'>
						<img src={bootstrap} className="pt-3" alt='Bootstrap' />
						<p className='text-center pt-3'>Bootstrap</p>
					</div>
				</div>
			</div>
		</section>
    );
}

export default Skills;