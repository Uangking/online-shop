import React, { useState } from 'react';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowSuccess(true);
    e.target.reset();
    setTimeout(() => setShowSuccess(false), 3000);
  }

  return (
    <div className="products" style={{alignItems: 'flex-start'}}>
      <h3>Contact Us</h3>
      <p>If you can't contact us then good luck!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
        {showSuccess && <p style={{color: 'green', marginTop: 10, fontWeight: 'bold'}}>Message sent!</p>}
      </form>
    </div>
  );
}
