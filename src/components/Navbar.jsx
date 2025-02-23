import { Link } from 'react-router-dom';
import { PhoneOutlined } from '@ant-design/icons';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-uppercase" to="/">
          RK Legal Associates
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-5 me-3" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  fw-semibold fs-5 me-3" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold fs-5 me-3" to="/about">About Us</Link>
            </li>
          </ul>

          <a href="#contact" className="btn btn-warning rounded-3 fw-bold px-4 ms-3">
            <PhoneOutlined /> 999999999
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
