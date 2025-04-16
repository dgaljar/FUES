import React from 'react'
import './Partners.css'
import CustomSlider from './CustomSlider'

function Partners() {
  return (
    <section className="partneri">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2>Naši partneri</h2>
          <p className='p-4'>Zajedno s našim partnerima isporučujemo najkvalitetnija solarna rješenja. Suradnja s vodećim brendovima omogućuje nam da vam ponudimo vrhunsku tehnologiju, sigurnost i dugotrajnu vrijednost.</p>
            <CustomSlider slidesNbr={7} auto={true}>
              <div >
              <a href="https://www.eaton.com/gb/en-gb.html" tabindex="-1" className='partners'><img src="/img/partners/eaton.webp" alt='Eaton' /></a>
              </div>
              <div >
              <a href="https://solar.huawei.com/hr/" tabindex="-1" className='partners'><img src="/img/partners/huawei.webp" alt='Huawei' /></a>
              </div>
              <div >
              <a href="https://www.longi.com/en/" tabindex="-1" className='partners'><img src="/img/partners/longi_solar.webp" alt='Longi Solar' /></a>
              </div>
              <div >
              <a href="https://www.phoenixcontact.com/hr-hr/" tabindex="-1" className='partners'><img src="/img/partners/phoenix_contact.webp" alt='Phoenix Contact' /></a>
              </div>
              <div >
              <a href="https://www.solaredge.com/en" tabindex="-1" className='partners'><img src="/img/partners/solar_edge.webp" alt='Solar Edge' /></a>
              </div>
              <div >
              <a href="https://www.suntech-power.com/" tabindex="-1" className='partners'><img src="/img/partners/suntech.webp" alt='Suntech' /></a>
              </div>
              <div >
              <a href="https://www.trinasolar.com/en-glb" tabindex="-1" className='partners'><img src="/img/partners/trina_solar.webp" alt='Trina Solar' /></a>
              </div>
              
            </CustomSlider>
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default Partners