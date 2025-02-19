import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../features/cart/cartSlice';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="alert alert-warning">No items in the cart.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center flex-wrap cart-main mt-2"
              >
                <div className="d-flex align-items-center">
                  {/* Product Image */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    width="80"
                    height="80"
                    style={{ objectFit: 'cover', borderRadius: '10px' }}
                    className="me-3"
                  />
                  <div>
                    <h5>{item.title}</h5>
                    <p className="mb-1">
                      ${item.price} x {item.quantity} ={' '}
                      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span className="fs-5">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Price and Checkout */}
          <h4 className="mb-3">
            Total: <span className="text-success">${total.toFixed(2)}</span>
          </h4>
          <button className="btn btn-success w-100">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
