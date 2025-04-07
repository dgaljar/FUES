import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CustomSlider({ children, slidesNbr }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesNbr,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint:1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 938,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return <Slider {...settings}>{children}</Slider>;
}

export default CustomSlider;
