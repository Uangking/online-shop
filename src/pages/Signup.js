import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [msg, setMsg] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setMsg('Account created (mock)');
    setTimeout(() => setMsg(''), 2000);
  }

  return (
    <section style={{flexDirection: 'column', alignItems: 'center'}}>
      <div className="auth-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name:</label>
              <input type="text" required />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input type="text" required />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address:</label>
            <input type="email" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Password:</label>
              <input type="password" required />
            </div>
            <div className="form-group">
              <label>Confirm Password:</label>
              <input type="password" required />
            </div>
          </div>

          <div className="form-group">
            <label>Mobile Number:</label>
            <input type="tel" required />
          </div>

          <div className="form-group">
            <label>Home Address:</label>
            <input type="text" required />
          </div>

          <button type="submit" className="btn">Sign Up</button>
        </form>

        <div className="signup-link">Already have an account? <Link to="/login">Login</Link></div>
        {msg && <p style={{color: 'green'}}>{msg}</p>}
      </div>
    </section>
  );
}
