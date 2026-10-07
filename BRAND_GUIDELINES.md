# SJ EMR — Brand Guidelines

> **Brand**: SJ EMR (Electronic Medical Record & Telemedicine)  
> **Parent Organization**: SJ Innovation LLC  
> **Primary Region**: Bangladesh (National Clinical Practice)  
> **Default Language**: Bengali (বাংলা) | Secondary: English (EN)  

---

## 1. Brand Identity & Strategy

### 1.1 Mission
To eliminate paper-based administrative friction in healthcare by equipping Bangladeshi doctors, clinics, and diagnostic centers with fast, intuitive, and secure clinical software.

### 1.2 Core Positioning
**Doctor-First Clinical Software** — engineered around the daily realities of Bangladeshi medical chambers (fast OPD flow, local generics database, instant pad printing, and telemedicine).

### 1.3 Key Brand Anchors
- **Primary Tagline (Bengali)**: “বাংলাদেশের চিকিৎসকদের জন্য #১ নির্ভরযোগ্য ইএমআর ও টেলিমেডিসিন সফটওয়্যার”
- **Primary Tagline (English)**: “The #1 Doctor-First EMR & Telemedicine Software in Bangladesh”
- **Campaign Proposition**: “Free for 60 Days” (৬০ দিনের ফ্রি ট্রায়াল)

---

## 2. Core Color Palette

A disciplined 3-tier color system paired with functional neutrals.

```
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│     PRIMARY     │   │    SECONDARY    │   │    TERTIARY     │
│  Emerald Green  │   │   Deep Forest   │   │  Medical Cyan   │
│     #059669     │   │     #064E3B     │   │     #0EA5E9     │
└─────────────────┘   └─────────────────┘   └─────────────────┘
```

### 2.1 Primary Brand Color: Emerald Green
The core brand signature representing clinical health, precision, and vital practice growth.

- **HEX**: `#059669`
- **RGB**: `5, 150, 105`
- **CMYK**: `83, 15, 74, 2`
- **Pantone**: `7726 C` (Approx.)
- **Role**: Primary conversion CTAs, hero accents, active status indicators, and key metric callouts.
- **Tailwind**: `emerald-600`

### 2.2 Secondary Brand Color: Deep Forest
The anchor color providing clinical gravitas, authority, and high-contrast stability.

- **HEX**: `#064E3B`
- **RGB**: `6, 78, 59`
- **CMYK**: `88, 38, 77, 42`
- **Pantone**: `5535 C` (Approx.)
- **Role**: Base color for specular buttons, dark feature surfaces, high-contrast badges, and grounding elements.
- **Tailwind**: `emerald-900` / `emerald-950`

### 2.3 Tertiary / Accent Color: Medical Cyan
The technology and precision accent representing digital intelligence, imaging diagnostics, and telemedicine connectivity.

- **HEX**: `#0EA5E9`
- **RGB**: `14, 165, 233`
- **CMYK**: `74, 23, 0, 0`
- **Pantone**: `299 C` (Approx.)
- **Role**: Teleradiology & DICOM PACS viewer highlights, interactive focus rings, and secondary callouts.
- **Tailwind**: `sky-500`

---

## 3. Neutral Palette

Functional neutrals maintain high legibility and a clean, sterile clinical interface.

| Role | Color Name | HEX | RGB | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas** | Clinical Off-White | `#FAFBFC` | `250, 251, 252` | Global application page background |
| **Surface** | Pure White | `#FFFFFF` | `255, 255, 255` | Cards, modals, containers, form inputs |
| **Text Primary** | Deep Charcoal | `#0F172A` | `15, 23, 42` | Headlines, primary text, high-emphasis copy |
| **Text Muted** | Slate Gray | `#475569` | `71, 85, 105` | Body copy, subtitles, descriptive text |
| **Border / Rule** | Soft Slate | `#E2E8F0` | `226, 232, 240` | Card borders, dividers, subtle separators |

---

## 4. Color Application Rules (60-30-10 Rule)

- **60% Dominant (Neutrals)**: `#FAFBFC` canvas, `#FFFFFF` card surfaces, and `#0F172A` typography. Keeps the software clean, readable, and non-fatiguing.
- **30% Structural (Secondary & Soft Green)**: `#064E3B` dark anchors and `#EFFFF5` (tinted emerald surface) for badges, chips, and table headers.
- **10% Accent (Primary & Tertiary)**: Reserved strictly for interactive conversion points:
  - `#059669` (Primary) on actionable buttons and key KPIs.
  - `#0EA5E9` (Tertiary) on digital diagnostics, PACS tools, and technology accents.

> **Rule**: Do not invent arbitrary shades of green. Use the defined Primary (`#059669`) and Secondary (`#064E3B`) tokens. Tints (`#EFFFF5` for badge backgrounds) derive strictly from the Primary token.

---

## 5. Typography

### 5.1 Fonts
- **Bengali (Default)**: `Hind Siliguri`, `Noto Sans Bengali`, `sans-serif`
- **English**: `Inter`, `system-ui`, `-apple-system`, `sans-serif`

### 5.2 Type Hierarchy

| Level | Size | Weight | Usage |
| :--- | :--- | :--- | :--- |
| **H1 (Hero Headline)** | `36px – 60px` | Extrabold (800) | Landing page hero |
| **H2 (Section Header)** | `28px – 36px` | Extrabold (800) | Main section headings |
| **H3 (Card Title)** | `18px – 24px` | Bold (700) | Feature cards, modal titles |
| **Body Standard** | `14px – 16px` | Regular (400) / Medium (500) | Paragraphs, descriptions |
| **Microcopy / Badges** | `11px – 12px` | Semibold (600) | Status tags, compliance chips |

---

## 6. Logo & Institutional Trust Badges

### 6.1 Logo
- **Main Asset**: `/public/assets/sj-emr-logo.svg`
- **Clear Space**: Equal to the height of the "SJ" emblem on all four sides.
- **Minimum Width**: `140px` on desktop, `110px` on mobile.

### 6.2 Institutional Compliance Badges
All 3 accreditation badges in the footer share identical dimensions, padding, and styling:
- **Badge Style**: `text-[11px] font-semibold text-emerald-800 bg-[#EFFFF5] px-2.5 py-1 rounded border border-emerald-200 inline-flex items-center gap-1.5`
- **Badges**:
  1. **BMDC Compliance**: `/assets/BMDC Logo 1.svg` — `BMDC Standard Compliant` / `বিএমডিসি স্ট্যান্ডার্ড মানসম্মত`
  2. **BASIS Membership**: `/assets/BASIS Logo.svg` — `BASIS Member #1732` / `বেসিস সদস্য #১৭৩২`
  3. **SCCI Membership**: `/assets/SCCI Logo.svg` — `SCCI Member` / `এসসিসিআই সদস্য`

---

## 7. Interactive Components & CTA Hierarchy

To eliminate confusion between conversion buttons and category filters:

1. **Primary Conversion CTA**:
   - Styled with high-contrast specular reflections (`SpecularButton`) or solid Primary Green (`#059669`).
   - Reserved exclusively for high-intent actions: **Book Demo** (`ডেমো বুক করুন`), **Start Trial** (`৬০ দিনের ট্রায়াল`).
   - Copy must be concise (2 words maximum). Never allow multiline text wrapping on hover.
2. **Secondary Utility Buttons**:
   - White background (`#FFFFFF`), neutral border (`#CBD5E1`), dark text (`#0F172A`), with an emerald icon.
   - Example: **Doctor Login** (`ডাক্তার লগইন`), **Free for 60 Days** (`৬০ দিনের ফ্রি ট্রায়াল`).
3. **Category Selectors & Modality Tabs (Non-CTA)**:
   - Must never look like conversion buttons.
   - **Active**: Soft green tint background (`#EFFFF5`), green border, dark text.
   - **Inactive**: Neutral slate background (`#F8FAFC`), subtle border, slate text.
