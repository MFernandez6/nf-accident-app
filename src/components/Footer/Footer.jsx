import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import './footer.css';


export const Footer = () => {
  return (
    <div>
      <div className='text-center text-white'>
        <div className='Footer'>
          <div className="social-media">
              <div className="copyright">
                <h6>© 2023 Copyright</h6>
              </div>
              <div className="social-media-icons">
                <a href="/"
                className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" color='#FAF9F6'  />
                </a>
                <a href="/"
                  className="social-icon">
                  <FontAwesomeIcon icon={faYoutube} size="2x" color='#FAF9F6' />
                </a>
                <a href="/"
                  className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} size="2x" color='#FAF9F6' />
                </a>
                <a href="/" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} size="2x" color='#FAF9F6' />
                </a>
                <a href="/"
                  className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" color='#FAF9F6' />
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}