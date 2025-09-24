import React from 'react';
import { Search, ShoppingCart, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      icon: Search,
      title: 'Browse',
      description: 'Explore products from local businesses and curated sellers in your area.',
      color: 'from-primary/20 to-primary/10',
    },
    {
      step: '02',
      icon: ShoppingCart,
      title: 'Order',
      description: 'Select your items and place your order with secure payment processing.',
      color: 'from-slate-200 to-slate-100',
    },
    {
      step: '03',
      icon: Zap,
      title: 'Drone Delivery',
      description: 'Watch your order arrive by drone in 2-5 minutes with real-time tracking.',
      color: 'from-primary/30 to-primary/20',
    },
  ];

  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="container-ardrona">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Three simple steps to get your products delivered by drone in minutes
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <svg className="w-full h-2" viewBox="0 0 800 8" fill="none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" className="stop-primary/30" />
                  <stop offset="50%" className="stop-slate-300" />
                  <stop offset="100%" className="stop-primary/30" />
                </linearGradient>
              </defs>
              <path 
                d="M 50 4 Q 400 1 750 4" 
                stroke="url(#connectionGradient)" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="8,4"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-hover text-white font-heading font-bold text-2xl mb-6 shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} mb-6 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-slate-700" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>

                  {/* Mobile Connection */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-8">
                      <div className="w-px h-12 bg-gradient-to-b from-primary/30 to-transparent"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Start Your First Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;