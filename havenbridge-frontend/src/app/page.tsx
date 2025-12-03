"use client";

import React from 'react';
import {
  Building2,
  HeartHandshake,
  Home,
  Building,
  Baby,
  Heart,
  Handshake,
  Target,
  Award,
  TrendingUp,
  Shield,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Main Landing Page
export default function HavenBridgeLanding() {
  const services = [
    { 
      icon: Home,
      title: "Affordable & Social Housing Development",
      desc: "Community-focused housing solutions aligned with government programs like HAFF and the Big Housing Build.",
      link: "/services"
    },
    { 
      icon: Building,
      title: "Rooming Houses & Community Accommodation",
      desc: "High-yield, fully compliant rooming house and community accommodation developments across key growth corridors.",
      link: "/services"
    },
    { 
      icon: Heart,
      title: "Aged Care & NDIS Housing",
      desc: "Faith- and culturally-aligned aged care, SIL, and SDA housing designed for dignity, safety, and inclusion.",
      link: "/services"
    },
    { 
      icon: Baby,
      title: "Childcare Centre Development",
      desc: "End-to-end delivery of compliant childcare centres aligned with Victorian Education & Care regulations.",
      link: "/services"
    },
    { 
      icon: HeartHandshake, 
      title: "Cabin Parks & Modular Housing",
      desc: "Modular cabin parks for transitional housing, crisis accommodation, workers villages, and faith-based housing.",
      link: "/services"
    },
    { 
      icon: Handshake, 
      title: "End-to-End Development Management",
      desc: "Full lifecycle development and project management from feasibility through delivery and risk management.",
      link: "/services"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assured",
      desc: "Every project meets the highest standards of construction and compliance with Australian regulations."
    },
    {
      icon: Target,
      title: "Community Focused",
      desc: "We prioritize social impact and community wellbeing in every development we undertake."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      desc: "Building with environmental responsibility and long-term sustainability at the forefront."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      desc: "Recognized by government partners and industry leaders for outstanding project delivery."
    }
  ];

  const projects = [
    { name: "Melbourne Modular Village", location: "Melbourne, VIC", type: "Residential", units: "48 Homes" },
    { name: "Sunrise Care Centre", location: "Sydney, NSW", type: "Aged Care", units: "80 Beds" },
    { name: "Community Hub Brisbane", location: "Brisbane, QLD", type: "Mixed Use", units: "35 Units" }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 to-slate-900"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Building Communities.<br />
                Delivering <span className="text-amber-400">Impact.</span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                HavenBridge develops community-focused housing that uplifts migrant communities, enables government priorities,
                and delivers long-term value for partners and investors.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all shadow-xl"
              >
                Book a Consultation
              </a>
            </div>

            <div className="relative">
              <div className="relative aspect-4/3">
                <div className="absolute inset-0 rounded-3xl  shadow-2xl p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/h.png"
                      alt="Hero Image"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From affordable and social housing to childcare, aged care, and modular cabin parks, we deliver developments that are
              financially sound, socially responsible, and culturally informed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <a 
                key={i}
                href={service.link}
                className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 p-8 hover:shadow-2xl transition-all duration-300"
              >
                {/* Service image placeholder */}
                <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-slate-700">
                  <div className="w-full h-full flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-white/20" />
                  </div>
                </div>
                
                {/* Content overlay */}
                <div className="relative">
                  <div className="bg-cyan-500 inline-block p-3 rounded-lg mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.desc}</p>
                  <span className="inline-flex items-center text-amber-400 font-semibold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Not sure which pathway is right for you?</p>
            <a 
              href="/contact"
              className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Why HavenBridge */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why HavenBridge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A developer with institutional capability, community insight, and a deep commitment to social impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                A Developer with Dual Advantage
              </h3>
              <p className="text-gray-600">
                Our team has been trained by major global institutions, bringing world-class standards in finance, governance,
                planning, and project delivery. At the same time, our lived experience keeps us deeply connected to the communities we serve.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                We Understand the Communities Who Will Live in These Homes
              </h3>
              <p className="text-gray-600">
                We come from migrant backgrounds, multicultural communities, and real lived experiences of housing insecurity.
                That authenticity ensures our developments are grounded, relevant, and human-centred.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                We Deliver Value Aligned With Government Priorities
              </h3>
              <p className="text-gray-600">
                From affordable housing to multicultural engagement, social impact investment, and community infrastructure,
                our projects directly support federal, state, and local government objectives.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Agile Delivery with High-Standard Governance
              </h3>
              <p className="text-gray-600">
                We operate like an agile startup but carry the governance discipline of a major property institution.
                This makes us fast, reliable, and accountable—ideal partners for government and impact investors.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                We Build Trust Through Transparency
              </h3>
              <p className="text-gray-600">
                Clear financial models, realistic timelines, community consultations, and honest conversations.
                We are building a reputation as a developer that puts clarity before complexity.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Our Developments Strengthen Social Cohesion
              </h3>
              <p className="text-gray-600">
                Housing is not just infrastructure—it is nation-building. Our work ensures multicultural communities are not left behind
                but are uplifted through access to safe, affordable, and dignified homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">Real impact through real developments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-4/3 bg-linear-to-br from-slate-800 to-slate-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2">
                    <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                  <p className="text-gray-300 text-sm mb-1">{project.location}</p>
                  <p className="text-amber-400 text-sm font-semibold">{project.units}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/projects"
              className="inline-flex items-center bg-slate-900 text-white px-10 py-4 rounded-lg hover:bg-slate-800 transition-all shadow-xl font-bold gap-2"
            >
              View Full Portfolio <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s Build Something<br />
            <span className="text-amber-400">That Lasts.</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            Book your consultation today and partner with a developer that understands both community and capital.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-lg hover:bg-amber-400 transition-all shadow-2xl"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}