export interface Product {
  id: string;
  name: string;
  thumbnail: string;
  gallery: string[];
  price: number;
  description?: string;
  isFavorite?: boolean;
}
