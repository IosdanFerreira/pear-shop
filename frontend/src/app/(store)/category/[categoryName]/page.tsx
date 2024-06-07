import ProductList from '@/components/product/productList';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slider } from '@/components/ui/slider';
import { categoryMock, colorsMock, productsMock } from '@/shared/mocks';
import { Checkbox } from 'antd';
import React from 'react';
import SelectColor from '../../singleProduct/[productId]/components/selectColor';

export default function Category({ params }: { params: { categoryName: string } }) {
  return (
    <main className='grid grid-cols-12 gap-5 px-8 md:px-14'>

      <Breadcrumb className='mt-3 mb-2 col-span-12 px-0'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='capitalize'>{decodeURIComponent(params?.categoryName)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className='hidden md:col-span-2 lg:flex flex-col'>
        <span className='font-bold'>Categorias</span>

        {categoryMock.map((category) => (
          <div key={category.id} className='flex items-center gap-2 py-[6px]'>
            <Checkbox id={category?.name} />

            <label
              htmlFor={category?.name}
              className="ont-medium text-[#383838] text-[.8rem] 2xl:text-[.9rem]"
            >{category?.name}</label>
          </div>
        ))}

        <span className='font-bold mt-4'>Tamanho</span>

        {categoryMock.map((category) => (
          <div key={category.id} className='flex items-center gap-2 py-[6px]'>
            <Checkbox id={category?.name} />

            <label
              htmlFor={category?.name}
              className="ont-medium text-[#383838] text-[.8rem] 2xl:text-[.9rem]"
            >{category?.name}</label>
          </div>
        ))}

        <span className='font-bold mt-4 mb-2'>Faixa de Preço</span>

        <Slider defaultValue={[33]} max={100} step={1} className='mb-[5px]' />

        <div className='flex items-center justify-between mb-3'>
          <span className='text-[.8rem]'>R$3</span>
          <span className='text-[.8rem]'>R$3000</span>
        </div>

        <SelectColor
          colors={colorsMock}
        />
      </section>

      <section className='col-span-12 lg:col-span-10'>
        <ProductList productList={productsMock}/>
      </section>
    </main>
  );
}
