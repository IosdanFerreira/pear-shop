'use client';
import React, { useEffect, useState } from 'react';

// components
import ProductThumbnail from './components/thumbnail';
import { Separator } from '@/components/ui/separator';
import EditQuantity from './components/editQuantity';
import SelectColor from './components/selectColor';
import SelectSize from './components/selectSize';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductList from '@/components/product/productList';
import { Rate } from 'antd';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem
} from '@/components/ui/form';

// mocks
import { productsMock } from '@/shared/mocks';

// icons
import { LiaCartPlusSolid } from 'react-icons/lia';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';


// shared
import { transformCurrencyInBRL } from '@/shared/utils';

// form
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { shoppingCartStore } from '@/store/shoppingCart/store';

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  review: z.string(),
  rate: z.number(),
});
  
type SearchFormValues = z.infer<typeof formSchema>

export default function SingleProduct({ params }: { params: { productId: string } }) {
  const productId: number = Number(params?.productId);  
  const product = productsMock?.[productId - 1];

  const discountPercentage = product?.priceWithDiscount && ((product?.price - product?.priceWithDiscount) / product?.price) * 100;

  const productsInCart = shoppingCartStore((state) => state.cart);
  const addProductToCart = shoppingCartStore((state) => state.addToCart);
  const removeProductFromCart = shoppingCartStore((state) => state.removeFromCart);

  const [productIsInCart, setProductIsInCart] = useState(false);

  useEffect(() => {
    setProductIsInCart(productsInCart.some((item) => item.id === product.id));
  }, [productsInCart, product]);

  const handleRemoveFromCart = () => {
    if (product && productIsInCart) {
      removeProductFromCart?.(Number(product.id));
    }
  };

  const handleAddFromCart = () => {
    if (product && !productIsInCart) {
      addProductToCart?.(product);
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      review: '',
      rate: 0,
    }
  });

  const onSubmit = (data: SearchFormValues) => {
    console.log(data);
  };

  const [hydrated, setHydrated] = useState<boolean>(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  
  return (
    <main className='pb-4 mt-3'>
      <div className='grid grid-cols-12 gap-5 lg:container'>
        <div className='col-span-12 lg:col-span-6'>
          <ProductThumbnail
            data={product?.secondariesImageUrl} 
          />
        </div>

        <div className='container col-span-12 lg:col-span-6'>
          <h1 className='text-[.8rem] md:text-[1.4rem] lg:text-[1.3rem] font-extrabold text-[#000] uppercase'>{hydrated ? 'bears' : 'Loading...'}</h1>

          {product?.priceWithDiscount && product?.priceWithDiscount > 0 ? (
            <div className='mt-1 md:mt-3'>
              <span className='text-[.7rem] md:text-[1rem] lg:text-[.9rem] block text-[#949494] font-normal line-through	'>{transformCurrencyInBRL(product?.price / 100)}</span>

              <div className='flex items-center gap-3'>
                <span className='text-[.80rem] md:text-[1.5rem] lg:text-[1.1rem] block text-[#000] font-bold'>{transformCurrencyInBRL(product?.priceWithDiscount / 100)}</span>
                <span className='text-[.55rem] block bg-[#f75656] text-[#fff] font-bold md:text-[.6rem] border-[1px] border-[#fff] rounded-3xl px-2 py-[2px]'>-{discountPercentage?.toFixed(0)}%</span>
              </div>
            </div>
          ): (
            <span className='text-[.80rem] md:text-[1.5rem] lg:text-[1.1rem] block text-[#000] font-bold mt-3'>{transformCurrencyInBRL(product?.price / 100)}</span>
          )}

          <Separator className='mb-3 mt-3 bg-[#cacaca]' />

          <p className='text-[.9rem] text-[#303030] py-3'>{product?.description}</p>

          <Separator className='mb-3 mt-3 bg-[#cacaca]' />

          <SelectColor
            colors={product?.colors}
          />

          <SelectSize sizes={product?.availableSizes} />
          
          <EditQuantity
            title='Quantidade'
          />

          <div className='flex flex-col md:flex-row items-center md:justify-center lg:justify-start gap-3 mt-6'>
            <button className='flex items-center justify-center w-full md:w-fit gap-2 bg-[#000] hover:bg-[#242424] border-[2px] border-[#181818] text-[#fff] rounded-full py-2 px-9'>
              <LiaCartPlusSolid className='text-[1.3rem]' /> <span className='text[.8rem]'>Adicionar ao carrinho</span>
            </button>

            {!productIsInCart ? (
              <button 
                className='overflow-hidden group flex items-center justify-center w-full md:w-fit gap-2 hover:bg-[#e6e6e6] border-[1px] border-[#a3a3a3] text-[#181818] font-medium rounded-full p-2'
                onClick={() => handleAddFromCart()}
              ><FaRegHeart className='text-[1.5rem] text-[#000]' /></button>
            ) : (
              <button 
                className='overflow-hidden group flex items-center justify-center w-full md:w-fit gap-2 hover:bg-[#e6e6e6] border-[1px] border-[#a3a3a3] text-[#181818] font-medium rounded-full p-2'
                onClick={() => handleRemoveFromCart()}
              ><FaHeart className='text-[1.5rem] text-[#000] fill-[#be0000]' /></button>
            )}
            
          </div>

        </div>
      </div>

      <div className='container'>
        <Separator className='mb-4 mt-10 px-12 bg-[#cacaca]' />
      </div>

      <div className='container grid grid-cols-12 gap-5'>
        <div className='col-span-12 lg:col-span-5'>
          <Tabs defaultValue="details" className="w-full outline-none">
            <TabsList className='gap-4 bg-[#F7F8F8] outline-none'>
              <TabsTrigger 
                value="details"
                className='bg-[#F7F8F8] pl-0 font-bold text-[.9rem]'
              >Descrição</TabsTrigger>

              <TabsTrigger 
                value="reviews"
                className='bg-[#F7F8F8] pl-0 font-bold text-[.9rem]'
              >Comentários(0)</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className='outline-none'>
              <p className='text-[.9rem] text-[#181818]'>O design simplificado cria um ajuste personalizado que acompanha seus movimentos enquanto você refina seu jogo. As fileiras de elastano com nervuras se estendem com você para ajudá-lo a se mover a toda velocidade no campo.</p>

              <br />

              <h4 className='scroll-m-20 text-base font-bold tracking-tight text-[.9rem] mb-1'>Benefícios</h4>

              <ul className='list-disc'>
                <li className='mb-3 mx-7 text-[.9rem] text-[#181818]'>Tecnologia Nike Dri-FIT absorve o suor da sua pele para evaporação mais rápida, ajudando a manter você seco e confortável.</li>
                <li className='mb-3 mx-7 text-[.9rem] text-[#181818]'>Tecnologia Nike Dri-FIT absorve o suor da sua pele para evaporação mais rápida, ajudando a manter você seco e confortável.</li>
                <li className='mb-3 mx-7 text-[.9rem] text-[#181818]'>Tecnologia Nike Dri-FIT absorve o suor da sua pele para evaporação mais rápida, ajudando a manter você seco e confortável.</li>
              </ul>

              <br />

              <h4 className='scroll-m-20 text-base font-bold tracking-tight text-[.9rem] mb-1'>Detalhes do produto</h4>

              <ul className='list-disc'>
                <li className='mb-3 mx-7 text-[.9rem]'>Modelagem slim para sensação sob medida. Considere adquirir um tamanho maior caso deseje um caimento mais solto.</li>
                <li className='mb-3 mx-7 text-[.9rem]'>Corpo: 91% poliéster/9% spandex. Painéis: 92% poliéster/8% spandex.</li>
                <li className='mb-3 mx-7 text-[.9rem]'>Lavável à máquina</li>
              </ul>
            </TabsContent>

            <TabsContent value="reviews" className='outline-none'>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
        
                  <div className='flex items-center gap-4 w-full flex-wrap'>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className='w-[48%]'>
                          <FormLabel className='text-[.8rem] font-semibold'>Nome*</FormLabel>
                          <FormControl>
                            <Input placeholder="Digite seu nome" className='border border-[#acabab] py-1' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className='w-[48%]'>
                          <FormLabel className='text-[.8rem] font-semibold'>Email*</FormLabel>
                          <FormControl>
                            <Input placeholder="Digite seu email" className='border border-[#acabab] py-1' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="review"
                      render={({ field }) => (
                        <FormItem className='w-[100%]'>
                          <FormLabel className='text-[.8rem] font-semibold'>Comentário*</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Escreva seu comentário" className='border border-[#acabab] py-1' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="rate"
                      render={({ field }) => (
                        <FormItem className='w-[100%] flex flex-col'>
                          <FormLabel className='text-[.8rem] font-semibold'>Avaliação*</FormLabel>
                          <FormControl>
                            <Rate 
                              className='block text-[1.5rem]' 
                              character={({index}) => (<FaStar className='w-5 h-5' style={{
                                color: index! < field.value ? '#FFD700' : '#D3D3D3', // Cor dourada para estrelas preenchidas e cinza claro para não preenchidas
                              }} />)}
                              {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button variant={'default'} className="rounded-md mt-4 bg-[#4A2FED] hover:bg-[#4b2fedc7]" type="submit">Salvar</Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Separator className='container mb-7 mt-10 bg-[#cacaca]' />

      <div className='container grid grid-cols-12 gap-5 mt-6'>
        <div className='col-span-12'>
          <div className='flex flex-col items-center justify-center mb-7'>
            <h6 className='text-[#8E8F8E] leading-5 text-[.9rem] font-normal mb-4'>Voce pode se interessar também</h6>
            <h2 className='leading-5 text-[.9rem] md:text-[1.9rem] text-[#000] mb-2 font-black'>Produtos em Relacionados</h2>
          </div>

          <ProductList productList={productsMock} />
        </div>
      </div>
    </main>
  );
}
