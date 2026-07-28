export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
}