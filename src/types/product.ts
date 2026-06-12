export interface Product {
  id: string;
  name: string;
  category: 'Kurtas' | 'Kurta Sets' | 'Anarkali' | 'Skirt Sets' | 'Ethnic Dresses' | 'Tunics';
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  details: string[];
  sizes: string[];
  available: boolean;
}
