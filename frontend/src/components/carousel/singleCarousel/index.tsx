'use client';
import * as React from 'react';
import Image from 'next/image';

// components
import { Carousel } from 'antd';

// types
import { ICarousel } from '@/@types/carousel';

interface IUniqueCarousel {
    images: ICarousel[]
    autoplay?: boolean
    width: number
    height: number
}

export default function UniqueCarousel({ images, autoplay=false, height, width }: IUniqueCarousel) {

  return (
    <div className="md:mt-4 overflow-hidden">
      <Carousel autoplay={autoplay}>
        {images.map((image) => (
          <Image 
            key={image?.url}
            src={image?.url}
            alt={image?.url}
            width={width}
            height={height}
          />
        ))}
      </Carousel>
    </div>
  );
}
