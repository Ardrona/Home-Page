import React from 'react';
import { Code, BarChart3, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDescriptions } from '@/hooks/use-descriptions';

const FleetService = () => {
  const descriptions = useDescriptions();
  
  const features = [
    {
      icon: Code,
      title: descriptions.fleet.features[0].title,
      description: descriptions.fleet.features[0].description,
    },
    {
      icon: BarChart3,
      title: descriptions.fleet.features[1].title,
      description: descriptions.fleet.features[1].description,
    },
    {
      icon: Shield,
      title: descriptions.fleet.features[2].title,
      description: descriptions.fleet.features[2].description,
    },
    {
      icon: Globe,
      title: descriptions.fleet.features[3].title,
      description: descriptions.fleet.features[3].description,
    },
  ];

  return (
    <section className="section-padding bg-white relative" id="fleet">
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm z-10 flex items-center justify-center">
        <div className="text-center text-white p-8 max-w-2xl">
          <div className="text-6xl font-heading font-bold mb-6">
            {descriptions.fleet.comingSoon}
          </div>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {descriptions.fleet.description}
          </p>
        </div>
      </div>
      
      <div className="container-ardrona relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              🚀 {descriptions.fleet.title}
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
              Power Your Business with <span className="text-gradient-primary">Drone Logistics</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {descriptions.fleet.subtitle}
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                {descriptions.fleet.cta.demo}
              </Button>
              <Button className="btn-ghost">
                {descriptions.fleet.cta.docs}
              </Button>
            </div>
          </div>

          {/* Code Preview */}
          <div className="relative">
            <div className="bg-slate-900 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-400 text-sm">Ardrona API</span>
              </div>
              
              <pre className="text-sm text-slate-300 overflow-x-auto">
                <code>{`// Simple integration
import { ArdronaFleet } from '@ardrona/sdk';

const fleet = new ArdronaFleet({
  apiKey: process.env.ARDRONA_API_KEY
});

// Request delivery
const delivery = await fleet.createDelivery({
  pickup: { lat: 40.7580, lng: -73.9855 },
  dropoff: { lat: 40.7614, lng: -73.9776 },
  package: {
    weight: "2.5kg",
    dimensions: "20x15x10cm"
  }
});

// Track real-time
fleet.trackDelivery(delivery.id, (status) => {
  console.log('Status:', status.phase);
  console.log('ETA:', status.eta);
});`}</code>
              </pre>
            </div>

            {/* Floating Stats */}
            <div className="absolute -right-4 -top-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold shadow-lg">
              99.9% Uptime
            </div>
            <div className="absolute -left-4 -bottom-4 bg-white border border-slate-200 px-4 py-2 rounded-lg font-semibold text-slate-900 shadow-lg">
              &lt; 200ms Response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetService;