/**
 * Cal.com Integration Component
 */
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    Cal?: {
      ns?: Record<string, (...args: unknown[]) => void>;
      q?: unknown[];
      loaded?: boolean;
      (cmd: string, ...args: unknown[]): void;
    };
  }
}

interface CalEmbedProps {
  calLink?: string;
  namespace?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export const CalEmbed: React.FC<CalEmbedProps> = ({
  calLink = "ayaan-kaifullah-ppsvgy/30min",
  namespace = "15min",
  children = "Schedule a Call",
  variant = "default",
  size = "default",
  className
}) => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;

    const onLoad = () => {
      try {
        if (window.Cal) {
          window.Cal('init', namespace, { origin: 'https://app.cal.com' });
          const ns = window.Cal.ns && window.Cal.ns[namespace];
          if (typeof ns === 'function') {
            ns('ui', {
              theme: 'light',
              cssVarsPerTheme: { light: { 'cal-brand': '#8BC34A' }, dark: { 'cal-brand': '#8BC34A' } },
              hideEventTypeDetails: false,
              layout: 'week_view',
            });
          }
        }
      } catch (e) {
        // Fail silently if Cal isn't available yet
        console.warn('Cal embed initialization failed', e);
      }
    };

    script.addEventListener('load', onLoad);
    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', onLoad);
      if (script.parentNode) document.head.removeChild(script);
    };
  }, [calLink, namespace]);

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(className)}
      data-cal-link={calLink}
      data-cal-namespace={namespace}
      data-cal-config='{"layout":"week_view","theme":"light"}'
    >
      <Calendar className="mr-2 h-2 w-2" />
      {children}
    </Button>
  );
};

export default CalEmbed;