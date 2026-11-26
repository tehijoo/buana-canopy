// Konfigurasi pelacakan konversi Google Ads (akun 763-261-6745, Buana Kanopi).
// ID tag dan label konversi diambil dari Google Ads > Sasaran > Konversi.

export const ADS_ID = 'AW-18595864633'

export const ADS_CONVERSIONS = {
  // Konversi "Klik WhatsApp"
  whatsapp: `${ADS_ID}/aypVCIWLkcAdELnAmaNF`,
  // Konversi "Klik Telepon"
  telepon: `${ADS_ID}/-4ECCIiLkcAdELnAmaNF`,
}

// Kirim peristiwa konversi ke Google Ads. Aman dipanggil kapan saja:
// tidak melakukan apa-apa jika tag belum termuat (mis. diblokir ad blocker).
export function trackConversion(name) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  const sendTo = ADS_CONVERSIONS[name]
  if (!sendTo) return
  window.gtag('event', 'conversion', { send_to: sendTo })
}
