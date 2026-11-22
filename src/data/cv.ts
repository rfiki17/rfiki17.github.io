// Single source of truth for the CV. Every visible string has an English and an Indonesian version.
// Rule: only facts from the CV of 14 Sep 2026 and work that is recorded in the automation repo.
// No invented numbers.

export type Lang = 'en' | 'id';
export type T = { en: string; id: string };

export const profile = {
  name: 'Rifki Hidayatullah',
  role: { en: 'QA / Software Test Engineer', id: 'QA / Software Test Engineer' },
  focus: { en: 'IT Governance, Risk and Compliance (GRC)', id: 'Tata Kelola, Risiko, dan Kepatuhan TI (GRC)' },
  membership: { en: 'Member, ISACA Indonesia Chapter', id: 'Anggota ISACA Indonesia Chapter' },
  location: { en: 'South Tangerang, Indonesia', id: 'Tangerang Selatan, Indonesia' },
  email: 'rifkihidayatullah20@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rifki-hidayatullah',
  linkedinLabel: 'LinkedIn: in/rifki-hidayatullah',
  // Business number, also on WhatsApp. Provided by the owner on 22 Nov 2026 for public use.
  phone: '+62 858-1771-1143',
  phoneHref: 'tel:+6285817711143',
  whatsappHref: 'https://wa.me/6285817711143',
};

export const ui = {
  summary: { en: 'Summary', id: 'Ringkasan' },
  approach: { en: 'How I test', id: 'Cara saya menguji' },
  experience: { en: 'Experience', id: 'Pengalaman' },
  projects: { en: 'Projects', id: 'Proyek' },
  achievements: { en: 'Achievements', id: 'Pencapaian' },
  grc: { en: 'IT GRC case studies', id: 'Studi kasus IT GRC' },
  grcIntro: {
    en: 'Applied governance, risk and compliance work from my Master\'s and Bachelor\'s programmes. Case organisations are anonymised, some under a non-disclosure agreement.',
    id: 'Pekerjaan tata kelola, risiko, dan kepatuhan dari program S2 dan S1. Nama organisasi kasus disamarkan, sebagian karena terikat perjanjian kerahasiaan (NDA).',
  },
  skills: { en: 'Skills', id: 'Keahlian' },
  education: { en: 'Education', id: 'Pendidikan' },
  languages: { en: 'Languages', id: 'Bahasa' },
  print: { en: 'Download CV (PDF)', id: 'Unduh CV (PDF)' },
  contact: { en: 'Contact', id: 'Kontak' },
  present: { en: 'Present', id: 'Sekarang' },
  responsibilities: { en: 'Core responsibilities', id: 'Tanggung jawab utama' },
  projectsIntro: {
    en: '17 systems across aviation, travel, procurement, healthcare and enterprise. Grouped by domain.',
    id: '17 sistem di bidang penerbangan, travel, pengadaan, kesehatan, dan enterprise. Dikelompokkan per domain.',
  },
  footer: {
    en: 'Built with Astro. Layout checked with Playwright on phone, tablet and desktop viewports on every push.',
    id: 'Dibuat dengan Astro. Tata letak diuji dengan Playwright di ukuran ponsel, tablet, dan desktop setiap kali ada push.',
  },
  skip: { en: 'Skip to content', id: 'Lewati ke konten' },
  langName: { en: 'Bahasa Indonesia', id: 'English' },
  ongoing: { en: 'In progress', id: 'Berjalan' },
  focusLabel: { en: 'Focus', id: 'Peminatan' },
  themeLight: { en: 'Light theme', id: 'Tema terang' },
  themeDark: { en: 'Dark theme', id: 'Tema gelap' },
};

export const summary: T[] = [
  {
    en: 'QA / Software Test Engineer with 3+ years at PT Aero Systems Indonesia (Garuda Indonesia Group). I apply the full Software Testing Life Cycle, from requirement analysis and risk-based test design to execution, defect management and release sign-off, on mission-critical platforms in aviation, travel, procurement and healthcare.',
    id: 'QA / Software Test Engineer dengan pengalaman 3+ tahun di PT Aero Systems Indonesia (Garuda Indonesia Group). Saya menerapkan Software Testing Life Cycle secara utuh, dari analisis kebutuhan dan desain uji berbasis risiko sampai eksekusi, pengelolaan defect, dan sign-off rilis, pada platform kritis di bidang penerbangan, travel, pengadaan, dan kesehatan.',
  },
  {
    en: 'My daily work covers manual testing, REST API testing with Postman, performance, load and stress testing with JMeter, and test automation with Playwright and TypeScript. I validate data through SQL and report defect trends and release risks to stakeholders so releases reach production in a known state.',
    id: 'Pekerjaan harian saya mencakup manual testing, REST API testing dengan Postman, performance, load, dan stress testing dengan JMeter, serta otomasi uji dengan Playwright dan TypeScript. Saya memvalidasi data lewat SQL dan melaporkan tren defect serta risiko rilis ke stakeholder agar rilis masuk produksi dalam kondisi yang jelas.',
  },
  {
    en: 'Alongside testing, I study IT governance at Universitas Indonesia and have applied COBIT 2019, TOGAF, ITIL, ISO/IEC 27001 and ISO/IEC 27005 in case studies on risk assessment, governance evaluation and enterprise architecture.',
    id: 'Di luar pengujian, saya menempuh studi tata kelola TI di Universitas Indonesia dan sudah menerapkan COBIT 2019, TOGAF, ITIL, ISO/IEC 27001, dan ISO/IEC 27005 dalam studi kasus asesmen risiko, evaluasi tata kelola, dan enterprise architecture.',
  },
];

export const approach: { title: T; body: T }[] = [
  {
    title: { en: 'Flag before assume', id: 'Tandai, jangan berasumsi' },
    body: {
      en: 'When a business rule is not confirmed, I write it down as an open question for the BA instead of quietly guessing. Unconfirmed rules go into the risk section of the test plan.',
      id: 'Aturan bisnis yang belum dikonfirmasi saya catat sebagai pertanyaan terbuka untuk BA, bukan ditebak diam-diam. Aturan yang belum pasti masuk ke bagian risiko di test plan.',
    },
  },
  {
    title: { en: 'Check the outcome, not only the status code', id: 'Periksa hasil akhir, bukan hanya status code' },
    body: {
      en: 'An API can return HTTP 500 and still save the data, or return 200 and save nothing. I verify the resulting state in the list, the database or the next screen.',
      id: 'API bisa mengembalikan HTTP 500 tetapi datanya tersimpan, atau 200 tetapi tidak menyimpan apa pun. Saya memverifikasi state akhirnya di daftar, database, atau layar berikutnya.',
    },
  },
  {
    title: { en: 'Every expected result is measurable', id: 'Setiap expected result bisa diukur' },
    body: {
      en: 'Expected results like "the system runs normally" are rejected. Each one names a value, a state or a message that a second tester can check the same way.',
      id: 'Expected result seperti "sistem berjalan normal" saya tolak. Setiap expected result menyebut nilai, state, atau pesan yang bisa dicek tester lain dengan cara yang sama.',
    },
  },
  {
    title: { en: 'Isolate test data per outcome', id: 'Pisahkan data uji per hasil akhir' },
    body: {
      en: 'Steps inside one transaction may share data. Outcomes that exclude each other, such as approve and reject, each get their own data so one result never hides another.',
      id: 'Langkah di dalam satu transaksi boleh berbagi data. Hasil yang saling meniadakan, seperti approve dan reject, masing-masing memakai data sendiri agar satu hasil tidak menutupi yang lain.',
    },
  },
  {
    title: { en: 'Automate what is stable and repeatable', id: 'Otomasi yang stabil dan berulang' },
    body: {
      en: 'Regression flows that run every release are automated. Exploratory and one-off checks stay manual, and I note why.',
      id: 'Alur regresi yang dijalankan setiap rilis diotomasi. Eksplorasi dan pengecekan sekali jalan tetap manual, dan alasannya saya catat.',
    },
  },
];

export const experience = {
  title: { en: 'Software Test Engineer', id: 'Software Test Engineer' },
  company: 'PT Aero Systems Indonesia (Garuda Indonesia Group)',
  period: { from: { en: 'Jan 2023', id: 'Jan 2023' } },
  place: { en: 'Tangerang, Indonesia', id: 'Tangerang, Indonesia' },
  bullets: [
    {
      en: 'Lead end-to-end QA across several concurrent projects: requirement clarification, risk-based test planning, test scenario and test case design, execution and sign-off readiness.',
      id: 'Memimpin QA end-to-end di beberapa proyek sekaligus: klarifikasi kebutuhan, perencanaan uji berbasis risiko, desain skenario dan test case, eksekusi, sampai kesiapan sign-off.',
    },
    {
      en: 'Run manual testing (functional, integration, regression, exploratory, negative) on web and mobile platforms across critical user journeys.',
      id: 'Menjalankan manual testing (fungsional, integrasi, regresi, eksploratori, negatif) di platform web dan mobile pada alur pengguna yang kritis.',
    },
    {
      en: 'Test REST APIs with Postman: request and response validation, status codes, schema and payload checks, data integrity and error handling.',
      id: 'Menguji REST API dengan Postman: validasi request dan response, status code, pengecekan schema dan payload, integritas data, dan penanganan error.',
    },
    {
      en: 'Run performance, load and stress tests with JMeter on critical journeys, analyse bottlenecks, report them and retest after fixes.',
      id: 'Menjalankan performance, load, dan stress test dengan JMeter pada alur kritis, menganalisis bottleneck, melaporkannya, dan menguji ulang setelah perbaikan.',
    },
    {
      en: 'Build and maintain Playwright + TypeScript automation (Page Object Model) for the applications I test, with lint and type checks in CI.',
      id: 'Membangun dan merawat otomasi Playwright + TypeScript (Page Object Model) untuk aplikasi yang saya uji, dengan lint dan type check di CI.',
    },
    {
      en: 'Manage the defect lifecycle in Jira: reproducible bug reports with evidence, triage with developers, fix verification and regression.',
      id: 'Mengelola siklus defect di Jira: laporan bug yang bisa direproduksi lengkap dengan bukti, triase bersama developer, verifikasi perbaikan, dan regresi.',
    },
    {
      en: 'Support UAT and go-live: assist business users, run smoke tests before and after deployment and verify hotfixes.',
      id: 'Mendukung UAT dan go-live: mendampingi pengguna bisnis, menjalankan smoke test sebelum dan sesudah deployment, serta memverifikasi hotfix.',
    },
    {
      en: 'Run remediation testing after security patches to confirm findings are closed without new regressions.',
      id: 'Menjalankan remediation testing setelah patch keamanan untuk memastikan temuan tertutup tanpa regresi baru.',
    },
  ] as T[],
};

export type Project = { name: string; client: T; body: T; tags: string[]; ongoing?: boolean };
export type ProjectGroup = { domain: T; items: Project[] };

export const projectGroups: ProjectGroup[] = [
  {
    domain: { en: 'Booking and travel distribution', id: 'Booking dan distribusi travel' },
    items: [
      {
        name: 'B2B Agent Platform',
        client: { en: 'Garuda Indonesia and Citilink', id: 'Garuda Indonesia dan Citilink' },
        body: {
          en: 'End-to-end booking journeys for travel agents: search, booking, payment and ticketing. Fare and business rule validation, and integration with inventory, payment gateway and issuance. Automated a middleware regression suite up to PNR hold and a responsive suite across phone, tablet and desktop profiles.',
          id: 'Alur booking end-to-end untuk travel agent: pencarian, booking, pembayaran, dan ticketing. Validasi tarif dan aturan bisnis, serta integrasi dengan inventory, payment gateway, dan issuance. Mengotomasi suite regresi middleware sampai PNR hold dan suite responsive di profil ponsel, tablet, dan desktop.',
        },
        tags: ['E2E', 'API', 'Regression', 'Cross-browser', 'Playwright'],
      },
      {
        name: 'B2B Branded Fare (Business Traveler)',
        client: { en: 'Garuda Indonesia', id: 'Garuda Indonesia' },
        body: {
          en: 'Fare family and trip type combinations, booking to payment through the payment sandbox, and explicit end-state checks on every booking. The combination matrix runs as one automated suite.',
          id: 'Kombinasi fare family dan tipe perjalanan, booking sampai pembayaran lewat sandbox pembayaran, dan pengecekan state akhir yang eksplisit pada setiap booking. Matriks kombinasinya berjalan sebagai satu suite otomatis.',
        },
        tags: ['Combinatorial', 'E2E', 'Payment', 'Playwright'],
      },
      {
        name: 'GOS Module Management',
        client: { en: 'Back office of the B2B Agent Platform', id: 'Back office B2B Agent Platform' },
        body: {
          en: 'User monitoring, complaints, sales reports, commission configuration and promotions. Functional testing of the revamp per module, master data CRUD, and every download and upload function.',
          id: 'Monitoring user, komplain, laporan penjualan, konfigurasi komisi, dan promo. Uji fungsional revamp per modul, CRUD master data, serta semua fungsi download dan upload.',
        },
        tags: ['Functional', 'CRUD', 'Regression', 'Playwright'],
      },
      {
        name: 'GA Middleware System (OTA integrations)',
        client: { en: 'Garuda Indonesia with Tiket.com, Traveloka, Trip.com', id: 'Garuda Indonesia dengan Tiket.com, Traveloka, Trip.com' },
        body: {
          en: 'Integration reliability and secure data exchange between internal services and OTA partners. API communication stability, error handling and data handoff across dependent systems.',
          id: 'Keandalan integrasi dan keamanan pertukaran data antara layanan internal dan mitra OTA. Stabilitas komunikasi API, penanganan error, dan serah terima data antar sistem yang saling bergantung.',
        },
        tags: ['API', 'Integration', 'Postman'],
      },
      {
        name: 'Neo Middleware Dashboard',
        client: { en: 'Garuda Indonesia', id: 'Garuda Indonesia' },
        body: {
          en: 'Dashboard that monitors API usage by OTA partners. Data accuracy of usage figures against the source and filter behaviour.',
          id: 'Dashboard pemantau penggunaan API oleh mitra OTA. Akurasi angka penggunaan terhadap sumber data dan perilaku filter.',
        },
        tags: ['Functional', 'Data validation'],
      },
      {
        name: 'GA Data Parsing',
        client: { en: 'Garuda Indonesia', id: 'Garuda Indonesia' },
        body: {
          en: 'Parsing accuracy and data integrity from multiple sources: correct transformation and consistency between source and destination datasets.',
          id: 'Akurasi parsing dan integritas data dari berbagai sumber: transformasi yang benar dan konsistensi antara data sumber dan tujuan.',
        },
        tags: ['Data validation', 'SQL'],
      },
      {
        name: 'Garuda Indonesia Website Revamp',
        client: { en: 'Garuda Indonesia', id: 'Garuda Indonesia' },
        body: {
          en: 'Revamped modules and features on production-critical pages. Regression, cross-browser and negative testing.',
          id: 'Modul dan fitur hasil revamp di halaman yang kritis untuk produksi. Uji regresi, lintas browser, dan negatif.',
        },
        tags: ['Regression', 'Cross-browser', 'Negative'],
      },
    ],
  },
  {
    domain: { en: 'Aviation operations', id: 'Operasional penerbangan' },
    items: [
      {
        name: 'Aerotrans Transport Management System',
        client: { en: 'Aerotrans, web and mobile (Android, iOS)', id: 'Aerotrans, web dan mobile (Android, iOS)' },
        body: {
          en: 'Crew transport and fleet monitoring: real-time tracking, pickup and drop-off trips with complex status logic, maintenance scheduling and reporting. Automated regression suite in CI and a JMeter load test.',
          id: 'Transportasi kru dan pemantauan armada: pelacakan real-time, ritase antar dan jemput dengan logika status yang kompleks, jadwal perawatan, dan pelaporan. Suite regresi otomatis di CI dan load test JMeter.',
        },
        tags: ['Web', 'Mobile', 'Performance', 'Playwright', 'JMeter'],
      },
      {
        name: 'Virtual E-Briefing',
        client: { en: 'Citilink', id: 'Citilink' },
        body: {
          en: 'New crew briefing platform for dispatchers (web) and crew (iPad). Tester from project start: requirement review, test planning and open questions for the BA.',
          id: 'Platform briefing kru baru untuk dispatcher (web) dan kru (iPad). Tester sejak awal proyek: review kebutuhan, perencanaan uji, dan daftar pertanyaan untuk BA.',
        },
        tags: ['Static testing', 'Test planning'],
        ongoing: true,
      },
      {
        name: 'Route Management System',
        client: { en: 'Pelni', id: 'Pelni' },
        body: {
          en: 'Route management for a national shipping line. Functional and integration testing on a React, Java Spring Boot and PostgreSQL stack.',
          id: 'Manajemen rute untuk perusahaan pelayaran nasional. Uji fungsional dan integrasi pada stack React, Java Spring Boot, dan PostgreSQL.',
        },
        tags: ['Functional', 'Integration'],
      },
    ],
  },
  {
    domain: { en: 'Procurement and enterprise', id: 'Pengadaan dan enterprise' },
    items: [
      {
        name: 'E-Procurement',
        client: { en: 'ACS / Aerofood', id: 'ACS / Aerofood' },
        body: {
          en: 'Request-to-order reliability: approval rules, data completeness and workflow integrity. Automated the chain from purchase requisition through sourcing, workplan approval and vendor bidding to winner announcement, across staff, approver and vendor portals.',
          id: 'Keandalan alur request sampai order: aturan approval, kelengkapan data, dan integritas workflow. Mengotomasi rantai dari purchase requisition, sourcing, approval workplan, dan penawaran vendor sampai pengumuman pemenang, lintas portal staf, approver, dan vendor.',
        },
        tags: ['Workflow', 'Multi-role', 'Regression', 'Playwright'],
      },
      {
        name: 'E-Procurement',
        client: { en: 'Garuda Indonesia', id: 'Garuda Indonesia' },
        body: {
          en: 'E-procurement with a multi-level approval workflow, including notification behaviour per role.',
          id: 'E-procurement dengan workflow approval bertingkat, termasuk perilaku notifikasi per peran.',
        },
        tags: ['Workflow', 'Functional'],
      },
      {
        name: 'Sales Agent Monitoring System (SAMS)',
        client: { en: 'Web and mobile (Flutter)', id: 'Web dan mobile (Flutter)' },
        body: {
          en: 'Monitoring of sales agent activity on web and mobile. Functional testing on a React, Flutter, Java Spring Boot and MySQL stack.',
          id: 'Pemantauan aktivitas sales agent di web dan mobile. Uji fungsional pada stack React, Flutter, Java Spring Boot, dan MySQL.',
        },
        tags: ['Web', 'Mobile', 'Functional'],
      },
      {
        name: 'ADAMS Smart Document',
        client: { en: 'AI document management platform', id: 'Platform manajemen dokumen berbasis AI' },
        body: {
          en: 'Document management with AI search, OCR, approval and e-signature, contract lifecycle and meeting notes. Read and write regression with cleanup, role and access checks, and a compatibility suite on desktop browsers, phones and tablets.',
          id: 'Manajemen dokumen dengan pencarian AI, OCR, approval dan tanda tangan elektronik, siklus kontrak, dan notulen rapat. Regresi baca dan tulis dengan cleanup, pengecekan role dan akses, serta suite kompatibilitas di browser desktop, ponsel, dan tablet.',
        },
        tags: ['Access control', 'Compatibility', 'Regression', 'Playwright'],
      },
    ],
  },
  {
    domain: { en: 'Loyalty, healthcare and security', id: 'Loyalitas, kesehatan, dan keamanan' },
    items: [
      {
        name: 'AMALA (Asyst Managing Loyalty)',
        client: { en: 'Garuda Indonesia loyalty program', id: 'Program loyalitas Garuda Indonesia' },
        body: {
          en: 'Test plans and test cases for end-to-end loyalty journeys: member enrollment, profile management, points earning and redemption, and transaction history. Regression and UAT support toward release.',
          id: 'Test plan dan test case untuk alur loyalitas end-to-end: pendaftaran member, pengelolaan profil, perolehan dan penukaran poin, serta riwayat transaksi. Regresi dan dukungan UAT menuju rilis.',
        },
        tags: ['E2E', 'Regression', 'UAT'],
      },
      {
        name: 'Simklinik (Odoo ERP)',
        client: { en: 'Garuda Sentra Medika', id: 'Garuda Sentra Medika' },
        body: {
          en: 'Clinic service flow from appointment and medical examination to pharmacy and cashier. Data consistency, role-based process accuracy and integration across modules.',
          id: 'Alur layanan klinik dari pendaftaran dan pemeriksaan medis sampai farmasi dan kasir. Konsistensi data, ketepatan proses per peran, dan integrasi antar modul.',
        },
        tags: ['E2E', 'Role-based', 'Integration'],
      },
      {
        name: 'Penetration test remediation',
        client: { en: 'Garuda Indonesia', id: 'Garuda Indonesia' },
        body: {
          en: 'Retesting of penetration test findings after patches, and regression around each fix so a closed finding stays closed.',
          id: 'Uji ulang temuan penetration test setelah patch, dan regresi di sekitar setiap perbaikan agar temuan yang sudah ditutup tetap tertutup.',
        },
        tags: ['Security', 'Remediation'],
      },
    ],
  },
];

// Achievements as stated by the owner on 22 Nov 2026. Event names and dates checked against
// the certificate (BRI GAMA IBCC) and the Fasilkom UI Instagram posts (IDLS 2026).
// pos is the CSS object-position for the cropped thumbnail. The full photo opens uncropped.
export type Photo = { base: string; w: number; h: number; alt: T; pos?: string };
export type Achievement = {
  title: T;
  event: T;
  date: T;
  detail: T;
  link?: { href: string; label: T };
  photos?: Photo[];
};

export const achievements: Achievement[] = [
  {
    title: { en: 'Most Outstanding Student, MTI Universitas Indonesia', id: 'Most Outstanding Student, MTI Universitas Indonesia' },
    event: {
      en: 'Indonesia Digital Leadership Summit (IDLS) 2026, Master of Information Technology, Faculty of Computer Science, Universitas Indonesia',
      id: 'Indonesia Digital Leadership Summit (IDLS) 2026, Magister Teknologi Informasi, Fakultas Ilmu Komputer, Universitas Indonesia',
    },
    date: { en: '18 Oct 2026', id: '18 Okt 2026' },
    detail: {
      en: 'Received at the IDLS 2026 awards ceremony, which recognised the outstanding students of the MTI programme.',
      id: 'Diterima pada sesi penghargaan IDLS 2026 yang memberikan apresiasi kepada mahasiswa berprestasi program MTI.',
    },
    link: {
      href: 'https://www.instagram.com/p/De1Moi_E23A/',
      label: { en: 'IDLS 2026 recap by Fasilkom UI (Instagram)', id: 'Rekap IDLS 2026 oleh Fasilkom UI (Instagram)' },
    },
    photos: [
      {
        base: 'idls-award', w: 1600, h: 900, pos: 'center 40%',
        alt: { en: 'Receiving the Most Outstanding Student award on stage at IDLS 2026', id: 'Menerima penghargaan Most Outstanding Student di panggung IDLS 2026' },
      },
    ],
  },
  {
    title: { en: 'Head of Event Division, IDLS 2026 organising committee', id: 'Ketua Divisi Acara, panitia IDLS 2026' },
    event: {
      en: 'Indonesia Digital Leadership Summit (IDLS) 2026, Master of Information Technology, Faculty of Computer Science, Universitas Indonesia',
      id: 'Indonesia Digital Leadership Summit (IDLS) 2026, Magister Teknologi Informasi, Fakultas Ilmu Komputer, Universitas Indonesia',
    },
    date: { en: '18 Oct 2026', id: '18 Okt 2026' },
    detail: {
      en: 'Led an event team of 15+ people and designed every session of the summit, from concept to delivery on the day: an executive plenary, a focus group discussion on Indonesian AI regulation and governance, three parallel sessions (industry masterclass, research colloquium, alumni talks), a digital talent forum and the student awards. Coordinated 22 speakers and moderators from government (Komdigi, KemenPAN-RB, BSSN, Bappenas, OJK), industry and academia. The summit drew 350+ attendees from students, professionals and the public.',
      id: 'Memimpin tim acara beranggotakan 15+ orang dan menyusun seluruh konsep sesi summit sampai terlaksana di hari H: pleno eksekutif, focus group discussion regulasi dan tata kelola AI Indonesia, tiga sesi paralel (industry masterclass, kolokium riset, alumni talks), digital talent forum, dan penganugerahan mahasiswa. Mengoordinasikan 22 pembicara dan moderator dari pemerintah (Komdigi, KemenPAN-RB, BSSN, Bappenas, OJK), industri, dan akademisi. Summit dihadiri 350+ peserta dari kalangan mahasiswa, profesional, dan umum.',
    },
    link: {
      href: 'https://idls.cs.ui.ac.id/program/',
      label: { en: 'IDLS 2026 programme and speakers', id: 'Program dan pembicara IDLS 2026' },
    },
  },
  {
    title: { en: 'Top 10 Grand Finalist, Graduate Category', id: 'Top 10 Grand Finalist, Kategori Pascasarjana' },
    event: {
      en: 'BRI GAMA International Business Case Competition 2026, by BRI, FEB Universitas Gadjah Mada and KAFEGAMA',
      id: 'BRI GAMA International Business Case Competition 2026, oleh BRI, FEB Universitas Gadjah Mada, dan KAFEGAMA',
    },
    date: { en: '5 Sep 2026', id: '5 Sep 2026' },
    detail: {
      en: 'Reached the top 10 out of more than 60 graduate teams from around the world. As case and data lead in Team RAM (Universitas Indonesia), I co-designed a data integration and behavioural segmentation framework for BRI\'s MSME financing ecosystem and presented it at the Grand Final in Jakarta.',
      id: 'Masuk 10 besar dari lebih dari 60 tim pascasarjana dari berbagai negara. Sebagai case and data lead di Tim RAM (Universitas Indonesia), saya ikut merancang framework integrasi data dan segmentasi perilaku untuk ekosistem pembiayaan UMKM BRI dan mempresentasikannya di Grand Final di Jakarta.',
    },
    photos: [
      {
        base: 'gama-medal', w: 1200, h: 1596, pos: 'center 30%',
        alt: { en: 'Rifki Hidayatullah holding the grand finalist medal at the BRI GAMA IBCC 2026 announcement of champions', id: 'Rifki Hidayatullah memegang medali grand finalist di pengumuman juara BRI GAMA IBCC 2026' },
      },
      {
        base: 'gama-certificate', w: 1600, h: 1131,
        alt: { en: 'Grand Finalist certificate, Graduate Category, BRI GAMA IBCC 2026, awarded to Rifki Hidayatullah', id: 'Sertifikat Grand Finalist kategori pascasarjana BRI GAMA IBCC 2026 atas nama Rifki Hidayatullah' },
      },
    ],
  },
  {
    title: { en: 'Paper presenter, IT Case Research Colloquium', id: 'Pemakalah, IT Case Research Colloquium' },
    event: {
      en: 'Indonesia Digital Leadership Summit (IDLS) 2026, Universitas Indonesia',
      id: 'Indonesia Digital Leadership Summit (IDLS) 2026, Universitas Indonesia',
    },
    date: { en: '18 Oct 2026', id: '18 Okt 2026' },
    detail: {
      en: 'One of 10 papers selected for presentation: "Developer-Perceived AI Risk Management Readiness in an Indonesian Aviation IT Company Using NIST AI RMF 1.0".',
      id: 'Salah satu dari 10 paper yang terpilih untuk dipresentasikan: "Developer-Perceived AI Risk Management Readiness in an Indonesian Aviation IT Company Using NIST AI RMF 1.0".',
    },
    link: {
      href: 'https://www.instagram.com/p/DegsR7qE4UX/',
      label: { en: 'Selected papers announcement (Instagram)', id: 'Pengumuman paper terpilih (Instagram)' },
    },
  },
  {
    title: { en: 'Delegate, UI to UM Short Cultural Exchange', id: 'Delegasi, UI to UM Short Cultural Exchange' },
    event: {
      en: 'Faculty of Computer Science, Universitas Indonesia to Universiti Malaya and Universiti Kebangsaan Malaysia, Kuala Lumpur',
      id: 'Fakultas Ilmu Komputer Universitas Indonesia ke Universiti Malaya dan Universiti Kebangsaan Malaysia, Kuala Lumpur',
    },
    date: { en: '3–7 Aug 2026', id: '3–7 Agu 2026' },
    detail: {
      en: 'One of 30 Fasilkom UI student delegates, representing the Master of Information Technology students. The programme at Universiti Malaya covered modules on personal branding and on AI and autonomous decision-making in RoboCup soccer, followed by a cultural programme in Kuala Lumpur.',
      id: 'Salah satu dari 30 mahasiswa delegasi Fasilkom UI, mewakili mahasiswa Magister Teknologi Informasi. Program di Universiti Malaya berisi modul personal branding serta AI dan pengambilan keputusan otonom pada RoboCup soccer, dilanjutkan program budaya di Kuala Lumpur.',
    },
    link: {
      href: 'https://cs.ui.ac.id/2026/08/28/kunjungan-dosen-dan-mahasiswa-fasilkom-ui-ke-um-dan-ukm/',
      label: { en: 'Visit report by Fasilkom UI', id: 'Berita kunjungan oleh Fasilkom UI' },
    },
  },
];

// IT GRC case studies from coursework and thesis. Source: GRC CV of 14 Sep 2026.
// Organisations stay anonymised as in that CV.
export type CaseStudy = { title: T; context: T; framework: string; bullets: T[] };

export const grcCases: CaseStudy[] = [
  {
    title: {
      en: 'Information security risk assessment, Indonesian government agency',
      id: 'Asesmen risiko keamanan informasi, instansi pemerintah Indonesia',
    },
    context: { en: 'Coursework, Universitas Indonesia · 2026', id: 'Tugas kuliah, Universitas Indonesia · 2026' },
    framework: 'ISO/IEC 27005 · ISO/IEC 27001 Annex A · ISO/IEC 27002',
    bullets: [
      {
        en: 'Ran risk identification, analysis, evaluation and treatment: listed assets, threats and vulnerabilities, then ranked risks by likelihood and impact against defined acceptance criteria.',
        id: 'Menjalankan identifikasi, analisis, evaluasi, dan perlakuan risiko: mendata aset, ancaman, dan kerentanan, lalu memeringkat risiko berdasarkan kemungkinan dan dampak terhadap kriteria penerimaan risiko yang ditetapkan.',
      },
      {
        en: 'Recommended a treatment per risk (mitigate, transfer, accept, avoid) with controls mapped to ISO/IEC 27001 Annex A and ISO/IEC 27002 as implementation guidance.',
        id: 'Merekomendasikan perlakuan per risiko (mitigasi, transfer, terima, hindari) dengan kontrol yang dipetakan ke ISO/IEC 27001 Annex A dan ISO/IEC 27002 sebagai panduan implementasi.',
      },
    ],
  },
  {
    title: {
      en: 'Information security framework study, Indonesian state-owned enterprise (BUMN)',
      id: 'Studi framework keamanan informasi, BUMN Indonesia',
    },
    context: { en: 'Coursework, Universitas Indonesia · 2026', id: 'Tugas kuliah, Universitas Indonesia · 2026' },
    framework: 'ISO/IEC 27001 · NIST CSF',
    bullets: [
      {
        en: 'Applied ISMS principles and Annex A control domains to the case organisation, and mapped the NIST Cybersecurity Framework functions (Identify, Protect, Detect, Respond, Recover) to prioritise controls by risk.',
        id: 'Menerapkan prinsip ISMS dan domain kontrol Annex A pada organisasi kasus, serta memetakan fungsi NIST Cybersecurity Framework (Identify, Protect, Detect, Respond, Recover) untuk memprioritaskan kontrol berdasarkan risiko.',
      },
    ],
  },
  {
    title: {
      en: 'Enterprise architecture blueprint, private university',
      id: 'Blueprint enterprise architecture, universitas swasta',
    },
    context: { en: 'Coursework, Universitas Indonesia · 2025', id: 'Tugas kuliah, Universitas Indonesia · 2025' },
    framework: 'TOGAF ADM · Archi',
    bullets: [
      {
        en: 'Produced baseline and target architectures across business, data, application and technology domains.',
        id: 'Menyusun arsitektur baseline dan target pada domain bisnis, data, aplikasi, dan teknologi.',
      },
      {
        en: 'Ran a gap analysis, outlined migration steps and aligned the recommendations with the institution\'s strategy.',
        id: 'Melakukan gap analysis, menyusun langkah migrasi, dan menyelaraskan rekomendasi dengan strategi institusi.',
      },
    ],
  },
  {
    title: {
      en: 'IT asset management governance evaluation, PT XYZ',
      id: 'Evaluasi tata kelola manajemen aset TI, PT XYZ',
    },
    context: { en: 'Undergraduate thesis, Universitas Multimedia Nusantara · 2023 – 2024', id: 'Skripsi, Universitas Multimedia Nusantara · 2023 – 2024' },
    framework: 'COBIT 2019',
    bullets: [
      {
        en: 'Assessed the capability of IT asset management processes against COBIT 2019 governance and management objectives, using document review, interviews and questionnaires as evidence.',
        id: 'Menilai capability proses manajemen aset TI terhadap governance and management objectives COBIT 2019, dengan bukti dari telaah dokumen, wawancara, dan kuesioner.',
      },
      {
        en: 'Identified governance gaps and delivered recommendations to align IT asset management with business objectives.',
        id: 'Mengidentifikasi gap tata kelola dan memberikan rekomendasi agar manajemen aset TI selaras dengan tujuan bisnis.',
      },
    ],
  },
  {
    title: {
      en: 'IT service management improvement',
      id: 'Perbaikan manajemen layanan TI',
    },
    context: { en: 'Coursework, Universitas Multimedia Nusantara · 2023', id: 'Tugas kuliah, Universitas Multimedia Nusantara · 2023' },
    framework: 'ITIL',
    bullets: [
      {
        en: 'Documented current-state gaps in Incident, Problem and Change Management for case organisations and proposed target-state workflows, control points and roles.',
        id: 'Mendokumentasikan gap kondisi saat ini pada Incident, Problem, dan Change Management di organisasi kasus, lalu mengusulkan alur kerja target, titik kontrol, dan peran.',
      },
    ],
  },
];

export const skills: { group: T; items: string }[] = [
  { group: { en: 'Test design', id: 'Desain uji' }, items: 'STLC, risk-based testing, test scenario and test case design, boundary and negative cases, requirement traceability, test planning' },
  { group: { en: 'Manual testing', id: 'Manual testing' }, items: 'Functional, integration, regression, exploratory, negative, smoke, UAT, remediation, cross-browser and responsive' },
  { group: { en: 'Automation', id: 'Otomasi' }, items: 'Playwright + TypeScript (Page Object Model, fixtures, CI), Katalon Studio, Selenium, TestCafe' },
  { group: { en: 'API and performance', id: 'API dan performa' }, items: 'Postman (REST, schema, auth, error contract), JMeter (load, stress, percentiles)' },
  { group: { en: 'Data', id: 'Data' }, items: 'SQL, MySQL, PostgreSQL, DBeaver, source-to-destination reconciliation' },
  { group: { en: 'Delivery and tools', id: 'Delivery dan tools' }, items: 'Jira, Kiwi TCMS, Git, GitHub Actions, VS Code, Agile / Scrum' },
  { group: { en: 'Programming', id: 'Pemrograman' }, items: 'TypeScript, JavaScript, Python, Java' },
  { group: { en: 'IT governance, risk and compliance', id: 'Tata kelola, risiko, dan kepatuhan TI' }, items: 'COBIT 2019 (capability and maturity assessment), ISO/IEC 27001 and 27005, NIST CSF, TOGAF ADM, ITIL, control mapping, gap analysis, Archi' },
];

export const education: { school: string; degree: T; period: T; note?: T }[] = [
  {
    school: 'Universitas Indonesia',
    degree: { en: 'Master of Information Technology', id: 'Magister Teknologi Informasi' },
    period: { en: 'Jan 2025 – Dec 2026 · GPA 3.64 / 4.00', id: 'Jan 2025 – Des 2026 · IPK 3,64 / 4,00' },
    note: { en: 'In progress · focus on IT governance', id: 'Sedang berjalan · fokus tata kelola TI' },
  },
  {
    school: 'Universitas Multimedia Nusantara',
    degree: { en: 'Bachelor of Information Systems', id: 'Sarjana Sistem Informasi' },
    period: { en: 'Aug 2019 – Jan 2024 · GPA 3.23 / 4.00', id: 'Agu 2019 – Jan 2024 · IPK 3,23 / 4,00' },
  },
];

export const languages: T[] = [
  { en: 'Indonesian (native)', id: 'Bahasa Indonesia (penutur asli)' },
  { en: 'English (professional working proficiency)', id: 'Bahasa Inggris (profesional)' },
];
