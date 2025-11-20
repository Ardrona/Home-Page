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
import CursorGlow from '@/components/ui/CursorGlow';
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

  return (
    <div className="min-h-screen">
      <CursorGlow />
      <Navbar />
      <main className="scroll-snap-container scroll-smooth">
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
