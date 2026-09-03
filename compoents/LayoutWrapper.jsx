
"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Home/Navbar";
import Footer from "./Home/Footer";
import WhatsApp from "./WhatsApp";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();

    // Hide Navbar and Footer on all admin pages
    const isAdminPage = pathname.startsWith("/admin");

    if (isAdminPage) {
        return <>{children}</>;
    }

    return (
        <>
              <WhatsApp/>
        
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

