import Image from "next/image";
import StoreLocations from "./components/widgets/StoreLocations";
import Header from "./components/widgets/header";
import Head from "next/head";
import { Footer } from "./components/widgets/Footer";
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
