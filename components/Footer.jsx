import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white/70 pt-20 pb-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">

        {/* Kolom 1: Logo & Identitas */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/logo.jpeg"
              alt="Logo CV. Sinar Berkah Group"
              className="w-12 h-12 rounded-full object-cover border border-white/15 bg-white shrink-0"
            />

            <div className="flex flex-col">
              <h1 className="text-white font-bold text-lg leading-none">Sinar Berkah Group</h1>
              <p className="text-secondary text-[9px] font-semibold tracking-[0.2em] mt-1.5">KANOPI ATAP MEMBRANE</p>
            </div>
          </div>

          <p className="text-xs text-white/50 leading-relaxed">
            Berpengalaman dalam penyediaan barang &amp; jasa instalasi sejak tahun 2000.
          </p>
        </div>

        {/* Kolom 2: Sekilas Kami */}
        <div className="flex flex-col">
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase border-b border-white/10 pb-3">Sekilas Kami</h4>
          <p className="text-sm leading-relaxed text-white/60">
            CV. Sinar Berkah Group adalah perusahaan penyedia barang dan jasa instalasi, spesialis kanopi atap membrane dan kanopi alderon, yang telah berdiri sejak tahun 2000 dengan legalitas dan tenaga ahli di bidangnya.
          </p>
        </div>

        {/* Kolom 3: Kontak Kami */}
        <div className="flex flex-col">
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase border-b border-white/10 pb-3">Kontak Kami</h4>
          <div className="flex flex-col gap-4 text-sm">
            <a href="https://wa.me/6281276443339" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-3 group text-white/60">
              <span className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white" viewBox="0 0 32 32" fill="currentColor"><path d="M16.005 3C9.383 3 4 8.383 4 15.005c0 2.65.86 5.1 2.32 7.09L4 29l7.1-2.28a11.9 11.9 0 004.905 1.04h.005c6.62 0 12-5.383 12-12.005C28.01 8.383 22.627 3 16.005 3zm0 21.86a9.84 9.84 0 01-5.02-1.37l-.36-.21-3.75 1.2 1.22-3.65-.24-.375a9.84 9.84 0 01-1.51-5.245c0-5.44 4.43-9.87 9.87-9.87 5.44 0 9.87 4.43 9.87 9.87 0 5.443-4.43 9.65-9.87 9.65zm5.41-7.39c-.297-.148-1.758-.867-2.03-.966-.273-.1-.472-.148-.67.148-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.148-1.254-.462-2.39-1.474-.883-.788-1.48-1.76-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.148-.173.198-.297.297-.495.099-.198.05-.372-.025-.52-.075-.148-.67-1.612-.918-2.208-.242-.58-.487-.502-.67-.512l-.57-.01c-.198 0-.52.075-.792.372-.273.297-1.04 1.017-1.04 2.48 0 1.463 1.065 2.877 1.213 3.075.148.198 2.096 3.2 5.08 4.487.71.306 1.263.489 1.695.626.712.226 1.36.194 1.873.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              </span>
              <span className="font-semibold text-white">0812 7644 3339</span>
            </a>
            <a href="tel:0213905967" className="hover:text-secondary transition-colors flex items-center gap-2.5 group text-white/60">
              <svg className="w-4 h-4 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              021-3905967
            </a>
            <a href="mailto:sinarberkahgroup21@gmail.com" className="hover:text-secondary transition-colors flex items-center gap-2.5 group text-white/60">
              <svg className="w-4 h-4 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              sinarberkahgroup21@gmail.com
            </a>
          </div>
        </div>

        {/* Kolom 4: Alamat */}
        <div className="flex flex-col">
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase border-b border-white/10 pb-3">Alamat Kami</h4>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Jl.+RP.+Soeroso+No.+40+BC,+Gondangdia,+Menteng,+Jakarta+Pusat+10350"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-secondary transition-colors flex items-start gap-2.5 leading-relaxed group text-white/60"
          >
            <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Jl. RP. Soeroso No. 40 BC, Kel. Gondangdia,<br />Kec. Menteng, Jakarta Pusat 10350
          </a>

          <p className="text-[10px] text-white/30 mt-auto pt-8">
            © {new Date().getFullYear()} CV. Sinar Berkah Group. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
