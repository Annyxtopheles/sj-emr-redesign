# SJ EMR — Brand Guidelines & Design System Specification

> **Version**: 2.0 (Platform Relaunch Edition)  
> **Parent Company**: SJ Innovation LLC  
> **Product**: SJ EMR (Electronic Medical Records & Telemedicine)  
> **Market**: Bangladesh (National & Regional Healthcare Ecosystem)  
> **Default Language**: Bengali (বাংলা) | Secondary: English (EN)  

---

## 1. Brand Essence & Strategic Overview

### 1.1 Brand Mission
To liberate healthcare professionals from manual paper burdens through clinical-grade, intuitive, and lightning-fast digital practice management software tailored specifically for Bangladeshi doctors, clinics, and diagnostic centers.

### 1.2 Brand Vision
To become the definitive, high-trust digital clinical backbone across Bangladesh—empowering doctors to deliver faster, safer, and data-driven patient care with zero administrative friction.

### 1.3 Core Target Audiences
1. **Solo Chamber Practitioners & Consultants**: Specialists and general practitioners transitioning from handwritten prescription pads to rapid e-prescriptions.
2. **Polyclinics & Group Practices**: Multi-chamber facilities requiring receptionist queue management, scheduling, and billing coordination.
3. **Diagnostic Centers & Radiologists**: Facilities managing digital X-Ray, CT, and MRI scans via Teleradiology and remote DICOM PACS reporting.
4. **Patients**: Receiving clear, legible printed prescriptions, SMS reminders, and secure Zoom telemedicine consultations.

---

## 2. Brand Positioning & Key Messages

### 2.1 Brand Headlines & Taglines

#### English
- **Primary Hero Headline**:  
  *"The #1 Doctor-First EMR & Telemedicine Software in Bangladesh"*
- **Supporting Narrative**:  
  *"Say goodbye to lost paper records and illegible handwriting. Empower your chamber or clinic with instant e-prescriptions, comprehensive Bangladeshi medicine database, Zoom video consultations, and an Android patient portal."*
- **Campaign Proposition (Relaunch Special)**:  
  *"Free for 60 Days — Full Clinical Software with Zero Commitment."*

#### Bengali (বাংলা — Default Locale)
- **মূল শিরোনাম (Primary Headline)**:  
  *“বাংলাদেশের চিকিৎসকদের জন্য #১ নির্ভরযোগ্য ইএমআর ও টেলিমেডিসিন সফটওয়্যার”*
- **সহায়ক বক্তব্য (Supporting Narrative)**:  
  *“হারিয়ে যাওয়া কাগজের ফাইল এবং অস্পষ্ট হাতের লেখার দিন শেষ। বিল্ট-ইন বাংলাদেশি ড্রাগ ডেটাবেস, মাত্র ৬০ সেকেন্ডে ই-প্রেসক্রিপশন, স্বয়ংক্রিয় জুম ভিডিও কল এবং অ্যান্ড্রয়েড পেশেন্ট পোর্টাল দিয়ে আপনার চেম্বারকে করুন আধুনিক ও ডিজিটাল।”*
- **রিলঞ্চ বিশেষ ক্যাম্পেইন (Relaunch Proposition)**:  
  *“৬০ দিনের ফ্রি ট্রায়াল — কোনো অগ্রিম পেমেন্ট বা হিডেন চার্জ নেই।”*

### 2.2 Proof Points & Verified Statistics
The following metrics are core brand trust anchors and must appear prominently on marketing touchpoints:

| Metric | Bangla Representation | English Representation | Context |
| :--- | :--- | :--- | :--- |
| **62,000+** | ৬২,০০০+ সম্পন্ন প্রেসক্রিপশন | 62,000+ Consultations Completed | Real clinical usage volume across chambers |
| **< 60s** | < ৬০ সে. প্রেসক্রিপশন প্রস্তুত | < 60s Consultation to Rx | High-speed prescription generation speed |
| **2+ Hrs** | ২+ ঘণ্টা প্রতিদিন সময় সাশ্রয় | 2+ Hrs Daily Time Saved | Administrative time saved per practitioner |
| **0%** | ০% রেকর্ড হারানোর ঝুঁকি | 0% Lost Patient Records | Cloud backup & permanent patient history safety |

---

## 3. Brand Voice, Tone & Bilingual Principles

### 3.1 Personality Attributes
- **Doctor-Centric & Respectful**: We respect clinical expertise. The software works around the doctor's flow, never dictating or complicating their routine.
- **Clinically Authoritative & Compliant**: Grounded in medical ethics, BMDC compliance, and international data standards.
- **Fast & Utilitarian**: Clear, concise communication without empty corporate jargon.
- **Empathetic & Locally Rooted**: Deeply attuned to local chamber challenges (load shedding, unorganized paper files, fast patient turnover, local drug generics).

### 3.2 Bilingual Standard Operating Procedures
- **Bengali by Default (`bn`)**: As a Bangladesh-first healthcare solution, all initial visits, hard refreshes, and public landing states must render in pure, natural Bengali.
- **Instant English Toggle (`en`)**: Provide an immediate, unencumbered navbar toggle (`বাং | EN`) for international or English-preferred clinicians.
- **Clarity Over Verbosity**:
  - Keep button labels brief (2–3 words maximum).
  - Avoid text wrapping inside buttons on hover.
  - Good: `৬০ দিনের ট্রায়াল`, `ডেমো বুক করুন`, `ডাক্তার লগইন`.
  - Avoid: `৬০ দিনের ফ্রি ট্রায়াল শুরু করুন` (prone to awkward line breaks).

---

## 4. Visual Identity & Color System

The SJ EMR color system represents clinical precision, healing, digital vitality, and institutional trustworthiness.

### 4.1 Primary Brand Green (Healing & Vitality)

| Token / Role | Tailwind Class | Hex Value | Usage Guidance |
| :--- | :--- | :--- | :--- |
| **Brand Primary** | `bg-emerald-600` / `text-emerald-600` | `#059669` | Primary action buttons, key metrics, active accents |
| **Brand Hover / Active** | `bg-emerald-700` | `#047857` | Hover states for primary buttons, deep text accents |
| **Brand Vibrant** | `bg-emerald-500` | `#10b981` | Gradients, pulse indicators, highlight rings |
| **Brand Dark Forest** | `bg-emerald-950` / `text-emerald-950` | `#022c22` | Rich card headers, high-contrast dark surfaces |
| **Brand Tint Light** | `bg-emerald-50` / `border-emerald-200` | `#ecfdf5` / `#a7f3d0` | Selected tabs, verification badges, chip backgrounds |

### 4.2 Neutral & Foundation Palette

| Token / Role | Tailwind Class | Hex Value | Usage Guidance |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `bg-[#fafbfc]` | `#fafbfc` | Global application page background |
| **Surface Pure White** | `bg-white` | `#ffffff` | Cards, modals, elevated surfaces, showcase frames |
| **Subtle Surface** | `bg-slate-50` | `#f8fafc` | Unselected tab pills, alternate section strips |
| **Border Soft** | `border-slate-200` | `#e2e8f0` | Dividers, card boundaries, structural outlines |
| **Border Interactive** | `border-slate-300` | `#cbd5e1` | Input borders, secondary button outlines |
| **Text Primary** | `text-slate-900` | `#0f172a` | Headlines, primary data values, high-emphasis text |
| **Text Secondary** | `text-slate-600` | `#475569` | Explanatory copy, subtitles, body content |
| **Text Muted** | `text-slate-400` | `#94a3b8` | Metadata, disabled states, subtle icon fills |

### 4.3 Specialty & Teleradiology Dark Palette

| Token / Role | Hex Value | Usage Guidance |
| :--- | :--- | :--- |
| **PACS Viewport Dark** | `#020617` / `#0b0f19` | High-contrast background for DICOM X-Ray & CT viewers |
| **Radiology Sky Accent** | `#38bdf8` / `#0284c7` | Inverted bone contours, measurement tools, slice highlights |
| **Clinical Amber Caution** | `#d97706` / `#fef3c7` | Allergy alerts, drug interaction warnings |

---

## 5. Typography Hierarchy

### 5.1 Typefaces
- **Primary Latin Font**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `sans-serif`.
- **Primary Bengali Font**: `Noto Sans Bengali`, `Hind Siliguri`, `SolaimanLipi`, `sans-serif`.

### 5.2 Typographic Scale

| Level | Size (Desktop / Mobile) | Weight | Leading | Tracking |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | `3.75rem (60px)` / `2.25rem (36px)` | Extrabold (800) | `1.15` | `tight` |
| **Section Title (H2)**| `2.25rem (36px)` / `1.75rem (28px)` | Extrabold (800) | `1.2` | `tight` |
| **Subsection (H3)**   | `1.5rem (24px)` / `1.25rem (20px)` | Bold (700) | `1.3` | `normal` |
| **Card Header (H4)**  | `1.125rem (18px)` / `1rem (16px)` | Bold (700) | `1.35` | `normal` |
| **Lead Subtitle**     | `1.25rem (20px)` / `1rem (16px)` | Regular/Medium | `1.6` | `normal` |
| **Body Standard**     | `0.875rem (14px)` / `0.8125rem (13px)`| Regular (400) | `1.5` | `normal` |
| **Badges / Microcopy**| `0.6875rem (11px)` / `0.75rem (12px)`| Semibold (600) | `1.2` | `wide` |

---

## 6. Logo System & Institutional Trust Marks

### 6.1 Brand Logos
- **Horizontal Master Logo**:  
  - Location: `/public/assets/sj-emr-logo.svg` (and `/public/assets/logo.svg`).
  - Dark Theme Variant: `/public/assets/logo-white.png`.
  - Icon / App Mark: `/public/assets/sj-ai-lite-icon.png`.
- **Clear Space**: Always maintain clear space equal to the height of the "SJ" emblem around the entire lockup. Never crowd with text or competing graphics.

### 6.2 Institutional Co-Branding Badges
SJ EMR operates under strict compliance and institutional affiliations in Bangladesh. The three trust badges must always appear uniform in style, color, and padding:

- **Unified Style**: `text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-flex items-center gap-1.5 shadow-2xs`
1. **BMDC Standard Compliance**:
   - Logo: `/assets/BMDC Logo 1.svg`
   - Label: `BMDC Standard Compliant` / `বিএমডিসি স্ট্যান্ডার্ড মানসম্মত`
2. **BASIS Member (Bangladesh Association of Software & Information Services)**:
   - Logo: `/assets/BASIS Logo.svg`
   - Label: `BASIS Member #1732` / `বেসিস সদস্য #১৭৩২`
3. **SCCI Member (Sylhet Chamber of Commerce & Industry)**:
   - Logo: `/assets/SCCI Logo.svg`
   - Label: `SCCI Member` / `এসসিসিআই সদস্য`

---

## 7. UI Components & Button Hierarchy

To prevent UX friction and visual confusion between conversion actions and passive category selectors, follow this strict four-tier hierarchy:

### Tier 1: Primary Conversion Action (Specular High-Impact)
- **Component**: `<SpecularButton />`
- **Purpose**: Reserved exclusively for high-intent conversions (e.g., "Book Demo", "বুক ডেমো").
- **Visuals**: Emerald gradient, glossy specular light reflection on hover, high elevation (`shadow-md`), white text.

### Tier 2: Secondary Action & Utility Buttons
- **Purpose**: "Free for 60 Days", "Doctor Login", "View Pricing".
- **Visuals**:
  ```tsx
  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all whitespace-nowrap"
  ```
- **Icon**: Emerald icon (`text-emerald-600`) paired with neutral dark text.

### Tier 3: Category Selectors, Tabs & Filters (Non-CTA)
- **Purpose**: Radiologist Modality Tabs, Form User Profiles (`BMDC Doctor` / `Clinic` / `Patient`), Specialty Filters.
- **Rule**: Must NEVER mimic high-impact conversion buttons.
- **Visuals**:
  - **Active Tab**: `bg-emerald-50 border-emerald-400 text-emerald-950 ring-1 ring-emerald-500/20 font-bold shadow-2xs` with `text-emerald-700` icon.
  - **Inactive Tab**: `bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100` with `text-emerald-700/70` icon.

### Tier 4: Ghost & Text Navigation Links
- **Purpose**: Navbar items, footer links, inline documentation.
- **Visuals**: `text-slate-600 hover:text-emerald-700 transition-colors font-medium`.

---

## 8. Card Styling, Depth & Interactive Canvas FX

### 8.1 Card Shells
- **Border Radius**: `rounded-2xl` for content cards; `rounded-3xl` for major feature showcases and banners.
- **Borders**: Subdued borders (`border border-slate-200/90` or `border border-emerald-200/80`).
- **Shadows**: Clean, modern micro-shadows (`shadow-xs` to `shadow-sm`), avoiding muddy drop-shadows.

### 8.2 Interactive Canvas Effects
1. **Background Ripple Outlines**:
   - Subtle interactive brand-green grid outline across the hero section canvas (`BackgroundRippleEffect`).
2. **Cursor Lattice Grid (`CursorGrid.tsx`)**:
   - Applied to elevated cards (e.g. Technology Dispatch card, Specialty Modules card).
   - Features radial falloff masks so grid lines fade smoothly without hard rectangular bounds.

---

## 9. Current Campaign Implementation: Free for 60 Days

- **Directive**: CEO-approved 60-day trial offer for product relaunch.
- **Pricing Card**:
  - Tag: `60-Day Free Relaunch` / `৬০ দিনের ফ্রি ট্রায়াল (রিলঞ্চ অফার)`
  - Period: `Free for 60 days` / `৬০ দিনের জন্য সম্পূর্ণ ফ্রি`
  - Button: `60-Day Trial` / `৬০ দিনের ট্রায়াল`
  - Subtitle: *"Start with our relaunch special: Free for 60 days. Upgrade or cancel anytime with complete data ownership."*
- **Form Synchronization**:
  - Selecting the 60-day trial in the pricing table automatically prefills and selects `Free (60 Days Trial)` in the onboarding demo modal.

---

## 10. Brand Governance & Codebase Standards

1. **Commit Cadence**: Atomic, discrete git commits following Conventional Commits (`feat:`, `fix:`, `style:`, `refactor:`, `chore:`).
2. **Build Verification**: Always verify clean compilation via `npm run build` with zero TypeScript or Turbopack warnings before merging.
3. **No Unfinished States**: Never commit half-finished layouts or broken responsive breakpoints.
