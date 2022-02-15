import React from 'react';

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <ul className='contact-social'>
                            <li><a href='https://www.linkedin.com/in/rajamanickamweb/' target='_blank'><i className='uil uil-linkedin'></i></a></li>
                            <li><a href='https://github.com/erajamanickam/' target='_blank'><i className='uil uil-github'></i></a></li>
                            <li><a href='mailto:erajamanickam72@gmail.com' target='_blank'><i className='uil uil-envelope-info'></i></a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='back-btn-wrap'>
                        <a href='#' className='back-btn'>
                            <i className='uil uil-location-arrow-alt'></i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <a href='https://wa.me/+917449193747/' className='whatsapp-btn' target='_blank'>
                <i className='uil uil-whatsapp my-float'></i>
            </a>
        </footer>
        // </main>
        // </body>
        // </html>
    );
}

export default Footer;