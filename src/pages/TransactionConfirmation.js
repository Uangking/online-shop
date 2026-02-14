import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TransactionConfirmation() {
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(new Date().toLocaleString());
  }, []);

  return (
    <div className="confirmation-container">
      <h1>Transaction Successful!</h1>
      <p style={{textAlign: 'center', color: '#666'}}>Thank you for your purchase. Your order has been confirmed.</p>

      <div className="confirmation-info">
        <div className="info-item">
          <label>Transaction Time:</label>
          <p>{time}</p>
        </div>

        <div className="info-item">
          <label>Status:</label>
          <p>Payment Received</p>
        </div>

        <div className="info-item full-width">
          <label>Order Summary:</label>
          <div className="order-items">
            <div className="order-item">
              <span>Goodbye Bading (Qty: 2)</span>
              <span>1300 Pesos</span>
            </div>
            <div className="order-item">
              <span>Bin Laden (Qty: 1)</span>
              <span>750 Pesos</span>
            </div>
            <div className="order-item">
              <span>Atomic Bomb (Qty: 1)</span>
              <span>900 Pesos</span>
            </div>
          </div>
        </div>

        <div className="info-item full-width">
          <label>Price Breakdown:</label>
          <div className="price-breakdown">
            <div className="price-row">
              <span>Subtotal:</span>
              <span>2950 Pesos</span>
            </div>
            <div className="price-row">
              <span>Shipping:</span>
              <span>150 Pesos</span>
            </div>
            <div className="price-row total">
              <span>Total:</span>
              <span>3100 Pesos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="button-group">
        <Link to="/" className="btn">Continue Shopping</Link>
      </div>
    </div>
  );
}
