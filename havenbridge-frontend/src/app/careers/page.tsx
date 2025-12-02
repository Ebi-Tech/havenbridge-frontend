"use client";

import React from 'react';
import { 
  Briefcase, 
  Users, 
  Award, 
  Heart,
  MapPin,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const benefits = [
    { title: "Competitive Salary", desc: "Attractive compensation packages" },
    { title: "Career Growth", desc: "Opportunities for professional development" },
    { title: "Work-Life Balance", desc: "Flexible working arrangements" },
    { title: "Health & Wellness", desc: "Comprehensive health benefits" },
    { title: "Team Culture", desc: "Supportive and collaborative environment" },
    { title: "Impact", desc: "Work on meaningful community projects" }
  ];

  const openPositions = [
    {
      title: "Senior Project Manager",
      location: "Melbourne, VIC",
      type: "Full-time",
      department: "Project Management",
      desc: "Lead and manage multiple property development projects from conception to completion."
    },
    {
      title: "Construction Manager",
      location: "Sydney, NSW",
      type: "Full-time",
      department: "Construction",
      desc: "Oversee construction operations and ensure quality delivery of development projects."
    },
    {
      title: "Business Development Manager",
      location: "Brisbane, QLD",
      type: "Full-time",
      department: "Business Development",
      desc: "Develop new partnerships and opportunities in the property development sector."
    },
    {
      title: "Architectural Designer",
      location: "Melbourne, VIC",
      type: "Full-time",
      department: "Design",
      desc: "Create innovative and sustainable design solutions for residential and commercial projects."
    },
    {
      title: "Finance Analyst",
      location: "Sydney, NSW",
      type: "Full-time",
      department: "Finance",
      desc: "Analyze financial data and support investment decision-making processes."
    },
    {
      title: "Community Engagement Coordinator",
      location: "Perth, WA",
      type: "Full-time",
      department: "Community Relations",
      desc: "Build relationships with communities and stakeholders for development projects."
    }
  ];

  const values = [
    { title: "Innovation", desc: "We embrace new ideas and technologies" },
    { title: "Integrity", desc: "We act with honesty and transparency" },
    { title: "Excellence", desc: "We strive for the highest standards" },
    { title: "Community", desc: "We care about the people we serve" }
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
              Join Our <span className="text-amber-400">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Build your career while building communities. Join HavenBridge and make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Work at HavenBridge?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than properties—we're building careers and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
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
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="bg-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore current opportunities to join our growing team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{position.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span>{position.type}</span>
                    </div>
                    <span className="inline-block bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-bold">
                      {position.department}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{position.desc}</p>
                <a 
                  href="/contact"
                  className="inline-flex items-center text-cyan-500 font-semibold hover:gap-2 transition-all"
                >
                  Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Don't See a Role That <span className="text-amber-400">Fits?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-lg hover:bg-amber-400 transition-all shadow-2xl"
          >
            Submit Your Resume
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

