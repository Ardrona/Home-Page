import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-ardrona text-center">
        <div className="max-w-5xl mx-auto">
          {/* NYC Badge */}
          <Badge variant="secondary" className="mb-8 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            🗽 NYC First • Expanding Soon
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-8 leading-tight">
            <span className="text-white">Airborne.</span>{' '}
            <span className="text-white">Anytime.</span>{' '}
            <span className="text-gradient-primary">Anywhere.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Ardrona is the drone delivery marketplace and logistics network—starting in NYC—connecting products, customers, and last-mile operations with sustainable autonomous flight.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-hero group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button className="btn-hero-ghost group">
              <Play className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">2-5 min</div>
              <div className="text-slate-300 font-medium">Average Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">Zero</div>
              <div className="text-slate-300 font-medium">Carbon Emissions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-primary mb-2">24/7</div>
              <div className="text-slate-300 font-medium">Operations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;