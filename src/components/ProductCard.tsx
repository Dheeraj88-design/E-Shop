import React from 'react';
import { Link } from 'react-router-dom';

interface ProductProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, title, price, thumbnail }) => {
  return (
    <Link to={`/product/${id}`} className="text-decoration-none text-dark">
      <div className="card h-100 shadow-sm">
        <img src={thumbnail} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">💵 ${price}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-sm btn-outline-primary">Add to Cart 🛒</button>
            <button className="btn btn-sm btn-outline-success">Buy Now 💳</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
