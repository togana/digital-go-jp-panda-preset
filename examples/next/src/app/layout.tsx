import type { Metadata } from "next";
import { notoSansJP, notoSansMono } from '@/lib/fonts'
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSansJP.variable} ${notoSansMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
