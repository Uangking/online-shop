import React from 'react';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cart-item-name">
                    <img src="GoodbyeBadingProduct.jpg" alt="Goodbye Bading" className="cart-item-img" />
                    <span>Goodbye Bading</span>
                  </div>
                </td>
                <td>650 Pesos</td>
                <td>
                  <div className="quantity-selector">
                    <button className="qty-btn">-</button>
                    <input type="number" value="2" min="1" className="qty-input" readOnly />
                    <button className="qty-btn">+</button>
                  </div>
                </td>
                <td>1300 Pesos</td>
                <td><button className="remove-btn">Remove</button></td>
              </tr>
              <tr>
                <td>
                  <div className="cart-item-name">
                    <img src="BinLadenProduct.png" alt="Bin Laden" className="cart-item-img" />
                    <span>Bin Laden</span>
                  </div>
                </td>
                <td>750 Pesos</td>
                <td>
                  <div className="quantity-selector">
                    <button className="qty-btn">-</button>
                    <input type="number" value="1" min="1" className="qty-input" readOnly />
                    <button className="qty-btn">+</button>
                  </div>
                </td>
                <td>750 Pesos</td>
                <td><button className="remove-btn">Remove</button></td>
              </tr>
              <tr>
                <td>
                  <div className="cart-item-name">
                    <img src="AtomicBombProduct.jpg" alt="Atomic Bomb" className="cart-item-img" />
                    <span>Atomic Bomb</span>
                  </div>
                </td>
                <td>900 Pesos</td>
                <td>
                  <div className="quantity-selector">
                    <button className="qty-btn">-</button>
                    <input type="number" value="1" min="1" className="qty-input" readOnly />
                    <button className="qty-btn">+</button>
                  </div>
                </td>
                <td>900 Pesos</td>
                <td><button className="remove-btn">Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>2950 Pesos</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>150 Pesos</span>
          </div>
          <div className="summary-total">
            <span>Total:</span>
            <span>3100 Pesos</span>
          </div>
          <Link to="/payment"><button className="checkout-btn">Proceed to Checkout</button></Link>
          <a href="/" className="continue-shopping">Continue Shopping</a>
        </div>
      </div>
    </div>
  );
}
