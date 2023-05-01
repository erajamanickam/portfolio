import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import devlogo from '../img/dev-to.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Blog () {

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
		const response = await fetch('https://dev.to/api/articles?username=rajamanickam');
		const jsonData = await response.json();
		setData(jsonData.slice(0, 5)); // Limiting the data to the first 10 elements
	};
		fetchData();
	}, []);
	
	
	
	  var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		  {
			breakpoint: 1366,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 767,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };

    return (
        <section className='blog' id='blog'>
			<div className='container'>
				<div className='row'>
					<div className='col-12' data-aos="fade-down">
						<h2 className='title'>Recent Blog</h2>
						<div className='title-bar'></div>
						<p className='text-center'>Blog data fetch from the  <a href="https://dev.to/" target='_blank'>dev.to</a> api</p>
					</div>
				</div>
			
				<div className='row'>	
				<Slider {...settings}>
				{data.map((item) => (
					<div className='' data-aos="fade-up" data-aos-duration="1000">
					   <div className='card mt-20 mx-3'>
						  <img src={item.cover_image} className='card-img-top' alt={item.title} />
						  <div className='card-body'>
                		<ul className='blog-logo-date mb-0'>
							  <li><p><i className='uil uil-calendar-alt'></i> {item.readable_publish_date}</p></li>
							  <li><img src={devlogo} className='blog-logo' alt='dev.to logo' /></li>
                		</ul>
						<hr />
						    <p className='card-title'><a href={item.url} target='_blank'>{item.title}</a></p>
							<div className='blog-desc'>
								<ul className='d-flex'>
									<li className='pl-3'><i className='uil uil-heart-alt'></i> {item.public_reactions_count}</li>
									<li><i className='uil uil-comment-alt'></i> {item.comments_count}</li>
								</ul>
								<a href={item.url} target='_blank'><i className='uil uil-link'></i> Read More..</a>
							</div>
						  </div>
						</div>
					</div>
				))}
				</Slider>
				</div>  
				</div>
		</section>
    );
}

export default Blog;