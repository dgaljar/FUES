import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero mt-2 mt-mb-0">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="heroTitle">
            <h1>Future <strong>Energy</strong> Solutions</h1>
            <p>Iskoristite snagu sunca uz moderna solarna rješenja koja štede energiju i novac. Mi vam pomažemo da prijeđete na čišći, održiviji i ekonomičniji način života – za vaš dom, tvrtku i planet.</p>
            <a href="#contact" className="cta">Zatraži ponudu</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero