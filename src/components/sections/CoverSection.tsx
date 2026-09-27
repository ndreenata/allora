import { useState } from 'react';
import config from '../../config/invitation';
import { useGuestName } from '../../hooks/useInvitation';

interface CoverSectionProps {
  onOpen: () => void;
}

export default function CoverSection({ onOpen }: CoverSectionProps) {
  const guestName = useGuestName();
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => onOpen(), 800);
  };

  return (
    <section
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-gradient-to-br from-[#ff007f] via-[#ff69b4] via-[#ffff00] to-[#00ffff] transition-all duration-700 ${
        isOpening ? 'opacity-0 scale-125 rotate-6 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Chaotic moving background sparkles & animated stripes */}
      <div className="absolute inset-0 bg-polka-pink opacity-80 pointer-events-none" />

      {/* Floating chaotic emojis in all corners */}
      <div className="absolute top-2 left-2 text-3xl sm:text-5xl animate-bounce-crazy pointer-events-none select-none">
        🌸🦋✨
      </div>
      <div className="absolute top-2 right-2 text-3xl sm:text-5xl animate-spin-crazy pointer-events-none select-none">
        🌺🌼💖
      </div>
      <div className="absolute bottom-2 left-2 text-3xl sm:text-5xl animate-spin-reverse pointer-events-none select-none">
        🌈🎀💐
      </div>
      <div className="absolute bottom-2 right-2 text-3xl sm:text-5xl animate-bounce-crazy pointer-events-none select-none">
        🌷🪷✨
      </div>

      {/* Random floating floating hearts & sparkles scattered */}
      <div className="absolute top-1/4 left-4 text-2xl animate-wiggle pointer-events-none">💖</div>
      <div className="absolute top-1/3 right-6 text-3xl animate-bounce pointer-events-none">✨</div>
      <div className="absolute bottom-1/4 left-8 text-3xl animate-pulse pointer-events-none">👶🏻</div>
      <div className="absolute bottom-1/3 right-8 text-2xl animate-wiggle pointer-events-none">🎀</div>

      {/* Scrolling tacky marquee banner at the top */}
      <div className="absolute top-0 left-0 right-0 bg-[#ffff00] text-[#ff007f] border-b-4 border-[#ff007f] py-1 font-bold text-xs uppercase tracking-widest marquee-container z-20">
        <div className="marquee-content font-comic">
          <span>🌸✨💖 WELCOME TO ALLORA&apos;S AMAZING TIGANG SASIH PARTY 💖✨🌸</span>
          <span>🎉 SPECIAL INVITATION 🎉</span>
          <span>🌺 SUKSEMA / TERIMA KASIH ATAS PERHATIANNYA 🌺</span>
          <span>👶🏻 PRINCESS OF THE DAY 👶🏻</span>
          <span>🌸✨💖 WELCOME TO ALLORA&apos;S AMAZING TIGANG SASIH PARTY 💖✨🌸</span>
        </div>
      </div>

      {/* Main Cover Container */}
      <div className="relative z-10 w-full min-h-screen max-w-lg mx-auto flex flex-col justify-between items-center px-4 py-10 pt-12 text-center">
        
        {/* Header Badge */}
        <div className="w-full flex flex-col items-center mt-3">
          <div className="inline-block bg-[#ff00ff] text-white px-5 py-1.5 rounded-full border-4 border-yellow-300 shadow-[0_0_15px_#ffff00] animate-bounce-crazy">
            <span className="font-comic font-black text-sm tracking-widest uppercase">
              🌸✨ SPECIAL BALINESE CEREMONY INVITATION ✨🌸
            </span>
          </div>
          <p className="font-chewy text-2xl sm:text-3xl text-[#ffff00] drop-shadow-[2px_2px_0px_#ff007f] mt-2">
            🙏 OM SWASTYASTU 🙏
          </p>
        </div>

        {/* Center: Overdecorated Baby Photo & Huge Titles */}
        <div className="w-full flex flex-col items-center my-4">
          
          {/* Overcomplicated Photo Frame */}
          <div className="relative my-3 p-3 bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-purple-600 rounded-[48px] shadow-[0_0_35px_rgba(255,0,128,0.8)] border-4 border-dashed border-white animate-pulse-aggressive">
            <div className="p-2 bg-yellow-300 rounded-[40px] border-4 border-pink-500">
              <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-[32px] overflow-hidden border-4 border-purple-600 shadow-2xl relative bg-white">
                <img
                  src={config.baby.photoPrimary}
                  alt={config.baby.name}
                  className="w-full h-full object-cover object-center"
                />
                {/* Cheesy overlay sparkles & stickers */}
                <div className="absolute top-2 left-2 text-2xl">✨</div>
                <div className="absolute top-2 right-2 text-2xl">💖</div>
                <div className="absolute bottom-2 left-2 text-2xl">🎀</div>
                <div className="absolute bottom-2 right-2 text-2xl">🌸</div>
              </div>
            </div>

            {/* Overkill badges glued to photo */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-black text-xs px-3 py-1.5 rounded-full border-2 border-white shadow-lg animate-wiggle">
              🌟 VIP BABY 🌟
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#00ffcc] text-[#990033] font-black text-xs px-3 py-1.5 rounded-full border-2 border-[#990033] shadow-lg animate-bounce">
              👶 105 HARI / 3 BULAN 👶
            </div>
          </div>

          {/* Huge Dramatic Titles */}
          <div className="mt-4 px-2">
            <h2 className="font-chewy text-2xl sm:text-3xl text-yellow-300 drop-shadow-[3px_3px_0px_#990033] animate-wiggle">
              🌺✨ UPACARA SAKRAL & MERIAH ✨🌺
            </h2>
            <h1 className="font-impact text-5xl sm:text-6xl text-white tracking-wider my-1 drop-shadow-[4px_4px_0px_#ff007f] stroke-2">
              TIGANG SASIH
            </h1>
            <div className="bg-yellow-400 border-4 border-purple-600 py-1 px-4 rounded-2xl shadow-xl transform -rotate-1 my-2">
              <p className="font-lobster text-2xl sm:text-3xl text-[#990033] leading-snug">
                Ni Luh Allora Grizelyn Putri Kaylena
              </p>
            </div>
            <p className="font-comic font-black text-sm text-white bg-black/40 px-3 py-1 rounded-full inline-block mt-1">
              📅 {config.ceremony.dateStr} • ⏰ {config.ceremony.timeStr} 📍 LEGIAN BALI
            </p>
          </div>
        </div>

        {/* Bottom Section: Kepada Yth & Glowing Flashing Button */}
        <div className="w-full flex flex-col items-center gap-3 pb-4">
          {/* Guest Name Card with Tacky 2014 Canva Aesthetic */}
          <div className="w-full max-w-xs p-3 rounded-2xl bg-gradient-to-r from-yellow-200 via-pink-100 to-purple-200 border-4 border-dashed border-pink-500 shadow-xl text-center transform rotate-1">
            <span className="font-comic font-bold text-xs uppercase text-purple-800 block">
              💌 KEPADA YANG TERHORMAT BAPAK/IBU/SAUDARA/I: 💌
            </span>
            <p className="font-lobster text-2xl text-pink-600 mt-1">
              {guestName ? guestName : 'Tamu Undangan Tercinta'}
            </p>
            <p className="font-comic text-[11px] text-gray-700 italic">
              Di Tempat / Mohon Kehadirannya yaaa! 🙏🥰
            </p>
          </div>

          {/* The Flashing Obnoxious Buka Undangan Button */}
          <button
            onClick={handleOpen}
            className="btn-ugly-buy w-full max-w-sm py-4 px-6 rounded-full text-xl sm:text-2xl font-black uppercase tracking-wider cursor-pointer animate-pulse-aggressive flex items-center justify-center gap-2"
            aria-label="Buka Undangan"
          >
            <span>💖✨🌸 BUKA UNDANGAN 🌸✨💖</span>
            <span className="text-2xl animate-spin-fast">🎉</span>
          </button>
          
          <span className="font-comic text-[10px] text-white bg-red-600 px-2 py-0.5 rounded font-bold animate-flash">
            ⚠️ KLIK TOMBOL DI ATAS UNTUK MEMBUKA UNDANGAN RESMI ⚠️
          </span>
        </div>

      </div>
    </section>
  );
}
