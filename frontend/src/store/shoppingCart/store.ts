import { IProduct } from '@/@types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';;

export interface IShoppingCartStore {
    cart: IProduct[]
    addToCart: (product: IProduct) => void
    removeFromCart?: (id: number) => void
}

export const shoppingCartStore = create(
  persist<IShoppingCartStore>(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (id) => set((state) => ({
        cart: state.cart.filter((product) => product.id !== id),
      })),
    }),
    {
      name: 'cart-storage'
    }
  )
);