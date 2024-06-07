import { ICategory } from './category';
import { IProductColor } from './productColor';

interface ISecondariesImage {
    url: string
}

export interface IProduct {
    id: number | string;
    name: string;
    nameUnaccent: string;
    description: string;
    descriptionUnaccent: string;
    defaultImageUrl: string;
    secondariesImageUrl: ISecondariesImage[];
    price: number;
    discount: number;
    priceWithDiscount: number | null;
    stock: number;
    sold: number;
    rate: number;
    available: boolean;
    category: ICategory;
    availableSizes: string[]
    colors: IProductColor[]
    UfOrigin: string
}