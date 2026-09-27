export default function BalineseOrnament({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={`w-48 md:w-64 ${flip ? 'rotate-180' : ''} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central lotus motif */}
      <g fill="currentColor" opacity="0.5">
        {/* Center flower */}
        <ellipse cx="100" cy="30" rx="6" ry="8" />
        <ellipse cx="100" cy="30" rx="8" ry="6" />
        <circle cx="100" cy="30" r="3" opacity="0.8" />

        {/* Left petals */}
        <path d="M85 30 Q75 20 65 25 Q70 30 65 35 Q75 40 85 30Z" />
        <path d="M65 28 Q55 18 45 23 Q50 28 45 33 Q55 38 65 28Z" opacity="0.7" />
        <path d="M45 28 Q38 22 30 26 Q34 30 30 34 Q38 38 45 28Z" opacity="0.5" />

        {/* Right petals */}
        <path d="M115 30 Q125 20 135 25 Q130 30 135 35 Q125 40 115 30Z" />
        <path d="M135 28 Q145 18 155 23 Q150 28 155 33 Q145 38 135 28Z" opacity="0.7" />
        <path d="M155 28 Q162 22 170 26 Q166 30 170 34 Q162 38 155 28Z" opacity="0.5" />

        {/* Curling vines left */}
        <path d="M30 30 Q20 25 10 28" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="8" cy="28" r="2" opacity="0.3" />

        {/* Curling vines right */}
        <path d="M170 30 Q180 25 190 28" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="192" cy="28" r="2" opacity="0.3" />
      </g>
    </svg>
  );
}
