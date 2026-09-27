import { useState, useEffect, useRef, useCallback } from 'react';
import config from '../../config/invitation';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  // Play peaceful Balinese Rindik / Gamelan pentatonic chime notes (Pelog / Selisir scale)
  const playBalineseChime = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }

    const ctx = audioCtxRef.current;
    if (!ctx) return;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const frequencies = [330, 350, 440, 520, 660, 700, 880];
    const randomIndex = Math.floor(Math.random() * frequencies.length);
    const freq = frequencies[randomIndex];

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.8);
  }, []);

  const scheduleNextNote = useCallback(() => {
    if (!isPlayingRef.current) return;
    playBalineseChime();
    const intervals = [450, 650, 800, 1100];
    const nextInterval = intervals[Math.floor(Math.random() * intervals.length)];
    timerRef.current = window.setTimeout(scheduleNextNote, nextInterval);
  }, [playBalineseChime]);

  const toggle = () => {
    if (isPlaying) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (timerRef.current) clearTimeout(timerRef.current);
    } else {
      isPlayingRef.current = true;
      setIsPlaying(true);
      scheduleNextNote();
    }
  };

  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      {/* External YouTube Link - Super tacky button */}
      <a
        href={config.music.searchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-red-600 text-white font-comic font-black text-[11px] border-2 border-yellow-300 shadow-lg hover:scale-105 transition-transform"
      >
        <span>▶️ YOUTUBE LAGU</span>
      </a>

      {/* OBNOXIOUS FLASHING MUSIC BUTTON */}
      <button
        onClick={toggle}
        className={`group flex items-center p-2 pr-4 rounded-full border-4 cursor-pointer transition-all duration-300 shadow-2xl ${
          isPlaying
            ? 'bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 border-white animate-pulse-aggressive text-purple-950'
            : 'bg-gradient-to-r from-purple-800 to-indigo-900 border-yellow-300 text-white hover:scale-105'
        }`}
        aria-label={isPlaying ? 'Hentikan Musik' : 'Putar Musik'}
      >
        {/* Spinning Disc / Emoji */}
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center mr-2 text-lg border-2 border-white shadow-md ${
            isPlaying ? 'bg-red-500 animate-spin-fast' : 'bg-gray-800'
          }`}
        >
          {isPlaying ? '🎵' : '🔇'}
        </div>

        {/* Track Label */}
        <div className="flex flex-col text-left">
          <span className="font-comic font-black text-[10px] tracking-wider uppercase text-yellow-300 bg-black/60 px-1.5 py-0.5 rounded">
            {isPlaying ? '💖 LAGU ON 💖' : '🎵 KLIK: PUTAR MUSIK 🎵'}
          </span>
          <span className="font-lobster text-xs sm:text-sm truncate max-w-[110px] mt-0.5">
            {config.music.title}
          </span>
        </div>
      </button>
    </div>
  );
}
