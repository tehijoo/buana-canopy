"use client";

import React, { useState } from 'react';

export default function GaleriPage() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const allImages = Array.from({ length: 22 }, (_, i) => `/images/${i + 1}.jpeg`);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = allImages.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(allImages.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  return (
    <main className="min-h-screen bg-neutral-bg pb-24">

      {/* Banner Header */}
      <section className="bg-primary py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Portofolio</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Foto</h1>
          <p className="text-white/60 text-lg font-medium">Dokumentasi Hasil Pengerjaan CV. Buana Teknikal Pratama</p>
        </div>
      </section>

      {/* Grid Gambar Galeri yang Dinamis */}
      <section className="container mx-auto max-w-7xl px-4 md:px-8 mt-16 animate-in fade-in duration-500" key={currentPage}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

          {currentImages.map((imageUrl, index) => (
            <div
              key={index}
              className="group relative w-full aspect-[4/3] bg-white overflow-hidden rounded-2xl cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${imageUrl}')` }}
              ></div>

              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100"
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Pagination */}
      <section className="container mx-auto mt-16 flex justify-center items-center gap-2">

        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition ${
            currentPage === 1
              ? "border-primary/10 text-primary/20 cursor-not-allowed"
              : "border-primary/15 text-primary hover:bg-primary hover:text-white hover:border-primary"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition border ${
                currentPage === pageNum
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-neutral-text/60 border-primary/15 hover:border-primary hover:text-primary"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition ${
            currentPage === totalPages
              ? "border-primary/10 text-primary/20 cursor-not-allowed"
              : "border-primary/15 text-primary hover:bg-primary hover:text-white hover:border-primary"
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </section>

    </main>
  );
}
