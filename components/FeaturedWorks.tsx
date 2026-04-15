// components/FeaturedWorks.tsx
import Link from "next/link";
import Image from "next/image";

// Featured Master Pieces
const works = [
  {
    id: "8",
    title: "Moonlight Village",
    category: "Fantasy",
    year: "2024",
    image: "/gallery/fantasy/moonlight village.jpeg",
    accent: "col-span-1 md:col-span-2 row-span-2", // grande carte
    aspectClass: "aspect-[4/3] md:aspect-auto md:h-full",
  },
  {
    id: "12",
    title: "Blue Eyed",
    category: "Realism",
    year: "2024",
    image: "/gallery/realism/blueeyed.jpeg",
    accent: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "9",
    title: "Mother Nature",
    category: "Fantasy",
    year: "2024",
    image: "/gallery/fantasy/motherNature.jpeg",
    accent: "col-span-1",
    aspectClass: "aspect-square",
  },
  {
    id: "6",
    title: "WhatsApp Image",
    category: "Fantasy",
    year: "2024",
    image: "/gallery/fantasy/WhatsApp Image 2026-04-12 at 20.31.10.jpeg",
    accent: "col-span-1 md:col-span-2",
    aspectClass: "aspect-[16/7]",
  },
];

export default function FeaturedWorks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[260px] gap-3">
      {works.map((work) => (
        <Link
          key={work.id}
          href={`/gallery/${work.id}`}
          className={`group relative overflow-hidden bg-neutral-900 border border-white/5 hover:border-amber-300/20 transition-all duration-500 ${work.accent}`}
        >
          {/* Image */}
          <img
            src={work.image}
            alt={work.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${work.aspectClass}`}
          />

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Overlay hover */}
          <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Infos œuvre */}
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-amber-300/70 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  {work.category} · {work.year}
                </p>
                <h3 className="font-display text-xl italic text-white leading-tight">
                  {work.title}
                </h3>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <div className="w-8 h-8 border border-amber-300/40 flex items-center justify-center text-amber-300">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}