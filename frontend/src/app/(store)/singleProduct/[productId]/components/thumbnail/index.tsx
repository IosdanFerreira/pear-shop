import React, { useState } from 'react';
import Image from 'next/image';

// icons
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import MultipleCarousel from '@/components/carousel/multipleCarousel';


interface IProductThumbnail {
    data: {
        url: string
    }[]
}

export default function ProductThumbnail({ data }: IProductThumbnail) {

  const [ currentImage, setCurrentImage] = useState<string>(data?.[0]?.url);
  const [ currentImageIndex, setCurrentImageIndex] = useState<string>('1');

  return (
    <div className='flex gap-2'>
      <div className='hidden lg:flex flex-col w-fit gap-1'>
        {data?.map((item) => (
          <button
            key={item?.url} 
            className='relative border-[2px] hover:outline-none hover:ring-[1px] hover:ring-[#3a3a3a] hover:border-[#fff]'
            onMouseEnter={() => setCurrentImage(item?.url)}
          >
            <Image 
              alt='thumbnail'
              src={item?.url}
              width={70}
              height={75}
            />
          </button>
        ))}
      </div>

      <div className='hidden lg:block w-full'>
        <Dialog>
          <DialogTrigger className='relative w-full h-[578px] lg:h-[700px] 2xl:h-[790px] px-2'>
            <Image 
              alt={currentImage}
              src={currentImage}
              fill
              className='absolute'
            />
          </DialogTrigger>

          <DialogContent className='flex w-[100vw] h-full bg-[#F7F8F8] p-0'>
            <div className='flex flex-col w-fit gap-1 p-4'>
              {data?.map((item) => (
                <button
                  key={item?.url} 
                  className='relative border-[2px] hover:outline-none hover:ring-[1px] hover:ring-[#3a3a3a] hover:border-[#fff]'
                  onMouseEnter={() => setCurrentImage(item?.url)}
                >
                  <Image 
                    alt='thumbnail'
                    src={item?.url}
                    width={70}
                    height={75}
                  />
                </button>
              ))}
            </div>

            <div className='w-full p-4'>
              <div className='flex justify-center'>
                <figure className='relative w-[465px] 2xl:w-[710px] h-[100vh] px-2'>
                  <Image 
                    alt={currentImage}
                    src={currentImage}
                    fill
                    className='absolute pb-9'
                  />
                </figure>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className='m-auto lg:hidden w-full h-full'>

        <MultipleCarousel
          settings={{
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  autoplay: false,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: false
                }
              },
            ],
            swipeToSlide: true,
            afterChange: function(index) {
              setCurrentImageIndex(String(index + 1));
            },
          }}
          dataList={data}
          renderComponent={(item) => {
            return (
              <button className='outline-none w-full h-[362px] md:w-[732px] md:h-[762px] relative block m-auto rounded-sm overflow-hidden'>
                <Image 
                  alt={item?.url}
                  src={item?.url}
                  fill
                  className='absolute'
                />
              </button>
            );
          }}
        />

        <div className='flex justify-center items-center'>
          <span className='block rounded-full bg-[#0000005d] text-white text-[.7rem] md:text-[1rem] px-4 tracking-widest'>{currentImageIndex} / {data?.length}</span>
        </div>
      </div>
    </div>
  );
}
