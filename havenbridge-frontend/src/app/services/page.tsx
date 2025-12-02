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
      title: "Modular Home Construction", 
      desc: "Fast, sustainable, and high-quality modular housing solutions tailored for modern living.",
      features: [
        "Pre-fabricated construction for faster delivery",
        "Energy-efficient and sustainable materials",
        "Customizable designs to suit your needs",
        "Compliance with Australian building standards"
      ],
      link: "/contact"
    },
    { 
      icon: Building, 
      title: "Rooming Houses Development", 
      desc: "Affordable rooming house solutions designed for community living and accessibility.",
      features: [
        "Affordable housing solutions",
        "Community-focused design",
        "Accessibility compliance",
        "Strategic location planning"
      ],
      link: "/contact"
    },
    { 
      icon: Baby, 
      title: "Childcare Centre Development", 
      desc: "Purpose-built childcare facilities designed for safety, learning, and community engagement.",
      features: [
        "Child-safe design and materials",
        "Educational space optimization",
        "Outdoor play areas",
        "Regulatory compliance"
      ],
      link: "/contact"
    },
    { 
      icon: Heart, 
      title: "Aged Care Facilities", 
      desc: "Compassionate aged care environments built with dignity, comfort, and wellbeing in mind.",
      features: [
        "Accessibility-first design",
        "Medical facility integration",
        "Comfortable living spaces",
        "Safety and security features"
      ],
      link: "/contact"
    },
    { 
      icon: HeartHandshake, 
      title: "Community Housing Solutions", 
      desc: "Inclusive and affordable housing for migrant and diverse communities across Australia.",
      features: [
        "Cultural sensitivity in design",
        "Affordable housing models",
        "Community integration",
        "Long-term sustainability"
      ],
      link: "/contact"
    },
    { 
      icon: Handshake, 
      title: "Government Partnership Programs", 
      desc: "Collaborative development programs with government agencies for social housing initiatives.",
      features: [
        "Government compliance",
        "Social housing expertise",
        "Grant and funding support",
        "Public-private partnerships"
      ],
      link: "/contact"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assured",
      desc: "Every project meets the highest standards of construction and compliance."
    },
    {
      icon: Target,
      title: "Community Focused",
      desc: "We prioritize social impact and community wellbeing in every development."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      desc: "Building with environmental responsibility and long-term sustainability."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      desc: "Recognized by government partners and industry leaders for outstanding delivery."
    }
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
              Comprehensive property development solutions across Australia, from modular homes to government partnerships.
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

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose HavenBridge?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence drives every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="w-10 h-10 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
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

