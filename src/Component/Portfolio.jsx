import React, { useEffect } from 'react';
import agami from '../img/agami-network-chennai.png';
import sadak from '../img/sadakathullah-appa-college.png';
import nalahotel from '../img/nala-hotels.png';
import admission from '../img/online-admission-portal.png';
import alshifa from '../img/al-shifa-ayush-hospital.png';
import nansei from '../img/nansei-organic-ecommerce.png';
import kpl from '../img/krain-power-line.png';
import skytrack from '../img/skytrack-counselling.png';
import jrpaint from '../img/jr-paintings-chennai.png';
import AOS from 'aos';
import "aos/dist/aos.css";

function Portfolio() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	  }, []);
    return (
        <section className='portfolio' id='portfolio'>
			<div className='container'>
				<div className='row'>
					<div className='col-12' data-aos="fade-down">
						<h2 className='title'>Portfolio</h2>
						<div className='title-bar'></div>
					</div>
			 <div className='row'>
					<div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="1000">
					   <div className='card mt-20'>
						  <img src={agami} className='card-img-top' alt='Agami Network' />
						  <div className='card-body'>
						    <h5 className='card-title'>Agami Network</h5>
						    <a href='https://www.agami.network/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="1000">
					   <div className='card mt-20'>
						  <img src={sadak} className='card-img-top' alt='Sadakathullah Appa College' />
						  <div className='card-body'>
						    <h5 className='card-title'>Sadakathullah Appa College</h5>
						    <a href='http://www.sadakath.ac.in/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="1000">
					   <div className='card mt-20'>
						  <img src={skytrack} className='card-img-top' alt='Skytrack Counselling' />
						  <div className='card-body'>
						    <h5 className='card-title'>Skytrack Counselling</h5>
						    <a href='https://skytrackcounselling.in/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="2000">
					   <div className='card mt-20'>
						  <img src={kpl} className='card-img-top' alt='Krain Power Line' />
						  <div className='card-body'>
						    <h5 className='card-title'>Krain Power Line</h5>
						    <a href='https://krainpowerline.com/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="2000">
					   <div className='card mt-20'>
						  <img src={alshifa} className='card-img-top' alt='Al Shifa Ayush Hospital' />
						  <div className='card-body'>
						    <h5 className='card-title'>Al Shifa Ayush Hospital </h5>
						    <a href='http://www.alshifaayush.com/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="2000">
					   <div className='card mt-20'>
						  <img src={nansei} className='card-img-top' alt='Nansei Organic Shop' />
						  <div className='card-body'>
						    <h5 className='card-title'>Nansei Organic</h5>
						    <a href='https://www.nanseionline.com/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="3000">
					   <div className='card mt-20'>
						  <img src={admission} className='card-img-top' alt='Ambai Arts College Admission' />
						  <div className='card-body'>
						    <h5 className='card-title'>College Admission </h5>
						    <a href='https://www.admissionself.ambaiartscollege.org/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="3000">
					   <div className='card mt-20'>
						  <img src={jrpaint} className='card-img-top' alt='JR Paintings' />
						  <div className='card-body'>
						    <h5 className='card-title'>JR Paintings</h5>
						    <a href='https://www.jrpaintings.com/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4' data-aos="fade-up" data-aos-duration="3000">
					   <div className='card mt-20'>
						  <img src={nalahotel} className='card-img-top' alt='Nala Hotel' />
						  <div className='card-body'>
						    <h5 className='card-title'>Nala Hotel</h5>
						    <a href='https://www.nalahotel.com/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					</div>
				</div>
			</div>
		</section>
    );
}

export default Portfolio;