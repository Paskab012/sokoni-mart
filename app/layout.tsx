import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
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
      <body className={`${poppins.className} text-slate-700`}>
        <div className='flex flex-col min-h-screen'>
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
