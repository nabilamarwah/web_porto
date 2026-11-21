export interface HeroSlide {
  id: string;
  imageUrl: string;
  alt: string;
  badgeText: string;
  caption: string;
  bgClass: string;
}

export interface HobbyItem {
  id: string;
  emoji: string;
  title: string;
  description: string;
  highlight: string;
  rotationClass: string;
  iconBgClass: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  statusLabel: string;
  organization: string;
  role: string;
  summary: string;
  footerLeft: string;
  footerRight: string;
  variant: 'yellow' | 'white-yellow' | 'white-blue';
  highlights: string[];
  location: string;
}

export interface EducationItem {
  number: string;
  school: string;
  subtitle: string;
  active?: boolean;
}

export interface SkillTile {
  number: string;
  title: string;
  description: string;
  example: string;
}

export interface ContactMethod {
  id: 'whatsapp' | 'email' | 'instagram';
  label: string;
  value: string;
  copyValue: string;
  href: string;
  external: boolean;
}

export const HERO_PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBW1xGPNtN-7HIsyY6bPQwGdVihI3upGagY5Cmgy1gGwFv8NdwVXEjgurRTyx5viDFwTngpyTQHm9y-uSLvFxT54l7B313QKc-fAZ0H3Sec2qc_fDCd52he7nrdlFY-cU2qQgRTmdnWjY_b1Ujhpdm8LOEmZSH7kWzG3eRun4w4XtXQ_4WEu0hLilrq2XYnqY2ODGw49l_i0pWNXjKmhE6uoFhZQwDRgGrPyw71r04';

export const INTRO_PORTRAIT_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDl6uakCIm1d9-1WudgPNK9F42yNqUH_NZ4krRy0Hgcp3jtQqP67Rn4lIzcizL2ma4DMfswaG1GbD45I7h02uRXI1wXmRJHthINWoeXF-25M8LVJ5QyIcfC6-GSgf2uo40dRGUvA3sd4jpr8ssW1X13S_J0Kp5LEGB64QQi3NxJDGY8ald90ODVXFX5x9gfxYEHeyayiFd2ew5dORfon5cV-4KRakBLXtXr4YmPqGC_rIc6F99X7aJi';

export const ROLES = [
  'SEKRETARIS OSIS',
  'PELAJAR AKTIF',
  'KREATIF DESAIN',
] as const;

export const CORE_COMPETENCIES = [
  'Manajemen Waktu',
  'Komunikasi Efektif',
  'Kerja Sama Tim',
] as const;

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'osis-profile',
    imageUrl: HERO_PORTRAIT_URL,
    alt: 'Nabila Marwah Az Zahra mengenakan jas almamater SMA Negeri 1 Jayapura dengan senyum ramah',
    badgeText: 'SMA Negeri 1 Jayapura',
    caption: 'Sekretaris I OSIS Periode 2025—2026',
    bgClass: 'bg-electric-blue',
  },
  {
    id: 'formal-portrait',
    imageUrl: INTRO_PORTRAIT_URL,
    alt: 'Potret studio Nabila Marwah Az Zahra dalam balutan blazer sekolah rapi',
    badgeText: 'Pelajar Aktif · Papua',
    caption: 'Komunikatif & Aktif Berorganisasi',
    bgClass: 'bg-neutral-200',
  },
  {
    id: 'creative-focus',
    imageUrl: HERO_PORTRAIT_URL,
    alt: 'Nabila Marwah Az Zahra — Dokumentasi & Desain Publikasi Sekolah',
    badgeText: 'Publikasi & Desain',
    caption: 'Anggota PDD OSIS 2024—2025',
    bgClass: 'bg-vibrant-yellow',
  },
];

export const MARQUEE_ITEMS = [
  { text: 'SEKRETARIS OSIS', script: false },
  { text: 'membaca buku', script: true },
  { text: 'PELAJAR AKTIF', script: false },
  { text: 'mendesain', script: true },
  { text: 'KEGIATAN SOSIAL & PENDIDIKAN', script: false },
  { text: 'SMA NEGERI 1 JAYAPURA', script: false },
] as const;

export const HOBBIES: HobbyItem[] = [
  {
    id: 'reading',
    emoji: '📚',
    title: 'Membaca Buku',
    description:
      'Memperluas wawasan literasi, psikologi komunikasi, serta buku pengembangan karakter diri.',
    highlight: 'Favorit: Pengembangan Diri & Komunikasi Sosial',
    rotationClass: 'sm:-rotate-3',
    iconBgClass: 'bg-vibrant-yellow text-ink',
  },
  {
    id: 'design',
    emoji: '🎨',
    title: 'Mendesain',
    description:
      'Kreativitas visual digital untuk publikasi materi edukasi, pamflet acara, dan media OSIS.',
    highlight: 'Fokus: Poster Acara, Feed Instagram & Presentasi',
    rotationClass: 'sm:rotate-3',
    iconBgClass: 'bg-electric-blue text-white',
  },
  {
    id: 'film',
    emoji: '🎬',
    title: 'Menonton Film',
    description:
      'Mengamati storytelling, perspektif sosial kultural baru, dan ekspresi sinematik inspiratif.',
    highlight: 'Tema: Edukasi, Drama Inspiratif & Dokumenter',
    rotationClass: 'sm:-rotate-2',
    iconBgClass: 'bg-vibrant-yellow text-ink',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'osis-sekretaris',
    period: '2025 — 2026',
    statusLabel: 'Aktif',
    organization: 'OSIS SMA Negeri 1 Jayapura',
    role: 'Sekretaris I',
    summary:
      'Mengelola tertib administrasi, surat-menyurat resmi, notulensi rapat, serta koordinasi dokumentasi kegiatan OSIS bersama jajaran pengurus utama.',
    footerLeft: 'SMA N 1 JAYAPURA',
    footerRight: '★★★★★',
    variant: 'yellow',
    location: 'Jayapura, Papua',
    highlights: [
      'Menyusun dan mengarsipkan surat masuk/keluar serta proposal program kerja OSIS.',
      'Mencatat notulensi rapat pengurus inti dan mendistribusikan tindak lanjut divisi.',
      'Berkoordinasi aktif dengan pembina OSIS dan pimpinan sekolah terkait perizinan acara.',
    ],
  },
  {
    id: 'panitia-natal',
    period: '2025 — 2026',
    statusLabel: 'Kepanitiaan',
    organization: 'Panitia Kegiatan Natal Sekolah',
    role: 'Sekretaris Panitia',
    summary:
      'Menangani koordinasi menyeluruh kepanitiaan, penyusunan proposal perizinan, dan pengarsipan agenda peringatan hari besar sekolah.',
    footerLeft: 'SMA N 1 JAYAPURA',
    footerRight: 'KEPANITIAAN',
    variant: 'white-yellow',
    location: 'SMA Negeri 1 Jayapura',
    highlights: [
      'Menyiapkan dokumen perizinan resmi, jadwal rapat panitia, dan daftar kebutuhan lintas seksi.',
      'Menjaga komunikasi lintas sie acara, perlengkapan, dan dokumentasi agar berjalan tepat waktu.',
      'Menyusun laporan pertanggungjawaban pasca kegiatan.',
    ],
  },
  {
    id: 'osis-pdd',
    period: '2024 — 2025',
    statusLabel: 'OSIS',
    organization: 'OSIS SMA Negeri 1 Jayapura',
    role: 'Anggota PDD',
    summary:
      'Mendukung keberhasilan eksekusi seluruh program kerja OSIS sebagai anggota tim Publikasi, Dekorasi, dan Dokumentasi visual.',
    footerLeft: 'SMA N 1 JAYAPURA',
    footerRight: 'DOKUMENTASI',
    variant: 'white-blue',
    location: 'Jayapura, Papua',
    highlights: [
      'Merancang materi publikasi visual berupa poster digital, pengumuman kegiatan, dan banner acara.',
      'Mendokumentasikan momen penting kegiatan siswa dan perayaan sekolah.',
      'Membantu penataan dekorasi panggung dan ruang acara agar komunikatif dan rapi.',
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    number: '01',
    school: 'SMA Negeri 1 Jayapura',
    subtitle: 'Sekretaris I OSIS · Anggota PDD',
    active: true,
  },
  {
    number: '02',
    school: 'MTs Al-Muttaqin Jayapura',
    subtitle: 'Pendidikan Menengah Pertama',
    active: false,
  },
  {
    number: '03',
    school: 'SD Pembangunan V Yapis',
    subtitle: 'Pendidikan Dasar',
    active: false,
  },
];

export const SKILLS: SkillTile[] = [
  {
    number: '01',
    title: 'Manajemen Waktu',
    description:
      'Mampu menyeimbangkan antara tanggung jawab akademik sekolah, agenda rutin OSIS, dan komitmen ekstrakurikuler.',
    example: 'Menyusun jadwal mingguan antara tugas kelas, rapat pengurus OSIS, dan tenggat proposal.',
  },
  {
    number: '02',
    title: 'Komunikasi Efektif',
    description:
      'Menyampaikan gagasan, berkoordinasi dengan guru dan pengurus, serta memfasilitasi dialog konstruktif antar siswa.',
    example: 'Menghubungkan aspirasi siswa dengan pihak pembina melalui surat resmi maupun diskusi tatap muka.',
  },
  {
    number: '03',
    title: 'Kerja Sama Tim',
    description:
      'Solid dalam kepanitiaan, adaptif pada situasi darurat, dan menghargai sinergi ragam sudut pandang rekan sekerja.',
    example: 'Berkolaborasi bersama tim PDD dan panitia hari besar sekolah dalam eksekusi acara lapangan.',
  },
  {
    number: '04',
    title: 'Kepemimpinan Dasar',
    description:
      'Peka dalam mengarahkan pelaksanaan kegiatan, mengayomi anggota panitia, dan sigap mengambil keputusan solutif.',
    example: 'Memandu koordinasi administrasi panitia serta memastikan setiap seksi mendapat informasi terbaru.',
  },
];

export const PRACTICAL_SKILLS = [
  '✍️ Kesekretariatan',
  '📁 Administrasi Organisasi',
  '🎨 Mendesain (Canva & Visual)',
] as const;

export const CONTACTS: ContactMethod[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+62 812-4709-2634',
    copyValue: '+62 812-4709-2634',
    href: 'https://wa.me/6281247092634',
    external: true,
  },
  {
    id: 'email',
    label: 'Email Resmi',
    value: 'marwahzzahra@gmail.com',
    copyValue: 'marwahzzahra@gmail.com',
    href: 'mailto:marwahzzahra@gmail.com',
    external: false,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@nm.zraa',
    copyValue: '@nm.zraa',
    href: 'https://instagram.com/nm.zraa',
    external: true,
  },
];
