import React from "react";
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
  return (
     <CookieConsent
     location="bottom"
     buttonText="Prihvaćam"
     enableDeclineButton
     flipButtons
     declineButtonText="Odbijam" // Ovdje postavljamo tekst za gumb "Odbijam"
     cookieName="userAcceptedCookies"
     style={{
        alignItems: "center",
       background: "#2a2a2a", 
       color: "#fff", 
       fontSize: "16px", 
       textAlign: "center",
       padding: "15px",
     }}
     buttonStyle={{
       background: "#e0004d",
       color: "#fff", 
       borderRadius: "5px",
       padding: "10px 20px",
       fontSize: "16px",
       marginLeft: "10px",
       width: "126px"
     }}
     declineButtonStyle={{
       background: "#444",
       color: "#fff", 
       borderRadius: "5px",
       padding: "10px 20px",
       fontSize: "16px",
       marginLeft: "10px",
       width: "126px"
     }}
     contentClasses="d-flex align-itmes-center justify-content-center"
     containerClasses="d-flex align-itmes-center justify-content-center"
     declineButtonClasses="d-flex justify-content-center"
     buttonClasses="d-flex justify-content-center"
     buttonWrapperClasses="d-flex"on
    
     expires={365}
    >
      Ova stranica koristi kolačiće za poboljšanje korisničkog iskustva. Klikom na "Prihvaćam" pristajete na korištenje kolačića.
    </CookieConsent>
  );
};

export default Cookies;
