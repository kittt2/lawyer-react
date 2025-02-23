import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h3 className=" mb-3">RK Legal Associates</h3>
            <p className="mb-0">
              Committed to excellence in legal services since 2000. Your trusted
              partner in navigating complex legal matters.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="h5 mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white-50 text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white-50 text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-white-50 text-decoration-none"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="h5 mb-3">Office Hours</h3>
            <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="mb-2">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="mb-0">Sunday: Closed</p>
          </div>
        </div>

        <hr className="my-4 bg-secondary" />
        <div className="text-center text-white-50">
          <p className="mb-0">
            &copy; 2024 RK Legal Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
