import { useState } from 'react';
import config from '../../config/invitation';

export default function GallerySection() {
  const { gallery } = config;
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-12 px-4 bg-gradient-to-b from-[#ff1493] via-[#ff69b4] to-[#ffb6c1] relative overflow-hidden text-center border-b-8 border-yellow-300">
      {/* Background polka dots */}
      <div className="absolute inset-0 bg-polka-pink opacity-50 pointer-events-none" />

      {/* Floating Emojis */}
      <div className="absolute top-2 left-2 text-4xl animate-bounce pointer-events-none">🌸</div>
      <div className="absolute top-6 right-2 text-5xl animate-spin-crazy pointer-events-none">✨</div>
      <div className="absolute bottom-4 left-4 text-4xl animate-spin-reverse pointer-events-none">💖</div>
      <div className="absolute bottom-6 right-4 text-4xl animate-wiggle pointer-events-none">🦋</div>

      <div className="relative max-w-lg mx-auto space-y-6">
        
        {/* Banner Title */}
        <div className="p-4 rounded-3xl bg-yellow-300 border-4 border-dashed border-purple-700 shadow-2xl transform rotate-1">
          <span className="bg-red-600 text-white font-comic font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest block mx-auto max-w-fit mb-1 animate-flash">
            📸 DOKUMENTASI EKSKLUSIF 📸
          </span>
          <h2 className="font-impact text-4xl sm:text-5xl text-purple-900 drop-shadow-[2px_2px_0px_#ffffff]">
            GALERI FOTO IMUT
          </h2>
          <p className="font-comic font-bold text-pink-700 text-xs sm:text-sm mt-1">
            🌸 Potret Pesona & Senyum Menggemaskan Allora 🌸
          </p>
        </div>

        {/* AWKWARD MISMATCHED GALLERY LAYOUT */}
        <div className="space-y-8">
          
          {/* Photo 1: Awkward tilted card with massive stickers & frames */}
          {gallery[0] && (
            <div className="relative p-4 bg-gradient-to-tr from-yellow-300 via-white to-pink-200 rounded-[35px] border-4 border-red-500 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform">
              {/* Corner decorative emojis */}
              <div className="absolute -top-4 -left-3 text-3xl z-20">🌺💖</div>
              <div className="absolute -bottom-4 -right-3 text-3xl z-20">✨🎀</div>
              
              <div className="bg-purple-600 text-yellow-300 font-comic font-black text-xs py-1 px-3 rounded-full mb-2 inline-block">
                ⭐ FOTO 1: BUSANA ADAT BALI CANTIK ⭐
              </div>

              <div
                onClick={() => setActivePhoto(0)}
                className="cursor-pointer overflow-hidden rounded-2xl border-4 border-yellow-400 shadow-lg relative group bg-white"
              >
                <img
                  src={gallery[0].url}
                  alt={gallery[0].title}
                  className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white font-comic text-[11px] font-bold px-2 py-1 rounded">
                  🔍 KLIK FOTO UNTUK ZOOM
                </div>
              </div>

              <div className="mt-3 p-2 bg-yellow-100 rounded-xl border border-yellow-400">
                <h4 className="font-lobster text-2xl text-purple-900 leading-tight">
                  {gallery[0].title}
                </h4>
                <p className="font-comic text-xs text-gray-700 mt-1">
                  {gallery[0].caption}
                </p>
              </div>
            </div>
          )}

          {/* Photo 2: Different size, opposite tilt, gold glitter borders */}
          {gallery[1] && (
            <div className="relative p-4 bg-gradient-to-tr from-cyan-200 via-yellow-100 to-pink-200 rounded-[35px] border-4 border-purple-600 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform">
              {/* Corner stickers */}
              <div className="absolute -top-4 -right-3 text-3xl z-20">👑👶🏻</div>
              <div className="absolute -bottom-4 -left-3 text-3xl z-20">🪷🌸</div>

              <div className="bg-pink-600 text-white font-comic font-black text-xs py-1 px-3 rounded-full mb-2 inline-block">
                🌟 FOTO 2: TATAPAN PENUH KASIH SAYANG 🌟
              </div>

              <div
                onClick={() => setActivePhoto(1)}
                className="cursor-pointer overflow-hidden rounded-2xl border-4 border-pink-400 shadow-lg relative group bg-white"
              >
                <img
                  src={gallery[1].url}
                  alt={gallery[1].title}
                  className="w-full aspect-[3/4] max-h-[380px] object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white font-comic text-[11px] font-bold px-2 py-1 rounded">
                  🔍 KLIK FOTO UNTUK ZOOM
                </div>
              </div>

              <div className="mt-3 p-2 bg-pink-100 rounded-xl border border-pink-400">
                <h4 className="font-lobster text-2xl text-pink-700 leading-tight">
                  {gallery[1].title}
                </h4>
                <p className="font-comic text-xs text-gray-700 mt-1">
                  {gallery[1].caption}
                </p>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-red-600 text-white text-2xl font-black flex items-center justify-center border-2 border-white shadow-lg cursor-pointer"
            aria-label="Tutup"
          >
            ✕
          </button>

          <div
            className="relative max-w-md w-full bg-yellow-300 p-3 rounded-3xl border-4 border-red-500 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-2xl border-4 border-purple-600">
              <img
                src={gallery[activePhoto].url}
                alt={gallery[activePhoto].title}
                className="w-full h-auto max-h-[65vh] object-contain mx-auto"
              />
            </div>
            
            <div className="mt-3 bg-white p-2.5 rounded-xl border-2 border-dashed border-pink-500">
              <p className="font-lobster text-2xl text-purple-900">
                {gallery[activePhoto].title}
              </p>
              <p className="font-comic text-xs text-gray-700 mt-1">
                {gallery[activePhoto].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
