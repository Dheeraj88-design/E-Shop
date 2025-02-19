import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

interface ProductProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, title, price, thumbnail }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Link from triggering
    dispatch(addToCart({ id, title, price, thumbnail, quantity: 1 }));
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Link from triggering
    dispatch(addToCart({ id, title, price, thumbnail, quantity: 1 })); // Add to cart first
    navigate('/cart'); // Redirect to Cart page
  };

  return (
    <Link to={`/product/${id}`} className="text-decoration-none text-dark">
      <div className="card h-100 shadow-sm">
        <img
          src={thumbnail}
          className="card-img-top"
          alt={title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <i className="bi bi-currency-dollar"></i> {price}
          </p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-sm btn-outline-primary" onClick={handleAddToCart}>
              <i className="bi bi-cart-plus me-1"></i> Add to Cart
            </button>
            <button className="btn btn-sm btn-outline-success" onClick={handleBuyNow}>
              <i className="bi bi-credit-card me-1"></i> Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
