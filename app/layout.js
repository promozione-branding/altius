import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/compoents/LayoutWrapper";
import Script from "next/script";

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
     


       <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18442142725"
          strategy="afterInteractive"
        />

        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18442142725');
          `}
        </Script>
         <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        
      </style>
              <link rel="canonical"href="https://www.altiuslighting.com/" />
        {/* JSON-LD Structured Data */}
        <Script
          id="altius-lighting-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.altiuslighting.com/#website",
                  "url": "https://www.altiuslighting.com/",
                  "name": "Altius Lighting",
                  "description":
                    "Altius Lighting is a trusted LED Light Manufacturer offering quality LED lighting products and reliable lighting solutions for residential, commercial, and industrial applications.",
                  "publisher": {
                    "@id":
                      "https://www.altiuslighting.com/#organization",
                  },
                  "inLanguage": "en-IN",
                },
                {
                  "@type": "Organization",
                  "@id":
                    "https://www.altiuslighting.com/#organization",
                  "name": "Altius Lighting",
                  "url": "https://www.altiuslighting.com/",
                  "description":
                    "Altius Lighting is an LED Light Manufacturer and supplier providing quality LED lighting products and energy-efficient lighting solutions for various applications.",
                  "knowsAbout": [
                    "LED Lighting",
                    "LED Light Manufacturer",
                    "LED Light Supplier",
                    "LED Lights",
                    "Energy Efficient Lighting",
                    "Industrial LED Lighting",
                    "Residential LED Lighting",
                    "LED Light Manufacturer in India",
                  ],
                },
              ],
            }),
          }}
        />


      </head>

      <body className="min-h-full  flex flex-col ">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
