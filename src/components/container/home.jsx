import React from 'react';
import BuyButton from '../pure/buyButton';
import Footer from '../pure/footer';
import Hero from '../pure/hero'
import Whatis from '../pure/whatis';
import Advantages from './advantages';
import Features from './features';

const Home = () => {
    return (
        <div className='body-home'>
        <Hero></Hero>
        {/* <Whatis></Whatis> */}
        <Features></Features>
        {/* <Advantages></Advantages> */}
        {/* <BuyButton></BuyButton> */}
        {/* <Footer></Footer> */}
        </div>
    );
}

export default Home;
