import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import Notification from "@/components/UI/Notification";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AGROS | Beranda",
  description: "Menghubungkan Dunia Logistik Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `${inter.className}
          grid grid-cols-1 grid-rows-1 bg-primary min-h-screen`
        }
      >
        <ReactQueryClientProvider>
          <ReduxProvider>
            <Header />
            <Notification />
            {children}
            <Footer />
          </ReduxProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
