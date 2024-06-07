'use client';
import React from 'react';
import Link from 'next/link';

import { UserRound, Heart } from 'lucide-react';
import ShoppingCartDrawer from '../shoppingCart';
import { shoppingCartStore } from '@/store/shoppingCart/store';

export default function OptionsMenuHeader() {
  const productsInCart = shoppingCartStore((state) => state.cart);

  return (
    <div>
      <ul className='flex space-x-4'>
        <li className='hidden md:flex'>
          <Link href='/' className='flex text-[#696969] hover:text-[#242424]'><UserRound /></Link>
        </li>
        <li className='hidden md:flex'>
          <ShoppingCartDrawer />
        </li>
        <li className='hidden md:flex'>
          <Link href='/favorites' className='flex text-[#696969] hover:text-[#242424]'>
            <Heart /> 
            <p className='text-[14px] font-bold'>10</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
