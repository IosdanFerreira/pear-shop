import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import  InputMask from 'react-input-mask';

interface IInputMasks {
  field: ControllerRenderProps<any, any>
  placeholder: string
  mask: string
  className?: string
}

export default function InputMasks({ field, placeholder, mask, className }: IInputMasks) {
  return (
    <InputMask 
      mask={mask}
      value={field.value} 
      onChange={field.onChange}
      placeholder={placeholder}
      className={`border border-[#c9c9c9] py-1 flex h-10 w-full rounded-md bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${className}`} />
  );
}
