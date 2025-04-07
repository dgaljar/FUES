import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./WhyUs.css";

function WhyUs() {
  return (
    <section className="whyUs">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>Zašto surađivati s nama?</h2>
            <p>
              Odabirom nas ulažete u provjerena, certificirana solarna rješenja
              koja donose uštedu i energetsku neovisnost. Naša misija je
              jednostavna – omogućiti vam održivu energiju kroz inovaciju,
              pouzdanost i brigu o okolišu.
            </p>
          </div>
          <div className="col-md-6">
            <div className="whyUsImg">
              <LazyLoadImage src="img/FUES_web_grafika.png" alt="Obnovljiva energija" effect="blur" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
