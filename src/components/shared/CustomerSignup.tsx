/**
 * Customer Signup Component - "Be the first to order by drone"
 */
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, MapPin, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface CustomerSignupProps {
  className?: string;
}

export const CustomerSignup: React.FC<CustomerSignupProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thanks for signing up! We\'ll notify you when drone delivery is available in your area.');
      setEmail('');
      setCity('');
      setLoading(false);
    }, 1000);
  };

  return (
    <Card className={className}>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Plane className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✨</span>
            </div>
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="focus-ring"
            />
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="focus-ring"
            />
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