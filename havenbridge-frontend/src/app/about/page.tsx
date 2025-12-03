"use client";

import React from 'react';
import {
  Target,
  Shield,
  TrendingUp,
  Award,
  Users,
  Building2,
  HeartHandshake
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Community First",
      desc: "We build for the people who will live in our projects—not for abstract market profiles. Our developments reflect the needs, aspirations, and cultural realities of Australia’s multicultural population."
    },
    {
      icon: Shield,
      title: "Integrity in Delivery",
      desc: "We honour our commitments. With strong governance practices and deep institutional experience, we hold ourselves to the highest standards of transparency, quality, and accountability."
    },
    {
      icon: HeartHandshake,
      title: "Partnership at the Core",
      desc: "We collaborate with governments, local councils, NGOs, financiers, and community leaders. Our strength lies in building strong, trusting partnerships that unlock shared value."
    },
    {
      icon: TrendingUp,
      title: "Agility with Purpose",
      desc: "We operate differently—lean, responsive, and adaptive. Our team blends entrepreneurial innovation with the discipline of major institutions to move projects from concept to completion efficiently."
    },
    {
      icon: Target,
      title: "Social Impact, Not Just Structures",
      desc: "Every development is an opportunity to uplift a community, create belonging, and support economic mobility. We measure success beyond returns—we measure dignity, outcomes, and opportunity."
    }
  ];

  const leadership = [
    {
      name: "John Kuot",
      title: "Chief Executive Officer",
      bio: "Former banker and Ministerial Advisor in the environment portfolio with direct experience in homelessness and public housing responses, including the Flemington public housing tower lockdown. Brings deep understanding of Victorian government policy, planning overlays, and social outcome frameworks."
    },
    {
      name: "Angok Lueth",
      title: "Director of Development",
      bio: "Former banker with 12 years of development experience across townhouses, rooming houses, shopping centres, mixed-use projects, SDA accommodation, NDIS housing, and community accommodation. Highly experienced in planning approvals and on-time, on-budget project delivery."
    },
    {
      name: "Him Malhotra",
      title: "Director of Acquisitions",
      bio: "Land acquisition specialist with extensive networks across Melbourne’s key growth corridors. Proven ability to source off-market sites and structure complex development deals that unlock value for community benefit."
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
              About <span className="text-amber-400">HavenBridge</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              HavenBridge Development is a values-led property development and project management firm grounded in the diversity,
              resilience, and ambition of modern Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
              Our Story: Built by the Community, for the Community
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                HavenBridge Development is a values-led property development and project management firm founded by leaders who represent
                the diversity, resilience, and ambition of modern Australia. As part of the 50% of Australians who trace their roots beyond
                the country’s borders, we understand what it means to be misunderstood, overlooked, or excluded. That lived experience
                shapes how we build, how we partner, and how we deliver.
              </p>
              <p>
                We specialise in community-focused housing solutions that uplift migrant communities, enable government priorities,
                and deliver long-term value for partners and investors. Our projects sit at the intersection of social impact,
                commercial excellence, and cultural insight—bringing forward developments that are financially sound, socially responsible,
                and deeply connected to the people who will ultimately call them home.
              </p>
              <p>
                At HavenBridge, we operate with the discipline of major institutions and the agility of an entrepreneurial team.
                We have been shaped by world-class global organisations—but raised, grounded, and inspired by the communities who depend
                on better housing solutions. This dual perspective enables us to bridge worlds: the world of capital, policy, and development;
                and the world of lived experience, community, and belonging.
              </p>
              <p>
                We exist to build places that feel like home—projects that speak to the aspirations of the people they serve,
                and that stand as long-term assets for governments, partners, and investors.
              </p>
              <p className="font-semibold text-slate-900">
                HavenBridge is not simply developing property. We are developing futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-amber-500 mb-2">
                Vision
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Australia’s leading inclusive housing developer
              </h2>
              <p className="text-gray-600">
                To be Australia’s leading developer—where commercial excellence, multicultural insight, and government partnership
                come together to shape a more inclusive housing future.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-amber-500 mb-2">
                Mission
              </h3>
              <p className="text-gray-600">
                Our mission is to create dignified, community-focused housing that reflects the lived experiences of multicultural
                Australians and strengthens their sense of belonging.
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HavenBridge Developments is a faith-grounded, multicultural-focused property development and advisory firm purpose-built
              to address housing inequity. Our leadership brings expertise across government policy, development delivery, and community engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
                    <p className="text-sm font-semibold text-amber-600">{person.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {person.bio}
                </p>
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

