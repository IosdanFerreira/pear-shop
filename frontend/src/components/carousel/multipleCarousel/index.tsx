import React from 'react';
import Slider, { Settings } from 'react-slick';
import PrevArrow from './components/prevArrow';
import NextArrow from './components/nextArrow';

interface IMultipleCarousel {
  settings: Settings,
  dataList: any,
  renderComponent: (item: any) => React.ReactNode
}

export default function MultipleCarousel({ settings, dataList, renderComponent }: IMultipleCarousel) {

  const defaultSettings: Settings = {
    dots: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false
        }
      },
    ],
    appendDots: dots => (
      <div
        style={{
          bottom: '0px',
        }}
      >
        <ul style={{ margin: '0px' }}>{dots} </ul>
      </div>
    ),
    ...settings
  };

  return (
    <Slider {...defaultSettings}>
      {dataList.map((item: any, index: any) => (
        <div key={index} className='px-0'>
          <div>{renderComponent(item)}</div>
        </div>
      ))}
    </Slider>
  );
}
