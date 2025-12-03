"use client";

import React from 'react';
import { 
  Home, 
  Building, 
  Baby, 
  Heart, 
  HeartHandshake, 
  Handshake,
  CheckCircle2,
  ArrowRight,
  Shield,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    { 
      icon: Home, 
      title: "Affordable & Social Housing Development",
      desc: "Turnkey affordable and social housing developments delivered in partnership with NGOs, housing associations, councils, and government programs including HAFF and the Big Housing Build.",
      features: [
        "Feasibility, design, and delivery of affordable and social housing projects",
        "Alignment with federal and state programs including HAFF and Big Housing Build",
        "Partnerships with community housing providers and NGOs",
        "Planning and delivery frameworks that support long-term social outcomes"
      ],
      link: "/contact"
    },
    { 
      icon: Building, 
      title: "Rooming Houses & Community Accommodation",
      desc: "High-yield, fully compliant rooming house and community accommodation projects across Wyndham, Brimbank, Casey, Dandenong and other key growth corridors.",
      features: [
        "End-to-end delivery of compliant rooming house developments",
        "Expertise across Wyndham, Brimbank, Casey, Dandenong and key growth areas",
        "Feasibility assessments, design management, and permits",
        "Construction management focused on on-time, on-budget outcomes"
      ],
      link: "/contact"
    },
    { 
      icon: Heart, 
      title: "Aged Care & NDIS Developments", 
      desc: "Faith- and culturally-aligned aged care homes and supported-living solutions, including SIL and SDA-compliant housing.",
      features: [
        "Design and delivery of aged care and supported independent living environments",
        "SDA and NDIS-compliant housing solutions",
        "Culturally responsive models of care and accommodation",
        "Integration with faith-based and community organisations"
      ],
      link: "/contact"
    },
    { 
      icon: Baby, 
      title: "Childcare Centre Development", 
      desc: "End-to-end childcare centre development from site identification through to compliant delivery aligned with Victorian Education & Care regulations.",
      features: [
        "Site identification and feasibility studies",
        "Planning permits and stakeholder engagement",
        "Design and delivery aligned with Victorian Education & Care regulations",
        "Centres designed for safety, learning, and community engagement"
      ],
      link: "/contact"
    },
    { 
      icon: HeartHandshake, 
      title: "Cabin Parks & Modular Housing", 
      desc: "Modular cabin parks for transitional housing, crisis accommodation, workers villages, and faith-based community housing.",
      features: [
        "Design and delivery of modular cabin parks for transitional and crisis accommodation",
        "Solutions for workers villages and regional communities",
        "Flexible, scalable layouts tailored to community and stakeholder needs",
        "Fast deployment using high-quality modular construction"
      ],
      link: "/contact"
    },
    { 
      icon: Handshake, 
      title: "Development & Project Management", 
      desc: "End-to-end development and project management across feasibility, approvals, procurement, and delivery.",
      features: [
        "Full lifecycle management from concept to completion",
        "Feasibility studies and option analysis",
        "Stakeholder and council engagement",
        "Builder procurement and contract management"
      ],
      link: "/contact"
    }
  ];

  const developmentManagementFeatures = [
    "Feasibility",
    "Council approvals",
    "Builder procurement",
    "Project oversight",
    "Budgets & reporting",
    "Risk management"
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
              Our <span className="text-amber-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive property development solutions across Australia—centred on affordable housing, social impact, and
              multicultural communities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-cyan-500 inline-block p-4 rounded-lg mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.desc}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={service.link}
                  className="inline-flex items-center text-amber-400 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development & Project Management */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-500 inline-flex p-4 rounded-lg">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Development & Project Management
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Full project lifecycle management from early feasibility through to delivery and handover.
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {developmentManagementFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="inline-flex items-center text-amber-500 font-semibold hover:gap-2 transition-all"
            >
              Discuss a project <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Your <span className="text-amber-400">Project?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            Get in touch with our team to discuss how we can help bring your vision to life.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-lg hover:bg-amber-400 transition-all shadow-2xl"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

