'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// icons
import { MdAddShoppingCart } from 'react-icons/md';

// utils
import { transformCurrencyInBRL } from '@/shared/utils';

// interface
import { IProduct } from '@/@types';

interface IProductCard {
    product: IProduct
}

export default function ProductCard({ product }: IProductCard) {

  const discountPercentage = product?.priceWithDiscount && ((product?.price - product?.priceWithDiscount) / product?.price) * 100;

  return (
    <div className='group relative'>
      <Link 
        href={`/singleProduct/${product.id}`}
        className='block p-2 rounded-md mb-2 overflow-hidden hover:shadow-md hover:shadow-[#dddddd] hover:transition-all border-[1px] transition-all'
      >
        <Image 
          alt={product?.name}
          src={product?.defaultImageUrl}
          width={303}
          height={333}
          className='rounded-sm mb-2 transition-all'
        />

        <div className='px-2'>
          <span className='overflow-hidden text-ellipsis whitespace-nowrap text-[#8E8F8E] text-[.7rem] font-medium uppercase'>{product?.category?.name}</span>

          <p className='overflow-hidden text-ellipsis whitespace-nowrap text-[#000] text-[.75rem] md:text-[1rem] 2xl:text-[1.1rem] font-bold hover:underline hover:text-[#242424] mb-2'>{product?.name}</p>

          <div className='mt-1'>
            <div className='flex items-start justify-between'>
              <div className='flex items-center gap-2'>
                {product?.priceWithDiscount ? (
                  <>
                    <span className='text-[.80rem] md:text-[0.9rem] block text-[#444444] font-extrabold'>{transformCurrencyInBRL(product?.priceWithDiscount / 100)}</span>
                    <span className='text-[.6rem] block bg-[#f75656] text-[#fff] font-bold md:text-[.70rem] border-[1px] border-[#fff] rounded-sm px-1'>-{discountPercentage?.toFixed(0)}%</span>
                  </>
                ): (
                  <span className='text-[.80rem] md:text-[0.9rem] block text-[#444444] font-extrabold'>{transformCurrencyInBRL(product?.price / 100)}</span>
                )}
              </div>
            </div>
          </div>
          <small className='block text-[#696969] text-[11px] mt-1'>{product?.UfOrigin}</small>
        </div>

      </Link>
      <button className='absolute hidden group-hover:flex items-center justify-center top-6 right-5 bg-[#ffffff7a] hover:bg-[#fff] rounded-full p-[8px] transition-all z-20 shadow-xl'><MdAddShoppingCart /></button>      
    </div>
  );
}