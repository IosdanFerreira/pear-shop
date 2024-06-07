'use client';
import React from 'react';

// icons
import { FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiChevronRight  } from 'react-icons/fi';

// components
import ProductCard from '../productCard';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem
} from '@/components/ui/pagination';

// types
import { IProduct } from '@/@types';

interface IProductList {
    productList: IProduct[]
    seeMoreOnClick?: () => void
    className?: string
}

export default function ProductList({ productList, className }: IProductList) {
  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 2xl:flex 2xl:flex-wrap 2xl:justify-center w-full m-auto ${className}`}>
        {productList?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>

      <div className='flex justify-center items-center w-full mt-6'>
        {productList.length >= 5 && (
          <Pagination>
            <PaginationContent className='flex items-center justify-center gap-1'>

              <PaginationItem className='flex items-center justify-center'>
                <button className='w-7 h-7 flex items-center justify-center rounded-md hover:bg-[#d1d1d1]'><FiChevronsLeft /></button>
              </PaginationItem>

              <PaginationItem className='flex items-center justify-center'>
                <button className='w-7 h-7 flex items-center justify-center rounded-md hover:bg-[#d1d1d1]'><FiChevronLeft /></button>
              </PaginationItem>
              
              <PaginationItem className='flex items-center justify-center'>
                <button className='w-7 h-7 flex items-center justify-center rounded-md text-sm bg-[#4A2FED] text-white'>1</button>
              </PaginationItem>

              <PaginationItem className='flex items-center justify-center'>
                <button className='w-7 h-7 flex items-center justify-center rounded-md text-sm hover:bg-[#d1d1d1]'>2</button>
              </PaginationItem>

              <PaginationItem className='flex items-center justify-center'>
                <button className='w-7 h-7 flex items-center justify-center rounded-md text-sm hover:bg-[#d1d1d1]'>3</button>
              </PaginationItem>

              <PaginationItem className='flex items-center justify-center'>
                <PaginationEllipsis />
              </PaginationItem>

              <PaginationItem className='flex items-center justify-center'>
                <button className='w-7 h-7 flex items-center justify-center rounded-md text-sm hover:bg-[#d1d1d1]'>10</button>
              </PaginationItem>

              <PaginationItem className='flex items-center justify-center'>
                <button className='w-7 h-7 flex items-center justify-center rounded-md hover:bg-[#d1d1d1]'><FiChevronRight /></button>
              </PaginationItem>

              <PaginationItem className='flex items-center justify-center'>
                <button className='w-7 h-7 flex items-center justify-center rounded-md hover:bg-[#d1d1d1]'><FiChevronsRight /></button>
              </PaginationItem>

            </PaginationContent>
          </Pagination>
        )}
      </div>
    </>
  );
}
