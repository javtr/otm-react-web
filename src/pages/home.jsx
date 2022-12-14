import React from "react";
import BuyButton from "../components/pure/buyButton";
import Footer from "../components/pure/footer";
import Hero from "../components/pure/hero";
import Whatis from "../components/pure/whatis";
import Advantages from "../components/pure/advantage";
import Features from "../components/container/features";


const Home = () => {
  return (
    <div className="body-home">
      <Hero></Hero>
      <Whatis></Whatis>
      <Features></Features>
      <Advantages></Advantages>
      <BuyButton></BuyButton>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
