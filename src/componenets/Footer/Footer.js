import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex">
              <div className="me-3">
                <img src="img/FUES_jel_bal_1.png" alt="" />
              </div>
              <div className="">
                <h3>Future Energy Solutions d.o.o.</h3>
                <p>Šandora Petefija 48., 31327 Kopačevo, Hrvatska</p>
                <p>OIB: 23086423149</p>
                <p>
                  Broj telefona:{" "}
                  <a className="footerContact" href="Tel:+385992903989">
                    +385 99 300 0807
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a className="footerContact" href="mailto:info@fues.hr">
                    info@fues.hr
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 text-center text-md-end">
          <ul className="footerSocial">
              <li>
                <Link href="/o-nama">O nama</Link>
              </li>
              <li>
                <Link href="/Kontakt">Kontak</Link>
              </li>
              <li>
                <Link href="/Novosti">Novosti</Link>
              </li>
              <li>
                <Link href="/politika-privatnosti">Politika privatnosti</Link>
              </li>
            </ul>
            <ul className="footerSocial">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61559169915867"
                  target="_blank"
                  rel="noreferrer"
                  title="Posjetite našu Facebook stranicu"
                  aria-label="Facebook stranica Future Energy Solutions"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/385993000807?text=Pozdrav,%20zanima%20me%20ponuda%20za%20solarne%20panele"
                  target="_blank"
                  rel="noreferrer"
                  title="Pošalji poruku putem WhatsAppa"
                  aria-label="Pošalji poruku putem WhatsAppa"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="copyright">
            &copy; 2025 Future Energy Solutions. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
