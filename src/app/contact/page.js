import React from 'react'
import Banner from '../components/widgets/Banner';
import StoreLocations from '../components/widgets/StoreLocations';
import ContactForm from '../components/widgets/ContactForm';
const Contact = () => {
  return (
    <div>
        <Banner
         pagetitle="Contact Us"
        />
        <StoreLocations />
        <ContactForm />
    </div>
  )
}

export default Contact