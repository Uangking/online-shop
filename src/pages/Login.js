import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setMessage('Logged in (mock)');
    setTimeout(() => setMessage(''), 2000);
  }

  return (
    <section style={{flexDirection: 'column', alignItems: 'center'}}>
      <div className="auth-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="btn">Login</button>
        </form>

        <div className="signup-link">Don't have an account? <Link to="/signup">Sign up here</Link></div>
        {message && <p style={{color: 'green'}}>{message}</p>}
      </div>
    </section>
  );
}
