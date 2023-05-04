import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import "aos/dist/aos.css";
// import ReCAPTCHA from "react-google-recaptcha";

// export const Contact = () => {
function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });


  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^\+?[1-9][0-9]{9,12}$/;
  const nameRegex = /[0-9a-zA-Z]{3,}/;
  const msgRegex = /[0-9a-zA-Z]{6,}/;

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};
  
    if (!formData.name) {
      isValid = false;
      newErrors.name = 'Name is required *';
    } else if (!nameRegex.test(formData.name)) {
      isValid = false;
      newErrors.name = 'Atleast 3 character name *';
    }

    if (!formData.phone) {
      isValid = false;
      newErrors.phone = 'Phone no is required *';
    } else if (!phoneRegex.test(formData.phone)) {
      isValid = false;
      newErrors.phone = 'Phone is invalid *';
    }
  
    if (!formData.email) {
      isValid = false;
      newErrors.email = 'Email is required *';
    } else if (!emailRegex.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Email is invalid';
    }
  
    if (!formData.message) {
      isValid = false;
      newErrors.message = 'Message is required *';
    } else if (!msgRegex.test(formData.message)) {
      isValid = false;
      newErrors.message = 'Atleast 6 character message';
    }
  
    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    emailjs.sendForm('service_2hplr7f', 'template_0amgy3s', form.current, 'user_e6CZf4K6kU9TCU80qBwFO')
      .then((result) => {
          alert('Thank You, I am shortly contact with you');
          window.location.reload();
      }, (error) => {
          alert('Oops!. Try again later');
      });
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
      


    return(
        <section className='contact' id='contact'>
        <div className='container'>
            <div className='row'>
                <div className='col-12' data-aos="fade-down">
                    <h2 className='title'>Get in Touch</h2>
                    <div className='title-bar'></div>
                </div>
                <div className='col-12 col-lg-6 align-self-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                    <h5>Contact Info</h5>
                    <ul>
                        <li>
                            <i className='uil uil-outgoing-call'></i>
                            <span className='info-details'>
                                <h6>Phone</h6>
                                <span className='info-value'><a href='tel:+917449193747'> +91 7449193747</a></span>
                            </span>
                        </li>
                        <li>
                            <i className='uil uil-envelope-edit'></i>
                            <span className='info-details'>
                                <h6>Email</h6>
                                <span className='info-value'><a href='mailto:erajamanickam72@gmail.com'> erajamanickam72@gmail.com</a></span>
                            </span>
                        </li>
                        <li>
                            <i className='uil uil-location-pin-alt'></i>
                            <span className='info-details'>
                                <h6>Location</h6>
                                <span className='info-value'> Chennai, India</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className='col-12 col-lg-6 align-self-center' data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-delay="100">
                    <h5 className='m-mr-30'>Message Me</h5>
                    <form ref={form} onSubmit={sendEmail}>
                      <input 
                        type='text' 
                        name='name' 
                        className='form-control mb-3' 
                        id='name' 
                        placeholder='Your Name' 
                        value={formData.name}
                        onChange={event =>
                            setFormData({ ...formData, name: event.target.value })
                        }
                       />
                       {errors.name && <p className='error'>{errors.name}</p>}

                      <input 
                        type='email' 
                        name='email' 
                        className='form-control mb-3' 
                        placeholder='Your Email' 
                        id="email"
                        value={formData.email}
                        onChange={event =>
                            setFormData({ ...formData, email: event.target.value })
                        }
                      />
                      {errors.email && <p className='error'>{errors.email}</p>}         

                      <input 
                        type='text' 
                        name='phone' 
                        className='form-control mb-3'
                        placeholder='Your mobile no' 
                        id="phone"
                        value={formData.phone}
                        onChange={event =>
                            setFormData({ ...formData, phone: event.target.value })
                        }
                       />
                      {errors.phone && <p className='error'>{errors.phone}</p>}
                      
                      <textarea 
                        name='message' 
                        className='form-control mb-3' 
                        placeholder='Your Message'
                        id="message"                      
                        value={formData.message}
                        onChange={event =>
                            setFormData({ ...formData, message: event.target.value })
                        }
                      ></textarea>
                      {errors.message && <p className='error'>{errors.message}</p>}
                      {/* <ReCAPTCHA
                            sitekey="6LcBCcslAAAAAIiIrqrw4rt7c0uY_Z0-Z-MwNsD1"
                            onChange={validateForm}
                        /> */}
                      <input type="submit" className="border-cta" value="Submit" />
                      
					</form>
				</div>
			</div>
		</div>
		</section>
  );
}
export default Contact;					