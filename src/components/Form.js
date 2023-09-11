import { Link } from 'react-router-dom';
import './FormStyle.css';

import React from 'react'

const Form  = () => {


  return (
    <div className='form'>
      <form>
      <label>Your Name</label>
        <input type='text'/>
        <label>Email</label>
        <input type='email'/>
        <label>Subject</label>
        <input type='text'/>
        <label>Message</label>
        <textarea rows='6' placeholder='Type your message here...' />
        
        <Link to='https://github.com/ernestkris6/'>
        <button className='btn'>Submit</button>
        </Link>
      </form>
       
    </div>
  )
}

export default Form;