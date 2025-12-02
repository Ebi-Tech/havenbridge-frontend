"use client";

import React from 'react';
import { FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-slate-900"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Terms of <span className="text-amber-400">Service</span>
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
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
                <p>
                  By accessing and using the HavenBridge Development website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Use License</h2>
                <p className="mb-3">
                  Permission is granted to temporarily download one copy of the materials on HavenBridge Development's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Disclaimer</h2>
                <p>
                  The materials on HavenBridge Development's website are provided on an 'as is' basis. HavenBridge Development makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Limitations</h2>
                <p>
                  In no event shall HavenBridge Development or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HavenBridge Development's website, even if HavenBridge Development or a HavenBridge Development authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Accuracy of Materials</h2>
                <p>
                  The materials appearing on HavenBridge Development's website could include technical, typographical, or photographic errors. HavenBridge Development does not warrant that any of the materials on its website are accurate, complete, or current. HavenBridge Development may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Links</h2>
                <p>
                  HavenBridge Development has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by HavenBridge Development of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Modifications</h2>
                <p>
                  HavenBridge Development may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
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

