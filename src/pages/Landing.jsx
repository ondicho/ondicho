import React from 'react';
import '../assets/css/landing.css';
import banner from '../assets/images/landing.jpg'


const Landing = ({ isMobile }) => {

    return (
        <div className={`main-container landing ${isMobile ? 'mobile' : ''}`}>
            {isMobile ? (
                <div className="banner-background" style={{ backgroundImage: `url(${banner})` }} />
            ) : (
                <div className="banner">
                    <img className="banner-img" src={banner} alt="banner" />
                </div>
            )}
            <div className="cta">
                <div className="cta-text">
                    <p>
                        Albert Ondicho,
                    </p>
                    <p>
                        Software Engineer based in Nairobi.
                    </p>
                </div>
                <div className="cta-action">
                    <button className='cta-button'>View Portfolio</button>
                </div>
            </div>
        </div>
    )
}

export default Landing;
