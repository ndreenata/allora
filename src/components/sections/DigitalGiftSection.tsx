import { useState } from 'react';
import config from '../../config/invitation';
import { useCopyToClipboard } from '../../hooks/useInvitation';

export default function DigitalGiftSection() {
  const { digitalGift } = config;
  const { copied, copy } = useCopyToClipboard();
  const [copiedId, setCopiedId] = useState(false);

  const handleCopy = (num: string) => {
    copy(num);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section id="gift" className="py-12 px-4 bg-gradient-to-b from-[#ffd700] via-[#ffb300] to-[#ff8f00] relative overflow-hidden text-center border-b-8 border-purple-600">
      {/* Background stripes & polka */}
      <div className="absolute inset-0 bg-polka-yellow opacity-40 pointer-events-none" />

      {/* Floating Emojis */}
      <div className="absolute top-2 left-4 text-4xl animate-bounce pointer-events-none">💳</div>
      <div className="absolute top-6 right-4 text-4xl animate-spin-crazy pointer-events-none">💰</div>
      <div className="absolute bottom-4 left-6 text-4xl animate-wiggle pointer-events-none">🎁</div>
      <div className="absolute bottom-6 right-6 text-4xl animate-bounce-crazy pointer-events-none">✨</div>

      <div className="relative max-w-lg mx-auto space-y-6">
        
        {/* Banner Title */}
        <div className="p-4 rounded-3xl bg-purple-700 border-4 border-white shadow-2xl transform -rotate-1">
          <span className="bg-yellow-300 text-purple-900 font-comic font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest block mx-auto max-w-fit mb-1">
            💳 TANDA KASIH & AMPLOP DIGITAL 💳
          </span>
          <h2 className="font-impact text-4xl sm:text-5xl text-yellow-300 drop-shadow-[3px_3px_0px_#ff007f]">
            KADO & AMPLOP
          </h2>
          <p className="font-comic font-bold text-white text-xs sm:text-sm mt-1">
            ✨🌸 Ungkapan Doa Restu & Kado Kasih untuk Ananda 🌸✨
          </p>
        </div>

        {/* Message Box */}
        <div className="p-3 bg-white/90 rounded-2xl border-2 border-dashed border-red-500 max-w-md mx-auto">
          <p className="font-comic text-xs sm:text-sm text-purple-900 font-bold leading-relaxed">
            &ldquo;{digitalGift.message}&rdquo;
          </p>
        </div>

        {/* UNNECESSARILY FANCY OVERDECORATED VIP CREDIT CARD */}
        <div className="relative p-6 sm:p-8 rounded-[36px] bg-gradient-to-tr from-[#1a237e] via-[#4a148c] via-[#b71c1c] to-[#ffd700] border-4 border-yellow-300 shadow-[0_0_35px_rgba(255,215,0,0.8)] text-white max-w-md mx-auto text-left transform rotate-1 hover:rotate-0 transition-transform">
          
          {/* Emojis pinned all over card */}
          <div className="absolute -top-3 -right-3 text-3xl z-20 animate-wiggle">💳💖🎀</div>
          <div className="absolute -bottom-3 -left-3 text-3xl z-20 animate-bounce">🌸✨💰</div>

          {/* Fake EMV Chip & VIP Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {/* Gold Chip */}
              <div className="w-12 h-9 rounded-lg bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 border-2 border-yellow-200 shadow-md flex flex-col justify-around p-1">
                <div className="w-full h-[1px] bg-yellow-800" />
                <div className="w-full h-[1px] bg-yellow-800" />
                <div className="w-full h-[1px] bg-yellow-800" />
              </div>
              <span className="text-xl">📶</span>
            </div>

            <span className="font-impact text-2xl tracking-wider text-yellow-300 drop-shadow">
              {digitalGift.account.bank}
            </span>
          </div>

          <div className="my-3">
            <span className="font-comic font-black text-[10px] uppercase text-yellow-300 tracking-widest block mb-1">
              NOMOR REKENING RESMI:
            </span>
            <p className="font-impact text-3xl sm:text-4xl text-white tracking-widest drop-shadow-[2px_2px_0px_#000] tabular-nums">
              {digitalGift.account.accountNumber}
            </p>
          </div>

          <div className="mt-2 mb-4">
            <span className="font-comic font-bold text-[10px] uppercase text-pink-300 tracking-wider block">
              ATAS NAMA PENERIMA:
            </span>
            <p className="font-lobster text-xl sm:text-2xl text-yellow-200 drop-shadow leading-snug">
              a.n. {digitalGift.account.accountName}
            </p>
          </div>

          {/* Obnoxious Copy Button */}
          <button
            onClick={() => handleCopy(digitalGift.account.accountNumber)}
            className="btn-ugly-buy w-full py-3 rounded-full text-base font-black uppercase tracking-wider cursor-pointer shadow-lg animate-pulse-aggressive flex items-center justify-center gap-2"
            aria-label="Salin Nomor Rekening"
          >
            {copiedId && copied ? (
              <span className="text-white flex items-center gap-1 font-black text-sm">
                ✅ NOMOR REKENING SUKSES DISALIN! 📋🎉
              </span>
            ) : (
              <span>📋 KLIK DI SINI: SALIN NO. REK 📋</span>
            )}
          </button>

          <p className="text-center font-comic text-[10px] text-yellow-200 mt-2">
            ✨ Terima kasih banyak atas ketulusan & kebaikan hatinya! ✨
          </p>
        </div>

      </div>
    </section>
  );
}
