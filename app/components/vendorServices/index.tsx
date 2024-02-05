import React from "react";
import Image from "next/image";

import VendorImg from "../../../public/vendor.svg";

const VendorServices = () => {
  return (
    <>
      <section className='overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark'>
        <div className=' mx-auto px-16 container'>
          <div className='flex items-center justify-between'>
            <div className='w-full px-4 lg:w-6/12'>
              <div className='flex items-center -mx-3 sm:-mx-4'>
                <div className='w-full '>
                  <div className='  my-4'>
                    <Image
                      className='w-[100%] h-[300px] md:h-auto  object-cover object-center'
                      src={VendorImg}
                      alt='banner'
                      width={2000}
                      height={2000}
                    />
                    {/* <img src={VendorImg} alt='' className='w-full ' /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full  lg:w-1/2 xl:w-2/3 px-20 '>
              <div className='mt-10 lg:mt-0'>
                <span className='block mb-4 text-lg  text-[#ABABAB]'>
                  VENDOR SERVICES
                </span>
                <h2 className='my-12 text-xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]'>
                  A Comprehensive MarketPlace
                </h2>
                <p className=' my-12 text-base text-[#656565] leading-8'>
                  Welcome to Your Ultimate Shopping Destination! Experience a
                  Comprehensive Marketplace at Your Fingertips with VIMA.
                  Discover, Shop, and Explore a World of Choices – Your One-Stop
                  Solution for All Your Needs. Elevate Your Shopping Experience
                  with us – Where Variety Meets Convenience!"
                </p>
                <button className='font-medium text-[20px] text-white tracking-wide py-2 px-5 sm:px-8 bg-black outline-none   transition-all hover:shadow-orange '>
                  Find Out More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorServices;
