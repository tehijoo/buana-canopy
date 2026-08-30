import React from 'react';
import Link from 'next/link';
import { articles } from '../data'; // <-- Import dari data.js

// Tambahkan "async" di depan function
export default async function DetailArtikelPage({ params }) {

  // WAJIB di Next.js terbaru: Tunggu (await) params sebelum membacanya
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Cari artikel berdasarkan slug
  const article = articles.find((a) => a.slug === slug);

  // Jika artikel tidak ditemukan
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-bg pb-24 pt-32">
        <h1 className="text-3xl font-bold text-primary mb-4">Artikel Tidak Ditemukan</h1>
        <p className="text-neutral-text/60 mb-8">Maaf, artikel yang Anda cari tidak ada atau telah dihapus.</p>
        <Link href="/artikel" className="btn-slide bg-primary text-white px-6 py-3 font-semibold">
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-bg pb-24">

      {/* Container Utama Artikel */}
      <section className="container mx-auto max-w-4xl px-4 md:px-8 pt-12">

        {/* Breadcrumb Navigasi */}
        <div className="text-sm text-neutral-text/40 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/artikel" className="hover:text-secondary transition-colors">Artikel</Link>
          <span>/</span>
          <span className="text-primary font-medium truncate">{article.title}</span>
        </div>

        {/* Header Artikel (Judul & Info) */}
        <div className="mb-8 text-center md:text-left">
          <span className="border border-secondary text-secondary text-xs font-semibold px-3 py-1 mb-4 inline-block tracking-widest uppercase rounded-full">
            Info Kanopi
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-neutral-text/50">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span>Admin Buana Kanopi</span>
            </div>
          </div>
        </div>

        {/* Gambar Utama Artikel */}
        <div
          className="w-full h-64 md:h-[450px] bg-neutral-bg mb-10 bg-cover bg-center rounded-3xl"
          style={{ backgroundImage: `url('${article.image}')` }}
        ></div>

        {/* Isi / Konten Artikel */}
        <div className="bg-white p-6 md:p-10 border border-primary/10 rounded-3xl text-neutral-text/70 leading-relaxed prose prose-lg max-w-none">
          <p className="text-lg font-medium text-primary mb-6">
            {article.excerpt}
          </p>
          <p className="mb-4">
            Kanopi membrane adalah sistem peneduh atau struktur atap yang menggunakan material kain membran khusus dengan tingkat elastisitas, ketahanan, dan estetika yang sangat baik. Berbeda dari kanopi biasa yang memakai polycarbonate atau spandek, kanopi membrane menggunakan bahan sejenis kain sintetis premium seperti PVDF, PTFE, atau ETFE yang kuat dan mampu membentuk lengkungan artistik.
          </p>
          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Keunggulan Kanopi Membrane</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Desain Modern dan Mewah:</strong> Struktur membrane memungkinkan bentuk yang lebih beragam seperti melengkung, melipat, atau wave.</li>
            <li><strong>Material Kuat dan Tahan Lama:</strong> Memiliki kekuatan tarik sangat tinggi, sehingga mampu menahan terpaan angin dan hujan deras. Tahan hingga 10-20 tahun.</li>
            <li><strong>Perawatan Mudah:</strong> Tidak memerlukan perawatan rumit. Cukup membersihkan permukaan secara berkala.</li>
          </ul>
          <p>
            Permintaan instalasi kanopi atap membrane terus meningkat. CV. Buana Teknikal Pratama hadir sebagai penyedia jasa profesional yang telah berpengalaman sejak tahun 2000, melayani pemasangan kanopi membrane untuk instansi pemerintah, korporasi, hingga hunian pribadi di berbagai wilayah Indonesia dengan standar kualitas terbaik.
          </p>
          <p className="mt-8 p-6 bg-neutral-bg border-l-2 border-secondary rounded-r-2xl italic text-primary font-medium">
            "Jika Anda membutuhkan kanopi atap membrane yang kuat, elegan, dan dikerjakan oleh tenaga ahli berpengalaman, CV. Buana Teknikal Pratama adalah solusi terbaik untuk kebutuhan Anda."
          </p>
        </div>

      </section>
    </main>
  );
}
