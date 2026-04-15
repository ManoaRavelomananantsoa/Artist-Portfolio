'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-16">
          <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 hover:text-amber-300 transition-colors mb-8 block">
            ← Back Home
          </Link>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-tighter mb-6">
            Get in <span className="italic font-serif text-amber-300">Touch</span>
          </h1>
          <p className="text-neutral-400 text-lg font-light max-w-xl leading-relaxed">
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </header>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-amber-300/10 border border-amber-300/30 rounded-lg p-8 text-center">
                <p className="text-amber-300 text-lg font-medium">Thank you! Your message has been sent.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-bold block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-neutral-700 focus:border-amber-300 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-bold block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-neutral-700 focus:border-amber-300 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-bold block">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-amber-300 focus:outline-none transition-colors"
                  >
                    <option value="" className="bg-neutral-900">Select a topic</option>
                    <option value="commission" className="bg-neutral-900">Commission</option>
                    <option value="collaboration" className="bg-neutral-900">Collaboration</option>
                    <option value="inquiry" className="bg-neutral-900">General Inquiry</option>
                    <option value="other" className="bg-neutral-900">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-bold block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-neutral-700 focus:border-amber-300 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative overflow-hidden px-12 py-5 bg-white text-black text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-300 hover:pr-14 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  {!isSubmitting && (
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 pt-16 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Email */}
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-600 font-bold mb-4">
                  Email
                </p>
                <a
                  href="mailto:ravelomanantsoamanoa89@gmail.com"
                  className="text-white text-lg font-serif italic hover:text-amber-300 transition-colors"
                >
                  ravelomanantsoamanoa89@gmail.com
                </a>
              </div>

              {/* Social */}
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-600 font-bold mb-4">
                  Social
                </p>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-amber-300 transition-colors block"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://artstation.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-amber-300 transition-colors block"
                  >
                    ArtStation
                  </a>
                </div>
              </div>

              {/* Location */}
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-600 font-bold mb-4">
                  Location
                </p>
                <p className="text-white text-lg font-serif italic">
                  Available Worldwide
                </p>
                <p className="text-neutral-500 text-sm mt-2">
                  Remote & On-site
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
