import React from 'react';
import '../assets/css/keja.css';
import register from '../assets/images/keja-register.png';
import allProperties from '../assets/images/keja-all-properties.png';
import property from '../assets/images/keja-property.png';
import payments from '../assets/images/keja-payments.png';

const Keja = () => {

    const kejaData = [
        {
            title: "Regsiter",
            image: register,
            text: "Property Owners have the ability to register their properties."
        },
        {
            title: "All Properties",
            image: allProperties,
            text: "Property Owners have a view of all their properties."
        },
        {
            title: "Property",
            image: property,
            text: "Property Owners have a view of their individual properties."
        },
        {
            title: "Payments",
            image: payments,
            text: "Property Owners have a view of all their payments per property and aggregated."
        },
    ]
    return (
        <div className='main-container keja'>
            <div className="keja-header">
                <h2>Keja, Coming Soon!!</h2>
            </div>
            <div className="keja-body">
                {kejaData.map((section, index) => (
                    <div key={index} className={`keja-section ${index % 2 === 0 ? 'keja-section-right' : 'keja-section-left'}`}>
                        <div className="keja-section-image">
                            <img className="keja-image" src={section.image} alt={section.title} />
                        </div>
                        <div className="keja-section-text">
                            <h3>{section.title}</h3>
                            <p>{section.text}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Keja;

