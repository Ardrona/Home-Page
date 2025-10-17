import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { BusinessPartnershipForm } from './BusinessPartnershipForm'

interface BusinessPartnershipModalProps {
  children: React.ReactNode
  className?: string
}

export function BusinessPartnershipModal({ children, className }: BusinessPartnershipModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className={className}>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <BusinessPartnershipForm onClose={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}