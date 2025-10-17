/**
 * Customer Signup Component - "Be the first to order by drone"
 * With proper input validation and security
 */
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, MapPin, Mail, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import Logo from '../brand/Logo';
import { GOOGLE_APPS_SCRIPT_URL, FORM_CONFIG } from '@/config/forms';

// Input validation schema
const signupSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  city: z
    .string()
    .trim()
    .min(1, { message: "City is required" })
    .max(100, { message: "City must be less than 100 characters" })
    .regex(/^[a-zA-Z\s,.-]+$/, { message: "City contains invalid characters" })
});

type SignupFormData = z.infer<typeof signupSchema>;

interface CustomerSignupProps {
  className?: string;
}

export const CustomerSignup: React.FC<CustomerSignupProps> = ({ className }) => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    city: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof SignupFormData, string>>>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof SignupFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      signupSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof SignupFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0] && typeof err.path[0] === 'string') {
            newErrors[err.path[0] as keyof SignupFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      // Submit to Google Sheets via Google Apps Script
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: FORM_CONFIG.formTypes.CUSTOMER_SIGNUP,
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Thanks for signing up! We\'ll notify you when drone delivery is available in your area.');
        setFormData({ email: '', city: '' });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-6">
          <Logo
            variant="transparent"
            size="lg"
            className="h-32 w-auto max-w-xs"           />
        </div>
        <CardTitle className="text-2xl font-heading">Be the First to Order by Drone</CardTitle>
        <CardDescription className="text-base">
          Get early access to drone delivery in your city. We'll notify you when we launch!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className={`focus-ring ${errors.email ? 'border-red-500' : ''}`}
              maxLength={255}
            />
            {errors.email && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              City
            </Label>
            <Input
              id="city"
              type="text"
              placeholder="New York, NY"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              required
              className={`focus-ring ${errors.city ? 'border-red-500' : ''}`}
              maxLength={100}
            />
            {errors.city && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.city}
              </p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full btn-primary" 
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Join the Waitlist'}
          </Button>
        </form>
        
        <p className="text-xs text-slate-500 text-center mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </CardContent>
    </Card>
  );
};

export default CustomerSignup;