import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { CalEmbed } from '@/components/shared/CalEmbed';
import { CustomerSignup } from '@/components/shared/CustomerSignup';
import { NYCBadge } from '@/components/brand/BrandBadge';
import heroImage from '@/assets/ardrona-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ardrona drone delivery network over NYC"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/80" />
      </div>

      {/* Particle Background */}
      <ParticleBackground 
        particleCount={30}
        color="rgba(139, 195, 74, 0.4)"
        className="opacity-60"
      />

      {/* Content */}
      <div className="relative z-10 container-ardrona text-center">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* NYC Badge */}
          <NYCBadge className="mb-8 glass-effect text-white border-white/30" />

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-8 leading-tight animate-slide-up">
            <span className="text-white drop-shadow-2xl">Airborne.</span>{' '}
            <span className="text-white drop-shadow-2xl">Anytime.</span>{' '}
            <span className="text-gradient-primary animate-shimmer bg-gradient-to-r from-primary via-primary-light to-primary bg-[length:200%_100%]">
              Anywhere.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in opacity-90">
            Ardrona is the drone delivery marketplace and logistics network—starting in NYC—connecting products, customers, and last-mile operations with sustainable autonomous flight.
          </p>

          {/* CTA Section - Two Rows */}
          <div className="space-y-12 animate-scale-in">
            {/* Business CTA Row */}
            <div className="text-center">
              <h3 className="text-2xl font-heading font-semibold text-white mb-6">Ready to Launch Your Business?</h3>
              <CalEmbed 
                variant="default"
                size="lg"
                className="btn-hero group animate-pulse-glow px-12 py-5 text-lg font-semibold"
              >
                Get Started for Business
              </CalEmbed>
            </div>
            
            {/* Customer Signup Row */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg">
                <CustomerSignup />
              </div>
            </div>
          </div>

          {/* Rich Stats with Enhanced Styling */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center group">
              <div className="text-4xl font-heading font-bold text-primary mb-2 animate-bounce-subtle group-hover:scale-110 transition-transform duration-300">
                2-5 min
              </div>
              <div className="text-slate-300 font-medium">Average Delivery</div>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-heading font-bold text-primary mb-2 animate-bounce-subtle group-hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
                Zero
              </div>
              <div className="text-slate-300 font-medium">Carbon Emissions</div>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-heading font-bold text-primary mb-2 animate-bounce-subtle group-hover:scale-110 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
                24/7
              </div>
              <div className="text-slate-300 font-medium">Operations</div>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce-subtle"></div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-20" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;