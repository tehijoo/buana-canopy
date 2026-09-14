import type { MetadataRoute } from 'next'
import { articles } from './artikel/data'

const BASE_URL = 'https://www.ahlicanopy.com'

const BULAN: Record<string, number> = {
  Januari: 0, Februari: 1, Maret: 2, April: 3, Mei: 4, Juni: 5,
  Juli: 6, Agustus: 7, September: 8, Oktober: 9, November: 10, Desember: 11,
}

function parseTanggalIndonesia(tanggal: string): Date | undefined {
  const [day, month, year] = tanggal.split(' ')
  if (!day || !(month in BULAN) || !year) return undefined
  return new Date(Number(year), BULAN[month], Number(day))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/tentang-kami`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/layanan`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/layanan/canopy-membran`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/layanan/canopy-alderon`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/galeri`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/artikel`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/kontak`, priority: 0.6, changeFrequency: 'yearly' },
  ]

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/artikel/${article.slug}`,
    lastModified: parseTanggalIndonesia(article.date),
    priority: 0.6,
    changeFrequency: 'yearly',
  }))

  return [...staticRoutes, ...articleRoutes]
}
