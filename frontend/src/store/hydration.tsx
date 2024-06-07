'use client';
import { useEffect } from 'react';
import { shoppingCartStore } from './shoppingCart/store';

const Hydration = () => {
  useEffect(() => {
    shoppingCartStore.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;