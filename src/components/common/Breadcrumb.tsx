import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'dark' | 'light';
}

export default function Breadcrumb({ items, variant = 'light' }: BreadcrumbProps) {
  const linkColor = variant === 'light' ? 'text-white/60 hover:text-white' : 'text-graytext hover:text-navy-deep';
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-deep';

  return (
    <nav aria-label="Breadcrumb" className="iiq-breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {item.to && !isLast ? (
                <Link to={item.to} className={`transition-colors ${linkColor}`}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? textColor : linkColor} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5 text-white/30" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
