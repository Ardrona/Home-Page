import React, { useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import MarketplacePreview from '@/components/sections/MarketplacePreview';
import FleetService from '@/components/sections/FleetService';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/layout/Footer';
import AISection from '@/components/shared/AISection';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import { useScrollAnimation, useScrollSnap } from '@/hooks/use-scroll-snap';

const Index = () => {
  useScrollSnap();
  
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const howItWorksRef = useScrollAnimation();
  const marketplaceRef = useScrollAnimation();
  const aiSectionRef = useScrollAnimation();
  const fleetServiceRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  const footerRef = useScrollAnimation();

  const sections = [
    'Hero',
    'Features',
    'How It Works',
    'Marketplace',
    'AI Technology',
    'Fleet Service',
    'Contact',
    'Footer'
  ];

  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <ScrollIndicator sections={sections} />
      <main className="scroll-snap-container">
        <section 
          ref={heroRef}
          className="scroll-snap-section section-transition section-fade-in"
        >
          <Hero />
        </section>
        <section 
          ref={featuresRef}
          className="scroll-snap-section section-transition section-fade-in"
        >
          <Features />
        </section>
        <section 
          ref={howItWorksRef}
          className="scroll-snap-section section-transition section-fade-in"
        >
          <HowItWorks />
        </section>
        <section 
          ref={marketplaceRef}
          className="scroll-snap-section section-transition section-fade-in"
        >
          <MarketplacePreview />
        </section>
        <section 
          ref={aiSectionRef}
          className="scroll-snap-section section-transition section-fade-in"
        >
          <AISection />
        </section>
        <section 
          ref={fleetServiceRef}
          className="scroll-snap-section section-transition section-fade-in"
        >
          <FleetService />
        </section>
        <section 
          ref={contactRef}
          className="scroll-snap-section section-transition section-fade-in"
        >
          <ContactCTA />
        </section>
        <section 
          ref={footerRef}
          className="scroll-snap-section section-transition section-fade-in"
        >
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Index;
