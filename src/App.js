import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';
import ShoppingCart from './pages/ShoppingCart';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import TransactionConfirmation from './pages/TransactionConfirmation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="product" element={<Product />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="payment" element={<Payment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="transaction-confirmation" element={<TransactionConfirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
