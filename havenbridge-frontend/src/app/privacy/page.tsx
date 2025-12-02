"use client";

import React from 'react';
import { Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-slate-900"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Privacy <span className="text-amber-400">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Last updated: March 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-600">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Introduction</h2>
                <p>
                  HavenBridge Development ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Information We Collect</h2>
                <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide when contacting us or using our services.</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
                  <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Information Sharing and Disclosure</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-3">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Rights</h2>
                <p className="mb-3">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Cookies</h2>
                <p>
                  We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, though this may affect the functionality of our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="mb-2"><strong>Email:</strong> info@havenbridge.com.au</p>
                  <p className="mb-2"><strong>Phone:</strong> +61 (0) 3 XXXX XXXX</p>
                  <p><strong>Address:</strong> Melbourne, Victoria, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

