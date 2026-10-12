import { type ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'narrow';
}

export default function PageContainer({
  children,
  className = '',
  variant = 'default',
}: PageContainerProps) {
  const containerClass = variant === 'narrow' ? 'iiq-container-narrow' : 'iiq-container';
  return <div className={`${containerClass} ${className}`}>{children}</div>;
}
