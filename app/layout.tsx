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
  metadataBase: new URL("https://portfolio.abubakr.so"),
  title: "Abubakar Ali Abdulle | Software Engineer",
  description: "Software Engineer focused on backend, full-stack, mobile, and digital systems with hands-on experience building complete software platforms.",
  keywords: ["Abubakar Ali Abdulle", "Software Engineer", "Backend Developer", "Full-Stack Developer", "Digital Government"],
  authors: [{ name: "Abubakar Ali Abdulle" }],
  alternates: { canonical: "/" },
  openGraph: { title: "Abubakar Ali Abdulle | Software Engineer", description: "Software Engineer focused on backend, full-stack, mobile, and digital systems with hands-on experience building complete software platforms.", url: "https://portfolio.abubakr.so", siteName: "Abubakar Ali Abdulle", type: "website", images: [{ url: "/profile.png", width: 1200, height: 1200, alt: "Abubakar Ali Abdulle" }] },
  twitter: { card: "summary_large_image", title: "Abubakar Ali Abdulle | Software Engineer", description: "Software Engineer focused on backend, full-stack, mobile, and digital systems.", images: ["/profile.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
