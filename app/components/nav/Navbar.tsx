import React from "react";
import Link from "next/link";
import { Redressed } from "next/font/google";
import { FiShoppingCart } from "react-icons/fi";

import SearchComponent from "../common/search";
import Container from "../Container";
import ProfileComponent from "../common/userProfile";

const redressed = Redressed({
  subsets: ["latin"],
  weight: "400"
});

function Navbar() {
  return (
    <div className='sticky top-0 w-full bg-#999999 z-30 shadow-sm px-12'>
      <div className='py-8 '>
        {/* <Container> */}
        <div className='flex items-center justify-between gap-3 md:gap-0 w-full'>
          <div className='hidden md:flex w-full items-center justify-start'>
            <SearchComponent />
          </div>
          <div className='w-full flex justify-center bg-red-400'>
            <Link
              href='/'
              className={`${redressed.className} text-6xl font-bold`}
            >
              Sokoni
            </Link>
          </div>
          <div className=' items-center gap-8 md:gap-12 w-full flex justify-center bg-purple-500'>
            <div>
              <ProfileComponent />
            </div>
            <div className='relative cursor-pointer'>
              <Link href='/cart'>
                <div>
                  <FiShoppingCart className='md:text-2xl text-xl' />
                  <span className='absolute -top-2 -right-2 text-[13px] bg-red-600 md:h-[18px] md:w-[18px] w-[14px] h-[14px] rounded-full grid place-items-center text-white'>
                    1
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* </Container> */}
      </div>
    </div>
  );
}

export default Navbar;
