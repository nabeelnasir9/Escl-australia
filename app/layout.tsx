/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  Bangers,
  Montserrat,
  Raleway,
  
} from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const montserat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserat",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const bangers = Bangers({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bangers",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ESCL – Industrial Services & Maintenance in Jubail, Saudi Arabia",
  description:
    "ESCL delivers professional industrial services in Jubail, Saudi Arabia. Specializing in plant maintenance, shutdowns & turnarounds, industrial cleaning, equipment servicing, and commissioning for oil & gas, petrochemical, steel and fertilizer industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jakarta.variable} ${bangers.variable} ${montserat.variable} ${raleway.variable}`}
    >
      <body className="font-raleway" suppressHydrationWarning={true}>
        {" "}
        <Navbar /> {/* Add the Navbar component here */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
