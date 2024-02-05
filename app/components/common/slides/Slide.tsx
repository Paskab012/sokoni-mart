import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  btnText: string;
  textColor?: string;
  bgColor?: string;
}

const Slide: React.FC<propsType> = ({
  img,
  title,
  mainTitle,
  textColor,
  btnText,
  bgColor
}) => {
  return (
    <div className='outline-none border-none relative'>
      <div
        className={`absolute ${
          bgColor ? `bg-[${bgColor}]` : "bg-[#ffffff40]"
        } bgColor} left-[60px] md:left-[180px] max-w-[250px] sm:max-w-[850px] top-[60%] -translate-y-[50%] space-y-2 lg:space-y-4  p-6`}
      >
        <h2
          className={`${
            textColor ? `text-[${textColor}]` : "text-[#ffffff]"
          } text-[26px] md:text-[30px] lg:text-[40px] font-bold leading-[1.2]`}
        >
          {mainTitle}
        </h2>
        <h3 className='text-black text-[18px] lg:text-[24px]'>{title}</h3>

        {/* <h3 className='text-[24px] text-gray-500'>
          starting at{" "}
          <b className='text-[20px] md:text-[24px] lg:text-[30px]'>{btnText}</b>
          .00
        </h3> */}
        <div className='bg-black  text-white text-[12px] md:text-[18px] p-4 px-6  inline-block cursor-pointer '>
          {btnText}
        </div>
      </div>

      <Image
        className='w-[100%] h-[300px] md:h-auto  object-cover object-center'
        src={img}
        alt='banner'
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;
