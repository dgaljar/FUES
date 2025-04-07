import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

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
                    +385 99 290 3989
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
          <div className="col-md-4 text-center text-md-end">
            <ul className="footerSocial">
              <li>
                <a href="/">O nama</a>
              </li>
              <li>
                <a href="/">Politika privatnosti</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <ul className="footerSocial">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61559169915867" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://hr.linkedin.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="copyright">&copy; 2025 Future Energy Solutions. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
