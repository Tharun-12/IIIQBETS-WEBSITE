import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'whiteOutline';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: boolean;
  ariaLabel?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-navy-light text-white hover:bg-blue-bright border border-transparent',
  secondary:
    'bg-white text-navy-deep border border-navy-deep/15 hover:border-navy-light hover:text-navy-light',
  outline:
    'bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/60',
  ghost:
    'bg-transparent text-navy-light hover:bg-navy-light/10',
  white:
    'bg-white text-navy-deep hover:bg-offwhite border border-transparent',
  whiteOutline:
    'bg-transparent text-white border border-white/40 hover:bg-white hover:text-navy-deep',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  icon = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses = `iiq-btn inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} group`} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseClasses} group`} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} group`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
