import React, { useState } from 'react';
import '../assets/css/contact.css';
import banner from '../assets/images/landing.jpg';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission
        console.log('Form submitted:', formState);
    };

    return (
        <div className='main-container contact'>
            <h6 className='heading'>Get In Touch </h6>
            <div className="contact-body">

                <form className="form-container">

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <div className="blog">


                    <div className="title">
                        <p className="desc">Rate card prices may vary</p>
                    </div>
                    <div className="wrapper">
                        <div className="color black">
                            Advanced (website + admin dashboard)
                            <span className="hex">$ 1200</span>
                        </div>
                        <div className="color chinese-black">
                            Standard (10 Webpages+ seo)
                            <span className="hex">$ 800</span>
                        </div>
                        <div className="color night-rider">

                            Basic (5 webpages)
                            <span className="hex">$ 300</span>
                        </div>
                        <div className="color chinese-white white">
                            Annual Hosting (Billed Separately)
                            <span className="hex">$ 20</span>
                        </div>
                        {/* <div className="color anti-flash-white">
                            anti-flash-white
                            <span className="hex">#f3f3f3</span>
                        </div>
                        <div className="color white">
                            white
                            <span className="hex">#ffffff</span>
                        </div> */}
                        <div className="border"><span>30% Deposit required on project onset</span></div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Contact;
