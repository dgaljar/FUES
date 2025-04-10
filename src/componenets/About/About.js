import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./About.css";

function About() {
  return (
    <main className="about">
      <div className="container">
        <div className="row p-5 d-flex justify-content-center">
          <div className="aboutinfo">
            <h1>O nama</h1>
            <h2>Vaš partner na putu prema održivoj budućnosti</h2>
            <p>
              Mi smo tvrtka koja se već više od 20 godina bavi stvaranjem
              održivih energetski učinkovitih rješenja. Naša strast prema
              obnovljivim izvorima energije omogućila nam je da postanemo lideri
              u pružanju visokokvalitetnih solarnih sustava. S iskustvom koje
              smo stekli kroz rad na različitim projektima, pomažemo našim
              klijentima da smanje troškove energije, povećaju energetsku
              neovisnost i doprinesu očuvanju okoliša. Naša filozofija je
              jednostavna – svaki korak prema zelenoj energiji je korak prema
              boljoj i održivijoj budućnosti.
            </p>
          </div>
        </div>
        <div className="row p-5 mb-5 justify-content-center">
          <div className="aboutinfo">
            <h3>Upoznajmo se</h3>
            <p>
              Naša tvrtka je više od samo pružatelja usluga. Mi smo partneri na
              vašem putu prema energetskoj neovisnosti. Kroz naše inovativne i
              visoko učinkovite solarne sustave, želimo da svaki korisnik
              prepozna važnost korištenja obnovljivih izvora energije, kako bi
              smanjio troškove i imao dugoročne koristi.
            </p>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-md-6">
            <h3>Misija</h3>
            <p>
              Naša misija je omogućiti svakom korisniku pristup čistoj,
              učinkovitoj i održivoj energiji. Kroz inovativne solarne
              tehnologije, stručnost i visoku kvalitetu usluga, pomažemo našim
              klijentima da postignu energetsku neovisnost, smanje troškove i
              utjecaj na okoliš. Uvjereni smo da je svaka ušteda energije korak
              prema zdravijem planetu.
            </p>
            <ul>
              <li>
                Razvoj i implementaciju inovativnih solarnih rješenja koja
                osiguravaju dugoročnu uštedu.
              </li>
              <li>
                Pomoć klijentima u postizanju energetske neovisnosti kroz
                kvalitetne i pouzdane sustave.
              </li>
              <li>
                Edukaciju i promicanje svijesti o važnosti obnovljivih izvora
                energije za očuvanje okoliša.
              </li>
            </ul>
          </div>
          <div className="col-md-6 px-5 d-flex">
            <LazyLoadImage
              className="mission-vision"
              src="/img/misija.avif"
              alt="Solarni paneli - kuca"
              effect="blur"
            />
          </div>
        </div>
        <div className="row p-5 px-5">
          <div className="col-md-6 px-5 order-md-2">
            <h3>Vizija</h3>
            <p>
              Naša vizija je postati vodeći partner u rješenjima obnovljivih
              izvora energije, omogućujući svakom korisniku pristup pametnoj i
              čistoj energiji. Težimo tome da oblikujemo budućnost u kojoj će
              solarna energija biti temelj svake energetske potrebe, čineći naš
              svijet održivijim, zelenijim i ekonomičnijim.
            </p>
            <ul>
              <li>
                Postati pioniri u industriji solarnih rješenja, s globalnim
                dosegom.
              </li>
              <li>
                Učiniti obnovljive izvore energije dostupnima svima, od
                kućanstava do velikih poduzeća.
              </li>
              <li>
                Stvoriti ekološki održiv svijet kroz širenje solarnih
                tehnologija i smanjenje globalnog ugljičnog otiska
              </li>
            </ul>
          </div>
          <div className="col-md-6 px-5 order-md-1 d-flex">
            <LazyLoadImage
              className="mission-vision"
              src="/img/vizija.avif"
              alt="Solarni paneli i vjetro-elektrane"
              effect="blur"
            />
          </div>
        </div>
        {/* <div className="row text-center p-5">
          <h3>Upoznajte naš tim</h3>
          <p className="mb-5">
            Naš tim čine stručnjaci s dugogodišnjim iskustvom u industriji
            solarnih tehnologija. Strastveni smo u vezi s našim radom i uvijek
            težimo izvrsnosti u svemu što radimo. Kroz timski rad, inovativna
            rješenja i stručnost, pomažemo našim korisnicima da postignu svoje
            energetske ciljeve.
          </p>
          <div className="col-md-4">
            <div className="profile">
              <LazyLoadImage src="https://placehold.co/600x400" alt="" effect="blur" />
              <h3>Ivan Horvat</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile">
              <LazyLoadImage src="https://placehold.co/600x400" alt="" effect="blur" />
              <h3>Ivan Horvat</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile">
              <LazyLoadImage src="https://placehold.co/600x400" alt="" effect="blur" />
              <h3>Ivan Horvat</h3>
              <p>CEO</p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default About;
