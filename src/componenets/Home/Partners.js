import React from 'react'
import './Partners.css'
import CustomSlider from './CustomSlider'
import { SwiperSlide } from 'swiper/react'

function Partners() {
  return (
    <section className="partneri">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2>Naši partneri</h2>
          <p className='p-4'>Zajedno s našim partnerima isporučujemo najkvalitetnija solarna rješenja. Suradnja s vodećim brendovima omogućuje nam da vam ponudimo vrhunsku tehnologiju, sigurnost i dugotrajnu vrijednost.</p>
            <CustomSlider slidesNbr={6}>
              <SwiperSlide >
              <a href="/" tabindex="-1" className='partners'><img src="/img/lorem-logo.webp" alt='logo' /></a>
              </SwiperSlide>
              <SwiperSlide >
              <a href="/" tabindex="-1" className='partners'><img src="/img/lorem-logo.webp" alt='logo' /></a>
              </SwiperSlide>
              <SwiperSlide >
              <a href="/" tabindex="-1" className='partners'><img src="/img/lorem-logo.webp" alt='logo' /></a>
              </SwiperSlide>
              <SwiperSlide >
              <a href="/" tabindex="-1" className='partners'><img src="/img/lorem-logo.webp" alt='logo' /></a>
              </SwiperSlide>
              <SwiperSlide >
              <a href="/" tabindex="-1" className='partners'><img src="/img/lorem-logo.webp" alt='logo' /></a>
              </SwiperSlide>
              <SwiperSlide >
              <a href="/" tabindex="-1" className='partners'><img src="/img/lorem-logo.webp" alt='logo' /></a>
              </SwiperSlide>
              <SwiperSlide >
              <a href="/" tabindex="-1" className='partners'><img src="/img/lorem-logo.webp" alt='logo' /></a>
              </SwiperSlide>
            </CustomSlider>
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default Partners