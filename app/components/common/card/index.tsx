import React from "react";
import { FiUser, FiUsers } from "react-icons/fi";
import { MdOutlineSportsMartialArts, MdPhoneAndroid } from "react-icons/md";
import { SiInfluxdb } from "react-icons/si";
import { GiFocusedLightning } from "react-icons/gi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { IoCarSportSharp } from "react-icons/io5";

interface CardProps {
  title: string;
  subtitle: string;
  href: string;
  Icon: any;
}

const CategoryCards = () => {
  return (
    <div className='py-4'>
      <div className='grid gap-4 grid-cols-2 lg:grid-cols-6'>
        <Card
          title='Personnal'
          subtitle='Find your needs'
          href='#'
          Icon={BsPersonBoundingBox}
        />
        <Card
          title='Electronics'
          subtitle='Buy a very good...'
          href='#'
          Icon={MdPhoneAndroid}
        />
        <Card
          title='Used items'
          subtitle='Get the best...'
          href='#'
          Icon={GiFocusedLightning}
        />
        <Card
          title='Luxaries'
          subtitle='Diamond rings...'
          href='#'
          Icon={SiInfluxdb}
        />
        <Card
          title='Sport'
          subtitle='Jezz available at...'
          href='#'
          Icon={MdOutlineSportsMartialArts}
        />
        <Card
          title='Cars'
          subtitle='New vehicles and...'
          href='#'
          Icon={IoCarSportSharp}
        />
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className='w-full p-4 rounded-md border-[1px] border-slate-300 relative overflow-hidden group bg-white'
    >
      <div className='absolute inset-0 bg-gradient-to-r from-[#a1a1a1] to-[#f1f1f1] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300' />

      <Icon className='absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#4863fd] group-hover:rotate-12 transition-transform duration-300' />
      <Icon className='mb-2 text-2xl text-[#4863fd] group-hover:text-white transition-colors relative z-10 duration-300' />
      <h3 className='font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300'>
        {title}
      </h3>
      <p className='text-slate-400 group-hover:text-violet-200 text-sm relative z-10 duration-300'>
        {subtitle}
      </p>
    </a>
  );
};

export default CategoryCards;
