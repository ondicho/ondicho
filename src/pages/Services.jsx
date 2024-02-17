import React from 'react';
import '../assets/css/landing.css';
import banner from '../assets/images/landing.jpg';
import ServicesData from '../data/ServicesData';

const Services = () => {
  return (
    <div className='main-container services'>
      <h2>My Services</h2>
      <div className="service-list">
        {ServicesData.map((service, index) => (
          <div key={index} className="service">
            <div className="service-icon">
              {service.icon && <img src={service.icon} alt={`${service.title} icon`} />}
            </div>
            <div className="service-description">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="service-stack">
              {service.stack && service.stack.map((tech, stackIndex) => (
                <span key={stackIndex}>{tech} | </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

