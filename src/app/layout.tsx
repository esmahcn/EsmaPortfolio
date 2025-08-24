"use client";

import "./globals.css";
import NavbarComponent from "./components/navbar";
import Footer from "./components/Footer";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Mounted state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
      >
        {/* Theme provider */}
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
          {mounted && (
            <>
              <NavbarComponent />
              <main className="flex-grow">{children}</main>
              <Footer />
            </>
          )}
        </NextThemesProvider>
      </body>
    </html>
  );
}