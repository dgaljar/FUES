import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css'; 


const CustomSwiper = ({ children, slidesNbr }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      breakpoints={{
        650: {
          slidesPerView: 1,
        },
        938: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: slidesNbr,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
