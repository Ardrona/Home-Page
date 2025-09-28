/**
 * Ardrona Logo Component - Modular and Reusable
 */
import React from 'react';
import { cn } from '@/lib/utils';
import ardronaLogoMain from '@/assets/ardrona-logo.png';
import ardronaLogoSquare from '@/assets/ardrona-logo-square.png';
import ardronaLogoTransparent from '@/assets/ardrona-logo-transparent.png';
import ardronaSymbol from '@/assets/ardrona-symbol.png';

interface LogoProps {
  variant?: 'main' | 'square' | 'transparent' | 'symbol';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'h-8',
  md: 'h-12',
  lg: 'h-16',
  xl: 'h-24'
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
  return (
    <img
      src={logoSources[variant]}
      alt="Ardrona - Airborne. Anytime. Anywhere."
      className={cn(
        sizeClasses[size],
        'w-auto object-contain transition-all duration-300',
        className
      )}
    />
  );
};

export default Logo;