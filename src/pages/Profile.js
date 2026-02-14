import React from 'react';

export default function Profile() {
  return (
    <section style={{flexDirection: 'column', alignItems: 'center'}}>
      <div className="profile-container">
        <h1>User Profile</h1>
        <div className="profile-info">
          <div className="info-item">
            <label>First Name:</label>
            <p>King Gee</p>
          </div>

          <div className="info-item">
            <label>Last Name:</label>
            <p>Uang</p>
          </div>

          <div className="info-item">
            <label>Email Address:</label>
            <p>kpuang@fit.edu.ph</p>
          </div>

          <div className="info-item">
            <label>Mobile Number:</label>
            <p>0912 345 6789</p>
          </div>

          <div className="info-item full-width">
            <label>Home Address:</label>
            <p>123 Fake Street</p>
          </div>
        </div>
      </div>
    </section>
  );
}
