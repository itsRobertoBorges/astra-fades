import React from 'react';
import BORGES from '../assets/BORGES_LOGO.png';

const Footer = () => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg display-6 sticky-nav
          bg-black
        `}
      >
        <div className="container-fluid text-white">
          <div className="d-flex flex-column flex-lg-row justify-lg-between align-items-center">
            <a
              href="https://robertoborges.ca"
              className={`navbar-brand
                text-white fade-in text-transparent
              `}
              to="/" // Link to the home route
              style={{ fontSize: '60px' }}
            >
              <img src={BORGES} alt="borges_dev" height={50} />
            </a>
            <h4 className="text-center text-white mt-3 mt-lg-0">
              © Astra Fades All Rights Reserved 2023
            </h4>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
