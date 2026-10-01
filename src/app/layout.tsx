import type { Metadata } from "next";
import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SJ EMR | #1 EMR and Telemedicine Software for Bangladeshi Doctors",
  description:
    "Web-based EMR & Telemedicine platform for Bangladeshi doctors, chambers, and clinics. Features smart ePrescription with drug database, BMDC compliance, Zoom video consultation, and Android patient app.",
  keywords: [
    "EMR Bangladesh",
    "telemedicine software Bangladesh",
    "doctor prescription software",
    "BMDC compliant EMR",
    "SJ EMR",
    "e-prescription software Dhaka",
    "clinic management software Sylhet"
  ],
  authors: [{ name: "SJ Innovation LLC", url: "https://sjinnovation.com" }],
  openGraph: {
    title: "SJ EMR | #1 EMR and Telemedicine Software for Bangladeshi Doctors",
    description:
      "Transform your medical practice with fast e-prescriptions, integrated drug database, appointment scheduling, and Zoom telemedicine.",
    url: "https://emr.com.bd",
    siteName: "SJ EMR",
    locale: "en_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#fafbfc] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
