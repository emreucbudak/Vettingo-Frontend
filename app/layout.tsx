import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeToggle } from "@/shared/ui/theme-toggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeScript = `(function(){try{var theme=window.localStorage.getItem("vettingo-theme");document.documentElement.classList.toggle("theme-dark",theme==="dark");}catch(_){}})();`;

export const metadata: Metadata = {
  title: "Vettingo",
  description: "Vettingo işe alım ve aday yÃ¶netim platformu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="vettingo-theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
