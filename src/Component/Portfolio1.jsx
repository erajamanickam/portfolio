import React, { useEffect, userEffect } from 'react'
import demoimg from '../img/sadak.png';
function Portfolio1() {
	useEffect(() => {
		document.title = 'Sadakathullah Appa College | Portfolio details'
	})
	return (
	<div>
	  <section className='blog-area section-gap'>
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
					<h2>Sadakathullah Appa College</h2>
						<img src={demoimg} alt=''/>
						<p>Your answer could be improved with additional supporting information. Please edit to add further details, such as citations or documentation, so that others can confirm that your answer is correct. You can find more information on how to write good answers in the help center. Community Bot Dec 24, 2021 at 20:13</p>
						<a href='/' className='btn btn-success'>Back</a>
				</div>
				<div className='col-4'>
					<div>
						<img src={demoimg} alt=''/>
						<h4>Al Shifa Ayush Hospital</h4>
					</div>
					<div>
						<img src={demoimg} alt=''/>
						<h4>Al Shifa Ayush Hospital</h4>
					</div>
					<div>
						<img src={demoimg} alt=''/>
						<h4>Al Shifa Ayush Hospital</h4>
					</div>
				</div>
            </div>
        </div>
    </section>
	</div>
  )
}

export default Portfolio1;