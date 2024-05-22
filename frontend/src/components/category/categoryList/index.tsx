import React from 'react';
import { ICategory } from '@/@types';
import CategoryCard from '../categoryCard';

interface ICategoryList {
    categories: ICategory[]
}

export default function CategoryList({ categories }: ICategoryList) {
  return (
    <div className='grid grid-cols-3 min-[578px]:flex items-center justify-evenly py-4 md:py-8'>
      {categories.map((category) => (
        <CategoryCard 
          key={category?.id}
          category={category}
        />
      ))}
    </div>
  );
}
