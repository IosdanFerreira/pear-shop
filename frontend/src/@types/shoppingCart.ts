import { IProduct } from '@/@types';

export interface IShoppingCart extends IProduct {
    quantity: number;
    total: number;
}