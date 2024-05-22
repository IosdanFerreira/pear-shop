'use client';
import React, { MouseEventHandler } from 'react';

import { IoMdArrowBack } from 'react-icons/io';

interface INextArrow {
    onClick?: MouseEventHandler | undefined
}

export default function PrevArrow({ onClick }: INextArrow) {
  return (
    <button
      className='absolute flex items-center justify-center left-[32px] top-[35%] md:top-[45%] bg-[#00000091] hover:bg-[#000000c5] rounded-full p-2 z-10'
      onClick={onClick}
    >
      <IoMdArrowBack className='text-[#fff] w-[14px] h-[14px] md:w-[23px] md:h-[23px]'/>
    </button>
  );
}
