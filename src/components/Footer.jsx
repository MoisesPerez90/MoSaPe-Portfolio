import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaTrademark  } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer d-flex flex-column">
      <div className="container columns">
        <div className="row">
          <div className="col-12 text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/MoisesPerez90" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/moisesperez-639990/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/mooisees.peerez" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className='text-center' >&copy; 2023 MoSaPe Copyright <FaTrademark /></p>
      </div>
    </div>
  );
}

export default Footer;
