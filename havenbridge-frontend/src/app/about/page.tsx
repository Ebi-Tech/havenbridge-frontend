"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  Shield,
  TrendingUp,
  Award,
  Users,
  Building2,
  HeartHandshake,
  Sparkles,
  Zap,
  ChevronRight,
  Globe,
  Star,
  Home,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Heart,
  BookOpen,
  Handshake,
  Target as Bullseye,
  Building,
  Home as HomeIcon,
  Award as Trophy,
  FileText,
  CheckCircle,
  Book,
  Building as BuildingIcon,
  Users as UsersIcon,
  Heart as HeartIcon,
  Target as TargetIcon,
  Eye,
  MapPin as MapPinIcon,
  Globe as GlobeIcon,
  Home as Home2,
  Users as Users2,
  GraduationCap,
  Briefcase,
  Landmark,
  Globe as Earth,
  Users as Community,
  Building as Structure,
  Award as Achievement,
  Target as Goal,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const values = [
    {
      icon: Community,
      title: "Community First",
      desc: "We build for the people who will live in our projects—not for abstract market profiles.",
      color: "bg-linear-to-br from-amber-400 to-amber-500",
      accent: "border-amber-400/20",
    },
    {
      icon: Shield,
      title: "Integrity in Delivery",
      desc: "Strong governance practices and deep institutional experience guide our work.",
      color: "bg-linear-to-br from-cyan-500 to-blue-500",
      accent: "border-cyan-500/20",
    },
    {
      icon: Handshake,
      title: "Partnership at the Core",
      desc: "We collaborate with governments, local councils, NGOs, financiers, and community leaders.",
      color: "bg-linear-to-br from-emerald-500 to-green-500",
      accent: "border-emerald-500/20",
    },
    {
      icon: TrendingUp,
      title: "Agility with Purpose",
      desc: "We blend entrepreneurial innovation with the discipline of major institutions.",
      color: "bg-linear-to-br from-violet-500 to-purple-500",
      accent: "border-violet-500/20",
    },
    {
      icon: Target,
      title: "Social Impact Focus",
      desc: "Every development creates belonging and supports economic mobility.",
      color: "bg-linear-to-br from-orange-500 to-red-500",
      accent: "border-orange-500/20",
    },
    {
      icon: Heart,
      title: "Culturally Connected",
      desc: "Our lived experiences shape developments that respect Australia's diversity.",
      color: "bg-linear-to-br from-pink-500 to-rose-500",
      accent: "border-pink-500/20",
    },
  ];

  const leadership = [
    {
      name: "John Kuot",
      title: "Chief Executive Officer",
      bio: "Former banker and Ministerial Advisor with direct experience in homelessness and public housing responses.",
      expertise: ["Government Policy", "Strategic Planning", "Social Outcomes"],
      color: "from-amber-400 to-amber-500",
      image: "/team/John-Kuot.png",
    },
    {
      name: "Angok Lueth",
      title: "Director of Development",
      bio: "12+ years of development experience across townhouses, rooming houses, SDA accommodation, and NDIS housing.",
      expertise: ["Project Delivery", "Development Planning", "NDIS/SDA"],
      color: "from-cyan-500 to-blue-500",
      image: "/team/Angok-Lueth.png",
    },
    {
      name: "Him Malhotra",
      title: "Director of Acquisitions",
      bio: "Land acquisition specialist with extensive networks across Melbourne's key growth corridors.",
      expertise: ["Land Acquisition", "Deal Structuring", "Market Analysis"],
      color: "from-emerald-500 to-green-500",
      image: "/team/Mohatra.png",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Projects Delivered",
      icon: Trophy,
      color: "text-amber-500",
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: Heart,
      color: "text-cyan-500",
    },
    {
      number: "$150M+",
      label: "Development Value",
      icon: TrendingUp,
      color: "text-emerald-500",
    },
    {
      number: "100%",
      label: "Compliance Rate",
      icon: Shield,
      color: "text-violet-500",
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section - Professional Design with Image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        {/* Animated Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  VALUES-LED DEVELOPMENT
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="block">
                  Building
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-white to-cyan-500 ml-4">
                    Futures,
                  </span>
                </span>
                <span className="block mt-4">Not Just Buildings</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 max-w-xl mb-12 leading-relaxed">
                A values-led property development firm bridging capital, policy,
                and community to create meaningful housing solutions for modern
                Australia.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#our-story"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Explore Our Story</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a
                  href="#leadership"
                  className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  Meet Our Leadership
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image (Hidden on Mobile) */}
            <div className="hidden lg:block relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>

                {/* Main Image */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-linear-to-br from-amber-400/20 to-cyan-500/20"></div>
                  {/* Image placeholder - replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
                    {/* Abstract building silhouette */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="h-48 bg-linear-to-t from-slate-900 via-slate-800 to-transparent"></div>
                    </div>

                    {/* Building shapes */}
                    <div className="absolute bottom-0 left-1/4 w-16 h-32 bg-cyan-500/30 rounded-t-lg"></div>
                    <div className="absolute bottom-0 left-2/4 transform -translate-x-1/2 w-20 h-40 bg-amber-400/30 rounded-t-lg"></div>
                    <div className="absolute bottom-0 right-1/4 w-14 h-36 bg-emerald-500/30 rounded-t-lg"></div>

                    {/* City lights */}
                    <div className="absolute bottom-8 left-1/4 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute bottom-12 right-1/3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                    <div className="absolute bottom-16 left-1/3">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                    <BuildingIcon className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                    <Community className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="flex gap-4">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-xs text-gray-300">Projects</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-gray-300">Compliance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on desktop with image */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner - Professional Cards */}
      <section className="py-16 bg-linear-to-br from-slate-50 to-cyan-50 -mt-8 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-xl ${stat.color.replace(
                          "text",
                          "bg"
                        )}/10`}
                      >
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-gray-100 overflow-hidden rounded-full">
                      <div
                        className={`h-full ${stat.color.replace(
                          "text",
                          "bg"
                        )} rounded-full group-hover:animate-progress`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story - Professional Layout with FULL CLIENT CONTENT */}
      <section id="our-story" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 rounded-full border border-amber-400/20 mb-6">
                <Book className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-600">
                  OUR JOURNEY
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Built by the Community, for the Community
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Property development in Australia has long been dominated by the
                "big guys"—but it's the "little guys" who live in the homes they
                create. HavenBridge was born to change that.
              </p>
            </div>

            {/* Main Story Content */}
            <div className="space-y-16">
              {/* Section 1: Full Client Content */}
              <div className="bg-linear-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <BuildingIcon className="w-6 h-6 text-amber-400" />
                        <h3 className="text-2xl font-bold text-slate-900">
                          About HavenBridge
                        </h3>
                      </div>
                      <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p>
                          HavenBridge Development is a values-led property
                          development and project management firm founded by
                          leaders who represent the diversity, resilience, and
                          ambition of modern Australia. As part of the 50% of
                          Australians who trace their roots beyond the country's
                          borders, we understand what it means to be
                          misunderstood, overlooked, or excluded. That lived
                          experience shapes how we build, how we partner, and
                          how we deliver.
                        </p>
                        <p>
                          We specialise in community-focused housing solutions
                          that uplift migrant communities, enable government
                          priorities, and deliver long-term value for partners
                          and investors. Our projects sit at the intersection of
                          social impact, commercial excellence, and cultural
                          insight—bringing forward developments that are
                          financially sound, socially responsible, and deeply
                          connected to the people who will ultimately call them
                          home.
                        </p>
                        <p>
                          At HavenBridge, we operate with the discipline of
                          major institutions and the agility of an
                          entrepreneurial team. We have been shaped by
                          world-class global organisations—but raised, grounded,
                          and inspired by the communities who depend on better
                          housing solutions. This dual perspective enables us to
                          bridge worlds: the world of capital, policy, and
                          development; and the world of lived experience,
                          community, and belonging.
                        </p>
                        <p>
                          We exist to build places that feel like home—projects
                          that speak to the aspirations of the people they
                          serve, and that stand as long-term assets for
                          governments, partners, and investors.
                        </p>
                        <p className="text-lg font-semibold text-amber-600">
                          HavenBridge is not simply developing property. We are
                          developing futures.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Community className="w-6 h-6 text-cyan-500" />
                        <h3 className="text-2xl font-bold text-slate-900">
                          Our Story: Built by the Community, for the Community
                        </h3>
                      </div>
                      <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p>
                          Property development in Australia has long been
                          dominated by the "big guys"—large corporations with
                          deep pockets, long histories, and familiar names. For
                          decades, they have shaped skylines, acquired land, and
                          defined what housing should look like. Yet, despite
                          this scale, it is the little guys—everyday families,
                          migrants, workers, and young people—who end up living
                          in the homes these institutions create.
                        </p>
                        <p>
                          Too often, the people who occupy these dwellings have
                          no voice in how they are designed, planned, or
                          delivered.
                        </p>
                        <p className="text-lg font-semibold text-cyan-700">
                          HavenBridge was born to change that.
                        </p>
                      </div>
                    </div>

                    {/* Mission & Vision Cards */}
                    <div className="grid gap-6">
                      <div className="bg-linear-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Bullseye className="w-5 h-5 text-cyan-600" />
                          <span className="text-sm font-semibold text-cyan-600">
                            OUR MISSION
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                          Creating Dignified, Community-Focused Housing
                        </h4>
                        <p className="text-gray-700">
                          To create housing that reflects the lived experiences
                          of multicultural Australians and strengthens their
                          sense of belonging.
                        </p>
                      </div>

                      <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                        <div className="flex items-center gap-3 mb-4">
                          <Target className="w-5 h-5 text-amber-600" />
                          <span className="text-sm font-semibold text-amber-600">
                            OUR VISION
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                          Australia's leading inclusive housing developer
                        </h4>
                        <p className="text-gray-700">
                          To be Australia's leading developer—where commercial
                          excellence, multicultural insight, and government
                          partnership come together to shape a more inclusive
                          housing future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: The Full Story Continues */}
              <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="w-6 h-6 text-blue-500" />
                      <h3 className="text-xl font-bold text-slate-900">
                        Our Journey: From Both Worlds
                      </h3>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        We are the children of migrants, the first in our
                        families to navigate corporate Australia, and the
                        beneficiaries of world-class education and institutional
                        training. We were taught by major organisations,
                        mentored by leaders of industry, and shaped by
                        governance and finance at the highest levels.
                      </p>
                      <p>
                        But we were raised by commoners—by communities who know
                        the struggles of housing insecurity, the barriers of
                        language and income, and the hope that comes with
                        finally finding a place to call home.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-6 h-6 text-cyan-500" />
                      <h3 className="text-xl font-bold text-slate-900">
                        Bridging the Gap
                      </h3>
                    </div>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p className="font-semibold text-cyan-700">
                        HavenBridge exists because we saw a gap: housing was
                        being built for communities, but never with them.
                      </p>
                      <p>
                        So, we chose to step into the space between institutions
                        and the people they serve. We are nimble. We are agile.
                        We understand strategy and scale—but we also understand
                        culture, family, and belonging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: The Final Message */}
              <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 text-white">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-semibold">
                      OUR COMMITMENT
                    </span>
                  </div>
                  <div className="space-y-6">
                    <p className="text-2xl font-bold">
                      We bring together the worlds of policy, development, and
                      community to design housing that restores dignity, builds
                      opportunity, and strengthens social cohesion.
                    </p>
                    <div className="h-1 w-24 bg-linear-to-r from-amber-400 to-cyan-500 rounded-full mx-auto"></div>
                    <p className="text-xl text-gray-300">
                      Every project we deliver is guided by a simple truth:
                    </p>
                    <p className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-cyan-500">
                      The homes we build must reflect the people who will live
                      in them.
                    </p>
                    <div className="h-1 w-24 bg-linear-to-r from-cyan-500 to-amber-400 rounded-full mx-auto"></div>
                    <p className="text-lg text-gray-300">
                      This is our story. This is HavenBridge. Building
                      differently—because we know who we build for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - Professional Grid */}
      <section className="py-24 bg-linear-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-6">
                <Star className="w-4 h-4 text-cyan-500" />
                <span className="text-sm font-semibold text-cyan-600">
                  GUIDING PRINCIPLES
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that define our approach and differentiate our
                work in the industry.
              </p>
            </div>

            {/* Values Grid - Professional Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="group relative">
                    {/* Card */}
                    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                      {/* Top Accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-slate-900 via-slate-700 to-slate-900"></div>

                      {/* Icon with Number */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${value.color}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-4xl font-bold text-gray-800">
                            0{i + 1}
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-cyan-500 transition-colors transform group-hover:translate-x-1" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 mb-6 flex-1">{value.desc}</p>

                      {/* Bottom Line */}
                      <div
                        className={`h-1 w-12 bg-linear-to-r ${value.color.replace(
                          "bg-linear-to-br",
                          "bg-linear-to-r"
                        )} rounded-full transform group-hover:w-full transition-all duration-300`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - Professional Cards with Images */}
      <section id="leadership" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/10 rounded-full border border-amber-400/20 mb-6">
                <Users className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-600">
                  LEADERSHIP TEAM
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Leadership
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A faith-grounded, multicultural-focused team purpose-built to
                address housing inequity.
              </p>
            </div>

            {/* Leadership Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((person, i) => {
                const expertise = person.expertise;
                return (
                  <div key={i} className="group relative">
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-4 bg-linear-to-br ${person.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                      {/* Top accent */}
                      <div
                        className={`h-2 bg-linear-to-br ${person.color}`}
                      ></div>

                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900/20 z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
                          {/* Gradient background for image placeholder */}
                          <div
                            className={`absolute inset-0 bg-linear-to-br ${person.color} opacity-30`}
                          ></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div
                                className={`inline-flex p-4 rounded-xl bg-linear-to-br ${person.color} mb-4`}
                              >
                                <Users className="w-12 h-12 text-white" />
                              </div>
                              <div className="text-white font-bold text-lg">
                                {person.name}
                              </div>
                              <div className="text-gray-300 text-sm">
                                {person.title}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={i === 0}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent"></div>
                      </div>

                      <div className="p-8 flex-1 flex flex-col">
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-900 mb-1">
                            {person.name}
                          </h3>
                          <p className="text-sm font-semibold text-amber-600 mb-3">
                            {person.title}
                          </p>

                          {/* Expertise tags */}
                          <div className="flex flex-wrap gap-1">
                            {expertise.map((skill, j) => (
                              <span
                                key={j}
                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                          {person.bio}
                        </p>

                        <button className="w-full py-2.5 bg-linear-to-br from-slate-900 to-slate-800 text-white font-bold rounded-lg hover:from-slate-800 hover:to-slate-700 transition-all mt-auto">
                          View Full Profile
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="relative py-24 overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section Content */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Handshake className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  PARTNERSHIP OPPORTUNITIES
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Build with{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-cyan-500">
                  Purpose
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Join us in creating housing that transforms lives and
                strengthens communities across Australia.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="/contact#consultation"
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-12 py-5 text-xl font-bold rounded-xl hover:bg-white hover:text-slate-900 transition-all overflow-hidden"
              >
                <span className="relative z-10">Book Consultation</span>
                <Calendar className="relative z-10 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
