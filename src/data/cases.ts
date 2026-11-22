// Case studies. Facts come from the owner's own run records (Nov 2026). Client internals stay out:
// no account names, request numbers, defect IDs, hosts or screenshots of client systems.
// Every number here was measured on a real run. Do not round them up.
type T = { en: string; id: string };

export type CaseStudyPage = {
  slug: string;
  project: string; // matches Project.name in cv.ts, to link from the Work section
  projectClient: string; // matches Project.client.en, because two projects share a name
  title: T;
  summary: T;
  facts: { label: T; value: T }[];
  sections: { heading: T; paras?: T[]; bullets?: T[] }[];
  results: { value: string; label: T }[];
  stack: string[];
};

export const caseStudies: CaseStudyPage[] = [
  {
    slug: 'booking-middleware-regression',
    project: 'B2B Agent Platform',
    projectClient: 'Garuda Indonesia and Citilink',
    title: {
      en: 'Regression testing a booking platform through a middleware switch',
      id: 'Regresi platform booking saat pergantian middleware',
    },
    summary: {
      en: 'The B2B booking platform for travel agents moved its availability, pricing and booking calls to a new middleware. I turned an undocumented change into a 118-scenario automated regression that runs to a held booking and leaves no paid tickets behind.',
      id: 'Platform booking B2B untuk agen perjalanan memindahkan panggilan ketersediaan, harga, dan booking ke middleware baru. Saya mengubah perubahan yang tidak terdokumentasi menjadi regresi otomatis 118 skenario yang berjalan sampai booking ditahan, tanpa meninggalkan tiket berbayar.',
    },
    facts: [
      { label: { en: 'Product', id: 'Produk' }, value: { en: 'B2B Agent Platform, Garuda Indonesia and Citilink', id: 'B2B Agent Platform, Garuda Indonesia dan Citilink' } },
      { label: { en: 'Role', id: 'Peran' }, value: { en: 'QA / Software Test Engineer, PT Aero Systems Indonesia', id: 'QA / Software Test Engineer, PT Aero Systems Indonesia' } },
      { label: { en: 'When', id: 'Waktu' }, value: { en: 'November 2026', id: 'November 2026' } },
      { label: { en: 'Environment', id: 'Lingkungan' }, value: { en: 'Development environment, payment sandbox', id: 'Lingkungan development, sandbox pembayaran' } },
    ],
    sections: [
      {
        heading: { en: 'The problem', id: 'Masalahnya' },
        paras: [
          {
            en: 'Travel agents search, price, book and pay through this platform. Behind it, the calls for availability, fares and bookings were being moved to a new middleware. A regression would surface as missing fares or failed bookings in front of agents, so the change had to be checked across the whole booking flow before release.',
            id: 'Agen perjalanan mencari, melihat harga, memesan, dan membayar lewat platform ini. Di belakangnya, panggilan ketersediaan, tarif, dan booking dipindahkan ke middleware baru. Regresi akan muncul sebagai tarif yang hilang atau booking yang gagal di depan agen, jadi perubahan ini harus diperiksa di seluruh alur booking sebelum rilis.',
          },
          {
            en: 'There was no written test basis for the middleware change, every test account allowed only one session at a time, and a real booking on the test environment creates a real reservation record.',
            id: 'Tidak ada dasar uji tertulis untuk perubahan middleware, setiap akun uji hanya boleh satu sesi pada satu waktu, dan booking sungguhan di lingkungan uji membuat catatan reservasi sungguhan.',
          },
        ],
      },
      {
        heading: { en: 'What I did', id: 'Yang saya kerjakan' },
        bullets: [
          {
            en: 'Mapped the booking screens and their rules by exploration: passenger limits, cabin and booking-class behaviour, date windows and name rules. I kept confirmed rules apart from inferences and sent the open ones to the team as questions.',
            id: 'Memetakan layar booking dan aturannya lewat eksplorasi: batas penumpang, perilaku kabin dan kelas booking, rentang tanggal, dan aturan nama. Aturan yang sudah pasti saya pisahkan dari dugaan, dan yang belum jelas saya kirim ke tim sebagai pertanyaan.',
          },
          {
            en: 'Turned the rules into a scenario catalogue: one way, return and connecting trips, domestic and international routes, three cabins, passenger mixes and payment methods. I added the business team\'s own scenario sheet, which covered 52 booking and payment combinations, 21 of them not yet covered by my catalogue.',
            id: 'Mengubah aturan itu menjadi katalog skenario: perjalanan sekali jalan, pulang pergi, dan transit, rute domestik dan internasional, tiga kabin, kombinasi penumpang, dan metode pembayaran. Saya menambahkan lembar skenario dari tim bisnis yang mencakup 52 kombinasi booking dan pembayaran, 21 di antaranya belum tercakup katalog saya.',
          },
          {
            en: 'Built the catalogue into one data-driven Playwright spec with one test per scenario, filters by priority, group and ID, a resume option, and a safe mode that stops before a booking is created.',
            id: 'Membangun katalog itu menjadi satu spec Playwright berbasis data, satu test per skenario, dengan filter prioritas, grup, dan ID, opsi melanjutkan run, serta mode aman yang berhenti sebelum booking dibuat.',
          },
          {
            en: 'Ran every scenario up to a held booking without payment. Holds expire on their own at the payment time limit, so the suite leaves no paid tickets behind.',
            id: 'Menjalankan setiap skenario sampai booking ditahan tanpa pembayaran. Booking yang ditahan batal sendiri saat batas waktu bayar, jadi suite ini tidak meninggalkan tiket berbayar.',
          },
          {
            en: 'Logged each result as a JSON line with screenshots as evidence, then retested failures with later travel dates and on a second account, to separate test data and account problems from real defects.',
            id: 'Mencatat setiap hasil sebagai baris JSON dengan screenshot sebagai bukti, lalu menguji ulang kegagalan dengan tanggal perjalanan lebih jauh dan dengan akun kedua, untuk memisahkan masalah data uji dan akun dari defect yang sebenarnya.',
          },
        ],
      },
      {
        heading: { en: 'Decisions that mattered', id: 'Keputusan yang menentukan' },
        bullets: [
          {
            en: 'One worker, no retries. The accounts are single-session, so parallel runs would log each other out, and a retry would create a second booking.',
            id: 'Satu worker, tanpa retry. Akun hanya boleh satu sesi, jadi run paralel akan saling mengeluarkan, dan retry akan membuat booking kedua.',
          },
          {
            en: 'Failures were reported as symptoms with evidence, not as conclusions about the middleware, until a developer confirmed the cause.',
            id: 'Kegagalan dilaporkan sebagai gejala beserta bukti, bukan sebagai kesimpulan tentang middleware, sampai developer memastikan penyebabnya.',
          },
        ],
      },
    ],
    results: [
      { value: '118', label: { en: 'scenarios automated, from exploration and the business scenario sheet', id: 'skenario diotomasi, dari eksplorasi dan lembar skenario bisnis' } },
      { value: '1.4 h', label: { en: 'for an unattended 97-test run', id: 'untuk run 97 test tanpa ditunggui' } },
      { value: '21', label: { en: 'booking and payment combinations that were not covered before', id: 'kombinasi booking dan pembayaran yang sebelumnya belum tercakup' } },
      { value: '0', label: { en: 'paid tickets left behind by the suite', id: 'tiket berbayar yang tertinggal oleh suite' } },
    ],
    stack: ['Playwright', 'TypeScript', 'Page Object Model', 'Data-driven tests', 'JSON Lines logs', 'Kiwi TCMS'],
  },
  {
    slug: 'procurement-approval-chain',
    project: 'E-Procurement',
    projectClient: 'ACS / Aerofood',
    title: {
      en: 'Automating a procurement chain across roles, approval tiers and two portals',
      id: 'Otomasi rantai pengadaan lintas peran, jenjang approval, dan dua portal',
    },
    summary: {
      en: 'A purchase request in this e-procurement system passes through more than ten stages, several user roles and a separate vendor portal, and the number of approvers grows with the value. I automated the full chain, from requisition to the published winner announcement, for each approval tier.',
      id: 'Satu permintaan pembelian di sistem e-procurement ini melewati lebih dari sepuluh tahap, beberapa peran pengguna, dan portal vendor yang terpisah, dan jumlah approver bertambah sesuai nilai. Saya mengotomasi rantai lengkapnya, dari requisition sampai pengumuman pemenang yang dipublikasikan, untuk setiap jenjang approval.',
    },
    facts: [
      { label: { en: 'Product', id: 'Produk' }, value: { en: 'E-Procurement, ACS / Aerofood', id: 'E-Procurement, ACS / Aerofood' } },
      { label: { en: 'Role', id: 'Peran' }, value: { en: 'QA / Software Test Engineer, PT Aero Systems Indonesia', id: 'QA / Software Test Engineer, PT Aero Systems Indonesia' } },
      { label: { en: 'When', id: 'Waktu' }, value: { en: 'October 2026', id: 'Oktober 2026' } },
      { label: { en: 'Environment', id: 'Lingkungan' }, value: { en: 'Development environment, staff back office and vendor portal', id: 'Lingkungan development, back office staf dan portal vendor' } },
    ],
    sections: [
      {
        heading: { en: 'The problem', id: 'Masalahnya' },
        paras: [
          {
            en: 'A request goes from requisition through assignment, sourcing, owner estimate, workplan, invitation, vendor bidding, evaluation, auction and final result to the winner announcement. Requestors, procurement staff, approvers and vendors each act in their own session, and vendors use a separate portal.',
            id: 'Satu permintaan berjalan dari requisition, assignment, sourcing, owner estimate, workplan, undangan, penawaran vendor, evaluasi, lelang, dan hasil akhir sampai pengumuman pemenang. Requestor, staf pengadaan, approver, dan vendor masing-masing bekerja di sesinya sendiri, dan vendor memakai portal terpisah.',
          },
          {
            en: 'Approval depth depends on the value: four approval levels up to the lowest tier and up to seven for the highest. Walking one request through by hand took long enough that the late stages and the higher tiers were rarely tested.',
            id: 'Kedalaman approval bergantung pada nilai: empat level approval untuk jenjang terendah dan sampai tujuh untuk jenjang tertinggi. Menjalankan satu permintaan secara manual memakan waktu cukup lama, sehingga tahap akhir dan jenjang atas jarang diuji.',
          },
        ],
      },
      {
        heading: { en: 'What I did', id: 'Yang saya kerjakan' },
        bullets: [
          {
            en: 'Mapped every stage, role and prerequisite from the UI. One rule turned out to block the whole chain: sourcing and the owner estimate must be approved before the workplan, or the winner announcement cannot be reached.',
            id: 'Memetakan setiap tahap, peran, dan prasyarat dari UI. Satu aturan ternyata memblokir seluruh rantai: sourcing dan owner estimate harus disetujui sebelum workplan, atau pengumuman pemenang tidak bisa dicapai.',
          },
          {
            en: 'Gave every role its own logged-in browser context, so one test drives requestor, approvers and vendor in order, across both portals.',
            id: 'Memberi setiap peran konteks browser sendiri yang sudah login, sehingga satu test menjalankan requestor, approver, dan vendor secara berurutan di kedua portal.',
          },
          {
            en: 'Saved the state after each stage, so a long run resumes where it stopped instead of starting a new request.',
            id: 'Menyimpan state setelah setiap tahap, sehingga run panjang bisa dilanjutkan dari titik berhenti tanpa membuat permintaan baru.',
          },
          {
            en: 'Asserted the end state in the lists, not the HTTP status. One approval call reported an error yet saved the change, so a status check would have failed a step that worked.',
            id: 'Memeriksa state akhir di daftar, bukan status HTTP. Satu panggilan approval melaporkan error padahal perubahan tersimpan, jadi pemeriksaan status akan menggagalkan langkah yang sebenarnya berhasil.',
          },
          {
            en: 'Ran one complete chain per approval tier, from requisition to the published winner announcement.',
            id: 'Menjalankan satu rantai lengkap per jenjang approval, dari requisition sampai pengumuman pemenang dipublikasikan.',
          },
        ],
      },
      {
        heading: { en: 'Decisions that mattered', id: 'Keputusan yang menentukan' },
        bullets: [
          {
            en: 'Each test builds its own request with a unique title instead of reusing existing ones, because shared test data had been the main source of flaky results.',
            id: 'Setiap test membuat permintaannya sendiri dengan judul unik, tidak memakai ulang data yang sudah ada, karena data uji bersama selama ini sumber utama hasil yang tidak stabil.',
          },
          {
            en: 'Operations that touch other testers\' data or cannot be undone run only behind an explicit opt-in flag.',
            id: 'Operasi yang menyentuh data tester lain atau tidak bisa dibatalkan hanya berjalan dengan flag opt-in yang eksplisit.',
          },
        ],
      },
    ],
    results: [
      { value: '~25 min', label: { en: 'for one request from requisition to the winner announcement', id: 'untuk satu permintaan dari requisition sampai pengumuman pemenang' } },
      { value: '4', label: { en: 'approval tiers each run as a complete chain', id: 'jenjang approval, masing-masing dijalankan sebagai rantai lengkap' } },
      { value: '2', label: { en: 'tiers passed through to publication', id: 'jenjang lolos sampai publikasi' } },
      { value: '5', label: { en: 'defects found in tiered approval, role permissions, request numbering, scheduling and feedback messages, reported with evidence', id: 'defect ditemukan di approval berjenjang, hak akses peran, penomoran permintaan, penjadwalan, dan pesan umpan balik, dilaporkan beserta bukti' } },
    ],
    stack: ['Playwright', 'TypeScript', 'Multi-context fixtures', 'Page Object Model', 'Resumable state', 'GitHub Actions', 'Kiwi TCMS'],
  },
];

export const caseUi = {
  label: { en: 'Case study', id: 'Studi kasus' },
  read: { en: 'Read the case study', id: 'Baca studi kasus' },
  back: { en: 'Back to the CV', id: 'Kembali ke CV' },
  results: { en: 'Results', id: 'Hasil' },
  stack: { en: 'Tools', id: 'Alat' },
  note: {
    en: 'Client systems are described without internal names, data or screenshots. Numbers come from measured test runs.',
    id: 'Sistem klien dijelaskan tanpa nama internal, data, atau screenshot. Angka berasal dari run pengujian yang terukur.',
  },
  other: { en: 'Other case study', id: 'Studi kasus lain' },
};
