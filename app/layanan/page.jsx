import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Layanan Kami – CV. Sinar Berkah Group',
  description: 'Jasa pembuatan dan pemasangan kanopi atap membrane serta kanopi alderon dari CV. Sinar Berkah Group.',
};

const services = [
  {
    tag: '01 · Premium Service',
    title: 'Kanopi Atap Membrane',
    desc: 'Material bersertifikasi internasional (AGTex, Serge Ferrari, HEYtex), tampilan modern, dan fleksibilitas bentuk artistik.',
    image: '/images/25.jpeg',
    href: '/layanan/canopy-membran',
  },
  {
    tag: '02 · High Durability',
    title: 'Kanopi Alderon',
    desc: 'Atap UPVC yang kokoh, anti karat, kedap suara, dan memiliki isolasi panas terbaik untuk kenyamanan maksimal.',
    image: '/images/6.jpeg',
    href: '/layanan/canopy-alderon',
  },
];

export default function LayananPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pb-24">

      {/* Banner Header */}
      <section className="bg-primary py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Layanan</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Kami</h1>
          <p className="text-white/60 text-lg font-medium">Jasa Pembuatan &amp; Pemasangan Kanopi Profesional Sejak 2000</p>
        </div>
      </section>

      {/* Grid 2 Layanan */}
      <section className="container mx-auto max-w-5xl px-4 md:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal direction="up" delay={index * 0.12} key={service.href}>
              <Link
                href={service.href}
                className="group block border border-primary/10 hover:border-secondary transition-colors duration-300 h-full"
              >
                <div className="h-56 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  ></div>
                </div>
                <div className="p-8 flex flex-col">
                  <p className="text-secondary font-semibold text-[11px] tracking-widest uppercase mb-3">{service.tag}</p>
                  <h2 className="text-2xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-neutral-text/70 text-sm leading-relaxed flex-grow mb-6">{service.desc}</p>
                  <span className="text-primary group-hover:text-secondary font-semibold text-sm flex items-center gap-2 transition-colors">
                    Lihat Detail
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
