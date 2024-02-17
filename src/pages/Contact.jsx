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
            <h2>Get In Touch</h2>
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

        </div>
    );
};

export default Contact;
