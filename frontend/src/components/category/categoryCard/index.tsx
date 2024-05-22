import { ICategory } from '@/@types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ICategoryCard {
  category: ICategory
}

export default function CategoryCard({ category }: ICategoryCard) {
  return (
    <Link href='/' className='flex flex-col items-center justify-center mb-4'>
      <figure className='overflow-hidden rounded-[50%] w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[120px] lg:h-[120px] transform-gpu flex items-start justify-center mb-2 md:mb-0'>
        <Image
          alt={category?.name}
          src={category?.imageUrl}
          fill
          className='rounded-[50%] transition-all hover:scale-105 transform-gpu'
        />
      </figure>

      <h2 className='font-bold text-[.5rem] md:text-[.70rem] lg:text-[.9rem] text-[#202020]'>{category?.name}</h2>
    </Link>
  );
}
