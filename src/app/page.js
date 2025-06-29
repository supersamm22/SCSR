import Image from "next/image";
import StoreLocations from "./components/widgets/StoreLocations";
import Header from "./components/widgets/header";
import Head from "next/head";
import { Footer } from "./components/widgets/Footer";
import Banner from "./components/widgets/Banner";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
    <Banner />
    <StoreLocations />
    </div>
  );
}
