'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { artworks, Artwork } from '@/data/artworks';

export default function GalleryPage() {
  const [filter, setFilter] = useState<'All' | 'Realism' | 'Fantasy' | 'Concept'>('All');

  const filteredArt = filter === 'All' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  const categories = ['All', 'Realism', 'Fantasy', 'Concept'];

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-16">
          <Link href="/" className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 hover:text-amber-300 transition-colors mb-8 block">
            ← Back Home
          </Link>
          <h1 className="font-display text-6xl md:text-8xl text-white tracking-tighter mb-12">
            The <span className="italic font-serif text-amber-300">Archive</span>
          </h1>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-8 border-b border-white/5 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all ${
                  filter === cat ? 'text-amber-300' : 'text-neutral-600 hover:text-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredArt.map((art) => (
            <div 
              key={art.id} 
              className="relative group overflow-hidden bg-neutral-900 break-inside-avoid"
            >
              {/* Image Container */}
              <div className="relative w-full transition-transform duration-700 group-hover:scale-105">
                {/* Note: In a real project, use Next.js <Image /> with proper sizes */}
                <img 
                  src={art.image} 
                  alt={art.title}
                  className="w-full h-auto object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-amber-300 text-[9px] tracking-[0.3em] uppercase mb-2">
                  {art.category}
                </span>
                <h3 className="text-white text-xl font-serif italic tracking-wide">
                  {art.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredArt.length === 0 && (
          <div className="py-40 text-center">
            <p className="text-neutral-600 tracking-widest uppercase text-xs">No pieces found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}