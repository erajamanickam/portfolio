import React from 'react';

function Header() {
  return (
    <header id='header-sticky' className='sticky'>
        <div className='container'>
          <nav className='navbar container navbar-expand-lg navbar-light bg-nav'>
            <div className='container-fluid'>
              <a className='navbar-brand' href='/'>
              ⚛️ Raja  
              </a>
              <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'>
                <i className='uil uil-list-ul'></i>
                </span>
              </button>
              <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'><i className='uil uil-estate'></i> Home </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#about'><i className='uil uil-user'></i> About</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#experience'><i className='uil uil-bag-alt'></i> Experience</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#skills'><i className='uil uil-react'></i> Skills</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#blog'><i className='uil uil-pen'></i> Blog</a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#contact'><i className='uil uil-calling'></i> Contact</a>
                  </li>
                </ul>
                <div className="d-flex">
                <input type="checkbox" className="checkbox" id="checkbox" />
                  <label for="checkbox" className="checkbox-label">
                    <i className="uil uil-moon"></i>
                    <i className="uil uil-sun"></i>
                    <span className="ball"></span>
                  </label>
                </div>
              </div>
            </div>
          </nav>
        </div>
		</header>
  );
}

export default Header;
