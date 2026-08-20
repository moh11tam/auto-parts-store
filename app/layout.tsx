import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUTO PARTS | قطع غيار السيارات",
  description: "متجر متخصص في بيع قطع غيار السيارات والإكسسوارات الأصلية",
  other: {
    "google": "notranslate", // يمنع جوجل تماماً من محاولة ترجمة الموقع
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      translate="no"
    >
      <body className="min-h-full flex flex-col bg-[#030705] text-white">
        {children}
      </body>
    </html>
  );
}