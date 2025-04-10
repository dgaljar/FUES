import React, { useEffect, useState, useRef } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Benefits.css";
import "animate.css";

function Benefits() {
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
      id="benefits"
      className={`benefits ${
        isVisible ? "animate__animated animate__slideInUp" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-md-2">
            <div className="benefitsText p-4">
              <h2>prednosti solarne energije</h2>
              <div className="benefitHolder">
                <div className="benefitIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56px"
                    height="56px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 6v16h20v-16h-20zm10 13c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5zm.292-2.114v.614h-.584v-.582c-.603-.01-1.229-.154-1.75-.424l.266-.958c.558.216 1.3.445 1.881.315.671-.152.809-.842.068-1.175-.543-.251-2.205-.469-2.205-1.891 0-.795.605-1.508 1.74-1.663v-.622h.584v.593c.422.011.896.085 1.426.246l-.212.96c-.448-.156-.943-.3-1.425-.27-.868.051-.946.803-.339 1.118.998.469 2.301.818 2.301 2.068.001 1.002-.784 1.537-1.751 1.671zm6.708-12.886h-19v15h-2v-17h21v2z"
                      fill="green"
                    />
                  </svg>
                </div>
                <div className="benefitBenefit">
                  <h3>Štedi novac</h3>
                  <p>
                    Solarna energija značajno smanjuje troškove električne
                    energije, a višak proizvedene energije možete čak i
                    prodavati natrag u mrežu.
                  </p>
                </div>
              </div>
              <div className="benefitHolder">
                <div className="benefitIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56px"
                    height="56px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M0 19h21v-14h-21v14zm9.298-7.21v-3.79l8.535 6.248-5.878-1.728v3.48l-8.789-5.984 6.132 1.774zm14.702-2.54v4.5c0 .69-.56 1.25-1.25 1.25h-.75v-7h.75c.69 0 1.25.56 1.25 1.25z"
                      fill="green"
                    />
                  </svg>
                </div>
                <div className="benefitBenefit">
                  <h3>Štedi energiju</h3>
                  <p>
                    Iskoristite obnovljivi izvor koji se svakodnevno obnavlja –
                    sunce. Bez gubitaka, bez kompromisa, s maksimalnom
                    učinkovitošću.
                  </p>
                </div>
              </div>
              <div className="benefitHolder">
                <div className="benefitIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56px"
                    height="56px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23.322 19.318l-4.072 1.192-1.193-4.072 1.763.964c.737-1.305 1.18-2.798 1.18-4.402 0-3.681-2.224-6.849-5.396-8.242l.623-1.914c3.975 1.657 6.772 5.579 6.772 10.156 0 1.953-.521 3.779-1.416 5.367l1.739.951zm-11.323 2.682c-3.332 0-6.24-1.825-7.796-4.523l1.769-1.026-4.102-1.089-1.089 4.1 1.694-.982c1.899 3.295 5.447 5.52 9.524 5.52 2.202 0 4.248-.654 5.969-1.768l-1.24-1.588c-1.376.854-2.994 1.356-4.729 1.356zm-8.994-8.876l-.006-.124c0-4.625 3.51-8.433 8.004-8.932l-.004 1.932 3.005-2.996-2.995-3.004-.003 2.05c-5.61.503-10.007 5.21-10.007 10.95l.021.402 1.985-.278zm6.126-.564c-.251.862-.146 1.768.415 2.571.904-1.333 2.588-2.767 3.76-3.039-2.395 1.731-3.735 4.16-3.909 6.908h1.011c-.023-1.038.125-2.345.497-2.934.911.302 1.924.125 2.797-.613 1.724-1.463 1.077-5.14 4.112-5.564-4.07-2.224-7.943.124-8.683 2.671z"
                      fill="green"
                    />
                  </svg>
                </div>
                <div className="benefitBenefit">
                  <h3>Čuva okoliš</h3>
                  <p>
                    Solarni sustavi ne ispuštaju štetne emisije, smanjuju vaš
                    ugljični otisak i doprinose zdravijem okolišu za buduće
                    generacije.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="benefitImg p-4">
              <LazyLoadImage src="img/benefit.webp" alt="Solarni paneli" effect="blur" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
