'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// icons
import { BiCartAdd } from 'react-icons/bi';

// utils
import { transformCurrencyInBRL } from '@/shared/utils';

// interface
import { IProduct } from '@/@types';

interface IProductCard {
    product: IProduct
}

export default function ProductCard({ product }: IProductCard) {

  const discountPercentage = product?.priceWithDiscount && ((product?.price - product?.priceWithDiscount) / product?.price) * 100;

  const [ currentImage, setCurrenImage ] = useState<string>(product?.secondariesImageUrl?.[0]?.url);

  return (
    <Link 
      href={`/singleProduct/${product.id}`}
      className='block p-2 max-w-[315px] rounded-md mb-2 overflow-hidden hover:shadow-md hover:shadow-[#dddddd] hover:transition-all border-[1px] transition-all'
      onMouseEnter={() => {setCurrenImage(product?.secondariesImageUrl?.[1]?.url);}}
      onMouseLeave={() => {setCurrenImage(product?.secondariesImageUrl?.[0]?.url);}}
    >
      <Image 
        alt={product?.name}
        src={currentImage}
        width={315}
        height={331}
        className='rounded-sm mb-2 transition-all'
      />

      <p className='overflow-hidden text-ellipsis whitespace-nowrap text-[#3d3d3d] text-[.75rem] md:text-[.9rem] font-bold hover:underline hover:text-[#242424]'>{product?.name}</p>

      <div className='mt-1'>
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-2'>
            {product?.priceWithDiscount ? (
              <>
                <span className='text-[.80rem] md:text-[0.95rem] block text-[#fa6338] font-extrabold'>{transformCurrencyInBRL(product?.priceWithDiscount / 100)}</span>
                <span className='text-[.6rem] block bg-[#f75656] text-[#fff] font-bold md:text-[.70rem] border-[1px] border-[#fff] rounded-sm px-1'>-{discountPercentage?.toFixed(0)}%</span>
              </>
            ): (
              <span className='text-[.80rem] md:text-[1rem] block text-[#242424] font-extrabold'>{transformCurrencyInBRL(product?.price / 100)}</span>
            )}
          </div>

          <button className='hidden md:flex items-center justify-center border-[1px] border-[#000] rounded-2xl py-[3px] px-3 hover:bg-[#000] hover:text-[#fff]'>
            <BiCartAdd className='text-[20px]' />
          </button>
        </div>
      </div>


      <small className='block text-[#696969] text-[11px] mt-1'>{product?.UfOrigin}</small>
    </Link>
  );
}