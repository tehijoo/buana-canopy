"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = (path) => {
    const isActive = pathname === path;
    return `link-underline px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
      isActive ? "text-secondary" : "text-neutral-text hover:text-secondary"
    }`;
  };

  const isLayananActive = pathname.startsWith("/layanan");

  const layananMenu = [
    { label: "Kanopi Atap Membrane", slug: "canopy-membran" },
    { label: "Kanopi Alderon", slug: "canopy-alderon" },
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-50 bg-white">
      {/* Aksen tipis di puncak header */}
      <div className="h-[3px] w-full bg-brand-gradient" />

      {/* Nav Bar */}
      <div className="py-3 px-4 md:px-8 flex justify-between items-center border-b border-primary/10 shadow-[0_1px_0_rgba(0,0,0,0.02)]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo.jpeg"
            alt="Logo CV. Sinar Berkah Group"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-primary/10 bg-white"
          />

          <div className="flex flex-col">
            <h1 className="text-primary font-bold text-lg md:text-xl leading-none">Sinar Berkah Group</h1>
            <p className="text-secondary text-[8px] md:text-[10px] font-semibold tracking-[0.25em] uppercase mt-1.5">Kanopi Atap Membrane</p>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/" className={getNavLinkClass("/")}>Home</Link>
          <Link href="/tentang-kami" className={getNavLinkClass("/tentang-kami")}>Tentang Kami</Link>

          {/* Dropdown Layanan */}
          <div className="relative group py-2 px-1">
            <div className={`link-underline flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium tracking-wide cursor-pointer transition-colors duration-300 ${isLayananActive ? "text-secondary" : "text-neutral-text group-hover:text-secondary"}`}>
              <Link href="/layanan">Layanan</Link>
              <svg className="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <div className="absolute left-0 top-full w-64 bg-white border-t-2 border-secondary shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex flex-col py-2 z-50">
              {layananMenu.map((item) => (
                <Link
                  key={item.slug}
                  href={`/layanan/${item.slug}`}
                  className="px-5 py-3 text-neutral-text hover:bg-neutral-bg hover:text-secondary transition border-b border-primary/5 last:border-0 text-[13px] leading-tight"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/galeri" className={getNavLinkClass("/galeri")}>Galeri</Link>
          <Link href="/klien-proyek" className={getNavLinkClass("/klien-proyek")}>Klien & Proyek</Link>
          <Link href="/artikel" className={getNavLinkClass("/artikel")}>Artikel</Link>
          <Link
            href="/kontak"
            className="ml-2 bg-primary hover:bg-secondary text-white px-5 py-2.5 text-[13px] font-semibold tracking-wide transition-colors duration-300"
          >
            Kontak
          </Link>
        </nav>

        {/* Tombol Hamburger Mobile */}
        <button className="lg:hidden p-2 text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-primary/10 shadow-2xl absolute w-full left-0 animate-in fade-in slide-in-from-top duration-300 overflow-y-auto max-h-[80vh]">
          <div className="flex flex-col p-6 gap-1">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="px-4 py-2.5 text-neutral-text hover:text-secondary font-medium">Home</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/tentang-kami" className="px-4 py-2.5 text-neutral-text hover:text-secondary font-medium">Tentang Kami</Link>

            <div className="h-px bg-primary/10 my-2"></div>
            <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest ml-4 mb-1">Layanan Kami</p>
            {layananMenu.map((item) => (
              <Link
                key={item.slug}
                onClick={() => setIsMobileMenuOpen(false)}
                href={`/layanan/${item.slug}`}
                className="text-neutral-text hover:text-secondary px-4 py-2 ml-2 border-l-2 border-primary/10 text-sm"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-primary/10 my-2"></div>

            <Link onClick={() => setIsMobileMenuOpen(false)} href="/galeri" className="px-4 py-2.5 text-neutral-text hover:text-secondary font-medium">Galeri</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/klien-proyek" className="px-4 py-2.5 text-neutral-text hover:text-secondary font-medium">Klien & Proyek</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/artikel" className="px-4 py-2.5 text-neutral-text hover:text-secondary font-medium">Artikel</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/kontak" className="mt-2 bg-primary text-white px-4 py-3 text-center font-semibold">Kontak</Link>
          </div>
        </div>
      )}
    </header>
  );
}
