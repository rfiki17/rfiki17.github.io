// Compact content for the 2-page PDF. The website content stays in cv.ts.
// Everything here is a shorter wording of facts already in cv.ts.
import type { T } from './cv';

export const printSummary: T = {
  en: 'QA / Software Test Engineer with 3+ years at PT Aero Systems Indonesia (Garuda Indonesia Group), testing mission-critical platforms in aviation, travel, procurement and healthcare across the full STLC: risk-based test design, manual, API, performance and Playwright automation testing, defect management and release sign-off. Master of IT student in IT governance at Universitas Indonesia, with applied case studies in COBIT 2019, ISO/IEC 27001 and 27005, NIST CSF, TOGAF and ITIL.',
  id: 'QA / Software Test Engineer dengan pengalaman 3+ tahun di PT Aero Systems Indonesia (Garuda Indonesia Group), menguji platform kritis di bidang penerbangan, travel, pengadaan, dan kesehatan sepanjang STLC: desain uji berbasis risiko, manual, API, performance, dan otomasi Playwright, pengelolaan defect, sampai sign-off rilis. Mahasiswa Magister TI peminatan tata kelola TI di Universitas Indonesia, dengan studi kasus terapan COBIT 2019, ISO/IEC 27001 dan 27005, NIST CSF, TOGAF, dan ITIL.',
};

// Indexes into experience.bullets in cv.ts, in print order.
export const printExperienceBullets = [0, 2, 3, 4, 5, 6, 7];

// The 8 projects shown in the PDF, by name as in cv.ts, with a one-line description.
export const printProjects: { name: string; client: T; line: T }[] = [
  {
    name: 'B2B Agent Platform',
    client: { en: 'Garuda Indonesia and Citilink', id: 'Garuda Indonesia dan Citilink' },
    line: {
      en: 'Search to ticketing for travel agents, fare rules and payment integration. Automated middleware regression up to PNR hold.',
      id: 'Pencarian sampai ticketing untuk travel agent, aturan tarif, dan integrasi pembayaran. Otomasi regresi middleware sampai PNR hold.',
    },
  },
  {
    name: 'B2B Branded Fare',
    client: { en: 'Garuda Indonesia', id: 'Garuda Indonesia' },
    line: {
      en: 'Fare family combination matrix and booking to payment, automated with explicit end-state checks.',
      id: 'Matriks kombinasi fare family dan booking sampai pembayaran, diotomasi dengan pengecekan state akhir.',
    },
  },
  {
    name: 'GA Middleware System',
    client: { en: 'OTA integrations: Tiket.com, Traveloka, Trip.com', id: 'Integrasi OTA: Tiket.com, Traveloka, Trip.com' },
    line: {
      en: 'API reliability, error handling and data handoff between internal services and OTA partners.',
      id: 'Keandalan API, penanganan error, dan serah terima data antara layanan internal dan mitra OTA.',
    },
  },
  {
    name: 'E-Procurement',
    client: { en: 'ACS / Aerofood', id: 'ACS / Aerofood' },
    line: {
      en: 'Multi-level approval workflow. Automated the chain from purchase requisition to winner announcement across staff, approver and vendor portals.',
      id: 'Workflow approval bertingkat. Otomasi rantai dari purchase requisition sampai pengumuman pemenang lintas portal staf, approver, dan vendor.',
    },
  },
  {
    name: 'ADAMS Smart Document',
    client: { en: 'AI document management platform', id: 'Platform manajemen dokumen berbasis AI' },
    line: {
      en: 'AI search, OCR, approval and e-signature. Role and access checks, read and write regression, cross-device compatibility suite.',
      id: 'Pencarian AI, OCR, approval, dan tanda tangan elektronik. Pengecekan role dan akses, regresi baca tulis, suite kompatibilitas lintas perangkat.',
    },
  },
  {
    name: 'Aerotrans Transport Management System',
    client: { en: 'Web and mobile', id: 'Web dan mobile' },
    line: {
      en: 'Crew transport and fleet tracking with complex trip status logic. Regression suite in CI and JMeter load test.',
      id: 'Transportasi kru dan pelacakan armada dengan logika status ritase yang kompleks. Suite regresi di CI dan load test JMeter.',
    },
  },
  {
    name: 'AMALA',
    client: { en: 'Garuda Indonesia loyalty program', id: 'Program loyalitas Garuda Indonesia' },
    line: {
      en: 'Enrollment, points earning and redemption, transaction history. Test plans, regression and UAT support.',
      id: 'Pendaftaran member, perolehan dan penukaran poin, riwayat transaksi. Test plan, regresi, dan dukungan UAT.',
    },
  },
  {
    name: 'Penetration test remediation',
    client: { en: 'Garuda Indonesia', id: 'Garuda Indonesia' },
    line: {
      en: 'Retesting penetration test findings after patches, with regression around each fix.',
      id: 'Uji ulang temuan penetration test setelah patch, dengan regresi di sekitar setiap perbaikan.',
    },
  },
];

// One line per achievement, same order as cv.ts.
export const printAchievements: { title: T; where: T; date: T }[] = [
  {
    title: { en: 'Most Outstanding Student, MTI Universitas Indonesia', id: 'Most Outstanding Student, MTI Universitas Indonesia' },
    where: { en: 'Indonesia Digital Leadership Summit (IDLS) 2026', id: 'Indonesia Digital Leadership Summit (IDLS) 2026' },
    date: { en: 'Oct 2026', id: 'Okt 2026' },
  },
  {
    title: { en: 'Head of Event Division, IDLS 2026', id: 'Ketua Divisi Acara, IDLS 2026' },
    where: {
      en: 'Led 15+ people, designed all sessions, coordinated 22 speakers from government, industry and academia, 350+ attendees',
      id: 'Memimpin 15+ orang, menyusun seluruh sesi, mengoordinasikan 22 pembicara dari pemerintah, industri, dan akademisi, 350+ peserta',
    },
    date: { en: 'Oct 2026', id: 'Okt 2026' },
  },
  {
    title: { en: 'Head of Partnerships and External Relations, FORMA MTI', id: 'Ketua Divisi Kemitraan dan Hubungan Luar, FORMA MTI' },
    where: {
      en: 'MTI student forum, Universitas Indonesia, arranged industry visits to Google Indonesia and GoTo',
      id: 'Forum mahasiswa MTI, Universitas Indonesia, mengagendakan kunjungan industri ke Google Indonesia dan GoTo',
    },
    date: { en: '2026', id: '2026' },
  },
  {
    title: { en: 'Top 10 Grand Finalist, Graduate Category', id: 'Top 10 Grand Finalist, Kategori Pascasarjana' },
    where: {
      en: 'BRI GAMA International Business Case Competition 2026, Team Leader of Team RAM, out of 60+ teams worldwide',
      id: 'BRI GAMA International Business Case Competition 2026, Team Leader Tim RAM, dari 60+ tim internasional',
    },
    date: { en: 'Sep 2026', id: 'Sep 2026' },
  },
  {
    title: { en: 'Paper presenter, IT Case Research Colloquium, IDLS 2026', id: 'Pemakalah, IT Case Research Colloquium, IDLS 2026' },
    where: {
      en: '"Developer-Perceived AI Risk Management Readiness in an Indonesian Aviation IT Company Using NIST AI RMF 1.0"',
      id: '"Developer-Perceived AI Risk Management Readiness in an Indonesian Aviation IT Company Using NIST AI RMF 1.0"',
    },
    date: { en: 'Oct 2026', id: 'Okt 2026' },
  },
  {
    title: { en: 'Delegate, UI to UM Short Cultural Exchange', id: 'Delegasi, UI to UM Short Cultural Exchange' },
    where: {
      en: 'Universiti Malaya and Universiti Kebangsaan Malaysia, representing MTI students',
      id: 'Universiti Malaya dan Universiti Kebangsaan Malaysia, mewakili mahasiswa MTI',
    },
    date: { en: 'Aug 2026', id: 'Agu 2026' },
  },
];

export const printUi = {
  // Standard section names that ATS parsers recognise.
  headings: {
    summary: { en: 'Professional Summary', id: 'Ringkasan Profesional' },
    skills: { en: 'Core Skills', id: 'Keahlian Utama' },
    experience: { en: 'Professional Experience', id: 'Pengalaman Kerja' },
    keyProjects: { en: 'Key projects', id: 'Proyek utama' },
    education: { en: 'Education', id: 'Pendidikan' },
    grc: { en: 'IT GRC Projects (Academic)', id: 'Proyek IT GRC (Akademik)' },
    awards: { en: 'Awards and Achievements', id: 'Penghargaan dan Prestasi' },
    more: { en: 'Additional Information', id: 'Informasi Tambahan' },
    membership: { en: 'Membership', id: 'Keanggotaan' },
    languages: { en: 'Languages', id: 'Bahasa' },
    training: { en: 'Training', id: 'Pelatihan' },
  },
  // TOEIC sits in the languages line, so it is not repeated here.
  training: {
    en: 'IT Auditing and GRC Bootcamp, Think Cloudly (5 CPE, 2026) | Cybersecurity for Beginners: Privacy and Personal Data Protection, Faculty of Computer Science UI with KOICA (30 hours, 2025) | Risk-Based Audit with CISA Competency and COBIT 2019, Taalenta Digital Inteleksia (8 hours each, 2024) | 3 ISACA CPE webinars (2025 to 2026) | ISO 27001:2022 transition webinar, LRQA (2025) | 7 Inixindo Jogja webinars on IT audit, ISO 27001, penetration testing and AI in testing (2025 to 2026)',
    id: 'IT Auditing and GRC Bootcamp, Think Cloudly (5 CPE, 2026) | Cybersecurity for Beginners: Privacy and Personal Data Protection, Fasilkom UI bersama KOICA (30 jam, 2025) | Risk-Based Audit with CISA Competency dan COBIT 2019, Taalenta Digital Inteleksia (masing-masing 8 jam, 2024) | 3 webinar CPE ISACA (2025 sampai 2026) | Webinar transisi ISO 27001:2022, LRQA (2025) | 7 webinar Inixindo Jogja tentang audit TI, ISO 27001, penetration testing, dan AI dalam pengujian (2025 sampai 2026)',
  },

  present: { en: 'Present', id: 'Sekarang' },
  competencies: { en: 'Core Competencies', id: 'Kompetensi Utama' },
  grcProjects: { en: 'IT GRC Projects and Case Studies', id: 'Proyek dan Studi Kasus IT GRC' },
  relevantProjects: { en: 'Relevant projects', id: 'Proyek yang relevan' },
  allProjects: {
    en: 'All 17 projects, IT GRC case study details and photos: rfiki17.github.io',
    id: 'Seluruh 17 proyek, detail studi kasus IT GRC, dan foto: rfiki17.github.io/id/',
  },
};

// ---------------------------------------------------------------------------
// IT GRC version of the CV. Source: GRC CV of 14 Sep 2026 plus facts already in cv.ts.

export const grcHeadline: T = {
  en: 'IT Governance, Risk and Compliance (GRC) | QA / Software Test Engineer',
  id: 'IT Governance, Risk and Compliance (GRC) | QA / Software Test Engineer',
};

export const grcSummary: T = {
  en: 'IT governance, risk and compliance candidate pursuing a Master of Information Technology (IT governance track) at Universitas Indonesia, with 3+ years as a Software Test Engineer at PT Aero Systems Indonesia (Garuda Indonesia Group). Applied COBIT 2019, ISO/IEC 27001 and 27005, NIST CSF, TOGAF and ITIL in case studies on risk assessment, governance evaluation and enterprise architecture, and presented research on AI risk management readiness using NIST AI RMF 1.0. Brings evidence-based testing, remediation verification and structured documentation from regulated aviation and healthcare platforms. Member of ISACA Indonesia Chapter.',
  id: 'Kandidat bidang tata kelola, risiko, dan kepatuhan TI yang sedang menempuh Magister Teknologi Informasi (peminatan tata kelola TI) di Universitas Indonesia, dengan pengalaman 3+ tahun sebagai Software Test Engineer di PT Aero Systems Indonesia (Garuda Indonesia Group). Menerapkan COBIT 2019, ISO/IEC 27001 dan 27005, NIST CSF, TOGAF, dan ITIL dalam studi kasus asesmen risiko, evaluasi tata kelola, dan enterprise architecture, serta mempresentasikan riset kesiapan manajemen risiko AI dengan NIST AI RMF 1.0. Membawa pengalaman pengujian berbasis bukti, verifikasi remediasi, dan dokumentasi terstruktur dari platform penerbangan dan kesehatan yang teregulasi. Anggota ISACA Indonesia Chapter.',
};

export const grcCompetencies: { group: T; items: T }[] = [
  {
    group: { en: 'Governance frameworks', id: 'Framework tata kelola' },
    items: { en: 'COBIT 2019 (capability assessment, maturity level analysis, governance and management objectives)', id: 'COBIT 2019 (capability assessment, analisis tingkat maturity, governance and management objectives)' },
  },
  {
    group: { en: 'Information security and risk', id: 'Keamanan informasi dan risiko' },
    items: { en: 'ISO/IEC 27001 (ISMS, Annex A controls), ISO/IEC 27005 (risk identification, analysis, evaluation, treatment), ISO/IEC 27002, NIST CSF, NIST AI RMF 1.0', id: 'ISO/IEC 27001 (ISMS, kontrol Annex A), ISO/IEC 27005 (identifikasi, analisis, evaluasi, perlakuan risiko), ISO/IEC 27002, NIST CSF, NIST AI RMF 1.0' },
  },
  {
    group: { en: 'Enterprise architecture and ITSM', id: 'Enterprise architecture dan ITSM' },
    items: { en: 'TOGAF ADM (baseline and target architecture, gap analysis, migration planning), ITIL (incident, problem, change management)', id: 'TOGAF ADM (arsitektur baseline dan target, gap analysis, perencanaan migrasi), ITIL (incident, problem, change management)' },
  },
  {
    group: { en: 'Risk and compliance practice', id: 'Praktik risiko dan kepatuhan' },
    items: { en: 'IT risk assessment, control mapping, gap analysis, maturity assessment, policy and procedure review, audit documentation, remediation tracking', id: 'Asesmen risiko TI, control mapping, gap analysis, maturity assessment, review kebijakan dan prosedur, dokumentasi audit, pelacakan remediasi' },
  },
  {
    group: { en: 'Assurance and testing', id: 'Assurance dan pengujian' },
    items: { en: 'Risk-based test planning, evidence-based defect reporting, remediation testing after security patches, UAT and go-live verification, access and role checks', id: 'Perencanaan uji berbasis risiko, pelaporan defect berbasis bukti, remediation testing setelah patch keamanan, verifikasi UAT dan go-live, pengecekan akses dan role' },
  },
  {
    group: { en: 'Tools', id: 'Tools' },
    items: { en: 'Archi, Jira, Kiwi TCMS, Postman, JMeter, Playwright, SQL, DBeaver, Tableau, Microsoft Office', id: 'Archi, Jira, Kiwi TCMS, Postman, JMeter, Playwright, SQL, DBeaver, Tableau, Microsoft Office' },
  },
];

// Experience bullets for the GRC version. Indexes into experience.bullets in cv.ts, plus one extra line.
export const grcExperienceBullets = [0, 7, 5, 6, 2];
export const grcExtraBullet: T = {
  en: 'Report defect trends and release risks to stakeholders so go-live decisions rest on documented evidence.',
  id: 'Melaporkan tren defect dan risiko rilis ke stakeholder agar keputusan go-live didasarkan pada bukti yang terdokumentasi.',
};

export const grcProjects: { name: string; client: T; line: T }[] = [
  {
    name: 'Penetration test remediation',
    client: { en: 'Garuda Indonesia', id: 'Garuda Indonesia' },
    line: { en: 'Retested penetration test findings after patches and ran regression around each fix so closed findings stay closed.', id: 'Menguji ulang temuan penetration test setelah patch dan menjalankan regresi di sekitar setiap perbaikan agar temuan yang ditutup tetap tertutup.' },
  },
  {
    name: 'ADAMS Smart Document',
    client: { en: 'AI document management platform', id: 'Platform manajemen dokumen berbasis AI' },
    line: { en: 'Role and access control checks across departments, approval and e-signature flows, read and write regression.', id: 'Pengecekan kontrol akses dan role lintas departemen, alur approval dan tanda tangan elektronik, regresi baca tulis.' },
  },
  {
    name: 'E-Procurement',
    client: { en: 'ACS / Aerofood', id: 'ACS / Aerofood' },
    line: { en: 'Multi-level approval rules, data completeness and workflow integrity from purchase requisition to winner announcement.', id: 'Aturan approval bertingkat, kelengkapan data, dan integritas workflow dari purchase requisition sampai pengumuman pemenang.' },
  },
  {
    name: 'GA Middleware System',
    client: { en: 'OTA integrations', id: 'Integrasi OTA' },
    line: { en: 'Secure data exchange, error handling and data handoff between internal services and OTA partners.', id: 'Keamanan pertukaran data, penanganan error, dan serah terima data antara layanan internal dan mitra OTA.' },
  },
];

export type Track = 'qa' | 'grc';
export const trackFileName = (track: Track, lang: 'en' | 'id') =>
  `Rifki-Hidayatullah-CV-${track.toUpperCase()}-${lang.toUpperCase()}.pdf`;
