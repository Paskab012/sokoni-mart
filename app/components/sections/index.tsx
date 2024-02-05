import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "../../../public/section3.svg";
import Image2 from "../../../public/section2.svg";
import Image3 from "../../../public/section1.svg";

const Sections = () => {
  return (
    <div
      className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14'
      id='Sections'
    >
      <div className='  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full'>
          <div>
            <p className='leading-normal text-[#656565] w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center'>
              ABOUT
            </p>
            <h3 className='text-2xl text-black py-4 sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed'>
              Your ultimate destination for your <br /> virtual market
            </h3>
            <p className='leading-normal text-[#656565] w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center'>
              Your One-Stop Solution for All Your Needs. Elevate Your Shopping
              Experience with us – Where Variety Meets Convenience!"
            </p>
          </div>
          <div className='grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 py-8 lg:py-12 px-6 sm:px-0 lg:px-6'>
            <div className='flex justify-center '>
              <div className='flex flex-col bg-white justify-center items-center border border-[#15A1DB]  py-4 px-6 lg:px-24'>
                <p className='text-[22px] font-bold text-black-600 capitalize my-2 sm:my-7'>
                  Virtual market
                </p>
                <div className='p-4 lg:p-0 mt-6 lg:mt-16'>
                  <Image
                    src={Image1}
                    width={90}
                    height={145}
                    alt='Virtual Market'
                  />
                </div>
                <div className='flex flex-col w-full justify-center mb-8 flex-none mt-12'>
                  <button className='font-medium text-[20px] text-white tracking-wide py-2 px-5 sm:px-8 bg-black outline-none   transition-all hover:shadow-orange '>
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className='flex justify-center '>
              <div className='flex flex-col bg-white justify-center items-center border border-[#15A1DB]  py-4 px-6 lg:px-24'>
                <p className='text-[22px] font-bold text-black-600 capitalize my-2 sm:my-7'>
                  Real Estate
                </p>
                <div className='p-4 lg:p-0 mt-6 lg:mt-16'>
                  <Image
                    src={Image2}
                    width={90}
                    height={145}
                    alt='Virtual Market'
                  />
                </div>
                <div className='flex flex-col w-full justify-center mb-8 flex-none mt-12'>
                  <button className='font-medium text-[20px] text-white tracking-wide py-2 px-5 sm:px-8 bg-black outline-none   transition-all hover:shadow-orange '>
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className='flex justify-center '>
              <div className='flex flex-col bg-white justify-center items-center border border-[#15A1DB]  py-4 px-6 lg:px-24'>
                <p className='text-[22px] font-bold text-black-600 capitalize my-2 sm:my-7'>
                  Job Search
                </p>
                <div className='p-4 lg:p-0 mt-6 lg:mt-16'>
                  <Image
                    src={Image3}
                    width={90}
                    height={145}
                    alt='Virtual Market'
                  />
                </div>
                <div className='flex flex-col w-full justify-center mb-8 flex-none mt-12'>
                  <button className='font-medium text-[20px] text-white tracking-wide py-2 px-5 sm:px-8 bg-black outline-none   transition-all hover:shadow-orange '>
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
