'use client';
import React from 'react';
import { Menu } from 'lucide-react';

// components
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// types
import { ICategory } from '@/@types';
import Link from 'next/link';

interface ISheetMenu {
  data: ICategory[]
}

export default function SheetMenu({ data }: ISheetMenu) {
  return (
    <Sheet>
      <SheetTrigger><Menu className='text-[#313131] md:hidden size-7' /></SheetTrigger>
      <SheetContent side='left'>
        <h2 className='text-[1.3rem] mb-4'>Menu</h2>

        <nav>
          <ul className='flex flex-col gap-2 font-medium'>
            {data?.map((category) => (
              <li key={category?.id} className='block border-b-[1px] border-[#cacaca]'>
                <Link href='/'
                  className='block text-[0.8rem] md:px-2 lg:px-3 py-1.5'
                >
                  {category?.name}
                </Link>
              </li>
            ))}
            <li className='block border-b-[1px] border-[#cacaca]'>
              <Link href='/'
                className='block text-[0.8rem] md:px-2 lg:px-3 py-1.5'
              >Favoritos</Link>
            </li>
            <li className='block'>
              <Link href='/'
                className='block text-[0.8rem] md:px-2 lg:px-3 py-1.5'
              >Perfil</Link>
            </li>
          </ul>
        </nav>

      </SheetContent>
    </Sheet>
  );
}
