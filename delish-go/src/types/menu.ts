// src/types/menu.ts
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating?: number; // Tanda tanya berarti opsional (jika di Figma ada bintang)
}

export interface CartItem extends MenuItem {
  quantity: number;
}
export interface Category {
  id: string;
  name: string;
  icon: string;
}