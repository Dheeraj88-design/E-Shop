import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Navbar: React.FC = () => {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <div className="main-navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">E - Shop</Link>
          <div>
            <Link className="nav-link text-white" to="/cart">
              🛒 Cart ({cartCount})
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
