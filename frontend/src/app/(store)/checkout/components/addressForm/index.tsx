'use client';
import React from 'react';

// components
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
import InputMasks from '@/components/ui/inputMasks';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// form
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  cep: z.string(),
  street: z.string(),
  addressNumber: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
  complement: z.string(),
  phone: z.string(),
  paymentMethod: z.string(),
});
  
type SearchFormValues = z.infer<typeof formSchema>

export default function AddressForm() {
    
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cep: '',
      street: '',
      addressNumber: '',
      neighborhood: '',
      city: '',
      uf: '',
      complement: '',
      phone: '',
      paymentMethod: '',
    }
  });

  const onSubmit = (data: SearchFormValues) => {
    console.log(data);
  };
      
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <span className='flex items-center gap-1 font-bold text-[1.1rem] mb-1'>Endereço de Entrega</span>
        
          <div className='flex items-center gap-4 w-full flex-wrap'>
            <FormField
              control={form.control}
              name="cep"
              render={({ field }) => (
                <FormItem className='w-[48%]'>
                  <FormLabel className='text-[.8rem]'>CPF</FormLabel>
                  <FormControl>
                    <InputMasks field={field} mask='99999-999' placeholder='Informe o CEP' />
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
                    <Input placeholder="Digite seu endereço" className='border border-[#acabab] py-1' {...field} />
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
                    <Input placeholder="Informe o número do endereço" className='border border-[#acabab] py-1' {...field} />
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
                    <Input placeholder="Informe o bairro" className='border border-[#acabab] py-1' {...field} />
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
                    <Input placeholder="Informe a cidade" className='border border-[#acabab] py-1' {...field} />
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
                    <Input placeholder="Informe seu endereço" className='border border-[#acabab] py-1' {...field} />
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
                    <Input placeholder="Informe seu endereço" className='border border-[#acabab] py-1' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <span className='flex items-center gap-1 font-bold text-[1.1rem] mt-9 mb-1'>Método de Pagamento</span>

          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className='w-[48%]'>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full border border-[#acabab]" >
                      <SelectValue placeholder="Forma de pagamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cartão de Crédito" >Cartão de Crédito</SelectItem>
                      <SelectItem value="Boleto">Boleto</SelectItem>
                      <SelectItem value="Pix">Pix</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant={'default'} className="rounded-md mt-4" type="submit">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
