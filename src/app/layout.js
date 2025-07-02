import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/widgets/header";
import { Footer } from "./components/widgets/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Southern Cross Smash Repairs",
  description: "Gregory Hills - Moss Vale - Goulburn",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <GoogleAnalytics gaId="G-0P2BZ8FGFX" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header />
        
        {children}
       <Footer />
      </body>

    </html>
  );
}
