import React, { useState, useEffect } from 'react';
import instagram from '../assets/instagram.png';
import snapchat from '../assets/snapchat.png';
import '../App.css';

const Hero = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`body-bg hero-component shadow-lg ${showHero ? 'show' : ''}`}>
      <div className={`text-center text-white display-6 ${showHero ? 'fade-in' : ''}`}>
        <h1 className={`my-bouncing-animation display-2 pt-5 text-white ${showHero ? 'fade-in' : ''}`}>
          Crafting Confidence,<br /> One Cut at a Time
        </h1>
        <h3 className={`my-bouncing-animation display-7 pt-4 text-white ${showHero ? 'fade-in' : ''}`}>
          Milton, Ontario<br />
          620 Ferguson Drive Unit 67<br />
          (647)-355-4880<br />
          Ghassan.Taqwa@gmail.com
        </h3>
        <div className="social-icons">
          <div className="social-icon">
            <img className={`my-bouncing-animation`} src={instagram} alt='instagram' width={'50px'} height={'50'} target="_blank" />
            <div className={`my-bouncing-animation`}><a className="text-white" href='https://www.instagram.com/g.t_astra/' target="_blank">G.T_ASTRA</a></div>
          </div>
          <div className="social-icon">
            <img className={`my-bouncing-animation`} src={snapchat} alt='snapchat' width={'55px'} height={'55'} />
            <div className={`my-bouncing-animation`}>ghassantaqwa1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
