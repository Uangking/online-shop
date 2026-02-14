import React, { useState, useRef } from 'react';

const PRODUCTS = [
  { id: 1, title: 'Goodbye Bading', price: 650, img: 'GoodbyeBadingProduct.jpg', desc: 'Spectacular goodbye celebration fireworks' },
  { id: 2, title: 'Bin Laden', price: 750, img: 'BinLadenProduct.png', desc: 'Explosive entertainment for major events' },
  { id: 3, title: 'Atomic Bomb', price: 900, img: 'AtomicBombProduct.jpg', desc: 'Maximum impact fireworks display' },
];

export default function Product() {
  const [visible, setVisible] = useState({});
  const timeouts = useRef({});

  function addToCart(id) {
    setVisible(v => ({ ...v, [id]: true }));
    if (timeouts.current[id]) clearTimeout(timeouts.current[id]);
    timeouts.current[id] = setTimeout(() => setVisible(v => ({ ...v, [id]: false })), 3000);
  }

  return (
    <div className="products">
      <div className="search-section">
        <input type="text" className="search-bar" placeholder="Search products..." />
      </div>

      {PRODUCTS.map(p => (
        <div className="product-card" key={p.id}>
          <div className="product-image"><img src={p.img} alt={p.title} /></div>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div className="product-footer">
            <span className="product-price">{p.price} Pesos</span>
            <button className="add-to-cart-btn" onClick={() => addToCart(p.id)}>Add to Cart</button>
          </div>
          {visible[p.id] && <p style={{color: 'green', marginTop: 10, fontWeight: 'bold', textAlign: 'center'}}>Product added!</p>}
        </div>
      ))}
    </div>
  );
}
