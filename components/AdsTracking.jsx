'use client'

import { useEffect } from 'react'
import { trackConversion } from '@/lib/ads'

// Mencatat konversi Google Ads saat pengunjung mengklik tautan WhatsApp (wa.me)
// atau telepon (tel:) di halaman mana pun, tanpa mengubah tiap tombol satu per satu.
// Tombol "kirim ke WhatsApp" di halaman Kontak (window.open) dilacak langsung di halamannya.
export default function AdsTracking() {
  useEffect(() => {
    const onClick = (event) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest('a[href]')
      if (!link) return

      const href = link.getAttribute('href') || ''
      if (href.startsWith('https://wa.me/')) {
        trackConversion('whatsapp')
      } else if (href.startsWith('tel:')) {
        trackConversion('telepon')
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
