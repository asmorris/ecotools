import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecotools",
  description: "A bunch of tools to save the earth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full w-full bg-emerald-950 dark:bg-sky-950">
        <body className={cn(inter.className, 'bg-emerald-950 dark:bg-sky-950')}>
          <ToastProvider />
          <Navbar />
          <main className="flex w-full h-full dark:bg-sky-950 bg-emerald-950">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
