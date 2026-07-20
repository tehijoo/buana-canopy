import './globals.css'
import { Space_Grotesk, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer' // <-- Import Footer yang baru dibuat

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'CV. Sinar Berkah Group | Jasa Instalasi Kanopi Membrane & Alderon',
  description: 'Spesialis instalasi kanopi atap membrane dan kanopi alderon sejak tahun 2000. Melayani proyek instansi pemerintah, korporasi, hingga hunian pribadi di seluruh Indonesia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      {/* Tambahan flex flex-col min-h-screen agar layout stabil dan footer selalu di bawah */}
      <body className="bg-neutral-bg text-neutral-text flex flex-col min-h-screen font-body">
        
        {/* Header akan selalu muncul di atas di setiap halaman */}
        <Header /> 

        {/* children adalah isi dari page.jsx (halaman yang berubah-ubah) dibungkus main flex-grow */}
        <main className="flex-grow">
          {children} 
        </main>

        {/* Footer akan selalu muncul di bawah di setiap halaman */}
        <Footer />

      </body>
    </html>
  )
}