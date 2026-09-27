import config from '../../config/invitation';

export default function ClosingSection() {
  const { baby, ceremony, closing } = config;

  return (
    <section id="closing" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-[#4a148c] via-[#311b92] to-[#0d001a] relative overflow-hidden text-center text-white border-t-8 border-yellow-300">
      {/* Background stars & confetti */}
      <div className="absolute inset-0 bg-polka-pink opacity-20 pointer-events-none" />

      {/* Floating chaotic emojis in corners */}
      <div className="absolute top-2 left-2 text-4xl animate-spin-crazy pointer-events-none">🌸</div>
      <div className="absolute top-6 right-2 text-4xl animate-bounce pointer-events-none">🌺</div>
      <div className="absolute bottom-4 left-4 text-4xl animate-wiggle pointer-events-none">💐</div>
      <div className="absolute bottom-6 right-4 text-4xl animate-spin-reverse pointer-events-none">🌷</div>

      <div className="relative max-w-lg mx-auto flex flex-col items-center space-y-6">
        
        {/* ROW OF FLOWERS 1 */}
        <div className="text-2xl sm:text-3xl tracking-widest animate-bounce">
          🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸
        </div>

        {/* Baby Miniature with Glowing Heart Halo */}
        <div className="relative p-2 bg-gradient-to-r from-yellow-300 via-pink-500 to-cyan-400 rounded-full shadow-[0_0_30px_#ff007f] border-4 border-dashed border-white animate-pulse-aggressive">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-yellow-300 shadow-xl bg-white">
            <img
              src={baby.photoPrimary}
              alt={baby.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-pink-600 text-yellow-300 font-comic font-black text-xs px-3 py-1 rounded-full border border-white whitespace-nowrap shadow">
            👑 ALLORA 👑
          </div>
        </div>

        {/* Sacred Prayer Quote */}
        <div className="p-4 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-dashed border-yellow-300 max-w-md">
          <p className="font-comic italic text-sm sm:text-base text-yellow-200 leading-relaxed">
            &ldquo;{ceremony.prayer}&rdquo;
          </p>
        </div>

        {/* DRAMATIC OM SANTIH MANTRA */}
        <div className="p-5 rounded-3xl bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 border-4 border-yellow-400 shadow-[0_0_25px_#ffff00] transform -rotate-1">
          <div className="text-3xl mb-1 animate-wiggle">
            🙏✨💖✨🙏
          </div>
          <h2 className="font-impact text-3xl sm:text-4xl text-yellow-300 drop-shadow-[3px_3px_0px_#000] tracking-wider leading-tight">
            {closing.mantra}
          </h2>
          <div className="text-xl mt-1">
            🌸🌺🌷🌹💐🌸🌺🌷🌹
          </div>
        </div>

        {/* ROW OF FLOWERS 2 */}
        <div className="text-2xl sm:text-3xl tracking-widest animate-bounce">
          🌸🌺🌷🌹💐🌸🌺🌷🌹💐
        </div>

        {/* Gratitude Statement */}
        <div className="p-4 bg-yellow-300 text-purple-900 rounded-2xl border-4 border-pink-500 shadow-lg max-w-md">
          <p className="font-comic font-bold text-xs sm:text-sm leading-relaxed">
            &ldquo;{closing.gratitude}&rdquo;
          </p>
          <p className="font-comic font-black text-xs text-red-600 mt-1">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu! 🥰🙏
          </p>
        </div>

        {/* Baby Dedication & Family Stamp */}
        <div className="p-5 rounded-3xl bg-gradient-to-tr from-yellow-200 via-pink-100 to-white border-4 border-purple-600 text-purple-900 shadow-2xl max-w-sm w-full">
          <span className="font-comic font-black text-xs uppercase tracking-widest text-pink-600 block mb-1">
            👶🏻💕 KAMI YANG BERBAHAGIA 💕👶🏻
          </span>
          <h3 className="font-lobster text-2xl sm:text-3xl text-purple-900 leading-snug my-1">
            {baby.name}
          </h3>
          <p className="font-comic font-bold text-xs text-gray-700 mt-1">
            Beserta Seluruh Keluarga Besar
          </p>
        </div>

        {/* ROW OF FLOWERS 3 */}
        <div className="text-xl sm:text-2xl tracking-widest">
          🌸✨💖👶🏻🎀🦋🌈🪷🌺🌼
        </div>

        {/* Footer Credits Joke */}
        <div className="pt-8 text-center">
          <p className="font-comic font-bold text-xs text-yellow-300">
            🌸 TIGANG SASIH • 1 OKTOBER 2026 • LEGIAN BALI 🌸
          </p>
          <p className="font-comic text-[10px] text-pink-300 mt-1">
            Undangan Digital Resmi & Paling Meriah Sedunia 💖
          </p>
        </div>

      </div>
    </section>
  );
}
