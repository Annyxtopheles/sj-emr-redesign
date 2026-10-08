# SJ EMR — Clinical EMR & Telemedicine Platform

[![Next.js 16](https://img.shields.io/badge/Next.js-16.3.8-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.8-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Proprietary-emerald)](https://sjinnovation.com)

> **Doctor-First Electronic Medical Records (EMR) & Telemedicine Platform for Bangladeshi Healthcare Practices.**  
> Built and maintained by **SJ Innovation LLC**.  
> Primary Production Website: [emr.com.bd](https://emr.com.bd)

---

## 🌟 Overview

**SJ EMR** is engineered to eliminate paper prescription friction, unorganized physical case files, and administrative overhead for Bangladeshi doctors, polyclinics, hospitals, and diagnostic centers.

### Key Capabilities
- **60-Second Digital Prescriptions**: Built-in comprehensive Bangladeshi drug database (generics, brands, dosage schedules, side-effect alerts).
- **Automated Telemedicine**: Instant Zoom consultations integrated with automated patient SMS notifications.
- **Teleradiology & DICOM PACS**: Interactive workstation simulator for remote X-Ray, CT, and MRI image evaluation and diagnostic reporting.
- **3D "Go Paperless" Stage**: Interactive 3D paper crumple transition showcasing real-world transformation from handwritten prescription pads to structured digital records.
- **Clinical AI & Chamber Automation**: OPD queue tokens, receptionist routing, appointment scheduling, and BMDC-compliant patient histories.
- **Bangladesh-First Bilingual Support**: Bengali (`bn`) by default with instant English (`en`) toggling and persistent language sync.
- **Relaunch Campaign**: 60-Day Free Evaluation (`ফ্রি ৬০ দিনের ট্রায়াল`) with zero upfront payment.

---

## 🎨 Brand & Design System

The platform follows a strict 3-tier color architecture and clinical UI design system. For complete details, see [`BRAND_GUIDELINES.md`](./BRAND_GUIDELINES.md).

| Token | Name | HEX | Role |
| :--- | :--- | :--- | :--- |
| **Primary** | Emerald Green | `#059669` | High-intent conversion CTAs, key statistics, active states |
| **Secondary** | Deep Forest | `#064E3B` | Specular button foundations, dark feature panels, contrast anchors |
| **Tertiary** | Medical Cyan | `#0EA5E9` | DICOM PACS imaging overlays, technical highlights, data visualization |
| **Neutrals** | Clinical White / Slate | `#FAFBFC` / `#0F172A` | Clean background canvas, card surfaces, and high-contrast typography |

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Static Site Generation / SSG)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **3D & Canvas Graphics**:
  - [Three.js](https://threejs.org/) & [OGL](https://github.com/oframe/ogl) for WebGL 3D paper physics
  - Custom HTML5 2D Canvas for responsive lattice grid effects (`CursorGrid.tsx`)
- **Animation & Interaction**:
  - [Motion](https://motion.dev/) (Framer Motion)
  - [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Typography**:
  - Bengali: [Hind Siliguri](https://fonts.google.com/specimen/Hind+Siliguri) via `next/font/google`
  - Latin: [Geist](https://vercel.com/font) & `Inter`
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```
sj-emr-redesign/
├── public/
│   └── assets/                     # Logos (SJ EMR, BMDC, BASIS, SCCI), screenshots, illustrations
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML layout with Google Font variables and SEO metadata
│   │   ├── page.tsx                # Main landing page (composed of 14 clinical sections)
│   │   ├── globals.css             # Tailwind v4 theme tokens, glassmorphism, and keyframe animations
│   │   └── blogs/
│   │       ├── page.tsx            # Blog index page with category filtering and search
│   │       └── [slug]/page.tsx     # Static SSG blog article reader with related posts & CTAs
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky header with hotline, language switcher, and doctor login
│   │   ├── HeroSection.tsx         # Hero with AuroraText headline and specular CTAs
│   │   ├── MergedStats.tsx         # Middle-aligned verified clinical impact statistics
│   │   ├── TrustBar.tsx            # BASIS (#1732), BMDC, and Sylhet Chamber accreditations
│   │   ├── VideoShowcase.tsx       # YouTube video walkthroughs and doctor advocacy
│   │   ├── FeatureDeepDive.tsx     # 3 Core Pillars + 10 specialized clinical modules
│   │   ├── DoctorWorkflowInteractive.tsx # 60-second step-by-step prescription generation wizard
│   │   ├── GoPaperlessInteractive.tsx    # 3D interactive paper crumpled pad transformation
│   │   ├── TeleradiologyShowcase.tsx     # PACS DICOM workstation simulator (X-Ray, Knee, Brain CT)
│   │   ├── TestimonialSection.tsx  # Verified doctor testimonials across Dhaka, Sylhet, Chittagong
│   │   ├── PricingSection.tsx      # Transparent BDT pricing tiers + Free 60-day relaunch plan
│   │   ├── DemoBookingForm.tsx     # Interactive BMDC doctor verification and Zoom demo scheduler
│   │   ├── FAQSection.tsx          # Accordion FAQ covering data security, offline mode, and setup
│   │   ├── Footer.tsx              # Official links, social media, and unified accreditation badges
│   │   ├── hero/
│   │   │   └── LiveSoftwareScreens.tsx   # Interactive tabbed software screen preview
│   │   └── ui/
│   │       ├── AuroraText.tsx            # Animated multi-color shimmering gradient text
│   │       ├── CursorGrid.tsx            # Canvas-based lattice grid with radial falloff
│   │       ├── PaperCrumple.tsx          # WebGL 3D paper mesh crumple simulation
│   │       ├── SpecularButton.tsx        # Glossy specular reflection interactive CTA button
│   │       ├── background-ripple-effect.tsx # Subtle green background outline lattice
│   │       └── GlowCard.tsx              # Hover-responsive spotlight card container
│   └── data/
│       └── blogs.ts                # 20+ comprehensive clinical and health-tech blog articles
├── BRAND_GUIDELINES.md             # Official brand guidelines, color system, and UI hierarchy
├── package.json                    # Project metadata, dependencies, and build scripts
└── tsconfig.json                   # Strict TypeScript configuration
```

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Annyxtopheles/sj-emr-redesign.git
   cd sj-emr-redesign
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build & Verification

To verify full static generation and compile all pages:

```bash
npm run build
```

This compiles:
- `○ /` (Home landing page)
- `○ /blogs` (Clinical blog directory)
- `● /blogs/[slug]` (All 20+ pre-rendered SSG blog articles)
- `○ /_not-found` (Custom 404 page)

To start the production server:
```bash
npm run start
```

---

## 🔒 Accreditations & Compliance

- **BMDC Standard**: Structured according to Bangladesh Medical & Dental Council clinical prescription directives.
- **BASIS Member**: SJ Innovation LLC is an accredited member of the Bangladesh Association of Software & Information Services (Member #1732).
- **SCCI Member**: Sylhet Chamber of Commerce & Industry registered enterprise.

---

## 📄 License & Ownership

Copyright © 2026 **SJ Innovation LLC**. All rights reserved.  
Proprietary medical practice software. Unauthorized copying, modification, or distribution is prohibited.
