import React, { useState } from 'react';
import { Search, ShoppingCart, Zap } from 'lucide-react';
import { useDescriptions } from '@/hooks/use-descriptions';
import { Popover } from '@radix-ui/react-popover';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'


const HowItWorks = () => {
  const descriptions = useDescriptions();

  const [open, setOpen] = useState(false)
  
  const steps = [
    {
      step: descriptions.howItWorks.steps[0].step,
      icon: Search,
      title: descriptions.howItWorks.steps[0].title,
      description: descriptions.howItWorks.steps[0].description,
      color: 'from-primary/20 to-primary/10',
    },
    {
      step: descriptions.howItWorks.steps[1].step,
      icon: ShoppingCart,
      title: descriptions.howItWorks.steps[1].title,
      description: descriptions.howItWorks.steps[1].description,
      color: 'from-slate-200 to-slate-100',
    },
    {
      step: descriptions.howItWorks.steps[2].step,
      icon: Zap,
      title: descriptions.howItWorks.steps[2].title,
      description: descriptions.howItWorks.steps[2].description,
      color: 'from-primary/30 to-primary/20',
    },
  ];

  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="container-ardrona">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
            {descriptions.howItWorks.title.split(' ').map((word, index) => 
              word === 'Works' ? (
                <span key={index} className="text-gradient-primary">{word}</span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {descriptions.howItWorks.subtitle}
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
        <div>
        <div className="text-center mt-16">
          <button onClick={() => setOpen(true)}className="btn-primary">
            {descriptions.howItWorks.cta}
          </button>
        </div>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <p>App Coming Soon</p>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="btn-primary inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>

      </div>
    </section>
  );
};

export default HowItWorks;