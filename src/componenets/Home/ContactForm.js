import React, { useState, useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const form = useRef();
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // 'idle', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("sending");

    if (!captchaValue) {
      alert("Please complete the CAPTCHA first!");
      return;
    }

    emailjs
      .sendForm("service_5vkbp4f", "template_k44capj", form.current, {
        publicKey: "15yddXDGFOwEIMyzL",
      })
      .then(() => {
        setLoading(false);
        setStatus("success");
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
      });
  };

  const handleInputBlur = (e) => {
    if (e.target.value) {
      e.target.classList.add("filled");
    } else {
      e.target.classList.remove("filled");
    }
  };

  return (
    <section className="contactForm" id="contact">
      <div className="container">
        <div className="row">
          <div className="p-5 d-flex flex-column align-items-center">
            <h2 className="text-center text-md-start">Zatraži konzultacije</h2>
            <div className="formContainer">
              <form ref={form} onSubmit={sendEmail}>
                <div className="inputGroup form.group">
                <label htmlFor="name" style={{ position: 'absolute', left: '-9999px' }}>Ime</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    onBlur={handleInputBlur}
                    onFocus={handleInputBlur}
                    autoComplete="off"
                  />
                <span>Ime</span>
                </div>
                <div className="inputGroup form.group">
                <label htmlFor="email" style={{ position: 'absolute', left: '-9999px' }}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onBlur={handleInputBlur}
                    onFocus={handleInputBlur}
                    autoComplete="off"
                  />
                  <span>Email</span>
                </div>
                <div className="inputGroup form.group">
                <label htmlFor="message" style={{ position: 'absolute', left: '-9999px' }}>Poruka</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    onBlur={handleInputBlur}
                    onFocus={handleInputBlur}
                    autoComplete="off"
                    rows="10"
                    cols="80"
                    placeholder="Vaš upit"
                  ></textarea>
                </div>
                {!showRecaptcha ? (
                  <button 
                  type="button" 
                  onClick={() => setShowRecaptcha(true)} 
                  >
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <span>{status === "sending" ? "Šaljem..." : "Pošalji"}</span>
                  </button>
                ) : (
                  <div className="col-12 text-center captcha-container">
                    <ReCAPTCHA
                      sitekey={"6LctqPoqAAAAAA_hzF6ysFeiXw6_tHENQ-4HWIkA"} // Zamijeniti s tvojim reCAPTCHA ključem
                      onChange={(value) => setCaptchaValue(value)}
                    />
                    {captchaValue && (
                      <button
                        className="mt-2 m-auto"
                        type="button"
                        onClick={sendEmail}
                        style={{
                          backgroundColor:
                            status === "success"
                              ? "green"
                              : status === "error"
                              ? "red"
                              : "#e0004d",
                        }}
                        disabled={loading || status === "success" || status === "sending"}
                      >
                        <div className="svg-wrapper-1">
                          <div className="svg-wrapper">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <span>
                          {status === "sending"
                            ? "Šaljem..."
                            : status === "success"
                            ? "Poslano"
                            : status === "error"
                            ? "Neuspješno"
                            : "Pošalji"}
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
