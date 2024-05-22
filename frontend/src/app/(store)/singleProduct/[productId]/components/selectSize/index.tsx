'use client';
import React, { useState } from 'react';

interface ISelectSize {
    sizes: string[]
}

export default function SelectSize({ sizes }: ISelectSize) {

  const [selectedSize, setSelectedSize] = useState('');

  const selectSizeFn = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <div className='items-center gap-3 mb-3'>
      <span className='block text-[1rem] font-bold text-[#353535] mb-2'>Tamanho</span>

      <div className='flex flex-wrap gap-3'>
        {sizes?.map((size) => (
          <button
            key={size}
            className='flex items-center justify-center w-[40px] h-[40px] font-bold text-[14px] border border-[#353535] bg-[#fff] hover:bg-[#e6e6e6] rounded-full text-[#353535] hover:text-[#000]'
            style={{
              backgroundColor: size === selectedSize ? '#242424' : 'transparent',
              color: size === selectedSize ? '#fff' : '#353535',
            }}
            onClick={() => selectSizeFn(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
