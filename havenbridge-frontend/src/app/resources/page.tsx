"use client";

import React from 'react';
import { 
  Home, 
  Building, 
  Baby, 
  Heart, 
  Users,
  Trees,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Building2,
  HomeIcon,
  BedDouble,
  ShieldCheck,
  ClipboardCheck,
  Sparkles,
  Zap,
  Target,
  ArrowUpRight,
  Star,
  Lightbulb
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    { 
      icon: Home, 
      title: "Affordable & Social Housing",
      desc: "We partner with NGOs, housing associations, councils, and government programs including HAFF and the Big Housing Build. We deliver turnkey developments aligned to planning frameworks.",
      features: [
        "Partnerships with NGOs & housing associations",
        "Alignment with HAFF and Big Housing Build",
        "Council and government program collaboration",
        "Turnkey development delivery",
        "Planning framework compliance"
      ],
      link: "/contact",
      color: "from-blue-600 to-cyan-500"
    },
    { 
      icon: Building, 
      title: "Rooming House Development",
      desc: "We deliver compliant, high-yield rooming house projects in Wyndham, Brimbank, Casey, and Dandenong. Includes feasibility, building design, permits, and construction management.",
      features: [
        "Compliant rooming house projects",
        "Focus on Wyndham, Brimbank, Casey, Dandenong",
        "High-yield investment returns",
        "End-to-end project delivery",
        "Full permit management"
      ],
      link: "/contact",
      color: "from-amber-600 to-orange-500"
    },
    { 
      icon: Heart, 
      title: "Aged Care & NDIS Developments", 
      desc: "Faith- and culturally-aligned aged care homes and supported-living solutions. Includes SIL and SDA-compliant housing development.",
      features: [
        "Faith- and culturally-aligned designs",
        "Aged care home development",
        "Supported-living solutions",
        "SIL and SDA compliance",
        "Specialized disability housing"
      ],
      link: "/contact",
      color: "from-emerald-600 to-teal-500"
    },
    { 
      icon: Baby, 
      title: "Childcare Centre Development", 
      desc: "We identify sites, secure planning permits, manage design, and deliver fully compliant childcare centres aligned to Victorian Education & Care regulations.",
      features: [
        "Site identification & feasibility",
        "Planning permit acquisition",
        "Design management",
        "Victorian Education & Care compliance",
        "Full project delivery"
      ],
      link: "/contact",
      color: "from-pink-600 to-rose-500"
    },
    { 
      icon: Trees, 
      title: "Cabin Parks & Modular Housing", 
      desc: "We specialise in modular cabin parks for transitional housing, crisis accommodation, workers villages, and faith-based community housing.",
      features: [
        "Modular cabin park development",
        "Transitional & crisis accommodation",
        "Workers village solutions",
        "Faith-based community housing",
        "Rapid deployment projects"
      ],
      link: "/contact",
      color: "from-green-600 to-lime-500"
    },
    { 
      icon: Building2, 
      title: "Development & Project Management", 
      desc: "Full project lifecycle management: Feasibility, Council approvals, Builder procurement, Project oversight, Budgets & reporting, Risk management.",
      features: [
        "Feasibility & planning",
        "Council approvals management",
        "Builder procurement",
        "Project oversight",
        "Budget & financial reporting",
        "Risk management"
      ],
      link: "/contact",
      color: "from-purple-600 to-violet-500"
    }
  ];

  const projectManagementSteps = [
    { title: "Feasibility", icon: ClipboardCheck },
    { title: "Council Approvals", icon: ShieldCheck },
    { title: "Builder Procurement", icon: Building2 },
    { title: "Project Oversight", icon: HomeIcon },
    { title: "Budgets & Reporting", icon: ClipboardCheck },
    { title: "Risk Management", icon: ShieldCheck }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section - Glowing Version */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-20"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header with animated elements */}
            <div className="text-center mb-12">
              <div className="relative inline-block mb-8">
                {/* Floating badges */}
                <div className="absolute -top-6 -left-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-r from-amber-400 to-amber-500 rounded-full blur-md"></div>
                    <div className="relative bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Zap className="w-4 h-4" /> Impact Focused
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full blur-md"></div>
                    <div className="relative bg-linear-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Target className="w-4 h-4" /> End-to-End
                    </div>
                  </div>
                </div>

                {/* Main title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight relative">
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-white to-cyan-500">
                    Our Services
                  </span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Comprehensive property development solutions across Australia—centred on affordable housing, social impact, and multicultural communities.
              </p>
            </div>

            {/* Service Highlights Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                {
                  number: "50+",
                  label: "Projects Delivered",
                  icon: Building2,
                  color: "from-amber-400 to-amber-500"
                },
                {
                  number: "100%",
                  label: "Compliance Rate",
                  icon: ShieldCheck,
                  color: "from-emerald-400 to-emerald-500"
                },
                {
                  number: "$150M+",
                  label: "Project Value",
                  icon: Star,
                  color: "from-cyan-400 to-cyan-500"
                },
                {
                  number: "95%",
                  label: "Client Satisfaction",
                  icon: Heart,
                  color: "from-pink-400 to-pink-500"
                }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-linear-to-r ${stat.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                    <div className="inline-flex p-3 rounded-lg bg-white/10 mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a 
                href="/contact"
                className="group relative inline-flex items-center gap-4 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10">Start Your Project Today</span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </a>
              <p className="text-gray-400 mt-4 flex items-center justify-center gap-2">
                <Lightbulb className="w-4 h-4" />
                Book a free consultation to discuss your specific needs
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-cyan-50 to-blue-50 rounded-full border border-cyan-100 mb-4">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-medium text-cyan-700">Core Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end development solutions across key sectors, ensuring quality, compliance, and community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group relative"
              >
                {/* Hover glow effect */}
                <div className="absolute -inset-4 bg-linear-to-r from-amber-400/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group-hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Top gradient bar */}
                  <div className={`h-2 bg-linear-to-r ${service.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-xl bg-linear-to-br ${service.color}`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a 
                      href={service.link}
                      className="inline-flex items-center font-semibold text-slate-900 hover:text-amber-600 group-hover:gap-2 transition-all border-t border-gray-100 pt-6 w-full justify-between"
                    >
                      <span>Learn more about {service.title.toLowerCase()}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development & Project Management Focus */}
      <section className="py-20 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-linear-to-r from-purple-400/20 to-violet-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white rounded-2xl px-6 py-3 inline-block mb-4">
                  <span className="text-lg font-bold bg-linear-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
                    Project Lifecycle Management
                  </span>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Development & Project Management
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full project lifecycle management from early feasibility through to delivery and handover.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-2">
                {/* Left Column - Content */}
                <div className="p-8 md:p-12">
                  <div className="inline-flex p-4 rounded-xl bg-linear-to-br from-purple-600 to-violet-500 mb-6">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    Comprehensive Project Lifecycle Management
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    We manage every aspect of your development project, ensuring seamless execution from concept to completion.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {projectManagementSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="relative">
                          <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-violet-500 rounded-lg blur-sm opacity-0 group-hover:opacity-30 transition-opacity"></div>
                          <div className="relative bg-purple-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                            <step.icon className="w-6 h-6 text-purple-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{step.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Expert management and oversight
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-linear-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100">
                    <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-cyan-600" />
                      Our Approach:
                    </h4>
                    <p className="text-gray-700">
                      We combine strategic planning with hands-on project management to deliver your development on time, within budget, and to the highest quality standards.
                    </p>
                  </div>
                </div>

                {/* Right Column - Visual/Stats */}
                <div className="bg-linear-to-br from-slate-900 to-slate-800 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <ShieldCheck className="w-6 h-6 text-amber-400" />
                      Why Choose Our Management?
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Proven track record across all project types",
                        "Deep understanding of council & regulatory requirements",
                        "Strong builder & supplier networks",
                        "Transparent reporting & communication",
                        "Risk-mitigation focused approach",
                        "Community & stakeholder engagement expertise"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 group">
                          <div className="relative">
                            <div className="absolute inset-0 bg-amber-400 rounded-full blur-sm opacity-0 group-hover:opacity-30"></div>
                            <CheckCircle2 className="relative w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                          </div>
                          <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all mt-8 w-full overflow-hidden"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Sector Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge across key development sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Affordable Housing",
                desc: "HAFF & Big Housing Build aligned",
                icon: Home,
                color: "bg-blue-100 text-blue-600"
              },
              {
                title: "Community Housing",
                desc: "NGO & council partnerships",
                icon: Users,
                color: "bg-emerald-100 text-emerald-600"
              },
              {
                title: "Specialist Disability",
                desc: "SDA & SIL compliant housing",
                icon: Heart,
                color: "bg-purple-100 text-purple-600"
              },
              {
                title: "Early Childhood",
                desc: "Victorian Education & Care compliant",
                icon: Baby,
                color: "bg-pink-100 text-pink-600"
              }
            ].map((sector, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-4 bg-linear-to-r from-amber-400/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gray-50 p-6 rounded-xl border border-gray-200 group-hover:border-transparent transition-all duration-300 group-hover:shadow-lg">
                  <div className={`inline-flex p-3 rounded-lg ${sector.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <sector.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">{sector.title}</h3>
                  <p className="text-gray-600">{sector.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">Ready to Transform Communities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Build with <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-cyan-500">Purpose</span>
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
              Let's create lasting impact through innovative, community-focused development solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 text-lg font-bold rounded-xl hover:shadow-2xl transition-all shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Contact Us Today</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="/contact#consultation"
                className="group relative inline-flex items-center justify-center gap-2 bg-transparent border-2 border-amber-400 text-amber-400 px-8 py-4 text-lg font-bold rounded-xl hover:bg-amber-400 hover:text-slate-900 transition-all overflow-hidden"
              >
                <span className="relative z-10">Book a Consultation</span>
                <div className="absolute inset-0 bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}