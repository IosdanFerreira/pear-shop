'use client';
import React from 'react';
import Image from 'next/image';

// components
import EditQuantity from '@/app/(store)/singleProduct/[productId]/components/editQuantity';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// icons
import { ShoppingCart } from 'lucide-react';
import { IoMdClose } from 'react-icons/io';

// shared
import { shoppingCartMock } from '@/shared/mocks/shoppingCart';
import Link from 'next/link';

// store
import { shoppingCartStore } from '@/store/shoppingCart/store';

export default function ShoppingCartDrawer() {

  const productsInCart = shoppingCartStore((state) => state.cart);

  const addProductToCart = shoppingCartStore((state) => state.addToCart);

  const removeFromCart = shoppingCartStore((state) => state.removeFromCart);

  return (
    <Sheet>
      <SheetTrigger>
        <div className='flex text-[#696969] hover:text-[#242424]'>
          <ShoppingCart /> 
          <p className='text-[14px] font-bold'>{productsInCart.length}</p>
        </div>
      </SheetTrigger>
      <SheetContent side='right' className='bg-[#f5f4f4] px-0 pt-2'>
        <h2 className='text-[1.1rem] font-bold px-4'>Seu carrinho</h2>

        <Separator className='bg-[#cacaca] mt-3' />
        <div className='overflow-y-scroll scrollbar-thumb-[#afafaf] scrollbar-track-[#f5f4f4] scrollbar-thin h-full'>
          {productsInCart.map((product) => (
            <div key={product?.id} className='px-4'>
              <div className='flex items-start gap-2'>
                <Image
                  alt={product?.name} 
                  src={product?.defaultImageUrl}
                  width={80}
                  height={80}
                  className='py-3'
                />

                <div className='flex flex-col justify-between gap-2 w-full'>
                  <div className='flex justify-between items-start'>
                    <p className='mt-3 font-semibold overflow-hidden text-ellipsis line-clamp-2'>{product?.name}</p>

                    <button 
                      className='mt-3' 
                      onClick={() => {
                        if(product.id && removeFromCart) {
                          removeFromCart(Number(product.id));
                        }
                      }}><IoMdClose /></button>
                  </div>

                  <div className='flex items-end justify-between'>
                    <EditQuantity />

                    <span className='font-semibold text-[.9rem]'>R$300,00</span>
                  </div>
                </div>
              </div>

              <Separator className='bg-[#cacaca] mt-3' />
            </div>
          ))}
          
          <div className='block w-full p-4'>

            <div className='flex items-center justify-between'>
              <span className='font-bold'>Total:</span>
              <span className='font-bold'>R$300,00</span>
            </div>

            <Link href='/checkout' className='flex items-center justify-center bg-[#000] text-[#fff] w-full py-2 my-3 rounded-sm hover:bg-[#121212]'>Finalizar</Link>

          </div>
        </div>

      </SheetContent>
    </Sheet>
  );
}
