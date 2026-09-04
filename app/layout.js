import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/compoents/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "#1 LED Light Manufacturer in India | Elstrong",
  description: "Elstrong is a trusted LED light manufacturer offering energy-efficient, reliable, and modern LED lighting solutions for homes, offices, commercial spaces, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        
      </style>

      <body className="min-h-full  flex flex-col ">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
