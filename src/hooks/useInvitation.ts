import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

/**
 * Hook: Get guest name from URL query parameter
 */
export function useGuestName(): string {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to') || params.get('guest') || params.get('nama') || '';
    return decodeURIComponent(name).replace(/\+/g, ' ');
  }, []);
}

/**
 * Hook: Countdown timer to a target date
 */
export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function useCountdown(targetDate: string): CountdownTime {
  const calculateTime = useCallback((): CountdownTime => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isExpired: false,
    };
  }, [targetDate]);

  const [time, setTime] = useState<CountdownTime>(calculateTime);

  useEffect(() => {
    const interval = setInterval(() => setTime(calculateTime()), 1000);
    return () => clearInterval(interval);
  }, [calculateTime]);

  return time;
}

/**
 * Hook: Intersection Observer for scroll animations
 */
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

/**
 * Hook: Audio player controller
 */
export interface AudioController {
  isPlaying: boolean;
  toggle: () => void;
  play: () => void;
  pause: () => void;
  currentTime: number;
  duration: number;
}

export function useAudioPlayer(src: string): AudioController {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime));
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [src]);

  const play = useCallback(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const toggle = useCallback(() => {
    if (audioRef.current?.paused) {
      play();
    } else {
      pause();
    }
  }, [play, pause]);

  return { isPlaying, toggle, play, pause, currentTime, duration };
}

/**
 * Hook: Copy to clipboard
 */
export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return { copied, copy };
}

/**
 * Utility: Format date to Indonesian locale
 */
export function formatDateID(dateStr: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  });
}

/**
 * Utility: Generate Google Calendar URL
 */
export function generateGoogleCalendarUrl(config: {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}): string {
  const start = new Date(config.startDate).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const end = new Date(config.endDate).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: config.title,
    details: config.description,
    location: config.location,
    dates: `${start}/${end}`,
  });

  return `https://www.google.com/calendar/render?${params.toString()}`;
}
