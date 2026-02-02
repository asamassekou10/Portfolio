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
  title: "Alhassane Samassekou | AI Developer & SaaS Builder",
  description:
    "Portfolio of Alhassane Samassekou, AI Developer and Full-Stack SaaS Builder with a B.Tech in AI, A.S. in Computer Science, and certifications in AWS Deep Learning, Cisco Ethical Hacking, and Google Data Analytics.",
  keywords: [
    "AI Developer",
    "SaaS Builder",
    "Full Stack Developer",
    "Next.js",
    "Python",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
  ],
  openGraph: {
    title: "Alhassane Samassekou | AI Developer & SaaS Builder",
    description:
      "Building intelligent web applications, SaaS platforms, and developer tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
