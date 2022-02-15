import React from 'react';

function Experience() {
    return (
        <section className='experience' id='experience'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <h1 className='title'>Experience</h1>
                    <div className='title-bar'></div>
                    <div className='exp-list'>
                      <ul>
                        <li>
                          <div className='icon'></div>
                          <span className='time'>June 2021 - Present</span>
                          <h5>Web Designer - <span className='place'>WiseWebTek</span></h5>
                          <p>Chennai</p>
                        </li>
                        <li>
                          <div className='icon'></div>
                          <span className='time'>July 2020 - June 2021</span>
                          <h5>Web Developer - <span className='place'>eThoughtz Technology </span></h5>
                          <p>Tirunelveli</p>
                        </li>
                      </ul>
                    </div>
                </div>
                <div className='col-12 col-lg-6'>
                    <h1 className='title'>Internship</h1>
                    <div className='title-bar'></div>
                    <div className='exp-list'>
                      <ul>
                        <li>
                          <div className='icon'></div>
                          <span className='time'>Mar 2021 - Apr 2021</span>
                          <h5>Web Development Intern - <span className='place'>The Sparks Foundation</span></h5>
                          <p>Online</p>
                        </li>
                        <li>
                          <div className='icon'></div>
                          <span className='time'>Dec 2020 - Mar 2021</span>
                          <h5>Digital Marketing Intern - <span className='place'>Apponix Technologies</span></h5>
                          <p>Online</p>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Experience;