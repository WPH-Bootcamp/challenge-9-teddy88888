// src/types/menu.ts
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

// src/types/order.ts
export interface OrderRequest {
  customerName: string;
  phoneNumber: string;
  address: string;
  items: {
    menuId: string;
    quantity: number;
  }[];
}
export interface OrderResponse {
  orderId: string;
  status: string;
  estimatedDeliveryTime: string;
}