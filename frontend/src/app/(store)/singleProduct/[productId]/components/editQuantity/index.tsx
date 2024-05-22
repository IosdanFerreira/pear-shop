'use client';
import React, { useState } from 'react';

import { FaCaretDown, FaCaretUp } from 'react-icons/fa';


export default function EditQuantity() {

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
    <div className='items-center gap-3 mb-3'>
      <span className='block text-[1rem] font-bold text-[#353535] mb-2'>Quantidade</span>

      <div className='flex gap-3'>
        <button 
          className='flex items-center justify-center w-[30px] h-[30px] font-bold text-[18px] border border-[#353535] bg-[#fff] hover:bg-[#e6e6e6] rounded-full text-[#353535] hover:text-[#000]'
          disabled={selectedQuantity === 1 ?? false}
          onClick={() => decreaseQuantity()}
        >
          <FaCaretDown />
        </button>

        <span className='flex items-center justify-center border border-[#353535] rounded-full w-16 font-bold text-[#353535]'>{selectedQuantity}</span>

        <button 
          className='flex items-center justify-center w-[30px] h-[30px] font-bold text-[18px] border border-[#353535] bg-[#fff] hover:bg-[#e6e6e6] rounded-full text-[#353535] hover:text-[#000]'
          onClick={() => increaseQuantity()}
        >
          <FaCaretUp />
        </button>
      </div>
    </div>
  );
}
