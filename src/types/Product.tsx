export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string; // ✅ Required for category filtering
    thumbnail: string;
    images: string[];
  }
  