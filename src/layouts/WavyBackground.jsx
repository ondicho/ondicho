import React from 'react';
import '../assets/css/wavyBackground.css';

const WavyBackground = ({ primaryColor, secondaryColor }) => {
  const backgroundStyle = {
    background: `repeating-linear-gradient(-45deg, ${primaryColor}, ${primaryColor}  10px, ${secondaryColor}  10px, ${secondaryColor}  20px)`,
  };

  return <div className="wavy-background" style={backgroundStyle}></div>;
};

export default WavyBackground;
