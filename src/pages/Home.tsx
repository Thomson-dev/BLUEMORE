import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import YachtCarousel from "../components/YachtCarousel";
import Destinations from "../components/Destinations";
import ItinerariesServices from "../components/ItinerariesServices";
import TestimonialsAndFeatured from "../components/TestimonialsAndFeatured";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";

export default function Home() {
  const [cookie, setCookie] = useState(true);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <YachtCarousel />
        <Destinations />
        <ItinerariesServices />
        <TestimonialsAndFeatured />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
      {cookie && (
        <CookieBanner
          onAccept={() => setCookie(false)}
          onDecline={() => setCookie(false)}
        />
      )}
    </>
  );
}
