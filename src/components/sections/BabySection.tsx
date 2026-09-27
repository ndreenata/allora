import config from '../../config/invitation';

export default function BabySection() {
  const { baby, ceremony } = config;

  return (
    <section id="baby" className="py-12 px-4 bg-gradient-to-b from-[#ff69b4] via-[#da70d6] to-[#ba55d3] relative overflow-hidden text-center border-b-8 border-yellow-300">
      {/* Chaotic background confetti & polka dots */}
      <div className="absolute inset-0 bg-polka-pink opacity-40 pointer-events-none" />

      {/* Floating emojis on edges */}
      <div className="absolute top-4 left-3 text-3xl animate-bounce pointer-events-none">🌸</div>
      <div className="absolute top-10 right-4 text-4xl animate-spin-crazy pointer-events-none">🌺</div>
      <div className="absolute bottom-6 left-6 text-3xl animate-wiggle pointer-events-none">🦋</div>
      <div className="absolute bottom-8 right-5 text-4xl animate-bounce-crazy pointer-events-none">👶🏻</div>

      <div className="relative max-w-xl mx-auto space-y-6">
        
        {/* Overdecorated Sacred Greeting */}
        <div className="p-4 rounded-3xl bg-yellow-300 border-4 border-dashed border-red-500 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transform -rotate-1">
          <div className="inline-block bg-red-600 text-white font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest shadow mb-2 animate-flash">
            ✨🌸 PEMBERITAHUAN RESMI KELUARGA 🌸✨
          </div>
          <h2 className="font-chewy text-3xl sm:text-4xl text-purple-900 drop-shadow-[2px_2px_0px_#ffffff]">
            🙏 OM SWASTYASTU 🙏
          </h2>
          <div className="mt-2 p-3 bg-white rounded-2xl border-2 border-purple-400">
            <p className="font-comic font-bold text-sm sm:text-base text-pink-700 leading-relaxed">
              🌸💖✨ DENGAN PENUH SUKACITA & RASA SYUKUR MENDALAM ✨💖🌸
              <br />
              &quot;Kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara Tigang Sasih putri kami.&quot; 🥰🌷💐💕
            </p>
          </div>
        </div>

        {/* Baby Photo Card Overloaded with Stickers & Borders */}
        <div className="relative mx-auto max-w-[380px] p-4 bg-gradient-to-tr from-yellow-400 via-pink-400 to-cyan-400 rounded-[40px] shadow-2xl border-4 border-white animate-pulse-aggressive">
          {/* Stickers stuck on corners */}
          <div className="absolute -top-3 -left-3 bg-pink-500 text-white font-comic text-xs font-black px-3 py-1 rounded-full border-2 border-yellow-200 shadow transform -rotate-12 z-20">
            👑 CUTE BABY ALERT 👑
          </div>
          <div className="absolute -top-3 -right-3 bg-yellow-400 text-purple-900 font-comic text-xs font-black px-3 py-1 rounded-full border-2 border-white shadow transform rotate-12 z-20">
            🎀 100% GEMAS 🎀
          </div>

          <div className="relative rounded-[30px] overflow-hidden border-4 border-purple-600 bg-white">
            <img
              src={baby.photoSecondary}
              alt={baby.name}
              className="w-full aspect-[4/3] object-cover object-center"
            />
            {/* Tacky photo ribbon overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 py-1.5 text-white font-comic text-xs font-bold tracking-wider">
              💖✨ FOTO RESMI UPACARA ADAT BALI ✨💖
            </div>
          </div>

          {/* More badges */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="bg-yellow-300 text-purple-900 text-[11px] font-bold px-3 py-1 rounded-full border border-purple-600 shadow-sm">
              🪷 105 Hari
            </span>
            <span className="bg-white text-pink-600 text-[11px] font-bold px-3 py-1 rounded-full border border-pink-400 shadow-sm">
              👶🏻 Putri Tercinta
            </span>
            <span className="bg-cyan-300 text-blue-900 text-[11px] font-bold px-3 py-1 rounded-full border border-blue-600 shadow-sm">
              ✨ Suci & Rahayu
            </span>
          </div>
        </div>

        {/* Baby Name Banner - Extremely Loud */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-yellow-200 via-white to-pink-200 border-4 border-pink-500 shadow-xl">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-comic text-xs font-black px-4 py-1 rounded-full uppercase mb-2">
            💐 MAHA KARYA CINTA KELUARGA 💐
          </div>

          <h3 className="font-lobster text-3xl sm:text-4xl md:text-5xl text-red-600 drop-shadow-[2px_2px_0px_#ffff00] leading-tight my-2">
            {baby.name}
          </h3>

          <div className="flex items-center justify-center gap-2 my-3 text-2xl">
            <span>🌸</span><span>💖</span><span>👶🏻</span><span>🎀</span><span>🪷</span>
          </div>

          {/* Meaning / Short Quote in Multiple Tacky Boxes */}
          <div className="p-4 rounded-2xl bg-yellow-100 border-2 border-dashed border-orange-400 text-left space-y-2">
            <span className="font-comic font-black text-xs text-orange-600 uppercase block">
              📖 MAKNA UPACARA TIGANG SASIH:
            </span>
            <p className="font-comic text-xs sm:text-sm text-gray-800 leading-relaxed">
              {ceremony.meaning}
            </p>
          </div>

          <div className="mt-3 p-3 bg-pink-100 rounded-xl border border-pink-300">
            <p className="font-comic italic text-xs text-purple-900">
              &quot;Semoga menjadi anak yang berbakti, pintar, cerdas, sehat lahir batin, dan selalu dalam lindungan Ida Sang Hyang Widhi Wasa! Aamiin / Dumogi Rahayu! 🌟🤲&quot;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
