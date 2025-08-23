import "./globals.css";
import NavbarComponent from "./components/navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/theme-provider";

export const metadata = {
  title: "Esma Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <ThemeProvider attribute="class">
          {/* Navbar at the top */}
          <NavbarComponent />
          {/* Main content grows to fill space */}
          <main className="flex-grow">{children}</main>
          {/* Footer at the bottom */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}