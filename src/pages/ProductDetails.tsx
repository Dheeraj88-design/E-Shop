import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  rating: number;
  thumbnail: string;
  images: string[];
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('⚠️ Failed to load product details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status" style={{ width: '4rem', height: '4rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 fs-4 fw-semibold text-muted">🔄 Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) return <p className="text-center text-danger fs-5">{error}</p>;
  if (!product) return <p className="text-center fs-5 mt-5">🚫 Product not found.</p>;

  return (
    <div className="container my-5 sticky-margin">
      <div className="row">
        <div className="col-md-6">
          <img src={product.thumbnail} alt={product.title} className="img-fluid rounded shadow" />
          <div className="d-flex flex-wrap gap-2 mt-3">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index}`}
                className="img-thumbnail"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">{product.brand} | {product.category}</p>
          <p className="fs-4 fw-semibold text-success">${product.price}</p>
          <p>⭐ {product.rating} / 5</p>
          <p>{product.description}</p>
          <button className="carousel-btn me-2">
          <i className="bi bi-cart-plus me-1"></i> Add to Cart
          </button>

          <button className="carousel-btn">
            <i className="bi bi-credit-card me-1"></i> Buy Now
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
