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
    <main>
      <section className='container mb-3'>
        <Hero data={heroMock} />
      </section>

      <section className='container mb-3 md:mb-7'>
        <div className='flex flex-col lg:flex-row justify-evenly items-center gap-3'>
          <Link href={carouselMock?.[0]?.link} className='relative h-[75px] md:h-[140px] w-[100%] lg:w-[50%]'>
            <Image 
              key={carouselMock?.[0]?.imageUrl}
              src={carouselMock?.[0]?.imageUrl}
              alt={carouselMock?.[0]?.imageUrl}
              fill
              className='absolute rounded-md'
            />
          </Link>

          <Link href={carouselMock?.[1]?.link} className='relative h-[75px] md:h-[140px] w-[100%] lg:w-[50%]'>
            <Image 
              key={carouselMock?.[1]?.imageUrl}
              src={carouselMock?.[1]?.imageUrl}
              alt={carouselMock?.[1]?.imageUrl}
              fill
              className='absolute rounded-md'
            />
          </Link>
        </div>
      </section>

      <section className='container md:mb-7'>
        <h2 className='text-[.9rem] md:text-[1rem] 2xl:text-[1.1rem] text-[#242424] mb-2 uppercase font-bold'>Produtos em promoção</h2>
        <MultipleCarousel
          settings={{
            slidesToShow: 5,
            slidesToScroll: 4,
            dots: false,
            responsive: [
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  arrows: true,
                  dots: false
                }
              },
              {
                breakpoint: 556,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  arrows: false,
                  dots: false
                }
              },
            ],
          }}
          dataList={productsMock}
          renderComponent={(item) => {
            return (
              <div className='mx-1'>
                <ProductCard key={item?.id} product={item} />
              </div>
            );
          }}
        />
      </section>

      <section className='container mb-3 md:mb-7'>
        <div className='flex flex-col lg:flex-row justify-evenly items-center gap-3'>
          <Link href={carouselMock?.[0]?.link} className='relative h-[75px] md:h-[140px] w-[100%] lg:w-[50%]'>
            <Image 
              key={carouselMock?.[0]?.imageUrl}
              src={carouselMock?.[0]?.imageUrl}
              alt={carouselMock?.[0]?.imageUrl}
              fill
              className='absolute rounded-md'
            />
          </Link>

          <Link href={carouselMock?.[1]?.link} className='relative h-[75px] md:h-[140px] w-[100%] lg:w-[50%]'>
            <Image 
              key={carouselMock?.[1]?.imageUrl}
              src={carouselMock?.[1]?.imageUrl}
              alt={carouselMock?.[1]?.imageUrl}
              fill
              className='absolute rounded-md'
            />
          </Link>
        </div>
      </section>

      <section className='container md:mb-7'>
        <h2 className='text-[.9rem] md:text-[1rem] 2xl:text-[1.1rem] text-[#242424] mb-2 uppercase font-bold'>Produtos em promoção</h2>
        <MultipleCarousel
          settings={{
            slidesToShow: 5,
            slidesToScroll: 4,
            dots: false,
            responsive: [
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  arrows: true,
                  dots: false
                }
              },
              {
                breakpoint: 556,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  arrows: false,
                  dots: false
                }
              },
            ],
          }}
          dataList={productsMock}
          renderComponent={(item) => {
            return (
              <div className='mx-1'>
                <ProductCard key={item?.id} product={item} />
              </div>
            );
          }}
        />
      </section>

      <section className='container'>
        <h2 className='text-[.9rem] md:text-[1rem] 2xl:text-[1.1rem] text-[#242424] mb-2 uppercase font-bold'>Produtos em Destaque</h2>
        <ProductList productList={productsMock}/>
      </section>
    </main>
  );
}
