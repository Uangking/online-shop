import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <img src="/logo192.png" alt="logo" />
          </div>
          <h2>Ambatublow Store</h2>
        </div>
        <div className="header-right">
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </header>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/shoppingcart">Cart</Link></li>
        </ul>
      </nav>

      <section>
        <Outlet />
      </section>

      <footer>
        © {new Date().getFullYear()} Ambatublow Store
      </footer>
    </div>
  );
}
