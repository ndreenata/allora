interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const isLeft = align === 'left';

  return (
    <div className={`mb-8 sm:mb-12 ${isLeft ? 'text-left' : 'text-center'} ${className}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 mb-2 ${isLeft ? 'justify-start' : 'justify-center'}`}>
          <span className="w-6 h-[1px] bg-[#A45339]/50" />
          <span className="text-[10px] tracking-wide-editorial uppercase font-semibold text-[#A45339]">
            {tag}
          </span>
          {!isLeft && <span className="w-6 h-[1px] bg-[#A45339]/50" />}
        </div>
      )}

      <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#221A16] font-normal tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className={`font-sans text-xs sm:text-sm text-[#736156] mt-2.5 max-w-md ${isLeft ? '' : 'mx-auto'} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
