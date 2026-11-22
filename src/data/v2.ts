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

// About text as written by the owner on 22 Nov 2026. Paragraph 1 is the large statement,
// paragraphs 2 and 3 are the two columns.
export const aboutStatement: T = {
  en: 'QA / Software Test Engineer with 3+ years at PT Aero Systems Indonesia (Garuda Indonesia Group). I apply the full Software Testing Life Cycle, from requirement analysis and risk-based test design to execution, defect management and release sign-off, on mission-critical platforms in aviation, travel, procurement and healthcare.',
  id: 'QA / Software Test Engineer dengan pengalaman 3+ tahun di PT Aero Systems Indonesia (Garuda Indonesia Group). Saya menerapkan Software Testing Life Cycle secara utuh, dari analisis kebutuhan dan desain uji berbasis risiko sampai eksekusi, manajemen defect, dan sign-off rilis, pada platform mission-critical di bidang penerbangan, perjalanan, pengadaan, dan kesehatan.',
};

export const aboutCols: T[] = [
  {
    en: 'My daily work covers manual testing, REST API testing with Postman, performance, load and stress testing with JMeter, and test automation with Playwright and TypeScript. I validate data through SQL and report defect trends and release risks to stakeholders so releases reach production in a known state.',
    id: 'Pekerjaan harian saya mencakup manual testing, REST API testing dengan Postman, performance, load, dan stress testing dengan JMeter, serta test automation dengan Playwright dan TypeScript. Saya memvalidasi data melalui SQL serta melaporkan tren defect dan risiko rilis kepada stakeholder, sehingga setiap rilis masuk ke production dalam kondisi yang diketahui.',
  },
  {
    en: 'Alongside testing, I study IT governance at Universitas Indonesia and have applied COBIT 2019, TOGAF, ITIL, ISO/IEC 27001 and ISO/IEC 27005 in case studies on risk assessment, governance evaluation and enterprise architecture.',
    id: 'Selain pengujian, saya menempuh studi tata kelola TI di Universitas Indonesia dan telah menerapkan COBIT 2019, TOGAF, ITIL, ISO/IEC 27001, dan ISO/IEC 27005 dalam studi kasus penilaian risiko, evaluasi tata kelola, dan arsitektur enterprise.',
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
export const leadership: { meta: T; title: T; body: T; links?: { href: string; label: T }[] }[] = [
  {
    meta: { en: 'FORMA MTI (Forum Mahasiswa MTI), Universitas Indonesia, 2026', id: 'FORMA MTI (Forum Mahasiswa MTI), Universitas Indonesia, 2026' },
    title: { en: 'Head of Partnerships and External Relations', id: 'Ketua Divisi Kemitraan dan Hubungan Luar' },
    body: {
      en: 'Secured and scheduled industry visits for MTI students to Google Indonesia and GoTo.',
      id: 'Berhasil mengagendakan kunjungan industri mahasiswa MTI ke Google Indonesia dan GoTo.',
    },
    links: [
      { href: 'https://www.instagram.com/p/DcwDZ3kHwfk/', label: { en: 'Visit to Google Indonesia (Instagram)', id: 'Kunjungan ke Google Indonesia (Instagram)' } },
      { href: 'https://www.instagram.com/p/De1CbJ-n4fb/', label: { en: 'Visit to GoTo (Instagram)', id: 'Kunjungan ke GoTo (Instagram)' } },
      { href: 'https://www.instagram.com/p/DcwBtDxCWTa/', label: { en: 'Appointment as head of division (Instagram)', id: 'Pengangkatan ketua divisi (Instagram)' } },
    ],
  },
];

// Certificates, checked against the files in Documents\Asset Rifki\Sertifikat on 22 Nov 2026.
// The certificate files themselves are not published (the TOEIC one shows ID number and date of birth).
export type Cert = { date: T; title: T; issuer: T; detail?: T };

// Shown as highlights, newest first.
export const certHighlights: Cert[] = [
  {
    date: { en: 'Sep 2026', id: 'Sep 2026' },
    title: { en: 'Bootcamp: IT Auditing and GRC', id: 'Bootcamp: IT Auditing and GRC' },
    issuer: { en: 'Think Cloudly', id: 'Think Cloudly' },
    detail: { en: 'Certificate of participation, 5 CPE for 5 hours of training.', id: 'Sertifikat partisipasi, 5 CPE untuk 5 jam pelatihan.' },
  },
  {
    date: { en: 'Sep 2025', id: 'Sep 2025' },
    title: { en: 'Cybersecurity for Beginners: Privacy and Personal Data Protection', id: 'Cybersecurity for Beginners: Privacy and Personal Data Protection' },
    issuer: { en: 'Faculty of Computer Science, Universitas Indonesia, with KOICA and Pai Chai University', id: 'Fakultas Ilmu Komputer Universitas Indonesia, bersama KOICA dan Pai Chai University' },
    detail: { en: 'Certificate of completion. 6 modules, 30 hours, including Indonesian data protection regulation. Marks of 93 to 100 per module.', id: 'Sertifikat kelulusan. 6 modul, 30 jam, termasuk regulasi pelindungan data Indonesia. Nilai 93 sampai 100 per modul.' },
  },
  {
    date: { en: 'Dec 2024', id: 'Des 2024' },
    title: { en: 'Risk-Based Audit with CISA Competency, and COBIT 2019', id: 'Risk-Based Audit with CISA Competency, dan COBIT 2019' },
    issuer: { en: 'PT Taalenta Digital Inteleksia', id: 'PT Taalenta Digital Inteleksia' },
    detail: { en: 'Two four-session classes, 8 training hours each. The COBIT class covered cyber security through IT maturity improvement. CISA is my next certification target.', id: 'Dua kelas empat sesi, masing-masing 8 jam pelatihan. Kelas COBIT membahas keamanan siber melalui peningkatan kematangan TI. CISA adalah target sertifikasi saya berikutnya.' },
  },
  {
    date: { en: 'Apr 2024', id: 'Apr 2024' },
    title: { en: 'TOEIC Listening and Reading: 875', id: 'TOEIC Listening and Reading: 875' },
    issuer: { en: 'ETS, via International Test Center', id: 'ETS, melalui International Test Center' },
    detail: { en: 'Listening 480, Reading 395 (out of 495 each).', id: 'Listening 480, Reading 395 (masing-masing dari 495).' },
  },
];

// Shorter groups under the highlights. A group with more than 2 items folds behind a toggle.
export const certGroups: { meta: T; summary: T; toggle?: T; items: { date: T; title: string }[] }[] = [
  {
    meta: { en: 'ISACA', id: 'ISACA' },
    summary: { en: '3 webinars eligible for ISACA CPE, on AI and cyber skills, the state of cybersecurity and the EU AI Act, 2025 to 2026', id: '3 webinar yang diakui sebagai CPE ISACA, tentang AI dan keterampilan siber, kondisi keamanan siber, dan EU AI Act, 2025 sampai 2026' },
    toggle: { en: 'Show all 3 sessions', id: 'Lihat ketiga sesi' },
    items: [
      { date: { en: 'Sep 2026', id: 'Sep 2026' }, title: 'The EU AI Act in 2026: What It Requires, What Changed in July, and What to Do Next' },
      { date: { en: 'Sep 2026', id: 'Sep 2026' }, title: 'State of Cybersecurity 2025' },
      { date: { en: 'May 2025', id: 'Mei 2025' }, title: 'AI & Cyber Skills: Empowering a Workforce to Combat a Rapidly Evolving Threat Landscape' },
    ],
  },
  {
    meta: { en: 'Inixindo Jogja', id: 'Inixindo Jogja' },
    summary: { en: '7 webinars on IT audit, COBIT 2019, ISO 27001, penetration testing and AI in testing, 2025 to 2026', id: '7 webinar tentang audit TI, COBIT 2019, ISO 27001, penetration testing, dan AI dalam pengujian, 2025 sampai 2026' },
    toggle: { en: 'Show all 7 sessions', id: 'Lihat ketujuh sesi' },
    items: [
      { date: { en: 'Apr 2026', id: 'Apr 2026' }, title: 'The Future of Testing: AI-Powered Test Automation & Intelligent Bug Detection' },
      { date: { en: 'Nov 2025', id: 'Nov 2025' }, title: 'Checkpoint Security: Peran Cyber Drill dalam Implementasi ISO 27001' },
      { date: { en: 'Oct 2025', id: 'Okt 2025' }, title: 'Mewujudkan Operational Excellence Melalui Audit Sistem Informasi yang Efektif' },
      { date: { en: 'Oct 2025', id: 'Okt 2025' }, title: 'Audit Sistem Informasi sebagai Enabler Bisnis: Dari Risiko ke Peluang' },
      { date: { en: 'Sep 2025', id: 'Sep 2025' }, title: 'Workshop Membuat Laporan Profesional Penetration Test untuk Klien' },
      { date: { en: 'Sep 2025', id: 'Sep 2025' }, title: 'Penetration Tester Profesional: Cara Menguasai Skill Hacking Legal (Batch 2)' },
      { date: { en: 'May 2025', id: 'Mei 2025' }, title: 'COBIT 2019: Jurus IT Membangun Trust dengan Direksi dan Perusahaan Lewat Tata Kelola Sumber Daya yang Terukur' },
    ],
  },
  {
    meta: { en: 'LRQA', id: 'LRQA' },
    summary: { en: 'Webinar certificate', id: 'Sertifikat webinar' },
    items: [
      { date: { en: 'May 2025', id: 'Mei 2025' }, title: 'ISO 27001:2022 Transition Countdown: Your Questions Answered' },
    ],
  },
];

export const certUi = {
  heading: { en: 'Certifications and training', id: 'Sertifikasi dan pelatihan' },
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
  { id: 'certs', en: 'Certifications', id_: 'Sertifikasi' },
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
  portraitAlt: { en: 'Rifki Hidayatullah smiling and holding up the grand finalist medal at the BRI GAMA IBCC 2026 Announcement of Champions in Jakarta', id: 'Rifki Hidayatullah tersenyum sambil mengangkat medali grand finalist di Announcement of Champions BRI GAMA IBCC 2026 di Jakarta' },
  toTop: { en: 'Back to top', id: 'Kembali ke atas' },
};
