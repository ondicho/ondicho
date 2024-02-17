import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Portfolio from './Portfolio';
import Landing from './Landing';
import Carousel from './Carousel'; // Import the Carousel component

const Home = () => {
    const isMobile = window.innerWidth <=  768;

    // Define the options for the Carousel if you have any
    const carouselOptions = {}; // Replace with your actual options

    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Ondciho" />
                <meta name="keywords" content="react, meta tags, seo" />
                <meta name="author" content="ondicho" />
                <meta property="og:title" content="Ondicho" />
                <meta property="og:description" content="ondixho's portfolio" />
                <meta property="og:image" content="" />
                <meta property="og:url" content="https://ondicho.dev" />
            </Helmet>
            <Navbar />
            <Carousel options={carouselOptions} /> {/* Call the Carousel component here */}
            <Portfolio />
            <Footer />
        </>
    )
}

export default Home;
