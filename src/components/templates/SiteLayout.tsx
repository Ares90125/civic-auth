import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DynamicProviders = dynamic(() =>
  import("@/contexts/Providers").then((mod) => mod.Providers)
);

export async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <Suspense>
          <DynamicProviders>
            <main className="flex flex-col items-center min-h-screen">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </main>
          </DynamicProviders>
        </Suspense>
      </body>
    </html>
  );
}
