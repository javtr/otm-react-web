import React,{useRef} from "react";
import BuyButton from "../components/pure/buyButton";
import Footer from "../components/pure/footer";
import Hero from "../components/pure/hero";
import Whatis from "../components/pure/whatis";
import Advantages from "../components/pure/advantage";
import Features from "../components/container/features";
import TestimonyCont from "../components/container/testimonyCont";


const Home = () => {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()   
  // const executeScroll = () => {console.log("chau");};   



  return (
    <div className="body-home">
      <Hero scroll={executeScroll}></Hero>
      <Whatis refProp={myRef}></Whatis>
      <Features ></Features>
      <Advantages></Advantages>
      <TestimonyCont></TestimonyCont>
      <BuyButton></BuyButton>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
