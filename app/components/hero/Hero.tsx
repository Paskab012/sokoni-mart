"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "../common/slides/Slide";
import Img1 from "../../../public/bg1.svg";
import Img2 from "../../../public/bg2.svg";
import Img3 from "../../../public/bg3.svg";
import { NextArrow, PrevArrow } from "../common/slides/arrows";

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false
  };

  const slideData = [
    {
      id: 0,
      img: Img1,
      title: "The VIMA app – your passport to effortless shopping",
      mainTitle: "Browse, tap, and order with ease",
      btnText: "Shop Now",
      textColor: "#000000",
      bgColor: "none"
    },
    {
      id: 1,
      img: Img2,
      title: "We have all your listing",
      mainTitle: "Discover your Luxury Real Estate",
      btnText: "Shop Now",
      textColor: "#ffffff",
      bgColor: "none"
    },
    {
      id: 2,
      img: Img3,
      title: "Receive personalized job recommendations",
      mainTitle:
        "Join over 2 million professionals and boost your career growth!",
      btnText: "Join Now",
      textColor: "#000000",
      bgColor: "#ffffff40"
    }
  ];

  return (
    <div className='w-auto mx-auto flex justify-center'>
      <div className='w-full'>
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              mainTitle={item.mainTitle}
              title={item.title}
              btnText={item.btnText}
              textColor={item.textColor}
              bgColor={item.bgColor}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
