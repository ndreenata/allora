import { useState } from 'react';
import { useGuestName } from '../../hooks/useInvitation';

interface RSVPData {
  name: string;
  attendance: 'hadir' | 'tidak' | '';
  guests: number;
  message: string;
}

export default function RSVPSection() {
  const guestName = useGuestName();
  const [formData, setFormData] = useState<RSVPData>({
    name: guestName,
    attendance: 'hadir',
    guests: 1,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-12 px-4 bg-gradient-to-b from-[#7b1fa2] via-[#512da8] to-[#303f9f] relative overflow-hidden text-center border-b-8 border-green-400">
      {/* Background polka dots & chaotic shapes */}
      <div className="absolute inset-0 bg-stripes-confetti opacity-20 pointer-events-none" />

      {/* Floating Emojis */}
      <div className="absolute top-2 left-4 text-4xl animate-bounce pointer-events-none">💌</div>
      <div className="absolute top-6 right-4 text-4xl animate-spin-crazy pointer-events-none">✍️</div>
      <div className="absolute bottom-4 left-6 text-4xl animate-wiggle pointer-events-none">🥰</div>
      <div className="absolute bottom-6 right-6 text-4xl animate-bounce-crazy pointer-events-none">💖</div>

      <div className="relative max-w-lg mx-auto space-y-6">
        
        {/* Banner Title */}
        <div className="p-4 rounded-3xl bg-yellow-300 border-4 border-red-500 shadow-2xl transform -rotate-1">
          <span className="bg-blue-600 text-white font-comic font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest block mx-auto max-w-fit mb-1">
            📋 SISTEM RESERVASI ONLINE TERPADU 📋
          </span>
          <h2 className="font-impact text-4xl sm:text-5xl text-purple-900 drop-shadow-[2px_2px_0px_#ffff00]">
            KONFIRMASI RSVP
          </h2>
          <p className="font-comic font-bold text-red-600 text-xs sm:text-sm mt-1">
            ✨ Mohon isi data kehadiran demi kelancaran catering & jamuan! ✨
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-3xl bg-green-200 border-4 border-green-600 shadow-2xl text-center animate-bounce-crazy">
            <div className="text-5xl mb-2">🎉✅😍</div>
            <span className="bg-green-600 text-white font-comic font-black text-xs px-4 py-1 rounded-full uppercase">
              STATUS: TERKONFIRMASI SUKSES!
            </span>
            <h3 className="font-lobster text-3xl text-green-900 my-2">
              Matur Suksma Banget! 🙏
            </h3>
            <p className="font-comic text-sm text-green-800">
              Konfirmasi kehadiran untuk <strong>{formData.name || 'Bapak/Ibu/Saudara/i'}</strong> telah berhasil kami catat! Kami tunggu kedatangannya yaaa! 💖🌸
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-comic font-bold text-xs rounded-xl border-2 border-purple-600 cursor-pointer shadow"
            >
              🔄 Klik Di Sini Jika Mau Mengubah Data RSVP
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-3xl bg-white border-4 border-dashed border-pink-500 shadow-2xl text-left space-y-4"
          >
            {/* Guest Name */}
            <div>
              <label className="block font-comic font-black text-xs uppercase text-purple-900 mb-1">
                👤 NAMA TAMU / KELUARGA (WAJIB DIISI):
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Contoh: Bli Made & Keluarga"
                className="w-full px-3 py-2.5 bg-yellow-50 border-3 border-purple-500 rounded-xl font-comic text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Attendance Buttons: YA SAYA HADIR vs MAAF TIDAK BISA */}
            <div>
              <label className="block font-comic font-black text-xs uppercase text-pink-600 mb-1 text-center">
                💖 HADIR GAK NIH? 💖
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendance: 'hadir' })}
                  className={`py-3 px-3 rounded-2xl border-4 font-comic font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-transform active:scale-95 cursor-pointer shadow-md ${
                    formData.attendance === 'hadir'
                      ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white border-yellow-300 scale-105 shadow-green-500/50'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-green-100'
                  }`}
                >
                  <span>😍 YA SAYA HADIR! 🎉</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attendance: 'tidak' })}
                  className={`py-3 px-3 rounded-2xl border-4 font-comic font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-transform active:scale-95 cursor-pointer shadow-md ${
                    formData.attendance === 'tidak'
                      ? 'bg-gradient-to-r from-rose-500 to-red-600 text-white border-yellow-300 scale-105 shadow-red-500/50'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-red-100'
                  }`}
                >
                  <span>😭 MAAF TIDAK BISA 💔</span>
                </button>
              </div>
            </div>

            {/* Guests Count (If hadir) */}
            {formData.attendance === 'hadir' && (
              <div className="p-3 bg-yellow-100 rounded-2xl border-2 border-yellow-400">
                <label className="block font-comic font-black text-xs uppercase text-orange-800 mb-1">
                  👨‍👩‍👦 BERAPA ORANG YANG IKUT HADIR?
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData({ ...formData, guests: num })}
                      className={`w-10 h-10 rounded-full font-impact text-base border-3 transition-transform cursor-pointer shadow flex items-center justify-center ${
                        formData.guests === num
                          ? 'bg-red-500 text-white border-yellow-300 scale-110 shadow-red-400/50'
                          : 'bg-white text-gray-800 border-gray-400 hover:bg-yellow-200'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <span className="font-comic font-bold text-xs text-gray-600 ml-1">Orang</span>
                </div>
              </div>
            )}

            {/* Message / Prayer Field */}
            <div>
              <label className="block font-comic font-black text-xs uppercase text-purple-900 mb-1">
                💬 UCAPAN ATAU CATATAN KHUSUS:
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tuliskan ucapan selamat atau doa restu..."
                rows={2}
                className="w-full px-3 py-2 bg-yellow-50 border-3 border-purple-500 rounded-xl font-comic text-xs text-purple-900 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-ugly-buy w-full py-3.5 rounded-full text-base font-black uppercase tracking-wider cursor-pointer shadow-lg animate-pulse-aggressive flex items-center justify-center gap-2"
            >
              <span>🚀 KIRIM KONFIRMASI SEKARANG JUGA! 🚀</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
