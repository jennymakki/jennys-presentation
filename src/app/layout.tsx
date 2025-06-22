import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Jenny Makki",
  description: "Portfolio and projects by Jenny Makki",
  metadataBase: new URL("https://jennymakki.vercel.app/"),
  openGraph: {
    title: "Jenny Makki",
    description: "Portfolio and projects by Jenny Makki",
    images: [
      {
        url: "/Meta.png",
        width: 1200,
        height: 630,
        alt: "Jenny Makki Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenny Makki",
    description: "Portfolio and projects by Jenny Makki",
    images: ["/Meta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
