import ProductList from '@/components/product/productList';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { productsMock } from '@/shared/mocks';
import React from 'react';

export default function Favorites() {
  return (
    <main className='grid grid-cols-12 gap-5 px-8 md:px-14'>
      <Breadcrumb className='container mt-3 col-span-12 px-0'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Favoritos</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className='col-span-12'>
        <ProductList productList={productsMock}/>
      </section>
    </main>
  );
}
