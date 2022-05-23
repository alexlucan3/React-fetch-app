import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1 >Our Mission</h1>
      <p>We aim to find the best companions for homeless pets in need</p>
      <div className='hero-btns'>
      <Link to='/donate' className='btn-mobile'>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        
        >
          DONATE
        </Button>
        </Link>
        <Link to='/adopt' className='btn-mobile'>
        <Button
          className='btns'
          buttonStyle='btn--primary2'
          buttonSize='btn--large'
        >
          ADOPT
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
