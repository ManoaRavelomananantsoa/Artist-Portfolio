// components/Footer.tsx
import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "ArtStation",
    href: "https://artstation.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.129-1.271h-2.664l9.088 15.797.015.025H24v.469zm-11.354-1.974L9.03 7.701 6.111 12.92l-2.117 3.879h9.652z"/>
      </svg>
    ),
  },
];

const navLinks = [
  { href: "/gallery", label: "Galerie" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Colonne identité */}
          <div className="md:col-span-1">
            <p className="font-display text-3xl italic text-white mb-3">
              Studio<span className="not-italic font-bold">·</span>NX
            </p>
            <p className="text-neutral-500 text-sm font-light leading-relaxed max-w-xs">
              Art numérique et illustration — explorant les frontières entre le réel et l'imaginaire.
            </p>
          </div>

          {/* Colonne navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-600 mb-5 font-medium">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-neutral-400 hover:text-amber-300 transition-colors duration-200 font-light"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne contact + réseaux */}
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-600 mb-5 font-medium">Suivre</p>
            <ul className="flex flex-col gap-3 mb-8">
              {socialLinks.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-amber-300 transition-colors duration-200 font-light group"
                  >
                    <span className="text-neutral-600 group-hover:text-amber-300 transition-colors duration-200">
                      {icon}
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="mailto:hello@studionx.art"
              className="text-sm text-amber-300/70 hover:text-amber-300 transition-colors duration-200 font-light"
            >
              hello@studionx.art
            </a>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-700 font-light tracking-wide">
            © {year} Studio·NX — Tous droits réservés
          </p>
          <p className="text-xs text-neutral-800 font-light">
            Fait avec soin · Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}