/**
 * Ardrona Logo Component - Modular and Reusable
 */
import React from 'react';
import { cn } from '@/lib/utils';
import { useDescriptions } from '@/hooks/use-descriptions';
import ardronaLogoMain from '@/assets/ardrona-logo.png';
import ardronaLogoSquare from '@/assets/ardrona-logo-square.png';
import ardronaLogoTransparent from '@/assets/ardrona-logo-transparent.png';
import ardronaSymbol from '@/assets/ardrona-symbol.png';

interface LogoProps {
  variant?: 'main' | 'square' | 'transparent' | 'symbol';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'navbar';
  className?: string;
}

const sizeClasses = {
  xs: 'h-6',
  sm: 'h-8',
  md: 'h-12',
  lg: 'h-16',
  xl: 'h-24',
  '2xl': 'h-32',
  '3xl': 'h-64',
};

const logoSources = {
  main: ardronaLogoMain,
  square: ardronaLogoSquare,
  transparent: ardronaLogoTransparent,
  symbol: ardronaSymbol
};

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'transparent', 
  size = 'md', 
  className 
}) => {
  const descriptions = useDescriptions();
  
  return (
    <img
      src={logoSources[variant]}
      alt={descriptions.logo.alt}
      className={cn(
        sizeClasses[size],
        'w-auto object-contain transition-all duration-300',
        className
      )}
    />
  );
};

export default Logo;