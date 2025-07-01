import React from 'react'
import Banner from '../components/widgets/Banner'
import ContentSection from '../components/widgets/ContentSection'
import ContactForm from '../components/widgets/ContactForm'
const About = () => {
  return (
    <div>
        <Banner
            pagetitle="About Us"
        />
        <ContentSection />
        <ContactForm />
    </div>
  )
}

export default About