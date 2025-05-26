// components/ui/card.tsx
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => (

  <div className={`rounded-lg border bg-white border-blue-800 text-gray-900 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = '' }: CardProps) => (
  <div className={`p-4 border  ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }: CardProps) => (
  <h3 className={`text-lg font-semibold  ${className}`}>
    {children}
  </h3>
);

export const CardContent = ({ children, className = '' }: CardProps) => (
  <div className={`p-4   ${className}`}>
    {children}
  </div>
);