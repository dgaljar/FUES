import React, { useState } from "react";
import "./Faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="text-center">FAQ</h2>
        <div className="row">
          <div className="col-12 px-4">

            <div className="content">
              <p onClick={() => toggleOpen(0)}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={openIndex === 0 ? "open-icon" : ""}
                />
                Koliko mogu uštedjeti prelaskom na solarnu energiju?
              </p>
              <div className={`wrapper ${openIndex === 0 ? "is-open" : ""}`}>
                <div className="inner">
                  Iznos uštede ovisi o vašoj potrošnji i veličini sustava, ali
                  većina korisnika smanji račune za struju i do 70%. U nekim
                  slučajevima, višak energije se može vratiti u mrežu i dodatno
                  isplatiti.
                </div>
              </div>
            </div>
    
            <div className="content">
              <p onClick={() => toggleOpen(1)}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={openIndex === 1 ? "open-icon" : ""}
                />
                Kolika je garancija na solarne panele?
              </p>
              <div className={`wrapper ${openIndex === 1 ? "is-open" : ""}`}>
                <div className="inner">
                  Standardna garancija za panele iznosi 25 godina, a za
                  invertere i ostalu opremu najčešće 10–15 godina. Naši sustavi
                  dolaze isključivo s certificiranom i pouzdanom opremom.
                </div>
              </div>
            </div>
   
            <div className="content">
              <p onClick={() => toggleOpen(2)}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={openIndex === 2 ? "open-icon" : ""}
                />
                Trebam li dozvolu za ugradnju solarnih panela?
              </p>
              <div className={`wrapper ${openIndex === 2 ? "is-open" : ""}`}>
                <div className="inner">
                  Za kućne sustave često nije potrebna građevinska dozvola, ali
                  procedura može varirati ovisno o lokaciji. Mi vam pomažemo u
                  cijelom administrativnom procesu.
                </div>
              </div>
            </div>

            <div className="content">
              <p onClick={() => toggleOpen(3)}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={openIndex === 3 ? "open-icon" : ""}
                />
                Radi li solarni sustav kada nema sunca?
              </p>
              <div className={`wrapper ${openIndex === 3 ? "is-open" : ""}`}>
                <div className="inner">
                  Da, sustav i dalje radi pri difuznoj svjetlosti, ali s manjom
                  učinkovitošću. Za potpunu autonomiju moguće je ugraditi
                  baterije koje pohranjuju višak energije za kasniju upotrebu.
                </div>
              </div>
            </div>

            <div className="content">
              <p onClick={() => toggleOpen(4)}>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={openIndex === 4 ? "open-icon" : ""}
                />
                Koliko traje instalacija sustava?
              </p>
              <div className={`wrapper ${openIndex === 4 ? "is-open" : ""}`}>
                <div className="inner">
                  Za većinu kućanstava, instalacija traje od 1 do 3 dana, ovisno
                  o složenosti. Nakon toga slijedi spajanje i puštanje u rad,
                  što obavljamo u najkraćem mogućem roku.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
