import React from "react";
import Link from "next/link";
import { Redressed, Roboto_Mono } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";

import SearchComponent from "../common/search";
import Container from "../Container";
import ProfileComponent from "../common/userProfile";

const redressed = Redressed({
  subsets: ["latin"],
  weight: "400"
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono"
});

function UpNavBar() {
  return (
    <div className='sticky top-0 w-full bg-#999999 z-30 shadow-sm px-12'>
      <div className='py-6 border-b-[1px]'>
        <div className='flex items-center justify-between gap-3 md:gap-0'>
          <div className='flex items-center  gap-12'>
            <div className=' hover:bg-[#f2f2f2] duration-500 cursor-pointer h-full'>
              <Link
                href='/'
                className={`${roboto_mono.className} text-xl font-bold tracking-tight`}
              >
                MarketPlace
              </Link>
            </div>
            <div className='tracking-tight'>
              <Link
                href='/events'
                className={`${roboto_mono.className} text-xl font-bold tracking-tight`}
              >
                EventsPlanning
              </Link>
            </div>
          </div>

          {/* <div className='hidden md:block w-1/2'>
            <SearchComponent />
          </div> */}
          <div className='flex items-center gap-2 justify-end h-full'>
            <div className='relative cursor-pointer'>
              <Link
                href='/cart'
                className='font-normal hover:underline duration-500 text-slate-700 text-xl'
              >
                Buy online, visit our store
              </Link>
            </div>
            <div className='flex items-center'>
              <FaArrowRightLong className='text-xl' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpNavBar;
