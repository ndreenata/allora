import { useState, useEffect } from 'react';

interface WishMessage {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

const DEFAULT_WISHES: WishMessage[] = [
  {
    id: 'w1',
    name: '👑 Kakek & Nenek Tersayang',
    message: 'Dumogi cucu tersayang Ni Luh Allora Grizelyn Putri Kaylena senantiasa rahayu, sehat, pintar, berbakti dan panjang umur ya sayang! 🌸🥰💖',
    timestamp: Date.now() - 3600000 * 5,
  },
  {
    id: 'w2',
    name: '🎉 Bli Gede & Sayu',
    message: 'Selamat upacara Tigang Sasih! Semoga tumbuh jadi anak yang membanggakan orang tua dan keluarga besar! Sehat selalu Allora! 👶🏻✨💐',
    timestamp: Date.now() - 3600000 * 12,
  },
];

export default function WishesSection() {
  const [wishes, setWishes] = useState<WishMessage[]>(DEFAULT_WISHES);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('tigang-sasih-wishes-v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      } catch {
        // fallback
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: WishMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      timestamp: Date.now(),
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('tigang-sasih-wishes-v2', JSON.stringify(updated));
    setName('');
    setMessage('');
  };

  const formatTime = (ts: number) => {
    const diff = Date.now() - ts;
    const mins = Math.floor(diff / 60000);
    if (mins < 2) return 'Baru saja';
    if (mins < 60) return `${mins} mnt lalu`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours} jam lalu`;
    const days = Math.floor(hours / 24);
    return `${days} hari lalu`;
  };

  return (
    <section id="wishes" className="py-12 px-4 bg-gradient-to-b from-[#ff80ab] via-[#ff4081] to-[#f50057] relative overflow-hidden text-center border-b-8 border-yellow-300">
      {/* Background polka dots */}
      <div className="absolute inset-0 bg-polka-pink opacity-30 pointer-events-none" />

      {/* Floating Emojis */}
      <div className="absolute top-2 left-4 text-4xl animate-bounce pointer-events-none">💬</div>
      <div className="absolute top-6 right-4 text-4xl animate-spin-crazy pointer-events-none">✨</div>
      <div className="absolute bottom-4 left-6 text-4xl animate-wiggle pointer-events-none">💌</div>
      <div className="absolute bottom-6 right-6 text-4xl animate-bounce-crazy pointer-events-none">💖</div>

      <div className="relative max-w-lg mx-auto space-y-6">
        
        {/* Banner Title */}
        <div className="p-4 rounded-3xl bg-yellow-300 border-4 border-dashed border-purple-700 shadow-2xl transform rotate-1">
          <span className="bg-purple-600 text-yellow-300 font-comic font-black text-xs px-4 py-1 rounded-full uppercase tracking-widest block mx-auto max-w-fit mb-1">
            💌 BUKU TAMU DIGITAL & SHOUTBOX 💌
          </span>
          <h2 className="font-impact text-4xl sm:text-5xl text-red-600 drop-shadow-[2px_2px_0px_#ffffff]">
            UNTAIAN DOA RESTU
          </h2>
          <p className="font-comic font-bold text-purple-900 text-xs sm:text-sm mt-1">
            🌸 Kirimkan Doa Kasih & Harapan Terbaik untuk Allora 🌸
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="p-5 rounded-3xl bg-white border-4 border-yellow-400 shadow-2xl space-y-3 text-left"
        >
          <div>
            <label className="block font-comic font-black text-xs uppercase text-pink-600 mb-1">
              ✏️ NAMA LENGKAP ATAU NICKNAME:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ketik nama kamu di sini..."
              required
              className="w-full px-3 py-2 bg-pink-50 border-2 border-pink-400 rounded-xl font-comic text-sm text-purple-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block font-comic font-black text-xs uppercase text-purple-900 mb-1">
              💖 KETIK PESAN & DOA UNTUK ANANDA:
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Semoga sehat selalu, pintar, dan berbakti..."
              required
              rows={3}
              className="w-full px-3 py-2 bg-yellow-50 border-2 border-yellow-400 rounded-xl font-comic text-xs text-purple-900 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="btn-ugly-buy w-full py-3 rounded-full text-base font-black uppercase tracking-wider cursor-pointer shadow flex items-center justify-center gap-2"
          >
            <span>💌 POST DOA & UCAPAN SEKARANG! 🌟</span>
          </button>
        </form>

        {/* Wishes List (Shoutbox Style) */}
        <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1 text-left">
          {wishes.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-2xl bg-yellow-100 border-3 border-yellow-400 shadow-md relative transform hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-comic font-black text-xs text-purple-900 bg-white px-2 py-0.5 rounded-full border border-purple-400 shadow-xs">
                  {item.name}
                </span>
                <span className="text-[10px] text-pink-600 font-comic font-bold bg-pink-100 px-2 py-0.5 rounded-full">
                  ⏰ {formatTime(item.timestamp)}
                </span>
              </div>
              <p className="font-comic text-xs text-gray-800 leading-relaxed bg-white/90 p-2 rounded-xl border border-gray-200 mt-1">
                &ldquo;{item.message}&rdquo;
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
