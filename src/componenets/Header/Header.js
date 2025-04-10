import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { Collapse } from "bootstrap";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State to track if the navbar is open
  const isActive = (path) => location.pathname === path;

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState); // Toggle the state
  };

  useEffect(() => {
    const collapseElement = document.getElementById("navbarSupportedContent");
    if (collapseElement) {
      let bsCollapse = Collapse.getInstance(collapseElement);
      if (!bsCollapse) {
        bsCollapse = new Collapse(collapseElement, {
          toggle: false,
        });
      }
      // Toggle the collapse based on the isOpen state
      if (isOpen) {
        bsCollapse.show();
      } else {
        bsCollapse.hide();
      }
    }
  }, [isOpen]); // Re-run when the state changes

  const closeSidebar = () => {
    setIsOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <nav
      id="nav"
      className="navbar navbar-expand-lg sticky-top bg-white"
      aria-label="Glavna navigacija"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/img/FUES_jel_bal_1.png"
            alt="Logo FUES"
            width="46"
            height="46"
          />
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={toggleSidebar} // Use toggleSidebar to open/close the navbar
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"} // Toggle the aria-expanded attribute
          aria-label="Toggle navigacije"
        >
          <span className="navbar-line"></span>
          <span className="navbar-line"></span>
          <span className="navbar-line"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
                aria-current={isActive("/") ? "page" : undefined}
                onClick={closeSidebar} // Close the sidebar when a link is clicked
              >
                Naslovnica
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/o-nama") ? "active" : ""}`}
                to="/o-nama"
                aria-current={isActive("/o-nama") ? "page" : undefined}
                onClick={closeSidebar}
              >
                O nama
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/kontakt") ? "active" : ""}`}
                to="/kontakt"
                aria-current={isActive("/kontakt") ? "page" : undefined}
                onClick={closeSidebar}
              >
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive("/nasi-radovi") ? "active" : ""
                }`}
                to="/nasi-radovi"
                aria-current={isActive("/nasi-radovi") ? "page" : undefined}
                onClick={closeSidebar}
              >
                Naši radovi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/novosti") ? "active" : ""}`}
                to="/novosti"
                aria-current={isActive("/novosti") ? "page" : undefined}
                onClick={closeSidebar}
              >
                Novosti
              </Link>
            </li>
            <li className="mt-3">
              <Link
                className="cta d-block m-auto d-lg-none"
                to="/kontakt"
                onClick={closeSidebar}
              >
                Javite nam se
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/kontakt" className="cta d-none d-lg-block">
          Javite nam se
        </Link>
      </div>
    </nav>
  );
}

export default Header;
