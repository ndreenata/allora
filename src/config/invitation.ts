/**
 * Konfigurasi Data Undangan Tigang Sasih
 * ========================================
 * Data resmi dan valid berdasarkan undangan asli:
 * - Nama Bayi: Ni Luh Allora Grizelyn Putri Kaylena
 * - Acara: Tigang Sasih
 * - Tanggal: Kamis, 1 Oktober 2026
 * - Waktu: 09.00 WITA
 * - Alamat: Jl. Sri Rama Gg. Arema No. 6, Legian, Kaja, Kabupaten Badung, Bali 80361
 * - Google Maps: https://maps.app.goo.gl/59SSyR2so22Vax7U9?g_st=ic
 * - Musik: Day by Day in Bali
 * - Rekening Sementara: 123456789
 * - Foto: 2 foto asli bayi dari HTML asli (/images/foto1.png & /images/foto2.png)
 */

export interface BabyInfo {
  name: string;
  photoPrimary: string;
  photoSecondary: string;
}

export interface CeremonyInfo {
  title: string;
  subTitle: string;
  dateStr: string;
  timeStr: string;
  targetIso: string;
  meaning: string;
  prayer: string;
}

export interface LocationInfo {
  venue: string;
  address: string;
  mapUrl: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  tag: string;
  aspect: 'portrait' | 'landscape';
}

export interface MusicInfo {
  title: string;
  artist: string;
  searchUrl: string;
}

export interface DigitalGiftAccount {
  bank: string;
  accountNumber: string;
  accountName: string;
}

export interface DigitalGiftInfo {
  title: string;
  message: string;
  account: DigitalGiftAccount;
}

export interface CalendarInfo {
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface InvitationConfig {
  baby: BabyInfo;
  ceremony: CeremonyInfo;
  location: LocationInfo;
  gallery: GalleryItem[];
  music: MusicInfo;
  digitalGift: DigitalGiftInfo;
  calendar: CalendarInfo;
  closing: {
    mantra: string;
    gratitude: string;
  };
}

const config: InvitationConfig = {
  baby: {
    name: 'Ni Luh Allora Grizelyn Putri Kaylena',
    photoPrimary: '/images/foto1.png',
    photoSecondary: '/images/foto2.png',
  },

  ceremony: {
    title: 'Tigang Sasih',
    subTitle: 'Upacara Tiga Bulanan',
    dateStr: 'Kamis, 1 Oktober 2026',
    timeStr: '09.00 WITA',
    targetIso: '2026-10-01T09:00:00+08:00',
    meaning:
      'Tigang Sasih (105 hari dalam kalender Bali) merupakan upacara penyucian dan ungkapan rasa syukur atas karunia kehidupan sang buah hati, memohon keselamatan, kesehatan, serta tuntunan Ida Sang Hyang Widhi Wasa.',
    prayer:
      'Semoga Ananda tumbuh menjadi anak yang sehat, bahagia, penuh kasih, berbakti kepada orang tua, serta selalu mendapatkan anugerah dan tuntunan Ida Sang Hyang Widhi Wasa.',
  },

  location: {
    venue: 'Kediaman Keluarga',
    address: 'Jl. Sri Rama Gg. Arema No. 6, Legian, Kaja, Kabupaten Badung, Bali 80361',
    mapUrl: 'https://maps.app.goo.gl/59SSyR2so22Vax7U9?g_st=ic',
  },

  gallery: [
    {
      id: '01',
      url: '/images/foto2.png',
      title: 'Pesona Tradisi Suci',
      caption: 'Dalam balutan busana adat Bali dengan gelungan keemasan, menyambut upacara Tigang Sasih.',
      tag: 'BUSANA ADAT BALI',
      aspect: 'landscape',
    },
    {
      id: '02',
      url: '/images/foto1.png',
      title: 'Ketenangan & Kasih',
      caption: 'Momen damai sang buah hati yang senantiasa membawa kehangatan dan kebahagiaan bagi keluarga.',
      tag: 'POTRET ANANDA',
      aspect: 'portrait',
    },
  ],

  music: {
    title: 'Day by Day in Bali',
    artist: 'Instrumental Ambient',
    searchUrl: 'https://www.youtube.com/results?search_query=Day+by+Day+in+Bali',
  },

  digitalGift: {
    title: 'Tanda Kasih',
    message:
      'Kehadiran dan doa restu Anda adalah anugerah terindah bagi kami. Bagi keluarga dan kerabat yang ingin menyampaikan tanda kasih untuk Ananda, dapat melalui rekening berikut:',
    account: {
      bank: 'BANK BCA',
      accountNumber: '123456789',
      accountName: 'Komang xxxxx xxxxx xxxxx',
    },
  },

  calendar: {
    title: 'Tigang Sasih • Ni Luh Allora Grizelyn Putri Kaylena',
    description:
      'Upacara Tigang Sasih putri kami, Ni Luh Allora Grizelyn Putri Kaylena. Pukul 09.00 WITA di Jl. Sri Rama Gg. Arema No. 6, Legian, Kaja, Badung, Bali.',
    location: 'Jl. Sri Rama Gg. Arema No. 6, Legian, Kaja, Kabupaten Badung, Bali 80361',
    startDate: '2026-10-01T09:00:00+08:00',
    endDate: '2026-10-01T13:00:00+08:00',
  },

  closing: {
    mantra: 'Om Santih, Santih, Santih Om',
    gratitude: 'Terima kasih atas doa, kasih, dan kehadiran Anda.',
  },
};

export default config;
