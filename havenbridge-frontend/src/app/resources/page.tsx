"use client";

import React from "react";
import {
  Newspaper,
  FileText,
  ClipboardCheck,
  Download,
  ArrowRight,
  Search,
  Filter,
  Calendar,
  User,
  TrendingUp,
  Building2,
  Shield,
  CheckCircle2,
  BookOpen,
  FileCode,
  BarChart3,
  Lightbulb,
  Globe,
  Award,
  Target,
  Heart,
  Zap,
  Sparkles,
  ChevronRight,
  Star,
  Clock,
  Users,
  MapPin
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "News & Insights",
      icon: Newspaper,
      color: "from-amber-400 to-amber-500",
      bgColor: "bg-amber-400/10",
      items: [
        {
          title: "2025 Affordable Housing Market Outlook",
          desc: "Comprehensive analysis of Australia's affordable housing sector with projections for the coming year.",
          date: "Mar 15, 2025",
          readTime: "8 min read",
          category: "Market Analysis",
          featured: true,
          icon: TrendingUp
        },
        {
          title: "The Rise of Community-Led Development",
          desc: "How community-driven approaches are transforming social housing projects across Victoria.",
          date: "Feb 28, 2025",
          readTime: "6 min read",
          category: "Community Focus",
          featured: false,
          icon: Users
        },
        {
          title: "Government Policy Updates Q1 2025",
          desc: "Latest changes to housing policies, grants, and compliance requirements for developers.",
          date: "Feb 10, 2025",
          readTime: "5 min read",
          category: "Policy",
          featured: false,
          icon: Shield
        },
        {
          title: "Sustainable Building Materials Guide",
          desc: "Innovative and eco-friendly materials for modern affordable housing projects.",
          date: "Jan 25, 2025",
          readTime: "10 min read",
          category: "Sustainability",
          featured: true,
          icon: Globe
        }
      ]
    },
    {
      title: "Project Planning Guides",
      icon: FileText,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      items: [
        {
          title: "End-to-End Development Playbook",
          desc: "Step-by-step guide from land acquisition to project completion for social housing.",
          pages: "45 pages",
          format: "PDF Guide",
          downloads: "1.2k",
          icon: BookOpen
        },
        {
          title: "Stakeholder Engagement Framework",
          desc: "Best practices for community consultation and stakeholder management in sensitive developments.",
          pages: "32 pages",
          format: "Interactive PDF",
          downloads: "845",
          icon: Users
        },
        {
          title: "Budget Planning Template Suite",
          desc: "Comprehensive financial models and templates for housing development projects.",
          pages: "28 pages",
          format: "Excel Templates",
          downloads: "1.5k",
          icon: BarChart3
        },
        {
          title: "Risk Assessment Matrix",
          desc: "Framework for identifying and mitigating risks in community housing projects.",
          pages: "22 pages",
          format: "PDF + Templates",
          downloads: "720",
          icon: Shield
        }
      ]
    },
    {
      title: "Compliance Resources",
      icon: ClipboardCheck,
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10",
      items: [
        {
          title: "NDIS Housing Compliance Handbook",
          desc: "Complete guide to SDA and SIL compliance requirements and certification process.",
          updated: "Updated Feb 2025",
          standards: "10+ Standards",
          icon: CheckCircle2
        },
        {
          title: "Building Code 2025 Updates",
          desc: "Latest changes to Australian building codes affecting multi-unit developments.",
          updated: "Updated Jan 2025",
          standards: "NCC 2025",
          icon: Building2
        },
        {
          title: "Environmental Compliance Checklist",
          desc: "Comprehensive checklist for environmental approvals and sustainability compliance.",
          updated: "Updated Mar 2025",
          standards: "EPBC + State",
          icon: Globe
        },
        {
          title: "Accessibility Standards Guide",
          desc: "Complete reference for disability access requirements in residential developments.",
          updated: "Updated Dec 2024",
          standards: "AS 1428 Series",
          icon: Target
        }
      ]
    },
    {
      title: "Downloadable Templates",
      icon: Download,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-500/10",
      items: [
        {
          title: "Project Proposal Template",
          desc: "Professional template for pitching housing development projects to investors and partners.",
          format: "Word + PDF",
          size: "2.4 MB",
          downloads: "2.3k",
          icon: FileCode
        },
        {
          title: "Community Impact Assessment",
          desc: "Template for measuring and reporting social impact of housing projects.",
          format: "Excel + Word",
          size: "3.1 MB",
          downloads: "1.8k",
          icon: Heart
        },
        {
          title: "Construction Timeline Planner",
          desc: "Interactive Gantt chart template for project scheduling and milestone tracking.",
          format: "Excel",
          size: "1.8 MB",
          downloads: "2.1k",
          icon: Clock
        },
        {
          title: "Site Assessment Checklist",
          desc: "Comprehensive checklist for evaluating potential development sites.",
          format: "PDF + Excel",
          size: "1.5 MB",
          downloads: "1.6k",
          icon: MapPin
        }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "The Complete Guide to Social Housing Development",
      desc: "Master the entire process from concept to completion with our comprehensive 120-page guide.",
      icon: BookOpen,
      color: "bg-gradient-to-br from-amber-500 to-orange-500",
      stats: "500+ downloads",
      premium: true
    },
    {
      title: "2025 Impact Investment Report",
      desc: "Exclusive insights into impact investing trends and opportunities in affordable housing.",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
      stats: "Industry Exclusive",
      premium: true
    },
    {
      title: "Community Consultation Toolkit",
      desc: "Everything you need to engage effectively with communities in your development area.",
      icon: Users,
      color: "bg-gradient-to-br from-emerald-500 to-green-500",
      stats: "Free Download",
      premium: false
    }
  ];

  const industryPartners = [
    { name: "Housing Australia", logo: "🏛️" },
    { name: "Victorian Government", logo: "🇦🇺" },
    { name: "Community Housing Ltd", logo: "🏘️" },
    { name: "Impact Investors", logo: "💼" },
    { name: "UNSW City Futures", logo: "🎓" },
    { name: "Property Council AU", logo: "🏢" }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated header */}
            <div className="relative inline-block mb-6">
              <Sparkles className="absolute -top-6 -left-6 w-12 h-12 text-amber-400 animate-pulse" />
              <Sparkles className="absolute -bottom-6 -right-6 w-12 h-12 text-cyan-500 animate-pulse delay-300" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-white to-cyan-500">
                  Resource Hub
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Expert insights, practical guides, and essential tools for community-focused development professionals.
            </p>
            
            {/* Search bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative flex items-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-2">
                  <Search className="w-6 h-6 text-gray-300 ml-4" />
                  <input
                    type="text"
                    placeholder="Search resources, guides, and insights..."
                    className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-white placeholder-gray-400 text-lg"
                  />
                  <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-3 rounded-lg font-bold hover:from-amber-500 hover:to-amber-400 transition-all ml-2">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                Featured Resources
              </h2>
              <p className="text-gray-600">Essential tools for your next project</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600">Sort by:</span>
              <select className="bg-transparent border-none outline-none font-medium text-slate-900">
                <option>Most Popular</option>
                <option>Recently Added</option>
                <option>Most Downloaded</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredResources.map((resource, i) => (
              <div key={i} className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                  {/* Top color bar */}
                  <div className={`h-2 ${resource.color}`}></div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${resource.color.replace('bg-gradient-to-br', 'bg')}/20`}>
                        <resource.icon className="w-8 h-8 text-slate-900" />
                      </div>
                      {resource.premium && (
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 text-xs font-bold rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3" /> PREMIUM
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{resource.desc}</p>
                    
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-sm font-medium text-gray-500">
                        {resource.stats}
                      </span>
                      <button className="flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group-hover:gap-3">
                        Download <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resource Categories */}
          <div className="space-y-16">
            {resourceCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <div key={catIndex} className="relative">
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-xl ${category.bgColor}`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900">
                        {category.title}
                      </h3>
                      <p className="text-gray-600">
                        {category.items.length} resources available
                      </p>
                    </div>
                    <a 
                      href={`/resources/${category.title.toLowerCase().replace(/ /g, '-')}`}
                      className="ml-auto flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
                    >
                      View All <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Resources grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item, itemIndex) => {
                      const ItemIcon = item.icon;
                      return (
                        <div 
                          key={itemIndex} 
                          className="group relative bg-white rounded-xl border border-gray-100 hover:border-cyan-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                          {/* Top accent */}
                          <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
                          
                          <div className="p-5">
                            {/* Featured badge */}
                            {'featured' in item && item.featured && (
                              <div className="absolute top-3 right-3">
                                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                              </div>
                            )}
                            
                            {/* Icon */}
                            <div className={`p-3 rounded-lg ${category.bgColor} w-fit mb-4`}>
                              <ItemIcon className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                            </div>
                            
                            {/* Title */}
                            <h4 className="font-bold text-slate-900 mb-2 line-clamp-2">
                              {item.title}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {item.desc}
                            </p>
                            
                            {/* Metadata */}
                            <div className="space-y-2 pt-4 border-t border-gray-100">
                              {'date' in item && (
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <Calendar className="w-4 h-4" />
                                  <span>{item.date}</span>
                                  <span>•</span>
                                  <span>{item.readTime}</span>
                                </div>
                              )}
                              
                              {'pages' in item && (
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <FileText className="w-4 h-4" />
                                  <span>{item.pages}</span>
                                  <span>•</span>
                                  <span>{item.format}</span>
                                </div>
                              )}
                              
                              {'updated' in item && (
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <Shield className="w-4 h-4" />
                                  <span>{item.updated}</span>
                                </div>
                              )}
                              
                              {'category' in item && (
                                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                                  {item.category}
                                </span>
                              )}
                            </div>
                            
                            {/* Action button */}
                            <button className="mt-4 w-full py-2.5 bg-gray-50 hover:bg-gradient-to-r hover:from-amber-400 hover:to-cyan-500 text-gray-700 hover:text-white font-medium rounded-lg transition-all duration-300 group-hover:shadow-lg">
                              {'downloads' in item ? `Download (${item.downloads})` : 'Read More'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our resources are developed in collaboration with leading organizations in the community housing sector.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industryPartners.map((partner, i) => (
              <div 
                key={i} 
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <p className="text-center text-sm font-medium text-gray-300">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-cyan-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-6">
              <Lightbulb className="absolute -top-4 -right-4 w-8 h-8 text-amber-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Stay Ahead in Community Development
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter and receive exclusive resources, industry insights, and project updates directly to your inbox.
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder-gray-500"
                />
                <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
