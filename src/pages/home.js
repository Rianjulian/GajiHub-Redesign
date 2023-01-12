import React from "react";
import Features from "../component/Feature";
import Hero from '../component/Hero';
import Media from "../component/Media";
import Prepos from "../component/prepos";
import Price from "../component/Price";
import Promotion from "../component/Promotion";
import Testimonial from "../component/Testimonial";

const Home = () => {
    return (
        <>
        <Hero/>
        <Prepos/>
        <Features/>
        <Promotion/>
        <Price/>
        <Testimonial/>
        <Media/>
        </>
    )
  };

  export default Home;