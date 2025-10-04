import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import Logo from '../brand/Logo';
import { useDescriptions } from '@/hooks/use-descriptions';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const descriptions = useDescriptions();

  const footerLinks = descriptions.footer.links;

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: descriptions.footer.social[0].href },
    { name: 'LinkedIn', icon: Linkedin, href: descriptions.footer.social[1].href },
    { name: 'GitHub', icon: Github, href: descriptions.footer.social[2].href },
    { name: 'Email', icon: Mail, href: descriptions.footer.social[3].href },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-ardrona">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                  <Logo variant="symbol" size="md" className="text-white" />
                <span className="font-heading font-bold text-2xl">{descriptions.footer.brand.name}</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                {descriptions.footer.brand.description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-primary hover:bg-slate-700 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-heading font-semibold text-white mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Stay Updated
                </h3>
                <p className="text-slate-400">
                  Get the latest updates on drone delivery innovations and expansion plans.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Ardrona Technologies. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span className="flex items-center">
                🗽 Proudly serving NYC
              </span>
              <span className="flex items-center">
                ✈️ FAA Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;