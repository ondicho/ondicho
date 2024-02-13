import React from 'react';

import { Helmet } from 'react-helmet';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Portfolio from './Portfolio';
import Landing from './Landing';


const Home = () => {

    const isMobile = window.innerWidth <=  768;


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
            <Landing isMobile={isMobile} />
            <Portfolio />
            <Footer />

        </>
    )
}

export default Home;
