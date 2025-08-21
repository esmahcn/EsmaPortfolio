import "./globals.css";
import NavbarComponent from "./components/navbar";
import Footer from "./components/Footer";
import Hyperspeed from "@/blocks/Backgrounds/Hyperspeed/Hyperspeed";
export const metadata = {
  title: "Esma Portfolio",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <NavbarComponent />
        {/* Main content grows to fill space */}
        <main className="flex-grow">
           <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            lanesPerRoad: 4,
            fov: 90,
            colors: {
              roadColor: 0x080808,
              background: 0x000000,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
              islandColor: 0x222222,
              shoulderLines: 0xffffff,
              brokenLines: 0xffff00,
            },
          }}
        />
      </div>
          {children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}