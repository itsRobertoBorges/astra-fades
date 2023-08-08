import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../prices.css';

const Prices = () => {
  useEffect(() => {
    document.title = "Prices";
  }, []);

  return (
    <div className='body-bg text-white text-center d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='menu-bg fade-in flex-grow-1'>
        <div className='container py-5'>
          <h1 className='display-3 text-center mb-5'>Services and Prices</h1>
          <div className='row'>
            <div className='col-md-6'>
              <div className='menu-item'>
                <h2 className='menu-item-title'>Beard and Hair</h2>
                <p>Beard and Trim & Lineup with Razor - $15.00</p>
                <p>Lineup Beard and Hair - $15.00</p>
              </div>
              <div className='menu-item'>
                <h2 className='menu-item-title'>Eyebrows</h2>
                <p>Eyebrows - $10.00</p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='menu-item'>
                <h2 className='menu-item-title'>Men's Hair</h2>
                <p>Men's Hair - $30.00</p>
              </div>
              <div className='menu-item'>
                <h2 className='menu-item-title'>Waxing</h2>
                <p>Wax (Ears, Nose, etc.) - $10.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prices;
