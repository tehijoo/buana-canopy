import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Jasa Instalasi Kanopi Atap Membrane – CV. Buana Teknikal Pratama',
  description: 'Layanan jasa pembuatan dan pemasangan kanopi atap membrane berkualitas tinggi dengan material bersertifikasi internasional dari CV. Buana Teknikal Pratama.',
};

export default function CanopyMembranPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pb-24">

      {/* Banner Header */}
      <section className="bg-primary py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">01 · Premium Service</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kanopi Atap Membrane</h1>
          <p className="text-white/60 text-lg font-medium">Jasa Pembuatan &amp; Pemasangan Profesional Sejak 2000</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-white p-8 md:p-12 border border-primary/10 rounded-3xl">

          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
              Best Quality, Hasil Rapi &amp; <span className="text-secondary">Presisi</span>
            </h2>
          </ScrollReveal>

          {/* Grid Layout: Teks di Kiri (8 kolom), Foto di Kanan (4 kolom) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">

            {/* Kolom Teks */}
            <ScrollReveal direction="left" className="lg:col-span-8 order-2 lg:order-1">
              <div className="space-y-5 text-neutral-text/70 leading-relaxed">
                <p className="text-lg font-medium text-primary">
                  Pembuatan kanopi atap membrane dengan material berkualitas tinggi, memiliki daya tahan optimal terhadap cuaca, tampilan modern, serta fleksibilitas bentuk yang artistik.
                </p>

                <div className="h-px bg-primary/10 w-full my-6"></div>

                <p>
                  Layanan instalasi <strong className="text-primary">Kanopi Atap Membrane</strong> dari CV. Buana Teknikal Pratama menawarkan solusi perlindungan outdoor dengan tampilan modern dan estetika tinggi. Kanopi membrane dikenal sebagai salah satu jenis kanopi premium yang memiliki fleksibilitas bentuk sehingga dapat dirancang dalam berbagai model artistik.
                </p>

                <p>
                  Kami menggunakan bahan membrane bersertifikasi standar internasional dari brand terpercaya seperti <strong className="text-primary">AGTex</strong>, <strong className="text-primary">Serge Ferrari</strong>, dan <strong className="text-primary">HEYtex</strong> yang telah teruji kekuatannya terhadap paparan sinar UV dan hujan ekstrem. Struktur rangka dibangun dengan teknik pengelasan yang rapi, memastikan keamanan dan keindahan bangunan Anda terjaga dalam waktu yang lama.
                </p>

                <ul className="space-y-2 text-sm mt-4 bg-neutral-bg rounded-2xl p-6 border-l-2 border-secondary">
                  <li><strong className="text-primary">Sangat Cocok Untuk:</strong> Area parkir, taman, teras rumah, masjid, sekolah, hingga gedung instansi pemerintah.</li>
                  <li><strong className="text-primary">Keunggulan:</strong> Anti sobek, memantulkan sinar UV, tidak mudah berjamur, dan tampilan sangat ikonik.</li>
                  <li><strong className="text-primary">Material:</strong> Bersertifikasi standar internasional (AGTex, Serge Ferrari, HEYtex).</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Kolom Foto */}
            <ScrollReveal direction="scale" className="lg:col-span-4 order-1 lg:order-2 w-full">
              <div className="w-full aspect-[3/4] overflow-hidden relative group rounded-2xl">
                <img
                  src="/images/3.jpeg"
                  alt="Hasil Pemasangan Kanopi Atap Membrane CV. Buana Teknikal Pratama"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-xl p-3">
                  <p className="text-xs font-bold text-primary text-center tracking-wide uppercase">Hasil Pemasangan Kami</p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* CTA Ringkas di dalam Halaman */}
          <ScrollReveal direction="up">
            <div className="mt-12 p-8 bg-primary rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-white font-bold text-xl">Ingin Pasang Kanopi Atap Membrane?</h4>
                <p className="text-sm text-white/50">Dapatkan konsultasi dan survei lokasi gratis sekarang.</p>
              </div>
              <a
                href="https://wa.me/6281222281917"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-slide bg-secondary text-primary-dark px-8 py-3 font-semibold whitespace-nowrap text-center"
              >
                Hubungi Admin
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
