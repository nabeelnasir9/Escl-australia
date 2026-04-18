import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { MdOutlineWhatsapp } from "react-icons/md";
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
  title: "Meta Talent – Your Workforce Partner",
  description:
    "Meta Talent delivers professional workforce solutions. Specializing in labour hire, permanent recruitment, government staffing, HR consulting, workplace safety, and training across Australia.",
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
        <Navbar />
        {children}
        {/* <Footer /> */}
        <Link
          href="https://wa.me/61370676656"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MdOutlineWhatsapp className="h-8 w-8 text-white" />
        </Link>
      </body>
    </html>
  );
}
