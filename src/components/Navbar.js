import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import astraLogo from '../assets/astra.png';
import '../App.css'; 

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg display-6 sticky-nav ${
          showNavbar ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand ${
              showNavbar ? 'text-white fade-in' : 'text-transparent'
            }`}
            to="/" // Link to the home route
            style={{ fontSize: '60px' }}
          >
            <img src={astraLogo} alt="" />
          </Link>
          <button
            className={`navbar-toggler navbar-dark ${
              showNavbar ? 'navbar-toggler-show' : 'navbar-toggler-hide'
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end ${
              showNavbar ? 'navbar-collapse-show' : 'navbar-collapse-hide'
            }`}
            id="navbarNav"
          >
            <ul
              className={`navbar-nav ${
                showNavbar ? 'ml-auto fade-in' : 'd-none'
              }`}
            >
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    showNavbar ? 'text-white fade-in' : 'text-transparent'
                  }`}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    showNavbar ? 'text-white fade-in' : 'text-transparent'
                  }`}
                  to="/prices"
                >
                  Prices
                </Link>
              </li>
              <li className="nav-item glow">
              <Link
                  className={`nav-link ${
                    showNavbar ? 'text-white fade-in' : 'text-transparent'
                  }`}
                  to="/"
                >
                  Home
                </Link>              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
