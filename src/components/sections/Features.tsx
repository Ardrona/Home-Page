import React from 'react';
import { ShoppingBag, Building2, Zap, Settings } from 'lucide-react';
import droneIcon from '@/assets/drone-icon.jpg';
import logisticsIcon from '@/assets/logistics-icon.jpg';

const Features = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      description: 'Order from curated sellers for fast drone delivery.',
      image: null,
    },
    {
      icon: Building2,
      title: 'Business Listings',
      description: 'List products and reach local customers.',
      image: null,
    },
    {
      icon: Zap,
      title: 'Drone Delivery',
      description: 'Safe, fast, and sustainable last-mile.',
      image: droneIcon,
    },
    {
      icon: Settings,
      title: 'Fleet as a Service',
      description: 'Use Ardrona\'s logistics layer in your own apps.',
      image: logisticsIcon,
    },
  ];

  return (
    <section className="section-padding bg-slate-50" id="features">
      <div className="container-ardrona">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
            Complete Drone <span className="text-gradient-primary">Ecosystem</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From marketplace to logistics, we provide the complete infrastructure for autonomous aerial delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="card-premium group hover:border-primary/20 text-center"
              >
                <div className="mb-6">
                  {feature.image ? (
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-16 h-16 mx-auto rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="btn-primary group">
            Explore All Features
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;