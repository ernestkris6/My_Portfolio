import './FooterStyle.css';
import React from 'react';

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color : "white", marginRight : "2rem"}}/>
                    <div>
                        <p>91B, Blue Street Jakande Estate Isolo</p>
                        <p>Lagos.</p>

                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color : "white", marginRight : "2rem"}}/>
                    +234(0)8103695088</h4>
                    
                    
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color : "white", marginRight : "2rem"}}/>
                    ernestchris6@gmail.com</h4>
                    
                    
                </div>
            </div>
            <div className='left'>
                <h4>About Kris Dev</h4>
                <p>This is me Ernest Christopher, I use codes to bring designs to life. I love discussing new projects, 
                    solving problems and learning more in the world of Tech.</p>
                    <div className='social'>
                    <FaFacebook size={20} style={{color : "white", marginRight : "2rem"}}/>
                    <FaTwitter size={20} style={{color : "white", marginRight : "2rem"}}/>
                    <FaLinkedin size={20} style={{color : "white", marginRight : "2rem"}}/>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;