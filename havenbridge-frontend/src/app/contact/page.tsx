"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Building2,
  Calendar,
  Clock,
  Video,
  Users
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    preferredDate: '',
    preferredTime: '',
    meetingType: 'video',
    attendees: '1',
    additionalNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation booked:', consultationData);
    alert('Thank you for booking a consultation! We will confirm your appointment shortly.');
    setConsultationData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      preferredDate: '',
      preferredTime: '',
      meetingType: 'video',
      attendees: '1',
      additionalNotes: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setConsultationData({
      ...consultationData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@havenbridge.com.au",
      link: "mailto:info@havenbridge.com.au"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+61 (0) 3 XXXX XXXX",
      link: "tel:+613XXXXXXX"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Melbourne, Victoria, Australia",
      link: "#"
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
              Get in <span className="text-amber-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Have a question or want to discuss a project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, i) => (
              <a 
                key={i}
                href={info.link}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Inquiry Form
              </h2>
              <p className="text-xl text-gray-600">
                Have a general question? Send us a message and we'll respond promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-2xl mb-20">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    placeholder="+61 X XXX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-slate-900 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="" className="text-gray-500">Select a subject</option>
                    <option value="general" className="text-gray-900">General Inquiry</option>
                    <option value="services" className="text-gray-900">Services</option>
                    <option value="projects" className="text-gray-900">Projects</option>
                    <option value="investors" className="text-gray-900">Investor Relations</option>
                    <option value="careers" className="text-gray-900">Careers</option>
                    <option value="other" className="text-gray-900">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-700 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Send Inquiry <Send className="w-5 h-5" />
              </button>
            </form>

            {/* Book a Consultation Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Book a Consultation
              </h2>
              <p className="text-xl text-gray-600">
                Schedule a personalized consultation to discuss your project in detail.
              </p>
            </div>

            <form onSubmit={handleConsultationSubmit} className="bg-linear-to-br from-slate-50 to-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="consultation-name" className="block text-sm font-bold text-slate-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="consultation-name"
                    name="name"
                    value={consultationData.name}
                    onChange={handleConsultationChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="consultation-email" className="block text-sm font-bold text-slate-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="consultation-email"
                    name="email"
                    value={consultationData.email}
                    onChange={handleConsultationChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="consultation-phone" className="block text-sm font-bold text-slate-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="consultation-phone"
                    name="phone"
                    value={consultationData.phone}
                    onChange={handleConsultationChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    placeholder="+61 X XXX XXX XXX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-slate-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={consultationData.company}
                    onChange={handleConsultationChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-bold text-slate-900 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={consultationData.projectType}
                    onChange={handleConsultationChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="" className="text-gray-500">Select project type</option>
                    <option value="residential" className="text-gray-900">Residential Development</option>
                    <option value="commercial" className="text-gray-900">Commercial Building</option>
                    <option value="industrial" className="text-gray-900">Industrial Facility</option>
                    <option value="infrastructure" className="text-gray-900">Infrastructure Project</option>
                    <option value="mixed-use" className="text-gray-900">Mixed-Use Development</option>
                    <option value="other" className="text-gray-900">Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-bold text-slate-900 mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={consultationData.preferredDate}
                      onChange={handleConsultationChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-bold text-slate-900 mb-2">
                      <Clock className="inline w-4 h-4 mr-2" />
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={consultationData.preferredTime}
                      onChange={handleConsultationChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="" className="text-gray-500">Select time</option>
                      <option value="09:00" className="text-gray-900">09:00 AM</option>
                      <option value="10:00" className="text-gray-900">10:00 AM</option>
                      <option value="11:00" className="text-gray-900">11:00 AM</option>
                      <option value="13:00" className="text-gray-900">01:00 PM</option>
                      <option value="14:00" className="text-gray-900">02:00 PM</option>
                      <option value="15:00" className="text-gray-900">03:00 PM</option>
                      <option value="16:00" className="text-gray-900">04:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">
                    <Video className="inline w-4 h-4 mr-2" />
                    Meeting Type *
                  </label>
                  <div className="flex gap-4 text-gray-900">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="meetingType"
                        value="video"
                        checked={consultationData.meetingType === 'video'}
                        onChange={handleConsultationChange}
                        className="mr-2"
                      />
                      Video Call
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="meetingType"
                        value="phone"
                        checked={consultationData.meetingType === 'phone'}
                        onChange={handleConsultationChange}
                        className="mr-2"
                      />
                      Phone Call
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="meetingType"
                        value="in-person"
                        checked={consultationData.meetingType === 'in-person'}
                        onChange={handleConsultationChange}
                        className="mr-2"
                      />
                      In-Person
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="attendees" className="block text-sm font-bold text-slate-900 mb-2">
                    <Users className="inline w-4 h-4 mr-2" />
                    Number of Attendees
                  </label>
                  <select
                    id="attendees"
                    name="attendees"
                    value={consultationData.attendees}
                    onChange={handleConsultationChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white"
                  >
                    <option value="1" className="text-gray-900">1 person</option>
                    <option value="2" className="text-gray-900">2 people</option>
                    <option value="3" className="text-gray-900">3 people</option>
                    <option value="4" className="text-gray-900">4 people</option>
                    <option value="5" className="text-gray-900">5+ people</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="additionalNotes" className="block text-sm font-bold text-slate-900 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={consultationData.additionalNotes}
                  onChange={handleConsultationChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-500"
                  placeholder="Any specific topics you'd like to discuss?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                Book Consultation <Calendar className="w-5 h-5" />
              </button>
            </form>
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
            Let's work together to bring your vision to life.
          </p>
          <a 
            href="/services"
            className="inline-block bg-amber-500 text-slate-900 px-12 py-5 text-xl font-bold rounded-lg hover:bg-amber-400 transition-all shadow-2xl"
          >
            View Our Services
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
