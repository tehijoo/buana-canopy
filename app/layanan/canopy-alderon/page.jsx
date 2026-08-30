import React from 'react';
import { ShieldCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Jasa Instalasi Kanopi Alderon – CV. Buana Teknikal Pratama',
  description: 'Layanan jasa pembuatan dan pemasangan kanopi alderon (UPVC) yang kuat, kedap suara, dan tahan lama dari CV. Buana Teknikal Pratama.',
};

export default function CanopyAlderonPage() {
  return (
    <main className="min-h-screen bg-neutral-bg pb-24">

      {/* Banner Header */}
      <section className="bg-primary py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">02 · High Durability</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kanopi Alderon</h1>
          <p className="text-white/60 text-lg font-medium">Jasa Pembuatan &amp; Pemasangan Profesional</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-white p-8 md:p-12 border border-primary/10 rounded-3xl">

          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold text-primary mb-6 leading-tight">
              Kuat, Kedap Suara &amp; <span className="text-secondary">Tahan Lama</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">

            {/* Kolom Teks */}
            <ScrollReveal direction="left" className="lg:col-span-8 order-2 lg:order-1">
              <div className="space-y-5 text-neutral-text/70 leading-relaxed">
                <p className="text-lg font-medium text-primary">
                  Kanopi alderon dikenal dengan kekokohannya, anti karat, serta memiliki isolasi panas dan peredam suara yang efektif dibandingkan jenis atap lainnya.
                </p>

                <div className="h-px bg-primary/10 w-full my-6"></div>

                <p>
                  Layanan instalasi <strong className="text-primary">Kanopi Alderon</strong> dari CV. Buana Teknikal Pratama memberikan solusi atap modern berbahan UPVC (Unplasticized Polyvinyl Chloride). Atap ini dirancang dengan struktur berongga yang mampu menahan panas terik matahari sekaligus meredam suara bising rintik hujan, memberikan kenyamanan maksimal di area bawahnya.
                </p>

                <p>
                  Kami memadukan lembaran atap alderon dengan struktur rangka besi hollow galvanis anti-karat berkualitas. Pemasangan dilakukan oleh tenaga ahli berpengalaman dengan perhitungan kemiringan yang presisi, sehingga aliran air hujan turun dengan lancar dan konstruksi tetap awet dalam jangka panjang.
                </p>

                <ul className="space-y-2 text-sm mt-4 bg-neutral-bg rounded-2xl p-6 border-l-2 border-secondary">
                  <li><strong className="text-primary">Sangat Cocok Untuk:</strong> Carport (garasi mobil), kanopi teras rumah, area cuci jemur, hingga atap gudang dan area komersial.</li>
                  <li><strong className="text-primary">Keunggulan:</strong> Kedap suara saat hujan lebat, insulasi panas baik, kokoh, dan tidak mudah luntur.</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Kolom Visual */}
            <ScrollReveal direction="scale" className="lg:col-span-4 order-1 lg:order-2 w-full">
              <div className="w-full aspect-[3/4] bg-primary rounded-2xl flex flex-col items-center justify-center text-white p-8 text-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-lines" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="bg-secondary text-primary-dark w-16 h-16 rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={32} />
                  </div>
                  <p className="font-bold text-lg leading-snug">Atap UPVC Alderon</p>
                  <p className="text-xs text-white/50 leading-relaxed">Anti karat &middot; Kedap suara &middot; Isolasi panas</p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* CTA Ringkas di dalam Halaman */}
          <ScrollReveal direction="up">
            <div className="mt-12 p-8 bg-primary rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-white font-bold text-xl">Ingin Pasang Kanopi Alderon?</h4>
                <p className="text-sm text-white/50">Dapatkan penawaran harga terbaik dan konsultasi material sekarang.</p>
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
