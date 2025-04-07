import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
      <div className="d-flex flex-column align-items-center text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-2 fw-medium mt-4">Stranica koju ste pokušali otvoriti nije pronađena.</p>
        <p className="mt-4 mb-5">
          Možda je premještena, obrisana ili nikad nije ni postojala
        </p>
        <Link
          to="/"
          className="cta fw-semibold rounded-pill px-4 py-2 custom-btn"
        >
          Naslovnica
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
