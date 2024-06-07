'use client';
import React, { useState } from 'react';

import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

interface IEditQuantity {
  title?: string;
}


export default function EditQuantity({ title }: IEditQuantity) {

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const increaseQuantity = () => {
    setSelectedQuantity(selectedQuantity + 1);
  };

  const decreaseQuantity = () => {
    if(selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  return (
    <div className='items-center gap-3'>
      <span className='block text-[.9rem] font-bold text-[#353535] mb-2'>{title}</span>

      <div className='flex'>
        <button 
          className='flex items-center justify-center w-8 h-8 font-bold text-[18px] border-[1px] border-[#818181] hover:bg-[#e6e6e6] text-[#353535] hover:text-[#000]'
          disabled={selectedQuantity === 1 ?? false}
          onClick={() => decreaseQuantity()}
        >
          <FaCaretDown className='text-[.9rem]' />
        </button>

        <span className='flex items-center justify-center w-10 h-8 border-[1px] border-[#818181] font-normal text-[#353535] text-[.9rem] border-l-0 border-r-0'>{selectedQuantity}</span>

        <button 
          className='flex items-center justify-center w-8 h-8 font-bold text-[18px] border-[1px] border-[#818181] hover:bg-[#e6e6e6] text-[#353535] hover:text-[#000]'
          onClick={() => increaseQuantity()}
        >
          <FaCaretUp className='text-[.9rem]' />
        </button>
      </div>
    </div>
  );
}
