import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <p className='social-logo'>
            Copyright © 2022 Paws Animal Shelter. All Rights Reserved          
            </p>
          </div>
         
          <div className='social-icons'>
            <Link
            className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            
            <Link
            className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            
            <Link
            className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
