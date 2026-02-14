import React, { useState, useRef } from 'react';

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const timeoutRef = useRef(null);

  function addToCart() {
    setShowMessage(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowMessage(false), 3000);
  }

  return (
    <div className="home-content">
      <div className="welcome-section">
        <h1>Welcome to Ambatublow Store</h1>
        <p>Your premier destination for premium fireworks and pyrotechnic products. Experience spectacular celebrations with our finest selection.</p>
      </div>

      <div className="featured-product">
        <h2>Featured Product</h2>
        <div className="featured-card">
          <div className="featured-image"><img src="AtomicBombProduct.jpg" alt="Atomic Bomb" /></div>
          <div className="featured-info">
            <h3>Atomic Bomb</h3>
            <p>Maximum impact fireworks display</p>
            <p className="featured-description">Experience the ultimate fireworks display with our Atomic Bomb product. Perfect for large events and celebrations that demand maximum impact.</p>
            <div className="featured-footer">
              <span className="featured-price">900 Pesos</span>
              <button className="featured-btn" onClick={addToCart}>Add to Cart</button>
            </div>
            {showMessage && <p style={{color: 'green', marginTop: 10, fontWeight: 'bold', textAlign: 'center'}}>Product added!</p>}
          </div>
        </div>
      </div>

      <div className="video-section">
        <h2>Watch Our Showcase</h2>
        <div className="video-container">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="showcase" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}
