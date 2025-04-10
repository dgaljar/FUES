import React from 'react'
import './Testimonials.css'
import CustomSlider from './CustomSlider'
import { SwiperSlide } from 'swiper/react'

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <CustomSlider slidesNbr={3}>
        <SwiperSlide>
          <div className="d-flex justify-content-center mb-2">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <img src="https://placehold.co/100x100?text=MM" alt="Mirna Marić" className="testimonial-image" />
                <div className="testimonial-details">
                  <h3 className="testimonial-name">Mirna Marić</h3>
                  <p className="testimonial-title">Zagreb</p>
                  <p className="testimonial-message">
                    “Od početne konzultacije do završetka montaže – sve je bilo jasno, brzo i bez stresa. Ekipa je stvarno profesionalna i ljubazna.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <img src="https://placehold.co/100x100?text=JP" alt="Josip Perković" className="testimonial-image" />
                <div className="testimonial-details">
                  <h3 className="testimonial-name text-center">Josip Perković</h3>
                  <p className="testimonial-title text-center">Osijek</p>
                  <p className="testimonial-message">
                    “Računi za struju su mi prepolovljeni! Preporučio bih ih svakome tko razmišlja o solarima. Sve su odradili u roku i objasnili mi svaki korak.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="d-flex justify-content-center">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <img src="https://placehold.co/100x100?text=AK" alt="Ante Kovač" className="testimonial-image" />
                <div className="testimonial-details">
                  <h3 className="testimonial-name">Ante Kovač</h3>
                  <p className="testimonial-title">Split</p>
                  <p className="testimonial-message">
                    “Nisam znao odakle početi, ali su mi sve detaljno objasnili. Instalacija je gotova za dva dana, a sustav radi savršeno. Hvala još jednom!”
                  </p>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        </CustomSlider>
      </div>
    </section>
  )
}

export default Testimonials
