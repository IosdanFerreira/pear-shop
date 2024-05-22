'use client';
import React, { useState } from 'react';
import { IProductColor } from '@/@types';

import { FaCheck  } from 'react-icons/fa';

interface ISelectColor {
    colors: IProductColor[]
}


export default function SelectColor({ colors }: ISelectColor) {

  const [selectedColor, setSelectedColor] = useState('');

  const selectColorFn = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className='mb-6'>
      <span className='block text-[1rem] font-bold text-[#353535] mb-2'>Cor</span>

      <div className='flex gap-3 flex-wrap'>
        {colors.map((color) => (
          <button
            key={color?.id} 
            className={'flex items-center justify-center w-[25px] h-[25px] font-bold text-[15px] border-[1.9px] border-[#cacaca] rounded-full text-[#fff]'}
            style={{backgroundColor: `${color?.hex}`}}
            onClick={() => selectColorFn(color?.hex)}
          >
            {selectedColor === color?.hex && (
              <FaCheck className='text-[.8rem]' />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
