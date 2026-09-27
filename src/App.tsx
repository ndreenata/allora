import { useState } from 'react';
import CoverSection from './components/sections/CoverSection';
import BabySection from './components/sections/BabySection';
import CeremonySection from './components/sections/CeremonySection';
import LocationSection from './components/sections/LocationSection';
import GallerySection from './components/sections/GallerySection';
import RSVPSection from './components/sections/RSVPSection';
import WishesSection from './components/sections/WishesSection';
import DigitalGiftSection from './components/sections/DigitalGiftSection';
import ClosingSection from './components/sections/ClosingSection';
import MusicPlayer from './components/sections/MusicPlayer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-100 text-[#221A16] selection:bg-yellow-300 selection:text-purple-900 font-comic relative overflow-x-hidden">
      {/* Cover / Opening Section */}
      {!isOpen && <CoverSection onOpen={() => setIsOpen(true)} />}

      {/* Main Content - Displayed after invitation is opened */}
      {isOpen && (
        <main className="relative animate-fade-in">
          {/* Top Tacky Marquee Announcement */}
          <div className="sticky top-0 z-40 bg-[#ffff00] text-[#ff007f] border-b-4 border-[#ff007f] py-1.5 font-bold text-xs uppercase tracking-widest marquee-container shadow-md">
            <div className="marquee-content font-comic">
              <span>🌸✨ SELAMAT DATANG DI UNDANGAN DIGITAL TIGANG SASIH ALLORA ✨🌸</span>
              <span>💖 MOHON DOA RESTU UNTUK SANG BUAH HATI TERCINTA 💖</span>
              <span>📅 KAMIS, 1 OKTOBER 2026 • LEGIAN BALI 📅</span>
              <span>👶🏻 ALLORA&apos;S SPECIAL DAY 👶🏻</span>
              <span>🌸✨ SELAMAT DATANG DI UNDANGAN DIGITAL TIGANG SASIH ALLORA ✨🌸</span>
            </div>
          </div>

          {/* Baby Tribute & Sacred Opening */}
          <BabySection />

          {/* Ceremony Details & Countdown */}
          <CeremonySection />

          {/* Location & Google Maps + Calendar */}
          <LocationSection />

          {/* 2-Photo Awkward Gallery */}
          <GallerySection />

          {/* RSVP Confirmation */}
          <RSVPSection />

          {/* Wishes & Prayers Board */}
          <WishesSection />

          {/* Digital Gift (Rekening 123456789) */}
          <DigitalGiftSection />

          {/* Sacred Closing & Gratitude */}
          <ClosingSection />

          {/* Floating Obnoxious Music Player */}
          <MusicPlayer />
        </main>
      )}
    </div>
  );
}
