export interface Product {
  _id: string;
  slug: string;

  name: string;
  brand: string;
  category: string;

  image: string;

  mrp: number;
  price: number;

  stock: number;

  rating: number;

  featured: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;

  description?: string;

  gender?: "Men" | "Women" | "Unisex";
  size?: string;

  // 👇 हे add कर
  topNotes?: string[];
  middleNotes?: string[];
  baseNotes?: string[];

  longevity?: string;
  projection?: string;
  concentration?: string;

  isActive?: boolean;

  createdAt?: string;
  updatedAt?: string;
}