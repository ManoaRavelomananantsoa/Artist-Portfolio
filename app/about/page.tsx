// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  const skills = [
    "Realistic Portraiture",
    "Fantasy Concept Art",
    "Japanese Anime Style",
    "2D Animation",
    "Abstract Art",
    "Digital Illustration",
  ];

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-20">
          <Link 
            href="/" 
            className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 hover:text-amber-300 transition-colors mb-8 block"
          >
            ← Back Home
          </Link>
          <h1 className="font-display text-6xl md:text-9xl text-white tracking-tighter leading-none">
            The <span className="italic font-serif text-amber-300">Artist</span> <br />
            Behind the Lens.
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Biography */}
          <div className="lg:col-span-7 space-y-12">
            <section className="space-y-6">
              <h2 className="text-amber-300 text-[10px] tracking-[0.4em] uppercase font-bold">My Story</h2>
              <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
                <p>
                  My journey began at a very young age. Driven by a mind overflowing with imagination, 
                  I found my first outlet through traditional drawing. At 12, I felt the urge to push 
                  my boundaries, teaching myself the intricacies of realism on paper.
                </p>
                <p>
                  Everything changed at 15 when I discovered the limitless world of digital art. 
                  Starting with simple mobile apps, I eventually found <span className="text-white font-medium">Ibis Paint</span>—my 
                  creative sanctuary. Confident in my potential, I didn’t wait long to share my work 
                  with the world, opening my first social media presence to showcase my evolution.
                </p>
                <p className="text-white italic font-serif text-xl">
                  "Today, with 6 years of experience dedicated to digital illustration, 
                  I continue to explore the intersection of light, emotion, and technology."
                </p>
              </div>
            </section>

            {/* Experience & Skills */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div>
                <h3 className="text-white text-sm tracking-widest uppercase mb-6">Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                    6 Years in Digital Illustration
                  </li>
                  <li className="flex items-center gap-3 text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                    Ibis Paint Power User
                  </li>
                  <li className="flex items-center gap-3 text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                    Adobe Illustrator & Photoshop
                  </li>
                  <li className="flex items-center gap-3 text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                    2D Animation Fundamentals
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-sm tracking-widest uppercase mb-6">Visual Styles</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 border border-white/10 text-[10px] text-neutral-500 uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Visual/Quote */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-8">
            <div className="relative aspect-[3/4] bg-neutral-900 border border-white/5 overflow-hidden group">
              <img 
                src="/gallery/me/me.jpeg" 
                alt="Artist Photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-40" />
              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-white/10 pointer-events-none group-hover:border-amber-300/30 transition-colors duration-500" />
            </div>

            <div className="p-8 bg-white/[0.02] border border-white/5">
              <p className="text-xs text-neutral-500 tracking-widest uppercase mb-4">Current Focus</p>
              <p className="text-white font-light italic tracking-wide">
                Blending traditional realism techniques with the vibrant energy of digital FX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}