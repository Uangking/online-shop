import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const [method, setMethod] = useState('');
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  function processPayment() {
    if (!method) {
      alert('Please select a payment method');
      return;
    }

    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      navigate('/transaction-confirmation');
    }, 2000);
  }

  return (
    <div className="cart-container">
      <h1>Payment</h1>
      <div className="cart-content">
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
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
                <td>2</td>
                <td>1300 Pesos</td>
              </tr>
              <tr>
                <td>
                  <div className="cart-item-name">
                    <img src="BinLadenProduct.png" alt="Bin Laden" className="cart-item-img" />
                    <span>Bin Laden</span>
                  </div>
                </td>
                <td>750 Pesos</td>
                <td>1</td>
                <td>750 Pesos</td>
              </tr>
              <tr>
                <td>
                  <div className="cart-item-name">
                    <img src="AtomicBombProduct.jpg" alt="Atomic Bomb" className="cart-item-img" />
                    <span>Atomic Bomb</span>
                  </div>
                </td>
                <td>900 Pesos</td>
                <td>1</td>
                <td>900 Pesos</td>
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

          <div className="payment-section">
            <label htmlFor="payment-method">Payment Method:</label>
            <select id="payment-method" className="payment-dropdown" value={method} onChange={e => setMethod(e.target.value)}>
              <option value="">Select Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="cash-on-delivery">Cash on Delivery</option>
              <option value="gcash">GCash</option>
            </select>
          </div>

          <button className="checkout-btn" onClick={processPayment} disabled={processing}>{processing ? 'Processing...' : 'Place Order'}</button>
          <a href="/shoppingcart" className="continue-shopping">Back to Cart</a>
        </div>
      </div>
    </div>
  );
}
