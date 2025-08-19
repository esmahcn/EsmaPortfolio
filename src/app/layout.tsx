import Footer from "./components/Footer";
import NavbarComponent from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "Esma Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <NavbarComponent />
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}