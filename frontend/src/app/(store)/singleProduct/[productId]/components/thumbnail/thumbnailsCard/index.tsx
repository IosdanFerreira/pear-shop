import Image from 'next/image';
import React from 'react';

interface IThumbnailCard {
    url: string
}

export default function ThumbnailCard({ url }: IThumbnailCard) {
  return (
    <button className='relative border-[2px] hover:outline-none hover:ring-[1px] hover:ring-[#3a3a3a] hover:border-[#fff]'>
      <Image 
        alt='thumbnail'
        src={url}
        width={70}
        height={75}
      />
    </button>
  );
}
