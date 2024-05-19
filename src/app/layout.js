import { Syne } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata = {
  title: "Educare",
  description: "Students happiness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} font-sans ${outfit.variable}`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
