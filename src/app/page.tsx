import Image from "next/image";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EventsCarousel from '../components/EventsCarousel';
import ConnectSection from '../components/ConnectSection';
import VolunteerSection from '../components/VolunteerSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header><Navbar /></header>
      <HeroSection />
      <EventsCarousel />
      <ConnectSection />
      <VolunteerSection />
      <Footer />
      {/* Footer */}
      <footer>{/* TODO: Footer component */}</footer>
    </div>
  );
}
