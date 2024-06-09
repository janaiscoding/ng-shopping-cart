export interface Product {
  id: string;
  name: string;
  url: string;
  price: number;
  description?: string;
  isFavorite?: boolean;
  gallery?: string[];
}
