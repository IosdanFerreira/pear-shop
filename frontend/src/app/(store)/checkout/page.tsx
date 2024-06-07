'use client';
import React from 'react';

// components
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem
} from '@/components/ui/form';
import InputMasks from '@/components/ui/inputMasks';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert } from 'antd';

// icons
import { GrAlert } from 'react-icons/gr';

// form
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string(),
  surname: z.string(),
  phone: z.string(),
  email: z.string(),
  cep: z.string(),
  street: z.string(),
  addressNumber: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
  complement: z.string(),
  paymentMethod: z.string(),
});
  
type SearchFormValues = z.infer<typeof formSchema>


export default function Checkout() {

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      cep: '',
      street: '',
      addressNumber: '',
      neighborhood: '',
      city: '',
      uf: '',
      complement: '',
      paymentMethod: '',
    }
  });

  const onSubmit = (data: SearchFormValues) => {
    console.log(data);
  };

  return (
    <main className='container grid grid-cols-12 gap-5 px-8 md:px-14'>
      <section className='col-span-7 p-3 rounded-md'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <span className='flex items-center gap-1 font-bold text-[.9rem] mb-1 mt-3'>Informações do Cliente</span>

            <div className='flex items-center gap-4 w-full flex-wrap mb-6'>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className='w-[48%]'>
                    <FormLabel className='text-[.8rem]'>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" className='border border-[#c9c9c9] py-1' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem className='w-[48%]'>
                    <FormLabel className='text-[.8rem]'>Sobrenome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu sobrenome" className='border border-[#c9c9c9] py-1' {...field} />
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
                    <FormLabel className='text-[.8rem]'>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu email" className='border border-[#c9c9c9] py-1' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className='w-[48%]'>
                    <FormLabel className='text-[.8rem]'>Telefone</FormLabel>
                    <FormControl>
                      <InputMasks field={field} mask='(99)99999-9999' placeholder='Digite o telefone' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <span className='flex items-center gap-1 font-bold text-[.9rem] mb-1'>Endereço de Entrega</span>
        
            <div className='flex items-center gap-4 w-full flex-wrap'>
              <FormField
                control={form.control}
                name="cep"
                render={({ field }) => (
                  <FormItem className='w-[48%]'>
                    <FormLabel className='text-[.8rem]'>CEP</FormLabel>
                    <FormControl>
                      <InputMasks field={field} mask='99999-999' placeholder='Informe o CEP' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem className='w-[48%]'>
                    <FormLabel className='text-[.8rem]'>Endereço</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu endereço" className='border border-[#c9c9c9] py-1' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="addressNumber"
                render={({ field }) => (
                  <FormItem className='w-[48%]'>
                    <FormLabel className='text-[.8rem]'>Número</FormLabel>
                    <FormControl>
                      <Input placeholder="Informe o número do endereço" className='border border-[#c9c9c9] py-1' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="neighborhood"
                render={({ field }) => (
                  <FormItem className='w-[48%]'>
                    <FormLabel className='text-[.8rem]'>Bairro</FormLabel>
                    <FormControl>
                      <Input placeholder="Informe o bairro" className='border border-[#c9c9c9] py-1' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className='w-[48%]'>
                    <FormLabel className='text-[.8rem]'>Cidade</FormLabel>
                    <FormControl>
                      <Input placeholder="Informe a cidade" className='border border-[#c9c9c9] py-1' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="uf"
                render={({ field }) => (
                  <FormItem className='w-[48%]'>
                    <FormLabel className='text-[.8rem]'>Estado</FormLabel>
                    <FormControl>
                      <InputMasks field={field} mask='aa' placeholder='Informe o estado' className='uppercase placeholder:normal-case' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="complement"
                render={({ field }) => (
                  <FormItem className='w-[48%]'>
                    <FormLabel className='text-[.8rem]'>Complemento</FormLabel>
                    <FormControl>
                      <Input placeholder="Informe seu endereço" className='border border-[#c9c9c9] py-1' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <span className='flex items-center gap-1 font-bold text-[.9rem] mt-9 mb-3'>Método de Pagamento</span>

            <Alert 
              type="error"
              showIcon={true} 
              icon={<GrAlert />}
              description='Desculpe, parece que não há métodos de pagamento disponíveis. Entre em contato conosco se precisar de assistência ou desejar fazer arranjos alternativos.'
              className='text-[1.1rem]'
            />

            <Button variant={'default'} className="rounded-md mt-4 bg-[#4A2FED] hover:bg-[#4b2fedc7]" type="submit">Salvar</Button>
          </form>
        </Form>
      </section>

      <section className='col-span-5 px-10'>
        <span className='flex items-center gap-1 font-bold text-[1.1rem] mt-9 mb-3'>Seu pedido</span>

        <div className='border border-[#cacaca] rounded-md'>

          <div>
            <div className='flex justify-between items-center px-3 py-2 border-b-2'>
              <span className='text-[#696969] text-[.9rem]'>Produtos</span>
              <span className='text-[#696969] text-[.9rem]'>Subtotal</span>
            </div>

            <div className='flex justify-between items-center px-3 py-2 border-b-2'>
              <div className='flex items-center gap-3 py-3 border-[#cacaca]'>
                <Image src='https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a.jpg' 
                  alt='image' 
                  width={45} 
                  height={55}
                  className='rounded-md'
                />

                <div className='flex flex-col'>
                  <span className='text-[#696969] text-[.8rem]'>Nome do produto</span>
                  <span className='text-[#696969] text-[.8rem]'>Preta</span>
                  <span className='text-[#696969] text-[.8rem]'>2x</span>
                </div>
              </div>

              <span className='text-[.9rem]'>R$28,00</span>
            </div>
            <div className='flex justify-between items-center px-3 py-2 border-b-2'>
              <div className='flex items-center gap-3 py-3 border-[#cacaca]'>
                <Image src='https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-10-a.jpg' 
                  alt='image' 
                  width={45} 
                  height={55}
                  className='rounded-md'
                />

                <div className='flex flex-col'>
                  <span className='text-[#696969] text-[.8rem]'>Nome do produto</span>
                  <span className='text-[#696969] text-[.8rem]'>Preta</span>
                  <span className='text-[#696969] text-[.8rem]'>2x</span>
                </div>
              </div>

              <span className='text-[.9rem]'>R$28,00</span>
            </div>
          </div>

          <div className='flex justify-between items-center px-3 py-5'>
            <h6 className='text-[1rem]'>Total</h6>
            <span className='font-bold'>R$280,00</span>
          </div>

        </div>
      </section>
    </main>
  );
}
