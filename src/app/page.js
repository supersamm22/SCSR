
import StoreLocations from "./components/widgets/StoreLocations";


import Banner from "./components/widgets/Banner";
import ContactForm from "./components/widgets/ContactForm";
import Services from "./components/widgets/Services";


export default function Home() {
  return (
    <div>

    <Banner 
       pagetitle="Welcome to Southern Cross Smash Repairs"
    />
    <StoreLocations />
    <Services />
    <ContactForm />
    </div>
  );
}
