'use client';
import React from 'react';
import Link from 'next/link';

// icons
import { IoMdArrowDropright } from 'react-icons/io';

// components
import MultipleCarousel from '../carousel/multipleCarousel';

// animations
import { motion, useAnimation } from 'framer-motion';

// fonts
import { fanWood, limelight, quattrocento } from '../ui/fonts';

// types
import { IHero } from '@/@types';

interface IHeroProps {
    data: IHero[]
}

export default function Hero({ data }: IHeroProps) {
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      translateX: [0, -1, 1, -1, 1, -1, 1, 0],
      transition: { duration: 1 }
    });
  };
  
  return (
    <aside className='rounded-md overflow-hidden'>
      <MultipleCarousel
        settings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                autoplay: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            },
          ],
        }}
        dataList={data}
        renderComponent={(item) => {
          return (
            <div className='overflow-hidden flex justify-start items-center bg-cover h-[200px] md:h-[440px] lg:h-[540px] 2xl:h-[600px] rounded-md px-5 md:px-20 lg:px-32' style={{backgroundImage: `url(${item?.backgroundImage})`}}>
              <div className='absolute z-0 inset-0 bg-[#00000018] opacity-50'></div>
              <div className={'relative w-[50%] z-10'}>
                <h2 className={`text-[${item?.textColor}] text-[.8rem] md:text-[1.1rem] lg:text-[2rem] w-[full] ${fanWood.className}`}>{item?.title}</h2>
    
                <h3 className={`text-[${item?.textColor}] text-[1rem] md:text-[1.8rem] lg:text-[3rem] mb-1 md:mb-2 font-extrabold w-[550px] ${quattrocento.className}`}>{item?.subTitle}</h3>
    
                <p className={`text-[.6rem] md:text-[.8rem] text-[${item?.textColor}] w-[240px] md:w-[450px] lg:max-w-[500px] mb-1 md:mb-3 font-medium`}>{item?.description}</p>
    
                <Link href={item?.urlLink} className='block w-fit mt-2 md:mt-4 bg-[#000] hover:bg-[#121212] text-[${item?.textColor}] px-6 py-[6px] rounded-md'>
                  <motion.div 
                    onHoverStart={startAnimation}
                    className='flex justify-center items-center gap-1 w-fit md:w-[150px] text-white'
                  >
                    <span className='text-[.7rem] md:text-[.8rem] lg:text-[1rem]'>Ver mais</span>
                    <motion.div
                      animate={controls}>
                      <IoMdArrowDropright />
                    </motion.div>
                  </motion.div>
                </Link>
              </div>
            </div>
          );
        }}
      />
    </aside>
  );
}
