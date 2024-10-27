import { Syne } from "next/font/google"
import { Outfit } from "next/font/google"
import { Raleway } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["400", "500", "700", "600"] })
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", weight: ["400", "500", "700"] })

export const metadata = {
  title: "Educare",
  description: "Students happiness",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${outfit.variable} ${raleway.variable} font-raleway`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
