import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import banner from '../assets/images/ondicho.jpg';
import banner2 from '../assets/images/banner.jpeg';
import '../assets/css/carousel.css'

// Add the cta div as the second item in the images array
export const images = [
//   banner,
  banner2,
  <div className="cta">
    <div className="cta-text">
      <p>Albert Ondicho,</p>
      <p>Software Engineer based in Nairobi.</p>
    </div>
    <div className="cta-action">
      {/* <button className='cta-button'>View Portfolio</button> */}
    </div>
  </div>
];

// Update the imageByIndex function to handle the new structure of the images array
const imageByIndex = (index) => images[index % images.length];

const Carousel = (props) => {
    // Destructure the options prop if you have any
    const { options } = props;
    const [emblaRef] = useEmblaCarousel(options);
  
    // Create a slides array that will be used to map over the images
    const slides = images.map((_, index) => index);
  
    return (
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index +   1}</span>
                </div>
                {/* Render the image or the cta div based on the index */}
                {typeof imageByIndex(index) === 'string' ? (
                  <div className="image-wrapper"> {/* Add this div to wrap the image */}
                    <img
                      className="embla__slide__img"
                      src={imageByIndex(index)}
                      alt="Your alt text"
                    />
                  </div>
                ) : (
                  imageByIndex(index)
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Carousel;
