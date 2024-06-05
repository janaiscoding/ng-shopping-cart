export interface Product {
  id: number;
  name: string;
  url: string;
  price: number;
  description?: string;
  isFavorite?: boolean;
  gallery?: string[];
}
