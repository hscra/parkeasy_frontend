import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import {Providers} from "./providers";

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

export const metadata: Metadata = {
  title: "ParkEasy",
  description: "Software Studio 2 Group Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Providers>
        <Header />
          <main id="main" className="w-[100%] h-[100%] flex justify-center items-center">
            <AppRouterCacheProvider>
              {children}
            </AppRouterCacheProvider>
          </main>
        </Providers>
      </body> 
    </html>
  );
}
