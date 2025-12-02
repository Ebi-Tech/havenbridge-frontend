"use client";

import React from 'react';
import { 
  Target, 
  Shield, 
  TrendingUp, 
  Award,
  Users,
  Building2,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
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

  const milestones = [
    { year: "2020", title: "Company Founded", desc: "HavenBridge Development established with a vision for community-focused property development." },
    { year: "2021", title: "First Major Project", desc: "Completed our first modular housing development in Melbourne." },
    { year: "2022", title: "Government Partnership", desc: "Secured first government partnership for social housing initiatives." },
    { year: "2023", title: "National Expansion", desc: "Expanded operations across multiple Australian states and territories." },
    { year: "2024", title: "200+ Homes Delivered", desc: "Reached milestone of 200+ homes and units delivered to communities." }
  ];

  const team = [
    { name: "Leadership Team", count: "15+", desc: "Experienced executives and directors" },
    { name: "Development Team", count: "50+", desc: "Skilled architects and project managers" },
    { name: "Construction Team", count: "200+", desc: "Certified builders and tradespeople" },
    { name: "Support Staff", count: "30+", desc: "Dedicated administrative and support professionals" }
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
              About <span className="text-amber-400">HavenBridge</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Building communities and creating homes across Australia with premium property development solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                HavenBridge Development was founded with a clear mission: to address Australia's housing challenges through innovative, community-focused property development. We believe that everyone deserves access to quality, affordable housing, and we're committed to making that vision a reality.
              </p>
              <p>
                Since our inception, we've grown from a small Melbourne-based developer to a national leader in modular housing, social housing, and community development projects. Our team combines decades of industry experience with fresh perspectives and innovative approaches.
              </p>
              <p>
                We specialize in working with government agencies, community organizations, and private investors to deliver projects that create lasting positive impact. From modular homes to aged care facilities, every project we undertake is designed with the community's needs at its heart.
              </p>
            </div>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do.
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

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-slate-900 font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-b border-gray-200 last:border-0">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of professionals dedicated to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold text-amber-500 mb-2">{item.count}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Want to Work <span className="text-amber-400">Together?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            Join us in building better communities across Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-block bg-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-lg hover:bg-amber-400 transition-all shadow-2xl"
            >
              Get in Touch
            </a>
            <a 
              href="/careers"
              className="inline-block bg-transparent border-2 border-white text-white px-12 py-5 text-xl font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all"
            >
              View Careers
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

