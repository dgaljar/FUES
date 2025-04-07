import React from 'react'
import Hero from './Hero'
import Partners from './Partners'
import Testimonials from './Testimonials'
import AboutUs from './AboutUs'
import WhyUs from './WhyUs'
import Benefits from './Benefits'
import Services from './Services'
import Faq from './Faq'
import ContactForm from './ContactForm'

function Home() {
  return (
    <main>
        <Hero />
        <Partners />
        <Testimonials />
        <AboutUs />
        <WhyUs />
        <Benefits />
        <Services />
        <Faq />
        <ContactForm />
    </main>
  )
}

export default Home