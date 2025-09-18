import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pick weights you’ll use
  variable: "--font-poppins",   // creates a CSS variable
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],       // for body text
  variable: "--font-inter",
});

export const metadata = {
  title: "Portfolio",
  description: "Rishab Singh Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-black text-gray-100">
          {children} 
      </body>
    </html>
  );
}
