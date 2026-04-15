// app/page.tsx
import Link from "next/link";
import FeaturedWorks from "@/components/FeaturedWorks";

export default function HomePage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 px-6 overflow-hidden bg-[#050505]">
        
        {/* Decorative Background: Organic Light & Texture */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Background Image */}
          <img 
            src="/gallery/background/background.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Subtle Artistic Grain */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Floating Signature/Name Background */}
        <div className="absolute top-24 right-6 md:right-16 font-display text-[clamp(6rem,15vw,12rem)] leading-none text-white/[0.03] select-none pointer-events-none font-black tracking-tighter uppercase">
          Manoa
        </div>

        <div className="relative max-w-7xl mx-auto w-full z-10">
          {/* Label with a fine line */}
          <div className="flex items-center gap-4 mb-6 animate-[fadeUp_0.6s_ease_both]">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-amber-300 to-transparent" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-400 font-semibold">
              Digital Artist · Concept Art
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="font-display text-[clamp(3rem,8vw,8.5rem)] leading-[0.85] tracking-[-0.04em] text-white mb-12 animate-[fadeUp_0.7s_0.1s_ease_both_backwards]"
          >
            Soul within the <br />
            <span className="italic font-serif text-amber-300 px-2">digital.</span>
          </h1>

          {/* Description & CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 animate-[fadeUp_0.7s_0.25s_ease_both_backwards]">
            <p className="max-w-lg text-neutral-400 text-lg font-light leading-relaxed">
              Visual exploration of imaginary realms and soulful portraits. 
              Each piece is meticulously crafted through light and color, 
              drawn entirely <span className="text-white font-medium italic text-sm">freehand on a smartphone.</span>
            </p>

            <div className="flex items-center gap-8 shrink-0">
              <Link
                href="/gallery"
                className="group relative overflow-hidden px-10 py-5 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:pr-14"
              >
                <span className="relative z-10">Full Gallery</span>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
              </Link>

              <Link
                href="/process"
                className="text-[10px] text-neutral-500 hover:text-amber-300 transition-colors duration-300 tracking-[0.3em] uppercase font-bold border-b border-neutral-800 pb-1"
              >
                My Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED WORKS ── */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div className="space-y-2">
              <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter">
                Master <span className="text-amber-300/80 italic font-serif">Pieces</span>
              </h2>
              <p className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-medium">Ibis Paint Illustrations</p>
            </div>
            <Link
              href="/gallery"
              className="group text-[10px] text-neutral-400 hover:text-white transition-colors duration-300 tracking-[0.3em] uppercase flex items-center gap-3"
            >
              View All Works
              <span className="w-8 h-px bg-neutral-800 group-hover:w-12 group-hover:bg-amber-300 transition-all" />
            </Link>
          </div>

          <FeaturedWorks />
        </div>
      </section>

      {/* ── COMMISSIONS SECTION ── */}
      <section className="py-40 px-6 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-amber-300/60 font-semibold mb-6 block">
            Commissions & Inquiries
          </span>
          <h2 className="font-display text-6xl md:text-8xl text-white tracking-tighter mb-10">
            Bringing your <span className="italic font-serif text-amber-300">vision to life.</span>
          </h2>
          <p className="text-neutral-400 font-light text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Available for custom illustrations, character concepts, and high-end digital portraits.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-12 py-6 border border-white/10 text-white text-[10px] tracking-[0.3em] uppercase hover:border-amber-300/50 hover:text-amber-300 transition-all duration-500"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}