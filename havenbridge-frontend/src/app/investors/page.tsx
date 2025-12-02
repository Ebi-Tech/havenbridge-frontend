"use client";

import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  Shield,
  CheckCircle2,
  ArrowRight,
  FileText,
  Users
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function InvestorsPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Strong Returns",
      desc: "Consistent returns through diversified property development portfolio."
    },
    {
      icon: Shield,
      title: "Risk Management",
      desc: "Proven track record with government partnerships and stable projects."
    },
    {
      icon: BarChart3,
      title: "Market Growth",
      desc: "Positioned in growing sectors: affordable housing, aged care, and social infrastructure."
    },
    {
      icon: Users,
      title: "Social Impact",
      desc: "Invest in projects that create positive social and community outcomes."
    }
  ];

  const investmentOptions = [
    {
      title: "Development Projects",
      desc: "Direct investment in specific property development projects with defined timelines and returns.",
      features: [
        "Project-specific investment opportunities",
        "Clear ROI projections",
        "Active project management",
        "Regular progress updates"
      ]
    },
    {
      title: "Portfolio Investment",
      desc: "Diversified investment across multiple HavenBridge projects and developments.",
      features: [
        "Diversified risk profile",
        "Multiple revenue streams",
        "Long-term growth potential",
        "Professional portfolio management"
      ]
    },
    {
      title: "Government Partnerships",
      desc: "Invest in government-backed social housing and infrastructure projects.",
      features: [
        "Government-backed security",
        "Stable, long-term returns",
        "Social impact focus",
        "Regulatory compliance"
      ]
    }
  ];

  const stats = [
    { label: "Total Projects", value: "15+" },
    { label: "Homes Delivered", value: "200+" },
    { label: "Investment Partners", value: "50+" },
    { label: "Average ROI", value: "12-18%" }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-slate-900"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Investor <span className="text-amber-400">Relations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Partner with HavenBridge to invest in Australia's future through sustainable, community-focused property development.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Invest with HavenBridge?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer unique investment opportunities in Australia's growing property development sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="bg-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Investment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the investment structure that best fits your goals and risk profile.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentOptions.map((option, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.desc}</p>
                <ul className="space-y-3">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Investment Process
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Initial Consultation", desc: "Discuss your investment goals and opportunities" },
                { step: "2", title: "Due Diligence", desc: "Review project details and financial projections" },
                { step: "3", title: "Agreement", desc: "Finalize investment terms and documentation" },
                { step: "4", title: "Ongoing Support", desc: "Regular updates and portfolio management" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-slate-900 font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="text-amber-400">Invest?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            Contact our investor relations team to learn more about our investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-block bg-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-lg hover:bg-amber-400 transition-all shadow-2xl"
            >
              Schedule a Meeting
            </a>
            <a 
              href="#"
              className="inline-block bg-transparent border-2 border-white text-white px-12 py-5 text-xl font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all"
            >
              Download Investor Pack
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

