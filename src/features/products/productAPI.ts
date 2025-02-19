import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('Products fetched:', response.data.products); // Debug log
    return response.data.products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
};
