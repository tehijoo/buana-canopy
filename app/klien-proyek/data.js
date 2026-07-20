import { Building2, Landmark, Hospital, School, ShieldCheck, Home, Warehouse } from 'lucide-react';

// Daftar klien & proyek nyata berdasarkan Company Profile CV. Sinar Berkah Group
// dan dokumentasi foto pekerjaan yang tersedia.
export const clients = [
  { name: 'PT. Waskita', category: 'Korporasi / BUMN Konstruksi', Icon: Building2 },
  { name: 'Kementerian Keuangan', location: 'Lapangan Banteng, Jakarta', category: 'Instansi Pemerintah', Icon: Landmark },
  { name: 'RSUD Jatipadang', category: 'Fasilitas Kesehatan', Icon: Hospital },
  { name: 'Puskesmas Menteng', category: 'Fasilitas Kesehatan', Icon: Hospital },
  { name: 'Polda Maluku', category: 'Instansi Kepolisian', Icon: ShieldCheck },
  { name: 'Perumahan Pantai Mutiara', category: 'Hunian Pribadi', Icon: Home, image: '/images/30.jpeg' },
  { name: 'SD IT At-Taubah', location: 'Pulomas, Jakarta', category: 'Fasilitas Pendidikan', Icon: School },
  { name: 'Gudang PT Class Mild', category: 'Kawasan Industri', Icon: Warehouse },
  { name: 'Subdenma Mabes TNI', category: 'Instansi TNI', Icon: ShieldCheck },
  { name: 'Kantor Bea Cukai', location: 'Halim, Bogor', category: 'Instansi Pemerintah', Icon: Landmark },
  { name: 'Gerbang Tol Pamulang', location: 'Tol Serpong–Cinere', category: 'Infrastruktur Kementerian PUPR', Icon: Landmark, image: '/images/33.jpeg' },
  { name: 'Masjid Al-Istiqomah', location: 'Kompleks Timah, Pondok Labu', category: 'Tempat Ibadah', Icon: Building2, image: '/images/28.jpeg' },
  { name: 'Rumah Dandenma AD', location: 'Cibubur, Jakarta', category: 'Instansi TNI AD', Icon: ShieldCheck, image: '/images/2.jpeg' },
];
