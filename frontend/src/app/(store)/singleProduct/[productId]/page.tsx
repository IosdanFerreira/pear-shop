'use client';
import React from 'react';

// components
import ProductThumbnail from './components/thumbnail';
import { Separator } from '@/components/ui/separator';
import EditQuantity from './components/editQuantity';
import SelectColor from './components/selectColor';
import SelectSize from './components/selectSize';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import ProductList from '@/components/product/productList';

// mocks
import { productsMock } from '@/shared/mocks';

// icons
import { LiaCartPlusSolid } from 'react-icons/lia';
import { FaRegHeart } from 'react-icons/fa';

// shared
import { transformCurrencyInBRL } from '@/shared/utils';

export default function SingleProduct({ params }: { params: { productId: string } }) {
  const productId: number = Number(params?.productId);
  const product = productsMock?.[productId - 1];

  const discountPercentage = product?.priceWithDiscount && ((product?.price - product?.priceWithDiscount) / product?.price) * 100;
  
  return (
    <main className='pb-4 mt-3'>

      <Breadcrumb className='container mb-5'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Masculino</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Roupas</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Camisetas</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='grid grid-cols-12 gap-5 lg:container'>
        <section className='col-span-12 lg:col-span-6'>
          <ProductThumbnail
            data={product?.secondariesImageUrl} 
          />
        </section>

        <section className='container col-span-12 lg:col-span-6'>
          <h1 className='text-[.8rem] md:text-[1.4rem] lg:text-[1.1rem] font-extrabold text-[#323232] uppercase'>{product?.name}</h1>

          {product?.priceWithDiscount && product?.priceWithDiscount > 0 ? (
            <div className='mt-1 md:mt-3'>
              <span className='text-[.7rem] md:text-[1rem] lg:text-[.9rem] block text-[#949494] font-normal line-through	'>{transformCurrencyInBRL(product?.price / 100)}</span>

              <div className='flex items-center gap-3'>
                <span className='text-[.80rem] md:text-[1.5rem] lg:text-[1.3rem] block text-[#323232] font-bold'>{transformCurrencyInBRL(product?.priceWithDiscount / 100)}</span>
                <span className='text-[.55rem] block bg-[#f75656] text-[#fff] font-bold md:text-[.70rem] border-[1px] border-[#fff] rounded-3xl px-2 py-[2px]'>-{discountPercentage?.toFixed(0)}%</span>
              </div>
            </div>
          ): (
            <span className='text-[.80rem] md:text-[1.5rem] lg:text-[1.3rem] block text-[#2c2c2c] font-bold mt-3'>{transformCurrencyInBRL(product?.price / 100)}</span>
          )}

          <Separator className='mb-3 mt-3 bg-[#cacaca]' />

          <p className='text-[.9rem]'>{product?.description}</p>

          <Separator className='mb-3 mt-3 bg-[#cacaca]' />

          <SelectColor
            colors={product?.colors}
          />

          <SelectSize sizes={product?.availableSizes} />
          
          <EditQuantity />

          <div className='flex flex-col md:flex-row items-center md:justify-center lg:justify-start gap-3 md:gap-5 mt-6'>
            <button className='flex items-center justify-center w-full md:w-fit gap-2 bg-[#242424] hover:bg-[#000] border-[2px] border-[#181818] text-[#fff] text-[1rem] rounded-full py-2 px-9'>
              <LiaCartPlusSolid className='text-[1.4rem]' /> <span className='text[.9rem]'>Adicionar ao carrinho</span>
            </button>
            
            <button className='flex items-center justify-center w-full md:w-fit gap-2 hover:bg-[#e6e6e6] border-[2px] border-[#181818] text-[#181818] text-[1rem] font-medium rounded-full py-2 px-9'>
              <FaRegHeart className='text-[1.4rem] text-[#d30000]' /> <span className='text[.9rem]'>Adicionar aos favoritos</span>
            </button>
          </div>

        </section>
      </div>

      <Separator className='container mb-4 mt-10 bg-[#cacaca]' />

      <div className='container grid grid-cols-12 gap-5'>
        <section className='col-span-12 lg:col-span-6'>
          <Tabs defaultValue="details" className="w-full outline-none">
            <TabsList className='gap-4 bg-[#F7F8F8] outline-none'>
              <TabsTrigger 
                value="details"
                className='bg-[#F7F8F8] pl-0 font-bold text-[.9rem]'
              >Detalhes</TabsTrigger>

            </TabsList>

            <TabsContent value="details" className='outline-none'>
              <p>O design simplificado cria um ajuste personalizado que acompanha seus movimentos enquanto você refina seu jogo. As fileiras de elastano com nervuras se estendem com você para ajudá-lo a se mover a toda velocidade no campo.</p>

              <br />

              <h4 className='scroll-m-20 text-base font-bold tracking-tight'>Benefícios</h4>

              <ul className='list-disc'>
                <li className='mb-3 mx-7 text-[.9rem]'>Tecnologia Nike Dri-FIT absorve o suor da sua pele para evaporação mais rápida, ajudando a manter você seco e confortável.</li>
                <li className='mb-3 mx-7 text-[.9rem]'>Tecnologia Nike Dri-FIT absorve o suor da sua pele para evaporação mais rápida, ajudando a manter você seco e confortável.</li>
                <li className='mb-3 mx-7 text-[.9rem]'>Tecnologia Nike Dri-FIT absorve o suor da sua pele para evaporação mais rápida, ajudando a manter você seco e confortável.</li>
              </ul>
              <br />

              <h4 className='scroll-m-20 text-base font-bold tracking-tight'>Detalhes do produto</h4>

              <ul className='list-disc'>
                <li className='mb-3 mx-7 text-[.9rem]'>Modelagem slim para sensação sob medida. Considere adquirir um tamanho maior caso deseje um caimento mais solto.</li>
                <li className='mb-3 mx-7 text-[.9rem]'>Corpo: 91% poliéster/9% spandex. Painéis: 92% poliéster/8% spandex.</li>
                <li className='mb-3 mx-7 text-[.9rem]'>Lavável à máquina</li>
              </ul>
            </TabsContent>
          </Tabs>
        </section>
      </div>

      <Separator className='container mb-7 mt-10 bg-[#cacaca]' />

      <div className='container grid grid-cols-12 gap-5 mt-6'>

        <section className='col-span-12'>
          <h2 className='text-2xl font-bold text-[#242424] mb-3'>Produtos relacionados</h2>

          <ProductList productList={productsMock}/>
        </section>
      </div>
    </main>
  );
}
