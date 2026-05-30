import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joy Ria Sihombing | Software Engineering Student",
  description:
    "Portfolio of Joy Ria Sihombing — Applied Software Engineering student at Del Institute of Technology, passionate about Data Analytics, AI, and Software Development.",
  keywords: [
    "Joy Ria Sihombing",
    "Data Analyst",
    "AI Engineer",
    "Software Developer",
    "Del Institute of Technology",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0F172A] antialiased">
        {children}
      </body>
    </html>
  );
}
