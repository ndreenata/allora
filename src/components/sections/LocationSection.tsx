import config from '../../config/invitation';
import { generateGoogleCalendarUrl, useCopyToClipboard } from '../../hooks/useInvitation';

export default function LocationSection() {
  const { location, calendar } = config;
  const calendarUrl = generateGoogleCalendarUrl(calendar);
  const { copied, copy } = useCopyToClipboard();

  return (
    <section id="location" className="py-12 px-4 bg-gradient-to-b from-[#00ffff] via-[#00e5ff] to-[#1de9b6] relative overflow-hidden text-center border-b-8 border-yellow-400">
      {/* Background polka & stripes */}
      <div className="absolute inset-0 bg-stripes-confetti opacity-30 pointer-events-none" />

      {/* Floating Emojis */}
      <div className="absolute top-4 left-4 text-4xl animate-bounce pointer-events-none">📍</div>
      <div className="absolute top-10 right-4 text-4xl animate-spin-crazy pointer-events-none">🚗</div>
      <div className="absolute bottom-4 left-6 text-4xl animate-wiggle pointer-events-none">🗺️</div>
      <div className="absolute bottom-6 right-6 text-4xl animate-bounce-crazy pointer-events-none">🛵</div>

      <div className="relative max-w-lg mx-auto space-y-6">
        
        {/* Banner Title */}
        <div className="p-4 rounded-3xl bg-purple-700 border-4 border-yellow-300 shadow-xl transform -rotate-1">
          <span className="bg-yellow-300 text-purple-900 font-comic font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest block mx-auto max-w-fit mb-1">
            📍 JANGAN SAMPAI NYASAR GUYS! 📍
          </span>
          <h2 className="font-impact text-4xl sm:text-5xl text-yellow-300 drop-shadow-[3px_3px_0px_#ff007f]">
            LOKASI ACARA
          </h2>
          <p className="font-comic font-bold text-white text-xs sm:text-sm mt-1">
            🏡 Kediaman Keluarga Tercinta di Legian, Bali 🏡
          </p>
        </div>

        {/* GIANT LOCATION CARD */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-tr from-yellow-300 via-pink-200 to-white border-4 border-dashed border-red-500 shadow-2xl text-center">
          
          <div className="w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_#ff0000] border-4 border-white animate-bounce">
            <span className="text-4xl">📍</span>
          </div>

          <span className="bg-purple-600 text-white font-comic font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow">
            TEMPAT / VENUE RESMI:
          </span>

          <h3 className="font-lobster text-3xl sm:text-4xl text-red-600 drop-shadow-[2px_2px_0px_#ffff00] my-2">
            Kediaman Keluarga
          </h3>
          
          <div className="p-4 my-3 rounded-2xl bg-white border-3 border-purple-500 shadow-inner">
            <p className="font-impact text-xl sm:text-2xl text-purple-900 tracking-wide">
              JLN. SRI RAMA GG. AREMA NO. 6
            </p>
            <p className="font-comic font-bold text-sm text-pink-600 mt-1">
              Legian, Kaja, Kabupaten Badung, Bali 80361
            </p>
          </div>

          {/* Buttons: Google Maps & Copy Address */}
          <div className="flex flex-col gap-3 mt-4">
            {/* Google Maps Button */}
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ugly-buy py-3.5 px-6 rounded-full text-lg font-black uppercase tracking-wider cursor-pointer animate-pulse-aggressive flex items-center justify-center gap-2"
              aria-label="Buka Google Maps"
            >
              <span>🗺️ KLIK DISINI: BUKA GOOGLE MAPS 🚗💨</span>
            </a>

            {/* Copy Address Button */}
            <button
              onClick={() => copy(location.address)}
              className="py-3 px-5 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-comic font-black text-sm border-3 border-purple-600 shadow-md cursor-pointer transition-transform active:scale-95 flex items-center justify-center gap-2"
              aria-label="Salin Alamat"
            >
              {copied ? (
                <span className="text-green-800 flex items-center gap-1 font-black">
                  ✅ ALAMAT BERHASIL DISALIN KE CLIPBOARD! 📋✨
                </span>
              ) : (
                <span>📋 SALIN ALAMAT LENGKAP KE HP 📋</span>
              )}
            </button>
          </div>

          {/* Add to Google Calendar Button */}
          <div className="mt-5 p-3 rounded-2xl bg-pink-100 border-2 border-pink-400">
            <p className="font-comic font-bold text-xs text-purple-900 mb-1">
              Takut lupa? Masukin ke kalender Google kamu sekarang:
            </p>
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full shadow hover:scale-105 transition-transform"
            >
              <span>📅 + SIMPAN KE GOOGLE CALENDAR 📅</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
