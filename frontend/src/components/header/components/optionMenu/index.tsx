import React from 'react';
import Link from 'next/link';

import { UserRound, ShoppingCart, Heart, Menu } from 'lucide-react';

export default function OptionsMenuHeader() {
  return (
    <div>
      <ul className='flex space-x-4'>
        <li className='hidden md:flex'>
          <Link href='/' className='flex text-[#696969] hover:text-[#242424]'><UserRound /></Link>
        </li>
        <li className='hidden md:flex'>
          <Link href='/' className='flex text-[#696969] hover:text-[#242424]'>
            <ShoppingCart /> 
            <p className='text-[14px] font-bold'>20</p>
          </Link>
        </li>
        <li className='hidden md:flex'>
          <Link href='/' className='flex text-[#696969] hover:text-[#242424]'>
            <Heart /> 
            <p className='text-[14px] font-bold'>10</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
