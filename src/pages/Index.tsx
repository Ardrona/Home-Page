import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import MarketplacePreview from '@/components/sections/MarketplacePreview';
import FleetService from '@/components/sections/FleetService';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/layout/Footer';
import AISection from '@/components/shared/AISection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <MarketplacePreview />
        <AISection />
        <FleetService />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
