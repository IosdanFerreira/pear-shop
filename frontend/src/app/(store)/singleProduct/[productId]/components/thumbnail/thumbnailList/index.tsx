import React from 'react';
import ThumbnailCard from '../thumbnailsCard';

interface IThumbnailList {
    data: {
        url: string
    }[]
}

export default function ThumbnailList({ data }: IThumbnailList) {
  return (
    <>
      <div className='flex flex-col items-end justify-start gap-1'>
        {data?.map((item) => (
          <ThumbnailCard
            key={item?.url}
            url={item?.url}
          />
        ))}
      </div>
    </>
  );
}
