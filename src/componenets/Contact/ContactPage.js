import React from 'react'
import ContactForm from '../Home/ContactForm'
import './ContactPage.css'

function ContactPage() {
  return (
    <main>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.22033403454!2d18.748303576635884!3d45.60621602395143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475cdd2fc88c0843%3A0xef14183f816ef342!2sUl.%20%C5%A0andora%20Petefija%2048%2C%2031327%2C%20Bilje!5e0!3m2!1shr!2shr!4v1743800244784!5m2!1shr!2shr" width="100%" height="450" style={{border: 0}} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="container">
            <div className="row">
                <div className="col-md-6 p-5">
                    <h2>Kontakt</h2>
                    <p>Naša tvrtka, Future Energy Solutions, posvećena je pružanju vrhunskih usluga u području obnovljivih izvora energije. Ako imate bilo kakva pitanja, želite saznati više o našim rješenjima ili zatražiti ponudu, slobodno nas kontaktirajte putem naših kontakt podataka ili ispunite obrazac ispod. Radujemo se suradnji!</p>

                    <div className='kontakt-info'>
                        <h3>Future Energy Solutions</h3>
                        <span>Ul. Šandora Petefija 48</span>
                        <span>31327, Kopačevo, Hrvatska</span>
                        <span>Tel: <a href="tel: 385 99 290 3989">+385 99 300 0807</a></span>
                        <span>Email: <a href="mailto:info@fues.hr">info@fues.hr</a></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <ContactForm />
                </div>
            </div>
        </div>
    </main>
  )
}

export default ContactPage


