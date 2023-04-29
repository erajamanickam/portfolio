import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import youtube from '../img/youtube-thumbnail.png';

function Youtube() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	  }, []);
    return (
        <section className='youtube' id='youtube'>
			<div className='container'>
            <div className='row'>
					<div className='col-12' data-aos="fade-down">
						<h1 className='title'>Subscribe <i className='uil uil-youtube'></i></h1>
						<div className='title-bar'></div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-5 col-12 align-self-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
						<img src={youtube} alt='Raja Manickam youtube channel'/>
					</div>
					<div className='col-lg-7 col-12 align-self-center' data-aos="fade-down">
						<h4 className='pt-5 pt-lg-0'>Subscribe to stay tunes, and get updates</h4>
						<p className='pt-3'>Here I upload videos and article related to helpful coding projects in Javascript, Reactjs, PHP, Nodejs, Express, MySQL web development technologies</p>
                        <div className="youtube-cta">
                            <a href='https://www.youtube.com/@rajamanickamweb' target='_blank' rel="noopener noreferrer" className='subscribe'>Subscribe <i className='uil uil-bell'></i></a>
                            <a href='https://www.youtube.com/watch?v=UPyNp-SVV4M' target='_blank' rel="noopener noreferrer" className='border-cta ms-3'>Go to videos </a>
                        </div>
					</div>
					
				</div>
			</div>
		</section>
    );
}

export default Youtube;