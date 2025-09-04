export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price_cents: number;
  image_url: string;
  currency: string;
}

export interface CartItem extends Product {
  quantity: number;
}
