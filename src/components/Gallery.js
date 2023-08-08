import React, { useEffect } from 'react';
import '../gallery.css'; // Import your CSS file here
import Navbar from './Navbar';
import Footer from './Footer';

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery";
  }, []);

  return (
    <div className='body-bg text-white text-center'>
      <Navbar />
      <div className='gallery-bg menu-bg'>
        <div className='container py-5'>
          <h1 className='display-3 text-center mb-5'>Gallery</h1>
          <div className='image-grid'>
            <img src={process.env.PUBLIC_URL + '/gallery_assets/image_1.jpeg'} alt='first_img' className='gallery-image' />
            <img src={process.env.PUBLIC_URL + '/gallery_assets/image_2.jpeg'} alt='second_img' className='gallery-image' />
            <img src={process.env.PUBLIC_URL + '/gallery_assets/image_3.jpeg'} alt='third_img' className='gallery-image' />
            <img src={process.env.PUBLIC_URL + '/gallery_assets/image_4.jpeg'} alt='fourth_img' className='gallery-image' />
            <img src={process.env.PUBLIC_URL + '/gallery_assets/image_5.jpeg'} alt='fifth_img' className='gallery-image' />
            <img src={process.env.PUBLIC_URL + '/gallery_assets/image_6.jpeg'} alt='sixth_img' className='gallery-image' />
            <img src={process.env.PUBLIC_URL + '/gallery_assets/image_7.jpeg'} alt='seventh_img' className='gallery-image' />
            <img src={process.env.PUBLIC_URL + '/gallery_assets/image_8.jpeg'} alt='eighth_img' className='gallery-image' />
            <img src={process.env.PUBLIC_URL + '/gallery_assets/image_9.jpeg'} alt='ninth_img' className='gallery-image' />
            <img src={process.env.PUBLIC_URL + '/gallery_assets/image_10.jpeg'} alt='tenth_img' className='gallery-image' />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Gallery;
