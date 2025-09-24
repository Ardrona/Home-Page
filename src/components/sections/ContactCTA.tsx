import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white" id="contact">
      <div className="container-ardrona">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Work with <span className="text-gradient-primary">Ardrona</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ready to revolutionize your delivery operations? Let's discuss how Ardrona can transform 
              your business with cutting-edge drone logistics solutions.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div className="text-slate-300">hello@ardrona.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div className="text-slate-300">+1 (555) ARDRONA</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-white">Location</div>
                  <div className="text-slate-300">New York City, NY</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="btn-hero-ghost">
                Schedule a Call
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-200 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-200 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-200 mb-2">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button type="submit" className="w-full btn-primary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;