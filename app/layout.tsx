import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories";
import UpNavBar from "./components/nav/UpNavbar";

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
  title: "Sokoni",
  description: "This is a sokoni e-shop app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${roboto_mono.className} text-slate-700`}>
        <div className='flex flex-col min-h-screen'>
          <div>
            <UpNavBar />
          </div>
          <Navbar />
          <div className='w-full'>
            <Categories />
          </div>
          <main className='flex-grow bg-#f2f2f2'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
