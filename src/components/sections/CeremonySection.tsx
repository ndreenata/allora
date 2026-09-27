import config from '../../config/invitation';
import { useCountdown } from '../../hooks/useInvitation';

export default function CeremonySection() {
  const { ceremony } = config;
  const countdown = useCountdown(ceremony.targetIso);

  const countdownUnits = [
    { value: countdown.days, label: 'HARI', emoji: '🌞' },
    { value: countdown.hours, label: 'JAM', emoji: '⏰' },
    { value: countdown.minutes, label: 'MENIT', emoji: '⏳' },
    { value: countdown.seconds, label: 'DETIK', emoji: '⚡' },
  ];

  return (
    <section id="ceremony" className="py-12 px-4 bg-gradient-to-b from-[#ffff00] via-[#ffcc00] to-[#ff9900] relative overflow-hidden text-center border-b-8 border-pink-500">
      {/* Background polka dots & chaotic shapes */}
      <div className="absolute inset-0 bg-polka-yellow opacity-40 pointer-events-none" />

      {/* Floating Emojis */}
      <div className="absolute top-2 left-4 text-4xl animate-bounce pointer-events-none">⏰</div>
      <div className="absolute top-6 right-4 text-4xl animate-spin-crazy pointer-events-none">🎉</div>
      <div className="absolute bottom-4 left-6 text-4xl animate-wiggle pointer-events-none">🎈</div>
      <div className="absolute bottom-6 right-6 text-4xl animate-bounce-crazy pointer-events-none">🔔</div>

      <div className="relative max-w-lg mx-auto space-y-6">
        
        {/* Section Title Banner */}
        <div className="p-4 rounded-3xl bg-pink-600 border-4 border-white shadow-xl transform rotate-1">
          <span className="bg-yellow-300 text-purple-900 font-comic font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest block mx-auto max-w-fit mb-1">
            📢 JANGAN SAMPAI KETINGGALAN! 📢
          </span>
          <h2 className="font-impact text-4xl sm:text-5xl text-yellow-300 drop-shadow-[3px_3px_0px_#000]">
            WAKTU & ACARA
          </h2>
          <p className="font-comic font-bold text-white text-xs sm:text-sm mt-1">
            ✨🌸 RANGKAIAN DOA & UPACARA SUCI TIGA BULANAN ANANDA 🌸✨
          </p>
        </div>

        {/* SEPARATE GIANT COLORFUL CARDS */}
        <div className="grid grid-cols-1 gap-4">
          
          {/* Card 1: Tanggal (Hot Yellow/Red Card) */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 border-4 border-white shadow-2xl text-white transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="text-5xl mb-2 animate-bounce">📅</div>
            <span className="bg-white text-red-600 font-comic font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow">
              HARI & TANGGAL PELAKSANAAN
            </span>
            <h3 className="font-impact text-3xl sm:text-4xl text-yellow-200 drop-shadow-[2px_2px_0px_#000] my-2">
              KAMIS, 1 OKTOBER 2026
            </h3>
            <p className="font-comic text-xs font-bold text-white/90">
              🗓️ Catat di kalender kalian semua ya guys! 🗓️
            </p>
          </div>

          {/* Card 2: Waktu (Neon Green / Cyan Card) */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 border-4 border-white shadow-2xl text-white transform rotate-1 hover:rotate-0 transition-transform">
            <div className="text-5xl mb-2 animate-pulse">⏰</div>
            <span className="bg-yellow-300 text-teal-900 font-comic font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow">
              JAM MULAI ACARA
            </span>
            <h3 className="font-impact text-4xl sm:text-5xl text-white drop-shadow-[3px_3px_0px_#004d40] my-2">
              09.00 WITA - SELESAI
            </h3>
            <p className="font-comic text-xs font-bold text-yellow-200">
              ⚡ Dimohon hadir tepat waktu untuk santap bersama & doa restu! ⚡
            </p>
          </div>

          {/* Card 3: Doa & Harapan (Bright Purple / Fuchsia Card) */}
          <div className="p-5 rounded-3xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 border-4 border-yellow-300 shadow-2xl text-white">
            <div className="text-4xl mb-1">🪷💖</div>
            <h4 className="font-pacifico text-2xl text-yellow-300 drop-shadow mb-2">
              Doa & Restu Bersama
            </h4>
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-xs border border-white/40">
              <p className="font-comic italic text-xs sm:text-sm text-yellow-100 leading-relaxed">
                &ldquo;{ceremony.prayer}&rdquo;
              </p>
            </div>
          </div>

        </div>

        {/* DRAMATIC OVER-THE-TOP COUNTDOWN */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-900 to-black border-4 border-dashed border-yellow-400 shadow-[0_0_30px_rgba(255,255,0,0.6)]">
          <div className="inline-block bg-red-600 text-yellow-300 font-black font-impact text-lg sm:text-xl px-5 py-1.5 rounded-full border-2 border-yellow-300 shadow animate-pulse-aggressive mb-4">
            ⏰ COUNTDOWN MENUJU HARI H!!! ⏰
          </div>

          {!countdown.isExpired ? (
            <div>
              <p className="font-comic font-bold text-xs text-cyan-300 mb-3 uppercase tracking-widest animate-flash">
                ⚡ WAKTU TERUS BERJALAN TIK TOK TIK TOK ⚡
              </p>

              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {countdownUnits.map((unit) => (
                  <div
                    key={unit.label}
                    className="p-3 rounded-2xl bg-gradient-to-t from-pink-600 to-yellow-400 border-2 border-white flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform"
                  >
                    <span className="text-lg">{unit.emoji}</span>
                    <span className="font-impact text-3xl sm:text-4xl text-white drop-shadow-[2px_2px_0px_#000] tabular-nums my-1">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="font-comic font-black text-[10px] sm:text-xs text-purple-900 bg-white/80 px-2 py-0.5 rounded-full">
                      {unit.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xl">
                <span>✨</span><span>🎉</span><span>🥳</span><span>🎈</span><span>✨</span>
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-yellow-300 text-purple-900 font-bold font-comic">
              🎉 ALHAMDULILLAH / SUKSMA! ACARA SEDANG / SUDAH BERLANGSUNG! 🎉
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
