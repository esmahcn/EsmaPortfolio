import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Esma Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <Navbar />

        {/* Main content grows to fill space */}
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}