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
      gradient: 'from-blue-500/20 to-blue-600/10',
    },
    {
      icon: Building2,
      title: 'Business Listings',
      description: 'List products and reach local customers.',
      image: null,
      gradient: 'from-purple-500/20 to-purple-600/10',
    },
    {
      icon: Zap,
      title: 'Drone Delivery',
      description: 'Safe, fast, and sustainable last-mile.',
      image: droneIcon,
      gradient: 'from-primary/20 to-primary/10',
    },
    {
      icon: Settings,
      title: 'Fleet as a Service',
      description: 'Use Ardrona\'s logistics layer in your own apps.',
      image: logisticsIcon,
      gradient: 'from-orange-500/20 to-orange-600/10',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50" id="features">
      <div className="container-ardrona">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
            Complete Drone <span className="text-gradient-primary">Ecosystem</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From marketplace to logistics, we provide the complete infrastructure for autonomous aerial delivery
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="card-premium group hover:border-primary/20 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  {feature.image ? (
                    <div className="relative">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-16 h-16 mx-auto rounded-lg object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ) : (
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                      <IconComponent className="w-8 h-8 text-slate-700 group-hover:text-primary transition-colors duration-300" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Rich hover effect line */}
                <div className="w-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center">
            <button className="btn-primary group animate-float">
              Explore All Features
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;