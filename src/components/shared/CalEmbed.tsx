/**
 * Cal.com Integration Component
 */
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    Cal: any;
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
  namespace = "30min",
  children = "Schedule a Call",
  variant = "default",
  size = "default",
  className
}) => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "${namespace}", {origin:"https://app.cal.com"});
      Cal.ns["${namespace}"]("ui", {
        "theme":"light",
        "cssVarsPerTheme": {
          "light": {"cal-brand":"#8BC34A"},
          "dark": {"cal-brand":"#8BC34A"}
        },
        "hideEventTypeDetails":false,
        "layout":"week_view"
      });
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
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
      <Calendar className="mr-2 h-4 w-4" />
      {children}
    </Button>
  );
};

export default CalEmbed;