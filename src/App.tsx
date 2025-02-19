import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => (
  <Router basename="/your-repo-name"> {/* Replace 'your-repo-name' with your actual GitHub repo name */}
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
