import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Mail, Phone, MapPin } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { GOOGLE_APPS_SCRIPT_URL, FORM_CONFIG } from '@/config/forms'

interface BusinessPartnershipFormProps {
  onClose?: () => void
}

export function BusinessPartnershipForm({ onClose }: BusinessPartnershipFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    businessType: '',
    deliveryVolume: '',
    additionalInfo: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to Google Sheets via Google Apps Script
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: FORM_CONFIG.formTypes.BUSINESS_PARTNERSHIP,
          ...formData,
          timestamp: new Date().toISOString()
        })
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: "Partnership Request Submitted!",
          description: "Thank you for your interest. We'll contact you within 24 hours.",
        })
        
        // Reset form
        setFormData({
          businessName: '',
          contactName: '',
          email: '',
          phone: '',
          address: '',
          businessType: '',
          deliveryVolume: '',
          additionalInfo: ''
        })
        
        // Close modal if callback provided
        if (onClose) {
          onClose()
        }
      } else {
        throw new Error(result.error || 'Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Building2 className="h-6 w-6 text-primary" />
          Business Partnership Application
        </CardTitle>
        <CardDescription>
          Join our drone delivery network in NYC. Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Your business name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Name *</Label>
              <Input
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Business Address (NYC) *</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main St, New York, NY 10001"
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="businessType">Business Type *</Label>
              <Input
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                placeholder="e.g., Restaurant, Retail, Pharmacy"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryVolume">Expected Daily Deliveries</Label>
              <Input
                id="deliveryVolume"
                name="deliveryVolume"
                value={formData.deliveryVolume}
                onChange={handleInputChange}
                placeholder="e.g., 10-50 deliveries per day"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Tell us more about your business and delivery needs..."
              rows={4}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Partnership Request'}
            </Button>
            {onClose && (
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}