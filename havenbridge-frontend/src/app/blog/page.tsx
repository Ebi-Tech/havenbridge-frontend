"use client";

import React from 'react';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Tag
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of Modular Housing in Australia",
      excerpt: "Exploring how modular construction is revolutionizing the Australian housing market and addressing affordability challenges.",
      author: "Sarah Mitchell",
      date: "March 15, 2025",
      category: "Industry Insights",
      image: "bg-linear-to-br from-slate-800 to-slate-600"
    },
    {
      title: "Sustainable Building Practices for Community Development",
      excerpt: "How HavenBridge incorporates environmental sustainability into every project we undertake.",
      author: "James Chen",
      date: "March 8, 2025",
      category: "Sustainability",
      image: "bg-linear-to-br from-cyan-800 to-cyan-600"
    },
    {
      title: "Partnering with Government: Social Housing Success Stories",
      excerpt: "A look at our successful government partnerships and the impact they've created in communities.",
      author: "Emma Thompson",
      date: "February 28, 2025",
      category: "Case Studies",
      image: "bg-linear-to-br from-amber-800 to-amber-600"
    },
    {
      title: "Designing for Community: The HavenBridge Approach",
      excerpt: "Our philosophy on creating spaces that foster community connection and wellbeing.",
      author: "Michael Rodriguez",
      date: "February 20, 2025",
      category: "Design",
      image: "bg-linear-to-br from-blue-800 to-blue-600"
    },
    {
      title: "Aged Care Facilities: Meeting Australia's Growing Needs",
      excerpt: "How purpose-built aged care facilities are addressing the needs of Australia's aging population.",
      author: "Lisa Anderson",
      date: "February 12, 2025",
      category: "Industry Insights",
      image: "bg-linear-to-br from-purple-800 to-purple-600"
    },
    {
      title: "Investment Opportunities in Australian Property Development",
      excerpt: "An overview of investment opportunities in the Australian property development sector.",
      author: "David Park",
      date: "February 5, 2025",
      category: "Investor Relations",
      image: "bg-linear-to-br from-green-800 to-green-600"
    }
  ];

  const categories = [
    "All Posts",
    "Industry Insights",
    "Case Studies",
    "Sustainability",
    "Design",
    "Investor Relations"
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
              Our <span className="text-amber-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Insights, stories, and updates from the world of property development and community building.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  i === 0
                    ? 'bg-amber-500 text-slate-900'
                    : 'bg-white text-gray-600 hover:bg-amber-500 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article 
                key={i} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`aspect-video ${post.image} relative`}>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-slate-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <a 
                    href="#"
                    className="inline-flex items-center text-cyan-500 font-semibold group-hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest insights and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-400 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Have a Story to <span className="text-amber-400">Share?</span>
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            We're always looking for guest contributors and partnership opportunities.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-lg hover:bg-amber-400 transition-all shadow-2xl"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

