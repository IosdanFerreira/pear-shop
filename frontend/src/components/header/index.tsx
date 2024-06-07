import React from 'react';
import Link from 'next/link';

// icons
import { ShoppingCart } from 'lucide-react';

// components
import SearchForm from './components/searchForm';
import OptionsMenuHeader from './components/optionMenu';

// UI
import { oswald } from '../ui/fonts';
import { Button } from '../ui/button';

// types
import { ICategory } from '@/@types';
import SheetMenu from './components/sheetMenu';

export default function Header() {

  const defaultCategories: ICategory[] = [
    {
      id: 1,
      name: 'Lançamentos',
      nameUnaccent: 'Lancamentos',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
    {
      id: 2,
      name: 'Ofertas',
      nameUnaccent: 'Ofertas',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
    {
      id: 3,
      name: 'Masculino',
      nameUnaccent: 'Masculino',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
    {
      id: 4,
      name: 'Feminino',
      nameUnaccent: 'Feminino',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
    {
      id: 5,
      name: 'Infantil',
      nameUnaccent: 'Infantil',
      imageUrl: 'https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lmpmjuv7e86ce4'
    },
  ];

  return (
    <header className='pt-3 flex-col border-b-[1px] border-[#e6e6e6]'>
      <div className='px-8 md:px-14'>
        <div className='block md:flex items-center justify-between pb-2'>

          <div className='flex items-center justify-between'>
            <SheetMenu data={defaultCategories} />

            <Link href='/'>
              <h2 className={`text-2xl md:text-3xl font-bold uppercase ${oswald.className} text-[#222] pb-0`}>Pear Shop</h2>
            </Link>

            
            <Link href='/' className='md:hidden pe-0 flex'>
              <ShoppingCart className='text-[#494949]' />
              <p className='text-[14px] font-bold'>17</p>
            </Link>
          </div>

          <div className='flex items-center'>
            <SearchForm />
          
            <OptionsMenuHeader />
          </div>
        </div>

        <div className='hidden md:block'>
          <nav>
            <ul className='flex items-center'>
              {defaultCategories?.map((category) => (
                <li key={category?.id}>
                  <Link href={`/category/${category?.name?.toLocaleLowerCase()}`}
                    className='block text-[0.74rem] md:text-[0.7rem] lg:text-[0.9rem] hover:bg-[#EBEBEB] md:px-2 lg:px-3 py-1.5 pl-0'
                  >
                    {category?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
