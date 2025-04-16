import React from 'react';
import Slider from 'react-slick';

const CustomSlider = ({ children, slidesNbr, auto }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: slidesNbr,
    slidesToScroll: 1,
    autoplay: auto,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // za mobilne uređaje
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // za tablet i veće ekrane
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default CustomSlider;
