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
    <div className='items-center gap-2 mb-4'>
      <span className='block text-[.9rem] font-bold text-[#353535] mb-2'>Tamanho</span>

      <div className='flex flex-wrap gap-2'>
        {sizes?.map((size) => (
          <button
            key={size}
            className='flex items-center justify-center w-[30px] h-[30px] font-medium text-[12px] border border-[#818181] bg-[#fff] rounded-md text-[#353535] hover:text-[#242424]'
            style={{
              backgroundColor: size === selectedSize ? '#4A2FED' : 'transparent',
              color: size === selectedSize ? '#fff' : '#242424',
            }}
            onClick={() => selectSizeFn(size)}
          >
            <span className='text-[.8rem]'>{size}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
