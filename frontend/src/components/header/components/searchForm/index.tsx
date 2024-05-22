'use client';
import React from 'react';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { useParams, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  search: z.string()
});

type SearchFormValues = z.infer<typeof formSchema>

export default function SearchForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    }
  });

  const onSubmit = (data: SearchFormValues) => {
    if(data.search.length > 0) {
      router.push(`/search?filter=${data.search}`);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full mt-2 md:mt-0 md:pe-10'>
        <div className='flex items-center border-[1px] rounded-md border-[#b9b9b9] md:w-auto'>
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="O que deseja buscar?" className='w-[260px] lg:w-[500px] border-0 py-2' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant={'ghost'} className="ml-auto rounded-md border-l-[1px] rounded-l-none" type="submit">
            <Search className='w-5' />
          </Button>
        </div>
      </form>
    </Form>
  );
}
