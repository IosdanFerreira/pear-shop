'use client';
import React, { MouseEventHandler } from 'react';

import { IoMdArrowForward } from 'react-icons/io';

interface INextArrow {
    onClick?: MouseEventHandler | undefined
}

export default function NextArrow({ onClick }: INextArrow) {
  return (
    <button
      className='flex items-center justify-center absolute right-[32px] top-[35%] md:top-[45%] bg-[#00000091] hover:bg-[#000000c5] rounded-full p-2 z-10'
      onClick={onClick}
    >
      <IoMdArrowForward className='text-[#fff] w-[14px] h-[14px] md:w-[20px] md:h-[20px]'/>
    </button>
  );
}
