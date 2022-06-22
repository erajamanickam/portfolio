import React, { Component } from "react";
import Slider from "react-slick";

// import React from 'react';
import agami from '../img/agami.png';
import sadak from '../img/sadak.png';
import nalahotel from '../img/nalahotel.png';
import admission from '../img/admission.png';
import alshifa from '../img/alshifa.png';
import nansei from '../img/nansei.png';




export default class AutoPlay extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear"
        };
    return (
        <section className='portfolio' id='portfolio'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h1 className='title'>Portfolio</h1>
						<div className='title-bar'></div>
					</div>
                    <Slider {...settings}>
                    <div className='col-12 col-lg-4'>
					   <div className='card'>
						  <img src={agami} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>Agami Network</h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
					   <div className='card'>
						  <img src={sadak} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>Sadakathullah Appa College</h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>

					<div className='col-12 col-lg-4'>
					   <div className='card'>
						  <img src={nalahotel} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>Nala Hotel</h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
					   <div className='card mr-20'>
						  <img src={admission} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>College Admission </h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
					   <div className='card mr-20'>
						  <img src={alshifa} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>Al Shifa Ayush Hospital </h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
					   <div className='card mr-20'>
						  <img src={nansei} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>Nansei Organic</h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
          </Slider>
					{/* <div className="wrapper">
         <div className="carousel owl-carousel">
			 <div className='row'>
					<div className='col-12 col-lg-4'>
					   <div className='card'>
						  <img src={agami} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>Agami Network</h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
					   <div className='card'>
						  <img src={sadak} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>Sadakathullah Appa College</h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>

					<div className='col-12 col-lg-4'>
					   <div className='card'>
						  <img src={nalahotel} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>Nala Hotel</h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
					   <div className='card mr-20'>
						  <img src={admission} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>College Admission </h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
					   <div className='card mr-20'>
						  <img src={alshifa} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>Al Shifa Ayush Hospital </h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					<div className='col-12 col-lg-4'>
					   <div className='card mr-20'>
						  <img src={nansei} className='card-img-top' alt='' />
						  <div className='card-body'>
						    <h5 className='card-title'>Nansei Organic</h5>
						    <a href='#' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
						  </div>
						</div>
					</div>
					</div>
					</div>
					</div> */}
				</div>
			</div>
		</section>
    );
}
}
