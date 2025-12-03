"use client";
import React from 'react';
import { Building2 } from 'lucide-react';

export default function Footer() {
  const services = [
    'Affordable & Social Housing Development',
    'Rooming Houses & Community Accommodation',
    'Aged Care & NDIS Housing',
    'Childcare Centre Development',
    'Cabin Parks & Modular Housing',
    'Development & Project Management'
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HavenBridge Developments Pty Ltd</h3>
                <p className="text-xs text-amber-400">Property Development • Project Management • Advisory</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A values-led property development and project management firm creating dignified, community-focused housing across Australia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service, i) => (
                <li key={i}>
                  <a href="/services" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Projects', 'Investor Relations', 'Careers', 'Blog', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <strong className="text-white">Email:</strong><br />
                info@havenbridge.com.au
              </li>
              <li>
                <strong className="text-white">Phone:</strong><br />
                +61 (0) 3 XXXX XXXX
              </li>
              <li>
                <strong className="text-white">Address:</strong><br />
                Level 8, 90 Collins Street<br />
                Melbourne, Victoria, Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 HavenBridge Development. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-amber-400">Privacy Policy</a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-amber-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

