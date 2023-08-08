import React from 'react';
import aboutImage from '../assets/aboutImage.jpeg';

const About = () => {
  const containerStyle = {
    width: '100%',
    maxWidth: '1905px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
  };

  const textContainerStyle = {
    width: '100%',
    maxWidth: '90%',
    padding: '20px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px',
  };

  const buttonStyle = {
    textAlign: 'center', // Center the text inside the button
    marginTop: '20px', // Add some spacing from the paragraph
    
  };


  return (
    <div className='text-white bg-black' style={containerStyle}>
      <div className='p-4' style={{ ...textContainerStyle}}>
        <h1 className='text-3xl font-bold mb-4 display-2 text-center'><u>About us</u></h1>
        <p className='text-base leading-relaxed'>
          Welcome to Astra Fades, where cutting-edge style meets classic craftsmanship. Since our inception in 2019, we've been on a mission to redefine grooming experiences. At Astra Fades, we believe that a haircut is not just a service, but an art form – a manifestation of your personality and individuality. Our journey began with a vision to create a haven for those who seek more than just a haircut, but a transformation. Every snip, every stroke of our razors is infused with passion and creativity, ensuring that you walk out not just looking your best, but feeling truly confident. Nestled within our doors is a fusion of tradition and innovation, where time-honored techniques merge seamlessly with contemporary trends. Step into our world, where each visit to Astra Fades is a step towards unveiling your unique style narrative. Join us as we embark on this exciting journey of self-expression and exploration, one haircut at a time.
        </p>
        <div style={buttonStyle}>
          <button className='display-3' style={{color: 'black'}}>Book now</button>
        </div>
      </div>
      <img className='mb-5' src={aboutImage} alt='aboutImage' style={imageStyle}/>
    </div>
  );
};

export default About;
