import React from 'react';
import { clients } from './data';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Klien & Proyek – CV. Sinar Berkah Group',
  description: 'Daftar klien dan proyek instalasi kanopi atap membrane yang telah dikerjakan oleh CV. Sinar Berkah Group, mulai dari instansi pemerintah hingga hunian pribadi.',
};

export default function KlienProyekPage() {
  const documented = clients.filter((c) => c.image);
  const others = clients.filter((c) => !c.image);

  return (
    <main className="min-h-screen bg-neutral-bg pb-24">

      {/* Banner Header */}
      <section className="bg-primary py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Rekam Jejak</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Klien &amp; Proyek</h1>
          <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto">
            Kepercayaan dari berbagai instansi pemerintah, korporasi, hingga hunian pribadi adalah bukti nyata kualitas kerja kami.
          </p>
        </div>
      </section>

      {/* Bagian Visi sebagai Highlight */}
      <section className="container mx-auto px-6 mt-16 mb-20 max-w-4xl">
        <ScrollReveal direction="up">
          <div className="bg-white border-l-2 border-secondary p-8 md:p-10 text-center">
            <p className="text-lg md:text-xl text-primary font-medium leading-relaxed">
              "Menjadi perusahaan pengadaan barang dan jasa yang dapat dipercaya dan diandalkan dalam menjual produk dan mengerjakan pekerjaan secara bertanggung jawab dan amanah."
            </p>
            <p className="text-sm text-neutral-text/40 mt-4">— Visi CV. Sinar Berkah Group</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Proyek Terdokumentasi (dengan foto) */}
      <section className="container mx-auto max-w-7xl px-4 md:px-8 mb-20">
        <ScrollReveal direction="up">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3">Bukti Kerja</p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">Proyek Terdokumentasi</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {documented.map((client, index) => (
            <ScrollReveal direction="up" delay={index * 0.06} key={index}>
              <div className="group relative w-full aspect-[4/3] bg-neutral-bg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${client.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <client.Icon className="w-4 h-4 text-secondary" strokeWidth={2} />
                    <span className="text-secondary text-[10px] font-semibold uppercase tracking-widest">{client.category}</span>
                  </div>
                  <p className="text-white font-semibold leading-snug">{client.name}</p>
                  {client.location && <p className="text-white/50 text-xs mt-0.5">{client.location}</p>}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Klien & Instansi Lainnya */}
      <section className="container mx-auto max-w-7xl px-4 md:px-8">
        <ScrollReveal direction="up">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3">Selengkapnya</p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">Klien &amp; Instansi Lainnya</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {others.map((client, index) => (
            <div
              key={index}
              className="bg-white border border-primary/10 p-6 flex flex-col items-center text-center gap-3 group hover:bg-primary hover:border-primary transition-colors duration-300"
            >
              <div className="w-11 h-11 flex items-center justify-center text-secondary">
                <client.Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-semibold text-primary group-hover:text-white leading-snug transition-colors">{client.name}</p>
                {client.location && <p className="text-xs text-neutral-text/40 group-hover:text-white/50 mt-0.5 transition-colors">{client.location}</p>}
                <p className="text-[11px] text-secondary mt-1 font-medium">{client.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
