import React from "react";
import "./Faq.css";

function Faq() {
  return (
    <section className="faq">
      <div className="conatiner">
        <div className="row">
          <div className="d-flex flex-column align-items-center">
            <div className="faq-header">
              <h2>FAQ</h2>
            </div>

            <div className="faq-content">
              <div className="faq-question">
                <input id="q1" type="checkbox" className="panel" />
                <div className="plus">+</div>
                <label htmlFor="q1" className="panel-title">
                  Koliko mogu uštedjeti prelaskom na solarnu energiju?
                </label>
                <div className="panel-content">
                  Iznos uštede ovisi o vašoj potrošnji i veličini sustava, ali
                  većina korisnika smanji račune za struju i do 70%. U nekim
                  slučajevima, višak energije se može vratiti u mrežu i dodatno
                  isplatiti.
                </div>
              </div>

              <div className="faq-question">
                <input id="q2" type="checkbox" className="panel" />
                <div className="plus">+</div>
                <label htmlFor="q2" className="panel-title">
                  Kolika je garancija na solarne panele?
                </label>
                <div className="panel-content">
                  Standardna garancija za panele iznosi 25 godina, a za
                  invertere i ostalu opremu najčešće 10–15 godina. Naši sustavi
                  dolaze isključivo s certificiranom i pouzdanom opremom.
                </div>
              </div>

              <div className="faq-question">
                <input id="q3" type="checkbox" className="panel" />
                <div className="plus">+</div>
                <label htmlFor="q3" className="panel-title">
                  Trebam li dozvolu za ugradnju solarnih panela?
                </label>
                <div className="panel-content">
                  Za kućne sustave često nije potrebna građevinska dozvola, ali
                  procedura može varirati ovisno o lokaciji. Mi vam pomažemo u
                  cijelom administrativnom procesu.
                </div>
              </div>

              <div className="faq-question">
                <input id="q4" type="checkbox" className="panel" />
                <div className="plus">+</div>
                <label htmlFor="q4" className="panel-title">
                  Radi li solarni sustav kada nema sunca?
                </label>
                <div className="panel-content">
                  Da, sustav i dalje radi pri difuznoj svjetlosti, ali s manjom
                  učinkovitošću. Za potpunu autonomiju moguće je ugraditi
                  baterije koje pohranjuju višak energije za kasniju upotrebu.
                </div>
              </div>

              <div className="faq-question">
                <input id="q5" type="checkbox" className="panel" />
                <div className="plus">+</div>
                <label htmlFor="q5" className="panel-title">
                  Koliko traje instalacija sustava?
                </label>
                <div className="panel-content">
                  Za većinu kućanstava, instalacija traje od 1 do 3 dana, ovisno
                  o složenosti. Nakon toga slijedi spajanje i puštanje u rad,
                  što obavljamo u najkraćem mogućem roku
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
