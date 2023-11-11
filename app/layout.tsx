import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import { DigitalOrPhysicalContextProvider } from "./context/DigitalOrPhysicalContext";
import { LocationContextProvider } from "./context/LocationContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Café de las Ciudades",
  description: "Generated by CdlC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <LocationContextProvider>
            <DigitalOrPhysicalContextProvider>
              <ToasterContext />
     
              {children}
              <Footer />
            </DigitalOrPhysicalContextProvider>
          </LocationContextProvider>
        </AuthContext>
      </body>
    </html>
  );
}
