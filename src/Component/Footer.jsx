import React from 'react';
const backtop = { display: 'none'}

function Footer() {

    const year = new Date().getFullYear();
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <ul className='contact-social'>
                            <li><a href='https://www.linkedin.com/in/rajamanickamweb/' target='_blank'><i className='uil uil-linkedin'></i></a></li>
                            <li><a href='https://github.com/erajamanickam/' target='_blank'><i className='uil uil-github'></i></a></li>
                            <li><a href='mailto:erajamanickam72@gmail.com' target='_blank'><i className='uil uil-envelope-info'></i></a></li>
                            <li><a href='https://dribbble.com/rajamanickamweb' target='_blank'><i className='uil uil-dribbble'></i></a></li>
                            <li><a href='https://www.be.net/rajamanickam3' target='_blank'><i className='uil uil-behance'></i></a></li>
                            <li><a href='https://codepen.io/erajamanickam' target='_blank'><i className='fab fa-codepen'></i></a></li>
                        </ul>
                        <p className='text-center'><i className='uil uil-copyright'></i> Copyright {year}. All rights reserved.</p>
                    </div>                   
                </div>
            </div>
            <a href='https://wa.me/+917449193747/?text=Hello Raja 🤙' className='whatsapp-btn animate__animated animate__backInDown' target='_blank'>
                <i className='uil uil-whatsapp my-float'></i>
            </a>
            <a href="#" id="scroll" style={backtop} className='animate__animated animate__backInDown'>
                <i className="uil uil-top-arrow-from-top"></i>
            </a>
        </footer>
    );
}

export default Footer;