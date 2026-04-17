import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your City News & Off Licence | Leeds City Centre",
  description:
    "Late-night news, off licence, magazines, snacks and drinks on Bishopgate Street, Leeds LS1. Friendly service, great range.",
  openGraph: {
    title: "Your City News & Off Licence | Leeds",
    description:
      "Your neighbourhood newsagent and off licence in the heart of Leeds.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
