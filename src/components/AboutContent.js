import './AboutContentStyle.css'

import React from 'react'
import { Link } from 'react-router-dom';

import React1 from '../assets/react1.jpg';
import React2 from '../assets/react2.webp';


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I am a react front-end developer. 
                I create responsive secure websites for my clients</p>

                <Link to="/contact">
            <button className='btn'>CONTACT</button>
        </Link>
        </div>

        

        <div className='right'>
            <div className='img-container'>
                <div className='top'>
                    <img src={React1} alt='true' className='img'/>
                </div>

                <div className='bottom'>
                    <img src={React2} alt='true' className='img'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent;