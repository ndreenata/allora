import { useInView } from '../../hooks/useInvitation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-in' | 'scale-in';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView();

  const animationClass = {
    'fade-up': 'animate-fade-in-up',
    'fade-down': 'animate-fade-in-down',
    'fade-in': 'animate-fade-in',
    'scale-in': 'animate-scale-in',
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? animationClass : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
