Buatkan website personal portfolio developer modern menggunakan Nuxt 4 + TypeScript + Tailwind CSS.

Nama:
Satria Giri Syawalludin

Brand:
Satriags Developer

Lokasi:
Gresik, East Java, Indonesia

Posisi:
Full Stack Developer
Backend Developer
Odoo Developer

TUJUAN WEBSITE
Website ini adalah personal portfolio profesional untuk:
- recruiter internasional
- recruiter Indonesia
- software company
- enterprise client
- freelance / technical collaboration
- remote work

Website harus terlihat sebagai portfolio software engineer berpengalaman, bukan landing page startup dan bukan template bootcamp developer.

DESIGN SYSTEM

Gunakan warna utama:
Primary: #5577AA

Palette:
Primary: #5577AA
Primary Dark: #466794
Primary Light: #E8EEF6
Background: #FFFFFF
Background Soft: #F3F6FA
Dark: #182230
Dark Section: #101722
Text: #182230
Secondary Text: #667085
Border: #DCE3EC

Design:
- light-first
- modern SaaS style
- enterprise technology feel
- clean
- professional
- premium
- responsive
- large typography
- generous whitespace
- subtle animation
- subtle gradient
- minimal technical grid / dots / API lines

Jangan gunakan:
- cyberpunk
- neon
- hacker theme
- terlalu banyak gradient
- stock image programmer
- glassmorphism berlebihan

FRAMEWORK / STACK

Gunakan:
- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- @nuxtjs/i18n
- Nuxt SEO / useSeoMeta
- Lucide Icons
- optional: Nuxt UI jika memang membantu

Gunakan pnpm.

Buat clean architecture dan reusable components.

STRUKTUR PROJECT

components/
  Navbar.vue
  HeroSection.vue
  AboutSection.vue
  ExperienceSection.vue
  ExpertiseSection.vue
  TechStackSection.vue
  ProjectsSection.vue
  EducationSection.vue
  ContactSection.vue
  Footer.vue

pages/
  index.vue

locales/
  en.json
  id.json

data/
  experience.ts
  projects.ts
  skills.ts

Gunakan composable/data terpisah agar konten mudah diedit.

MULTI LANGUAGE

Website wajib mendukung:
- Bahasa Indonesia
- English

Default locale:
Indonesia

Tambahkan language switcher di navbar:
ID | EN

Gunakan @nuxtjs/i18n.

Semua konten utama, navigation, button, heading, description, experience dan project harus diterjemahkan melalui i18n.

URL:
/
untuk Indonesia

/en
untuk English

NAVBAR

Logo text:
Satria.

Menu:
Home
About
Experience
Expertise
Projects
Tech Stack
Contact

Indonesia:
Beranda
Tentang
Pengalaman
Keahlian
Proyek
Teknologi
Kontak

CTA:
Let's Work Together

Indonesia:
Mari Bekerja Sama

Navbar sticky dan berubah background ketika scroll.

HERO

English:

Headline:
Building Software That Solves Real Business Problems.

Description:
I'm Satria Giri Syawalludin, a Full Stack and Backend Developer specializing in enterprise applications, system integration, HRIS/HCMS, Odoo, APIs, and scalable software solutions.

Badge:
Based in Indonesia • Open to Remote & International Opportunities

CTA:
View My Experience
Contact Me

Indonesia:

Headline:
Membangun Software untuk Menyelesaikan Masalah Bisnis Nyata.

Description:
Saya Satria Giri Syawalludin, Full Stack dan Backend Developer dengan fokus pada enterprise application, system integration, HRIS/HCMS, Odoo, API, dan pengembangan software yang scalable.

Badge:
Indonesia • Terbuka untuk Remote & International Opportunities

CTA:
Lihat Pengalaman
Hubungi Saya

Tambahkan social:
LinkedIn
GitHub
Email

Di sisi kanan hero buat visual abstrak bertema software architecture:
- API
- database
- backend
- frontend
- cloud
- integration

Gunakan garis/node dengan warna #5577AA.

Jangan menggunakan foto stock programmer.

ABOUT

English heading:
More Than Just Writing Code

Indonesia:
Lebih dari Sekadar Menulis Kode

Content:
Software developer with 5+ years of professional experience building and maintaining business applications.

Experience includes:
- business requirements
- full-stack development
- backend APIs
- system integration
- enterprise application
- technical leadership

Background:
HRIS
HCMS
Odoo
SaaS
IoT
E-Commerce
POS
WMS
Custom Business Application

Stat cards:
5+ Years Experience
Enterprise Applications
Full Stack & Backend
Technical Leadership

EXPERIENCE

Buat vertical timeline.

1.
PT Sinergi Informatika Semen Indonesia (SISI)
Odoo Developer
July 2025 - Present

Development, implementation and enhancement:
- Employee Central
- Organization Management
- Employee Management
- Enterprise API integration
- Data integration

2.
PT SISI
Full Stack Developer / Team Leader
November 2022 - July 2025

Worked on HCM/HCMS systems for:
- PT Adhi Karya
- PT Wijaya Karya

Modules:
- Employee Management
- Organization Structure
- Payroll
- KPI
- Attendance
- User & Role Management
- CV Online
- System Integration

Team Leader responsibilities:
- developer progress
- implementation quality
- business requirements
- project timeline

3.
PT SISI
Full Stack Developer
May 2021 - October 2022

HRIS support and development for:
- Semen Indonesia Group
- Waskita Karya

4.
PT Sprint Karya Inovasi
Technical Partner / CTO Contract
August 2025 - Present

Technical direction and software architecture for SaaS and IoT products.

5.
Guidesantai GmbH
Backend Developer
May 2025 - Present

Backend development for:
KapalSantai
Perahuku

6.
Vismatech
Software Developer
February 2025 - Present

REST API development for oil spill management application.

7.
Satriags Developer
Founder / Software Developer
2019 - Present

IT services and software products.

EXPERTISE

Buat cards untuk:
Enterprise Software
Backend & REST API
System Integration
HRIS / HCMS
Odoo Development
SaaS & IoT
Business Process Analysis
Technical Leadership

TECH STACK

Frontend:
Vue.js
Nuxt
React
TypeScript
JavaScript
Tailwind CSS
Bootstrap

Backend:
NestJS
Laravel
Node.js
Bun
Go
REST API

Enterprise:
Odoo
Python

Database:
PostgreSQL
MySQL
MariaDB
Redis

Infrastructure:
Docker
Linux
Git
GitHub

PROJECTS

Buat modern project cards.

1.
Enterprise HCMS / HRIS

Description:
Enterprise HR platforms covering employee management, organization structure, payroll, KPI, attendance and integrations.

Category:
Enterprise Software

2.
Automated Helmet Washing SaaS

Description:
SaaS ecosystem connecting tablet applications, backend services, payment systems and IoT-enabled helmet washing machines.

Category:
SaaS / IoT / Payment Integration

3.
KapalSantai & Perahuku

Description:
Backend platform supporting boat and travel-related services.

Category:
Backend / Travel Technology

4.
Oil Spill Management System

Description:
REST API development for operational oil-spill management.

Category:
Backend / API

Untuk setiap project tampilkan:
- name
- description
- category
- technologies
- role
- detail button

Gunakan data dari data/projects.ts.

EDUCATION

Universitas Internasional Semen Indonesia

Bachelor of Computer Science (S.Kom.)
Information Systems
2017 - 2021

Cum Laude

LANGUAGES

Indonesia:
Native

English:
Developing Professional Proficiency

English text:
Comfortable with technical documentation and programming-related English. Currently improving professional spoken communication.

Indonesia:
Nyaman menggunakan dokumentasi teknis dan materi pemrograman berbahasa Inggris, serta sedang meningkatkan kemampuan komunikasi profesional secara lisan.

Bagian ini jangan terlalu menonjol.

CONTACT

English:
Have a Project or Opportunity?

I'm open to software development projects, technical collaborations, remote work and professional opportunities.

Indonesia:
Punya Proyek atau Peluang Kolaborasi?

Saya terbuka untuk proyek software development, kolaborasi teknis, remote work dan peluang profesional.

Tampilkan:
Email
LinkedIn
GitHub
Location

CTA:
Let's Talk
Hubungi Saya

FOOTER

Satria Giri Syawalludin
Software Developer

Tagline:
Building reliable software for real-world problems.

Indonesia:
Membangun software yang andal untuk kebutuhan dunia nyata.

RESPONSIVE

Harus optimal untuk:
- desktop
- laptop
- tablet
- mobile

SEO

Gunakan useSeoMeta.

English title:
Satria Giri Syawalludin | Full Stack & Backend Developer

Indonesia title:
Satria Giri Syawalludin | Full Stack, Backend & Odoo Developer

Meta description bilingual.

Tambahkan:
- Open Graph
- canonical URL placeholder
- structured data Person / WebSite jika memungkinkan

PERFORMANCE

- lazy loading
- semantic HTML
- accessible contrast
- aria-label
- keyboard navigation
- minimal JS
- clean Lighthouse score

ANIMATION

Gunakan animation ringan:
- fade-in on scroll
- hover cards
- navbar transition
- subtle hero movement

Jangan gunakan animasi berat.

IMPORTANT

Jangan mengarang:
- achievement
- revenue
- angka impact
- client
- technology
- project metric

Gunakan hanya informasi yang diberikan.

Buat hasil akhir production-ready.

Setelah project selesai:
1. install dependency
2. jalankan lint
3. jalankan typecheck
4. jalankan build
5. perbaiki semua error
6. jalankan dev server

Gunakan pnpm.

Berikan README.md berisi:
- install
- dev
- build
- deployment
- cara mengganti konten
- cara mengganti translation
- cara menambahkan project baru