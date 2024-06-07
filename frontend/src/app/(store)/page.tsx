'use client';
import Link from 'next/link';
import Image from 'next/image';

// components
import MultipleCarousel from '@/components/carousel/multipleCarousel';
import ProductList from '@/components/product/productList';
import Hero from '@/components/hero';
import ProductCard from '@/components/product/productCard';

// shared
import { heroMock, productsMock, carouselMock } from '@/shared/mocks';

// function PrudctCard() {
//   const products = useSuspenseRequestQuery<IProduct[]>({ 
//     queryKey: ['storeProducts'],
//     queryFn: () => fetchProducts(1, 10),
//   });

//   return <div>
//     {productsMock?.map((item) => (
//       <div key={item?.id}>
//         <h2>{item?.name}</h2>
//         <div>{item?.description}</div>
//         <div>{item?.categories?.[0]?.category?.name}</div>
//       </div>
//     ))}
//   </div>;
// }

export default function Home() {
  return (
    <main className='px-12'>
      <section className='mb-12'>
        <Hero data={heroMock} />
      </section>

      <section className='container mb-20'>
        <div className='flex flex-col items-center justify-center mb-7'>
          <h6 className='text-[#8E8F8E] leading-5 text-[.9rem] font-normal mb-4'>Coleção de verão</h6>
          <h2 className='leading-5 text-[.9rem] md:text-[1.9rem] text-[#000] mb-2 font-black'>Produtos em Destaque</h2>
        </div>

        <ProductList productList={productsMock}/>
      </section>

      <section className='container grid grid-cols-12 gap-5 mb-20'>
        <div className='grid col-span-7 relative'>
          <div className='w-full h-[690px] bg-[#FAEDEB] p-20'></div>
          <Image src='https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/collection-03.jpg' width={490} height={600} alt='Foto' className='absolute -top-9 left-20 2xl:left-48'  />
        </div>

        <div className='grid col-span-5 relative'>
          <div className='h-full flex flex-col justify-center absolute -left-20'>
            <h6 className='text-[#8E8F8E] leading-5 text-[.9rem] font-normal mb-5'>Feminino</h6>

            <h2 className='leading-5 text-[.9rem] md:text-[1.9rem] text-[#000] mb-5 font-black'>Coleção Primavera Verão</h2>

            <p className='text-[#6b6b6b] leading-5 text-[.9rem] font-light mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt facilis et nemo autem doloribus aut eligendi sunt voluptates suscipit quod consectetur ex vel vero repellat, facere iure est cum.</p>

            <Link href='/' className='block w-fit bg-[#000] hover:bg-[#121212] text-[${item?.textColor}] px-6 py-[9px] rounded-md'>
              <span className='text-white text-[.7rem] md:text-[.8rem] lg:text-[.9rem]'>Veja a coleção inteira</span>      
            </Link>
          </div>
        </div>
      </section>

      <section className='overflow-hidden bg-cover relative mb-12' style={{backgroundImage: 'url(https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/bg-01.jpg)'}}>
        <div className='absolute z-0 bg-[#000] opacity-[.3] w-full h-full'></div>

        <div className='h-full flex flex-col justify-center items-center py-60 z-20 relative'>
          <h6 className='text-white leading-5 text-[.9rem] font-normal mb-5'>Feminino</h6>

          <h2 className='leading-5 text-[.9rem] md:text-[2.2rem] text-white mb-7 font-black'>Coleção Primavera Verão</h2>

          <h3 className='leading-5 text-[.9rem] md:text-[1.4rem] text-white mb-5 font-normal'>Encontre seu estilo único</h3>

          <Link href='/' className='block w-fit bg-[#000] hover:bg-[#121212] text-[${item?.textColor}] px-6 py-[9px] rounded-md'>
            <span className='text-white text-[.7rem] md:text-[.8rem] lg:text-[.9rem]'>Veja a coleção inteira</span>      
          </Link>
        </div>
      </section>

      <section className='container mb-12'>
        <div className='flex flex-col items-center justify-center mb-7'>
          <h6 className='text-[#8E8F8E] leading-5 text-[.9rem] font-normal mb-4'>Coleção de verão</h6>
          <h2 className='leading-5 text-[.9rem] md:text-[1.9rem] text-[#000] mb-2 font-black'>Produtos em Promoção</h2>
        </div>

        <ProductList productList={productsMock}/>
      </section>

      <section className='overflow-hidden bg-cover relative mb-12' style={{backgroundImage: 'url(https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2020/01/banner-02.jpg)'}}>
        <div className='h-full flex flex-col justify-center items-start py-60 px-24'>
          <h2 className='leading-5 text-[.9rem] md:text-[2rem] text-[#415161] mb-7 font-black'>Se apresse!</h2>
          <h2 className='leading-5 text-[.9rem] md:text-[2.2rem] text-[#415161] mb-7 font-black'>Garanta a sua!</h2>

          <h3 className='leading-5 text-[.9rem] md:text-[1rem] 2xl:text-[1.1rem] text-[#415161] mb-5 font-bold'>Use o código Off20 e garanta 20% de desconto em compras acima de R$150</h3>

          <Link href='/' className='block w-fit bg-[#000] hover:bg-[#121212] text-[${item?.textColor}] px-6 py-[9px] rounded-md'>
            <span className='text-white text-[.7rem] md:text-[.8rem] lg:text-[.9rem]'>Compar agora</span>      
          </Link>
        </div>
      </section>

      <section className='container mb-12'>
        <div className='flex flex-col items-center justify-center mb-7'>
          <h6 className='text-[#8E8F8E] leading-5 text-[.9rem] font-normal mb-4'>Coleção de verão</h6>
          <h2 className='leading-5 text-[.9rem] md:text-[1.9rem] text-[#000] mb-2 font-black'>Produtos em Promoção</h2>
        </div>

        <ProductList productList={productsMock}/>
      </section>
    </main>
  );
}
