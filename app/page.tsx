"use client";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import Link from "next/link";
import React from 'react';
import { motion } from "framer-motion";
import { clients } from "@/app/klien-proyek/data";

const tickerItems = [
  "Kanopi Atap Membrane",
  "Kanopi Alderon",
  "Berpengalaman Sejak 2000",
  "Material Bersertifikasi Internasional",
  "Jabodetabek · Medan · Maluku",
];

export default function Home() {
  const featuredClients = clients.slice(0, 8);

  return (
    <main className="w-full bg-neutral-bg overflow-x-hidden">

      {/* --- HERO --- */}
      <section className="relative w-full bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-16 md:pt-28 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Kolom Teks */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-secondary" />
                <span className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase">CV. Sinar Berkah Group · Sejak 2000</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.02] mb-6"
            >
              Kanopi yang<br />
              <span className="text-brand-gradient">dibangun untuk</span><br />
              bertahan.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/60 text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            >
              Instalasi kanopi atap membrane &amp; alderon untuk instansi pemerintah, korporasi, hingga hunian pribadi — dikerjakan tenaga ahli dengan material bersertifikasi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <a
                href="https://wa.me/6281276443339"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-slide bg-secondary text-primary px-7 py-3.5 font-semibold text-sm tracking-wide inline-flex items-center gap-2"
              >
                Konsultasi Gratis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <Link
                href="/layanan"
                className="border border-white/25 hover:border-secondary text-white px-7 py-3.5 font-semibold text-sm tracking-wide transition-colors duration-300"
              >
                Lihat Layanan
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 max-w-md border-t border-white/10 pt-8"
            >
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-secondary">
                  <Counter to={26} suffix="+" />
                </p>
                <p className="text-white/50 text-xs mt-1 leading-snug">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-secondary">
                  <Counter to={13} suffix="+" />
                </p>
                <p className="text-white/50 text-xs mt-1 leading-snug">Proyek Terdokumentasi</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl font-bold text-secondary">
                  <Counter to={2} />
                </p>
                <p className="text-white/50 text-xs mt-1 leading-snug">Layanan Utama</p>
              </div>
            </motion.div>
          </div>

          {/* Kolom Visual: Kolase Foto Asimetris */}
          <div className="lg:col-span-5 relative h-[420px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0 w-[78%] h-[80%] bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: "url('/images/15.jpeg')", clipPath: "polygon(0 0, 100% 6%, 100% 100%, 0% 94%)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0 w-[50%] h-[45%] bg-cover bg-center border-4 border-primary shadow-2xl"
              style={{ backgroundImage: "url('/images/1.jpeg')" }}
            />
            <div className="absolute bottom-4 left-4 bg-secondary text-primary px-4 py-2.5 text-xs font-bold tracking-wide shadow-xl">
              Hasil Kerja Nyata
            </div>
          </div>
        </div>

        {/* Marquee ticker */}
        <div className="relative z-10 border-t border-white/10 py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee w-max">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="flex items-center text-white/40 text-sm font-medium tracking-wide">
                {item}
                <span className="mx-6 text-secondary">&#9670;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- AHLINYA KANOPI --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <ScrollReveal direction="up">
            <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Tentang Kami</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
              Ahlinya kanopi atap membrane &amp; alderon di Indonesia
            </h2>
            <p className="text-neutral-text/70 leading-relaxed mb-8">
              CV. Sinar Berkah Group adalah perusahaan penyedia barang dan jasa instalasi yang telah berdiri sejak tahun 2000, dengan legalitas perusahaan lengkap dan tenaga ahli berpengalaman di bidang instalasi kanopi.
            </p>
            <Link
              href="/tentang-kami"
              className="btn-slide border border-primary/15 hover:border-secondary text-primary px-6 py-3 font-semibold text-sm inline-flex items-center gap-2 transition-colors duration-300"
            >
              Selengkapnya Tentang Kami
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7">
          <ScrollReveal direction="scale">
            <div className="grid grid-cols-2 gap-4">
              {[
                "Material Standar SNI & Internasional",
                "Berpengalaman Sejak Tahun 2000",
                "Tenaga Ahli & Berkompeten",
                "Melayani Instansi Pemerintah & Swasta",
              ].map((text, i) => (
                <div key={i} className="border border-primary/10 hover:border-secondary p-6 transition-colors duration-300 group">
                  <span className="text-secondary font-display font-bold text-xl">0{i + 1}</span>
                  <p className="text-primary font-medium text-sm mt-3 leading-snug">{text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- KEUNGGULAN --- */}
      <section className="bg-primary text-white py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal direction="up">
            <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-center">Kenapa Kami</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Empat Alasan Memilih Kami</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { title: "Terbaik", desc: "Pelayanan terbaik sesuai standarisasi / SNI." },
              { title: "Terjangkau", desc: "Harga kompetitif sebanding kualitas hasil." },
              { title: "Terpercaya", desc: "Tim ahli berpengalaman sejak tahun 2000." },
              { title: "Survei Gratis", desc: "Pengecekan lokasi dan konsultasi gratis." },
            ].map((item, i) => (
              <ScrollReveal direction="up" delay={i * 0.08} key={i}>
                <div className="bg-primary p-8 h-full">
                  <span className="text-secondary font-display font-bold text-2xl">0{i + 1}</span>
                  <h4 className="font-semibold text-lg mt-4 mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- LAYANAN (2 Kartu) --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3">Layanan Kami</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Kanopi Membrane &amp; Alderon</h2>
            </div>
            <Link href="/layanan" className="link-underline text-primary font-semibold text-sm flex items-center gap-2 w-fit">
              Semua Layanan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              tag: "01 · Premium Service",
              title: "Kanopi Atap Membrane",
              desc: "Material bersertifikasi standar internasional (AGTex, Serge Ferrari, HEYtex), daya tahan optimal terhadap cuaca, serta fleksibilitas bentuk yang artistik.",
              points: ["Cocok untuk parkir, taman, masjid, sekolah, gedung pemerintahan", "Tahan sinar UV, anti sobek, tidak mudah berjamur"],
              image: "/images/25.jpeg",
              href: "/layanan/canopy-membran",
            },
            {
              tag: "02 · High Durability",
              title: "Kanopi Alderon",
              desc: "Atap UPVC yang kokoh, anti karat, kedap suara saat hujan, serta memiliki isolasi panas terbaik untuk kenyamanan maksimal.",
              points: ["Cocok untuk carport, teras, area cuci jemur, gudang", "Kokoh, kedap suara, dan tidak mudah luntur"],
              image: "/images/6.jpeg",
              href: "/layanan/canopy-alderon",
            },
          ].map((service, index) => (
            <ScrollReveal direction="up" delay={index * 0.12} key={index}>
              <Link href={service.href} className="group block border border-primary/10 hover:border-secondary transition-colors duration-300 h-full">
                <div className="h-60 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                </div>
                <div className="p-8">
                  <p className="text-secondary font-semibold text-[11px] tracking-widest uppercase mb-3">{service.tag}</p>
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-neutral-text/70 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <ul className="space-y-2 mb-6 text-sm text-neutral-text/80">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2"><span className="text-secondary font-bold">＋</span> {point}</li>
                    ))}
                  </ul>
                  <span className="text-primary group-hover:text-secondary font-semibold text-sm inline-flex items-center gap-2 transition-colors">
                    Lihat Detail Layanan
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- KENALI 4 HAL --- */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-lines" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <p className="text-white/50 text-xs tracking-[0.25em] uppercase mb-3">Panduan Singkat</p>
                <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 text-secondary">4 Hal</h2>
                <p className="text-white/70 max-w-xs leading-snug">yang wajib diperhatikan sebelum memilih jasa pemasangan kanopi</p>
              </div>
              <div className="p-10 md:p-14 border-t md:border-t-0 md:border-l border-white/10">
                <ul className="space-y-6">
                  {[
                    "Periksa ketebalan besi rangka apakah sudah sesuai standar keamanan",
                    "Cek bahan yang dipakai, apakah membrane bersertifikasi internasional (AGTex, Serge Ferrari, HEYtex) atau UPVC alderon anti karat",
                    "Konsultasikan desain kanopi agar hasil sesuai keinginan dan kebutuhan Anda",
                    "Pastikan lokasi pemasangan sudah disurvei dan diukur dengan tepat sebelum pengerjaan",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-secondary font-display font-bold shrink-0">0{i + 1}</span>
                      <p className="text-white/70 text-sm leading-relaxed">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- KEUNTUNGAN & AREA LAYANAN --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ScrollReveal direction="up" className="lg:col-span-2">
          <div className="border border-primary/10 h-full p-8 md:p-10">
            <h3 className="text-primary font-bold text-xl mb-2">Keuntungan Memesan Kanopi di Sinar Berkah Group</h3>
            <p className="text-neutral-text/60 text-sm mb-8">Harga terbaik tanpa mengorbankan kualitas material dan pengerjaan.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Sesuai budget yang Anda miliki",
                "Kualitas material tetap yang terbaik",
                "Konsultasi desain gratis",
                "Survei lokasi gratis sebelum pengerjaan",
                "Kepuasan Anda jadi prioritas kami",
                "Menangani proyek pemerintah maupun swasta",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-secondary mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></span>
                  <p className="text-sm text-neutral-text/80">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-primary text-white h-full p-8 md:p-10 flex flex-col">
            <h3 className="font-bold text-xl mb-3">Area Layanan</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Telah menyelesaikan proyek di Jakarta, Bogor, Depok, Tangerang, Bekasi (Jabodetabek), hingga Medan dan Maluku — melayani instansi pemerintah, korporasi, sekolah, tempat ibadah, hingga hunian pribadi.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* --- FITUR BAWAH --- */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary/10 border border-primary/10">
          {[
            { title: "Tim Profesional", desc: "Tenaga kerja handal dan berpengalaman di bidang instalasi kanopi.", icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.027-.396.05-.6.075m-.6-0.075a48.667 48.667 0 00-3.282-.38m-10.966 0c1.053-.146 2.12-.257 3.204-.33M6.75 14.15a48.667 48.667 0 01-3.282.38m-1.218-0.075c-.204-.025-.406-.048-.6-.075m0 0a2.18 2.18 0 01-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0010.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" },
            { title: "Tepat Waktu", desc: "Pengerjaan tepat dan singkat waktu, jangan diragukan lagi.", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Hasil Maksimal", desc: "Hasil pengerjaan maksimal untuk Anda, rapi, dan presisi.", icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          ].map((item, i) => (
            <ScrollReveal direction="up" delay={i * 0.08} key={i}>
              <div className="bg-neutral-bg p-8 h-full flex items-start gap-4">
                <div className="w-10 h-10 text-secondary shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-neutral-text/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* --- SPESIALIS & GALERI --- */}
      <section className="py-4 px-4 md:px-8 max-w-7xl mx-auto pb-24 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <ScrollReveal direction="up">
            <div className="bg-primary text-white p-10 h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-lines" />
              <div className="relative z-10">
                <p className="text-white/50 text-xs tracking-[0.25em] uppercase mb-2">Spesialis</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-secondary">Kanopi</h2>
                <p className="text-sm leading-relaxed text-white/60">
                  Perlindungan maksimal sekaligus mempercantik tampilan bangunan Anda — kanopi membrane dan kanopi alderon berkualitas tinggi dengan material bersertifikasi.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col">
          <ScrollReveal direction="left">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Galeri Portofolio</h2>
              <Link href="/galeri" className="link-underline text-primary font-semibold text-sm flex items-center gap-2">
                Lihat Semua
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['images/22.jpeg', 'images/40.jpeg', 'images/44.jpeg', 'images/28.jpeg', 'images/38.jpeg', 'images/18.jpeg'].map((filename, index) => (
                <div key={index} className="w-full aspect-[4/3] bg-neutral-bg bg-cover bg-center cursor-pointer overflow-hidden group relative">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('/${filename}')` }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- KLIEN & PROYEK --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3">Dipercaya Oleh</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Klien &amp; Proyek Kami</h2>
            </div>
            <Link href="/klien-proyek" className="link-underline text-primary font-semibold text-sm flex items-center gap-2 w-fit">
              Lihat Semua Proyek
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10 border border-primary/10">
            {featuredClients.map((client, index) => (
              <div key={index} className="bg-white p-6 flex flex-col items-center text-center gap-3 group hover:bg-primary transition-colors duration-300">
                <div className="w-11 h-11 flex items-center justify-center text-secondary">
                  <client.Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-primary group-hover:text-white text-sm leading-snug transition-colors">{client.name}</p>
                  <p className="text-[11px] text-neutral-text/40 group-hover:text-white/50 mt-1 transition-colors">{client.category}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* --- CTA --- */}
      <section className="w-full bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-white text-center md:text-left w-full md:w-3/5">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Siap tingkatkan properti Anda?</h3>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Hubungi CV. Sinar Berkah Group hari ini untuk konsultasi gratis dan penawaran terbaik.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <span className="text-secondary font-display font-bold text-2xl tracking-wide">0812 7644 3339</span>
            <Link
              href="/kontak"
              className="btn-slide bg-secondary text-primary px-7 py-3.5 font-semibold text-sm w-full sm:w-auto text-center"
            >
              Chat Admin
            </Link>
          </div>
        </div>
      </section>

      {/* --- BLOG & ARTIKEL --- */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3">Blog &amp; Artikel</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Recent Post</h2>
            </div>
            <Link href="/artikel" className="link-underline text-primary font-semibold text-sm flex items-center gap-2 w-fit">
              View More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Pasang Kanopi Membran di Cibubur", date: "22 November 2026", image: "/images/2.jpeg", slug: "pasang-kanopi-membran-cibubur" },
              { title: "Jasa Pembuatan Kanopi Profesional", date: "22 November 2026", image: "/images/16.jpeg", slug: "jasa-pembuatan-kanopi-profesional" },
              { title: "Kanopi Membran untuk Masjid & Sekolah", date: "22 November 2026", image: "/images/42.jpeg", slug: "kanopi-membran-masjid-sekolah" },
            ].map((article, index) => (
              <Link key={index} href={`/artikel/${article.slug}`} className="group block border border-primary/10 hover:border-secondary transition-colors duration-300">
                <div className="relative w-full h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs text-neutral-text/40 mb-2 font-medium">{article.date}</p>
                  <h3 className="font-bold text-primary text-base leading-snug mb-4 group-hover:text-secondary transition-colors duration-300">
                    {article.title}
                  </h3>
                  <span className="text-primary group-hover:text-secondary font-semibold text-sm inline-flex items-center gap-2 transition-colors">
                    Read More
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}
