import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories";
import UpNavBar from "./components/nav/UpNavbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono"
});

export const metadata: Metadata = {
  title: "VIMA APP",
  description: "This is a virtual market e-shop app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto_mono.className} bg-[#f2f2f2]`}>
        <div className='flex flex-col '>
          {/* <div>
            <UpNavBar />
          </div> */}
          <Navbar />

          <main className=' bg-#f2f2f2'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
