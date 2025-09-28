/**
 * Cal.com Modal Integration Component
 */
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalModalProps {
  calLink?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export const CalModal: React.FC<CalModalProps> = ({
  calLink = "ayaan-kaifullah-ppsvgy/30min",
  children = "Schedule a Call",
  variant = "default",
  size = "default",
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const calUrl = `https://cal.com/${calLink}`;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={cn("cta-button", className)}
        >
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 border-0">
        <iframe
          src={calUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          className="w-full h-full rounded-lg"
          title="Schedule meeting"
          allow="camera; microphone; fullscreen; display-capture"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CalModal;