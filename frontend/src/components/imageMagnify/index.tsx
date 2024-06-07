'use client';
import Image from 'next/image';
import React, { MouseEvent, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

const MAGNIFIER_SIZE = 100;
const ZOOM_LEVEL = 2.5;

interface IImageMagnify {
    imageURL: string
    defaultWidth: number
    defaultHeight: number
}

export default function ImageMagnify({ imageURL, defaultHeight, defaultWidth }: IImageMagnify) {
  // State variables
  const [zoomable, setZoomable] = useState(true);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 100, y: 100, mouseX: 0, mouseY: 0 });

  // Event handlers
  const handleMouseEnter = (e: MouseEvent) => {
    let element = e.currentTarget;
    let { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updatePosition(e);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    setZoomable(false);
    updatePosition(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    updatePosition(e);
  };

  const updatePosition = (e: MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;
    setPosition({
      x: -x * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
      y: -y * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
      mouseX: x - (MAGNIFIER_SIZE / 2),
      mouseY: y - (MAGNIFIER_SIZE / 2),
    });
  };
    
  return (
    <div className='flex justify-center items-center'>
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        className={'relative overflow-hidden'}>
        <Image className='object-cover border z-10' alt="" src={imageURL} width={defaultWidth} height={defaultHeight} />
        <div
          style={{
            backgroundPosition: `${position.x}px ${position.y}px`,
            backgroundImage: `url(${imageURL})`,
            backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
            backgroundRepeat: 'no-repeat',
            display: zoomable ? 'block' : 'none',
            top: `${position.mouseY}px`,
            left: `${position.mouseX}px`,
            width: '520px',
            height: '520px',
          }}
          className={'z-50 border-[1px] rounded-full pointer-events-none absolute border-white'}
        />
      </div>
    </div>
  );
}
