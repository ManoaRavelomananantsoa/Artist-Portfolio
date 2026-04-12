// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/gallery", label: "Galerie" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Blur backdrop */}
      <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md border-b border-white/5" />

      <nav className="relative max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo / nom artiste */}
        <Link
          href="/"
          className="font-display text-xl italic tracking-tight text-white hover:text-amber-300 transition-colors duration-300"
        >
          Studio<span className="not-italic font-bold">·</span>NX
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-light tracking-widest uppercase transition-all duration-300 relative group ${
                    isActive
                      ? "text-amber-300"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {label}
                  {/* Underline animée */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-amber-300 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA desktop */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs tracking-widest uppercase font-medium border border-amber-300/40 text-amber-300 hover:bg-amber-300 hover:text-neutral-950 transition-all duration-300 rounded-none"
        >
          Collaborer
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden relative bg-neutral-950 border-t border-white/5 overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-64 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 text-sm tracking-widest uppercase font-light border-b border-white/5 transition-colors duration-200 ${
                    isActive ? "text-amber-300" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-3 text-xs tracking-widest uppercase font-medium border border-amber-300/40 text-amber-300"
            >
              Collaborer
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}