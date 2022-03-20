import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import LogoFooter from '../assets/LogoFooter.png'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Síguenos en redes sociales y envíanos tus comentarios!
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img width="80" src={LogoFooter} ></img>
            </Link>
          </div>
          <small className='website-rights'>ALMANAC © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link twitter'
              to='https://www.linkedin.com/in/santiago-londono-68985417b/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
            <Link
                className='social-icon-link github'
                to='https://github.com/londonosantiago'
                target='_blank'
                aria-label='Github'
            >
                <i className='fab fa-github'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;