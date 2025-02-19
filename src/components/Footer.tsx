import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* 🛍️ About Section */}
          <div className="col-md-4 mb-4">
            <h5>🛒 ShopEase</h5>
            <p>Your one-stop destination for the latest trends and best deals.</p>
          </div>

          {/* 🔗 Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>🔗 Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="/cart" className="text-light text-decoration-none">Cart</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* 📩 Newsletter & Socials */}
          <div className="col-md-4 mb-4">
            <h5>📩 Subscribe to our Newsletter</h5>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
            <div className="mt-3">
              <a href="#" className="text-light me-3 fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3 fs-5"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-3 fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>

        {/* © Copyright */}
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} ShopEase. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
