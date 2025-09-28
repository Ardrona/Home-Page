/**
 * Ardrona Brand Badge Component
 */
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BrandBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
}

export const BrandBadge: React.FC<BrandBadgeProps> = ({ 
  children, 
  variant = 'default',
  className 
}) => {
  return (
    <Badge 
      variant={variant}
      className={cn(
        'font-medium px-4 py-2 rounded-full',
        'border border-primary/20 bg-primary/10 text-primary',
        'hover:bg-primary/20 transition-all duration-300',
        className
      )}
    >
      {children}
    </Badge>
  );
};

export const NYCBadge: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <BrandBadge className={cn('animate-float', className)}>
      🗽 NYC First • Expanding Soon
    </BrandBadge>
  );
};

export default BrandBadge;