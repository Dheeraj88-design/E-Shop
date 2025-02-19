import React from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <Link to="/cart">
        <button className="bg-blue-500 text-white p-2 rounded">Go to Cart</button>
      </Link>
    </div>
  );
};

export default Products;
