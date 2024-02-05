import React from "react";
import Image from "next/image";
import img from "../../assets/logo.svg";

import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className=' py-10 fixed z-50 flex justify-center w-full mx-auto'>
      <div className='w-full mx-40 px-8 h-20 gap-6 rounded-lg sm:flex justify-between items-center bg-[#F4F4F4] border-[0.5px] border-[#222222]'>
        <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish'>
          <Image
            className='w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom'
            src={img}
            alt='banner'
            width={2000}
            height={2000}
          />{" "}
        </div>

        <div className='w-full  relative bg-[#F4F4F4] hidden'>
          <input
            className='border-gray-800 border p-4 px-4 rounded-lg w-full'
            type='text'
            placeholder='Search your favorite item...'
          />

          <BsSearch
            className='absolute right-0 top-0 mr-5 mt-5 text-[#15A1DB]'
            size={20}
          />
        </div>

        <div className='hidden lg:flex gap-4 text-[#15A1DB] text-[30px]'>
          <BsSearch className='cursor-pointer' />
          <BiUser />

          <div className='relative'>
            <FiHeart />
            <div className='bg-[#15A1DB] rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
              0
            </div>
          </div>

          <div className='relative'>
            <HiOutlineShoppingBag />
            <div className='bg-[#15A1DB] rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
