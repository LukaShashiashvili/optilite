import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import type { Viewport } from 'next';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "OPTILITE PRO",
  description: "OPTILITE PRO",
  keywords: 'react,meta,document,html,tags,optilite,optilitepro,light,screen,lightbar,TOP,SCREEN,HANGING,LIGHT,BAR,FOR,EYE,COMFORT',
  verification: {other:{
    name: 'facebook-domain-verification', 
    content: '99l8hf5ve0eplp1t9qo02419v889fp'
  }},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
