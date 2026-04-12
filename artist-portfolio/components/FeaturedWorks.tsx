// components/FeaturedWorks.tsx
import Link from "next/link";

// Données temporaires — à remplacer par tes vraies œuvres
const works = [
  {
    id: "1",
    title: "Éclipse Mécanique",
    category: "Illustration",
    year: "2024",
    accent: "col-span-1 md:col-span-2 row-span-2", // grande carte
    aspectClass: "aspect-[4/3] md:aspect-auto md:h-full",
    color: "from-amber-900/20 to-neutral-900",
  },
  {
    id: "2",
    title: "Fragment #07",
    category: "Art numérique",
    year: "2024",
    accent: "col-span-1",
    aspectClass: "aspect-square",
    color: "from-blue-900/20 to-neutral-900",
  },
  {
    id: "3",
    title: "Serein",
    category: "Illustration",
    year: "2023",
    accent: "col-span-1",
    aspectClass: "aspect-square",
    color: "from-violet-900/20 to-neutral-900",
  },
  {
    id: "4",
    title: "Forêt Syntaxique",
    category: "Concept art",
    year: "2023",
    accent: "col-span-1 md:col-span-2",
    aspectClass: "aspect-[16/7]",
    color: "from-emerald-900/20 to-neutral-900",
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
          {/* Placeholder gradient — remplacer par next/image */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${work.color} transition-all duration-700 group-hover:scale-105`}
          />

          {/* Motif décoratif */}
          <div
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Icône image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-0 transition-opacity duration-300">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
              <rect x="3" y="3" width="18" height="18" rx="1"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
          </div>

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