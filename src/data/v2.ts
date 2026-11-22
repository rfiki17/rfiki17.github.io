// Extra content for the v2 layout (the style of the 19 Sep 2026 site).
// Facts marked "v1" come from the owner's own v1 site. Everything else repeats cv.ts.
import type { T } from './cv';

export const availability: T = {
  en: 'Open to opportunities in IT GRC, IT audit and QA', // v1
  id: 'Terbuka untuk peluang di IT GRC, IT audit, dan QA',
};

// Rotating line under the name. v1 phrases.
export const phrases: { en: string[]; id: string[] } = {
  en: [
    'I test software. I assess risk. I improve controls.',
    'Software quality with a GRC mindset.',
    'From QA to IT governance, risk and compliance.',
    'Exploring AI risk and compliance.',
    'Building reliable, governed digital systems.',
  ],
  id: [
    'Saya menguji software. Saya menilai risiko. Saya memperkuat kontrol.',
    'Kualitas software dengan pola pikir GRC.',
    'Dari QA menuju tata kelola, risiko, dan kepatuhan TI.',
    'Mendalami risiko dan kepatuhan AI.',
    'Membangun sistem digital yang andal dan terkelola.',
  ],
};

export const tagline: T = {
  en: 'QA / Software Test Engineer moving into IT governance, risk and compliance.',
  id: 'QA / Software Test Engineer yang beralih ke tata kelola, risiko, dan kepatuhan TI.',
};

export const heroIntro: T = {
  en: 'I test airline, travel and enterprise systems at PT Aero Systems Indonesia (ASYST), a Garuda Indonesia Group company, while completing a Master of Information Technology at Universitas Indonesia.',
  id: 'Saya menguji sistem penerbangan, travel, dan enterprise di PT Aero Systems Indonesia (ASYST), bagian dari Garuda Indonesia Group, sambil menyelesaikan Magister Teknologi Informasi di Universitas Indonesia.',
};

export const aboutStatement: T = {
  en: 'I write test criteria that can be proven, record findings with evidence, and close gaps before release. I want to do the same work at the level of controls and risk.', // v1
  id: 'Saya menulis kriteria uji yang bisa dibuktikan, mencatat temuan dengan bukti, dan menutup celah sebelum rilis. Saya ingin melakukan hal yang sama pada level kontrol dan risiko.',
};

export const aboutCols: T[] = [
  {
    en: 'My background is in <strong>Information Systems</strong> at Universitas Multimedia Nusantara. My undergraduate thesis applied COBIT 2019 to IT asset management governance, and my interest in IT governance has stayed consistent from undergraduate to graduate study.',
    id: 'Latar belakang saya adalah <strong>Sistem Informasi</strong> di Universitas Multimedia Nusantara. Skripsi saya menerapkan COBIT 2019 pada tata kelola manajemen aset TI, dan minat saya pada tata kelola TI konsisten dari S1 sampai S2.',
  },
  {
    en: 'At Universitas Indonesia I study Information Technology with a focus on <strong>IT governance, risk and compliance</strong>, including AI risk. I am a member of ISACA Indonesia Chapter, and CISA is my next certification target.',
    id: 'Di Universitas Indonesia saya menempuh Teknologi Informasi dengan fokus <strong>tata kelola, risiko, dan kepatuhan TI</strong>, termasuk risiko AI. Saya anggota ISACA Indonesia Chapter, dan CISA adalah target sertifikasi berikutnya.',
  },
];

export const whatIDo: { title: T; body: T; stack: string }[] = [
  {
    title: { en: 'Software testing', id: 'Pengujian perangkat lunak' },
    body: {
      en: 'Release testing for 17 systems: OTA integrations, B2B booking, e-procurement, loyalty, transport management, document management and a healthcare ERP.',
      id: 'Pengujian rilis untuk 17 sistem: integrasi OTA, B2B booking, e-procurement, loyalty, manajemen transportasi, manajemen dokumen, dan ERP kesehatan.',
    },
    stack: 'Playwright, Postman, JMeter, Jira, Kiwi TCMS',
  },
  {
    title: { en: 'Governance and risk', id: 'Tata kelola dan risiko' },
    body: {
      en: 'Framework-based assessment of information security risk, IT governance capability and enterprise architecture.',
      id: 'Asesmen berbasis framework untuk risiko keamanan informasi, capability tata kelola TI, dan enterprise architecture.',
    },
    stack: 'COBIT 2019, ISO/IEC 27001, 27005, NIST CSF, TOGAF',
  },
  {
    title: { en: 'AI risk management', id: 'Manajemen risiko AI' },
    body: {
      en: 'Research on how ready a software development organisation is to manage the risks of AI adoption, presented at IDLS 2026.',
      id: 'Riset tentang kesiapan organisasi pengembang perangkat lunak dalam mengelola risiko adopsi AI, dipresentasikan di IDLS 2026.',
    },
    stack: 'NIST AI RMF 1.0',
  },
];

// Research items shown above the GRC case studies.
export const research: { meta: T; title: T; body: T; stack: string }[] = [
  {
    meta: { en: 'Master\'s thesis, in progress', id: 'Tesis, berjalan' }, // v1
    title: { en: 'Project management maturity with PMMM', id: 'Kematangan manajemen proyek dengan PMMM' },
    body: {
      en: 'Evaluating the maturity of IT project management at PT Aero Systems Indonesia with the PM Solutions Project Management Maturity Model, Edition 4.',
      id: 'Mengevaluasi kematangan manajemen proyek TI di PT Aero Systems Indonesia dengan Project Management Maturity Model dari PM Solutions, Edisi 4.',
    },
    stack: 'PMMM, PM Solutions Edition 4',
  },
  {
    meta: { en: 'Research paper, presented Oct 2026', id: 'Makalah riset, dipresentasikan Okt 2026' },
    title: {
      en: 'Developer-Perceived AI Risk Management Readiness in an Indonesian Aviation IT Company Using NIST AI RMF 1.0',
      id: 'Developer-Perceived AI Risk Management Readiness in an Indonesian Aviation IT Company Using NIST AI RMF 1.0',
    },
    body: {
      en: 'Selected as one of 10 papers for the IT Case Research Colloquium at the Indonesia Digital Leadership Summit 2026.',
      id: 'Terpilih sebagai salah satu dari 10 makalah di IT Case Research Colloquium, Indonesia Digital Leadership Summit 2026.',
    },
    stack: 'NIST AI RMF 1.0, Govern, Map, Measure, Manage',
  },
];

// Leadership roles. The IDLS role is the achievement tagged group: 'leadership' in cv.ts.
export const leadership: { meta: T; title: T; body: T }[] = [
  {
    meta: { en: 'FORMA MTI, 2026', id: 'FORMA MTI, 2026' }, // v1
    title: { en: 'Head of Partnerships and External Relations', id: 'Kepala Divisi Kemitraan dan Hubungan Eksternal' },
    body: {
      en: 'Arranged company visits to Google Indonesia (held August 2026), GoTo and Microsoft Indonesia. Helped organise the 8 June inauguration and seminar with speakers from ILUNI UI and Garuda Indonesia.',
      id: 'Mengatur kunjungan perusahaan ke Google Indonesia (terlaksana Agustus 2026), GoTo, dan Microsoft Indonesia. Membantu menyelenggarakan pelantikan dan seminar 8 Juni dengan pembicara dari ILUNI UI dan Garuda Indonesia.',
    },
  },
];

export const training: { meta: T; title: T; body: T } = {
  meta: { en: 'Training', id: 'Pelatihan' }, // v1
  title: { en: 'Governance, audit and security', id: 'Tata kelola, audit, dan keamanan' },
  body: {
    en: 'COBIT 2019, risk-based IT audit, IS audit practices and ISO 27001 through Taalenta Digital Inteleksia and Inixindo Jogja. CISA is my next target.',
    id: 'COBIT 2019, audit TI berbasis risiko, praktik audit SI, dan ISO 27001 melalui Taalenta Digital Inteleksia dan Inixindo Jogja. CISA adalah target berikutnya.',
  },
};

export const contactStatement: T = {
  en: 'Open to roles in IT GRC, IT audit and QA. Based in South Tangerang.',
  id: 'Terbuka untuk peran di IT GRC, IT audit, dan QA. Berdomisili di Tangerang Selatan.',
};

// Prefilled messages for the email and WhatsApp links. v1.
export const messages = {
  en: { subject: 'Hello from your portfolio site', body: 'Hi Rifki,\n\nI came across your portfolio and would like to talk about\n\n', wa: 'Hi Rifki, I came across your portfolio and would like to talk about ' },
  id: { subject: 'Halo, dari website portofolio Anda', body: 'Halo Rifki,\n\nSaya melihat portofolio Anda dan ingin berdiskusi tentang\n\n', wa: 'Halo Rifki, saya melihat portofolio Anda dan ingin berdiskusi tentang ' },
};

export const nav = {
  work: { en: 'Work', id: 'Proyek' },
  about: { en: 'About', id: 'Tentang' },
  experience: { en: 'Experience', id: 'Pengalaman' },
  achievements: { en: 'Achievements', id: 'Pencapaian' },
  contact: { en: 'Contact', id: 'Kontak' },
};

// Short labels for the section menu on the right (wide screens only).
export const rail = [
  { id: 'about', en: 'About', id_: 'Tentang' },
  { id: 'do', en: 'What I do', id_: 'Bidang' },
  { id: 'experience', en: 'Experience', id_: 'Pengalaman' },
  { id: 'work', en: 'Work', id_: 'Proyek' },
  { id: 'research', en: 'Research', id_: 'Riset' },
  { id: 'leadership', en: 'Leadership', id_: 'Kepemimpinan' },
  { id: 'achievements', en: 'Achievements', id_: 'Pencapaian' },
  { id: 'education', en: 'Education', id_: 'Pendidikan' },
  { id: 'skills', en: 'Skills', id_: 'Keahlian' },
  { id: 'contact', en: 'Contact', id_: 'Kontak' },
];

export const ui2 = {
  seeWork: { en: 'See selected work', id: 'Lihat proyek pilihan' },
  whatIDo: { en: 'What I do', id: 'Bidang kerja' },
  work: { en: 'Work', id: 'Proyek' },
  research: { en: 'Research and case studies', id: 'Riset dan studi kasus' },
  leadership: { en: 'Leadership', id: 'Kepemimpinan' },
  copy: { en: 'Copy', id: 'Salin' },
  copied: { en: 'Copied', id: 'Tersalin' },
  updated: { en: 'Updated November 2026', id: 'Diperbarui November 2026' },
  theme: { en: 'Theme', id: 'Tema' },
  download: { en: 'Download CV', id: 'Unduh CV' },
  switchLang: { en: 'Baca dalam Bahasa Indonesia', id: 'Read in English' },
  sections: { en: 'Sections', id: 'Bagian' },
  toTop: { en: 'Back to top', id: 'Kembali ke atas' },
};
