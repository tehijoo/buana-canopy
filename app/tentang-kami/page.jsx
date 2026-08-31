import React from 'react';
import { ShieldCheck, Award, Users2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Tentang Kami – CV. Buana Teknikal Pratama',
  description: 'CV. Buana Teknikal Pratama adalah perusahaan penyedia barang dan jasa instalasi, spesialis kanopi atap membrane, yang telah berdiri sejak tahun 2000.',
};

export default function TentangKamiPage() {
  return (
    <main className="bg-neutral-bg">

      {/* Banner Section */}
      <section className="bg-primary text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-lines" />
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Tentang Kami</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">CV. Buana Teknikal Pratama</h1>
          <p className="text-white/60 text-lg font-medium">
            Ahlinya Instalasi Kanopi Membrane &amp; Alderon Sejak Tahun 2000
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Main Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-24">
          <ScrollReveal direction="left" className="order-2 md:order-1">
            <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">Siapa Kami?</p>
            <h2 className="text-3xl font-bold text-primary mb-6">Penyedia Jasa Instalasi Kanopi Terpercaya</h2>

            <div className="space-y-4 text-neutral-text/70 leading-relaxed">
              <p>
                <strong className="text-primary">CV. Buana Teknikal Pratama</strong> adalah perusahaan penyedia barang dan jasa instalasi yang telah berdiri sejak tahun 2000. Kami memiliki legalitas perusahaan yang lengkap serta tenaga ahli berpengalaman di bidangnya.
              </p>
              <p>
                Kami memiliki dua produk unggulan: <strong className="text-primary">Kanopi Atap Membrane</strong>, menggunakan material berkualitas tinggi dari brand terpercaya seperti AGTex, Serge Ferrari, dan HEYtex; serta <strong className="text-primary">Kanopi Alderon</strong> berbahan UPVC yang kokoh, anti karat, dan kedap suara, sehingga hasil pekerjaan presisi, estetis, dan tahan lama.
              </p>
              <p>
                Kami telah dipercaya mengerjakan proyek kanopi atap membrane untuk berbagai instansi pemerintah, korporasi, fasilitas pendidikan, tempat ibadah, hingga hunian pribadi di berbagai wilayah Indonesia.
              </p>
            </div>

            {/* Badge Brand Material */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['AGTex', 'Serge Ferrari', 'HEYtex'].map((brand) => (
                <span key={brand} className="border border-primary/15 text-primary text-xs font-semibold px-4 py-2 tracking-wide rounded-full">
                  {brand}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Foto Dokumentasi Nyata */}
          <ScrollReveal direction="scale" className="order-1 md:order-2">
            <div className="relative overflow-hidden bg-neutral-bg aspect-video md:aspect-square rounded-3xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/15.jpeg')" }}
              ></div>
              <div className="absolute inset-0 border-4 border-secondary/0 hover:border-secondary/60 transition-colors duration-500" />
            </div>
          </ScrollReveal>
        </section>

        {/* Yang Kami Punya Section */}
        <section className="mb-24">
          <ScrollReveal direction="up">
            <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-center">Nilai Kami</p>
            <h3 className="text-3xl font-bold text-center text-primary mb-14">Yang Kami Punya</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Integrity", desc: "Kami mempunyai integritas yang tinggi dalam bekerja.", icon: ShieldCheck },
              { title: "Excellence", desc: "Kami mempunyai tenaga kerja yang mempunyai keterampilan dalam bidangnya.", icon: Award },
              { title: "Collaboration", desc: "Berkolaborasi untuk mendapatkan hasil yang maksimal.", icon: Users2 }
            ].map((item, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.1} key={idx}>
                <div className="bg-white border border-primary/10 rounded-2xl p-8 text-center h-full">
                  <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary">
                    <item.icon size={26} />
                  </div>
                  <h4 className="font-bold text-primary mb-3 text-lg">{item.title}</h4>
                  <p className="text-neutral-text/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Visi & Misi Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ScrollReveal direction="left">
            <div className="bg-primary p-10 text-white flex flex-col h-full relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-grid-lines" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-secondary text-primary-dark w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-bold text-lg">
                    01
                  </div>
                  <h3 className="text-2xl font-bold">Visi</h3>
                </div>
                <p className="text-white/60 leading-relaxed">
                  Menjadi perusahaan pengadaan barang dan jasa yang dapat dipercaya dan diandalkan dalam menjual produk dan mengerjakan pekerjaan secara bertanggung jawab dan amanah.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white border border-primary/10 rounded-3xl p-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="border border-primary/15 text-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-display font-bold text-lg">
                  02
                </div>
                <h3 className="text-2xl font-bold text-primary">Misi</h3>
              </div>
              <ol className="space-y-4 text-neutral-text/70 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold font-display shrink-0">01</span>
                  Memberikan produk yang bermutu sesuai dengan standarisasi / SNI.
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold font-display shrink-0">02</span>
                  Memberikan kepuasan kepada pelanggan dalam penjualan produk dan jasa kami.
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold font-display shrink-0">03</span>
                  Bekerja dengan penuh rasa tanggung jawab, amanah, profesional, serta menjalankan standarisasi K3 dengan baik.
                </li>
              </ol>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
}
