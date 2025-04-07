import React, { useEffect, useState, useRef } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./AboutUs.css";
import "animate.css";

function AboutUs() {
  const [projects, setProjects] = useState(0);
  const [users, setUsers] = useState(0);
  const [energy, setEnergy] = useState(0);
  const sectionRef = useRef(null); // Reference for Intersection Observer
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startAnimation();
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startAnimation = () => {
    const animateCounter = (setValue, target) => {
      let start = 0;
      const duration = 4000;
      const increment = target / (duration / 10);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(interval);
          setValue(target);
        } else {
          setValue(Math.ceil(start));
        }
      }, 10);
    };

    animateCounter(setProjects, 15);
    animateCounter(setUsers, 400);
    animateCounter(setEnergy, 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="aboutus"
      className={`aboutus ${
        isVisible ? "animate__animated animate__slideInUp" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="aboutImg p-4">
              <LazyLoadImage src="img/about.jpg" alt="Instalacija solarnih panela" effect="blur" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="aboutText p-4">
              <h2>O nama</h2>
              <p>
                Gradimo energetski održivu budućnost – danas. Kroz inovacije,
                znanje i strateška partnerstva pomažemo zajednicama i poduzećima
                da pređu na pametnija, čišća i učinkovitija energetska rješenja.
                Naša priča je priča o energiji koja pokreće promjene. Vjerujemo
                da svaka investicija u obnovljive izvore energije nije samo
                korak prema uštedi, već i prema odgovornijem društvu. Uz visoke
                standarde kvalitete i brigu o okolišu, naš cilj je ostaviti
                pozitivan trag za generacije koje dolaze.
              </p>
            </div>
            <div className="aboutNumbers d-flex flex-column flex-md-row justify-content-between p-md-4">
              <div className="counterHolder">
                <div className="counter">{projects}+</div>
                <div className="counterTitle">Projekata</div>
              </div>
              <div className="counterHolder">
                <div className="counter">{users}</div>
                <div className="counterTitle">Korisnika</div>
              </div>
              <div className="counterHolder">
                <div className="counter">{energy} MW</div>
                <div className="counterTitle">Energije</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
