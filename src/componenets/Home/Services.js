import React, { useEffect, useState, useRef } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Services.css";
import "animate.css";

function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`services ${
        isVisible ? "animate__animated animate__slideInUp" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div id="services1" className="col-md-4 animate__animated">
            <div className="serviceInfo d-flex flex-column justify-content-between align-items-center p-4">
              <LazyLoadImage src="img/solarne-elektrane.webp" alt="Solarne elektrane" effect="blur" />
              <h2 className="text-center text-md-start">Solarne eleketrane</h2>
              <p>
                Početak naše vizije stavlja fotonaponske sustave u prvi plan,
                koji vam omogućuje da energiju koju sami proizvedete iskoristite
                na način koji najbolje odgovara Vašim potrebama. Solarna
                elektrana je sve značajniji i zastupljeniji obnovljivi izvor
                energije koji koristi izravnu sunčevu svjetlost odnosno
                energiju, koju pak pretvara u električnu energiju. FUES nudi
                cjelovite usluge vezane uz solarne elektrane, pružajući stručnu
                podršku od ideje do realizacije u svim fazama projekta
              </p>
            </div>
          </div>
          <div id="services2" className="col-md-4 animate__animated">
            <div className="serviceInfo d-flex flex-column justify-content-between align-items-center p-4">
              <LazyLoadImage src="img/inovativne-tehnologije.webp" alt="Inovativna tehnologija" effect="blur" />
              <h2 className="text-center text-md-start">
                Inovativna Tehnologija
              </h2>
              <p>
                Kroz naš široki asortiman inovativnih tehnologija, uključujući
                napredne izolacijske boje i različite mogućnosti skladištenja
                energije, naši klijenti mogu optimizirati potrošnju i pohranu
                proizvedene energije. Nudimo rješenja koja omogućuju
                skladištenje energije u električnom i toplinskom obliku,
                smanjujući ovisnost o vanjskim dobavljačima i umanjujući
                troškove. Naš cilj je pružiti rješenja koja pridonose globalnim
                naporima za smanjenje emisije CO₂, povećavajući energetsku
                učinkovitost te promičući održivi razvoj i zaštitu okoliša.
              </p>
            </div>
          </div>
          <div id="services3" className="col-md-4 animate__animated">
            <div className="serviceInfo d-flex flex-column justify-content-between align-items-center p-4">
              <LazyLoadImage src="img/prilagodba-propisima.webp" alt="Zakonski propisi" effect="blur" />
              <h2 className="text-center text-md-start">
                Prilagodba propisima
              </h2>
              <p>
                Naši projekti su u skladu s najnovijim zakonskim propisima
                Europske unije i Hrvatske. Osiguravamo da svi sustavi koje
                implementiramo imaju odgovarajuće certifikate i dokumentaciju, a
                naši stručnjaci su upoznati s važećim zakonima koji reguliraju
                obnovljive izvore energije i energetske standarde. Time jamčimo
                sigurnost i kvalitetu naših rješenja, koja odgovaraju
                najsuvremenijim ekološkim zahtjevima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
