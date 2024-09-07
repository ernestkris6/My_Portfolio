import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './FormStyle.css';


const Form  = () => {

  const [name, setName] = useState("Ernest Chris");
  const [email, setEmail] = useState("ernestchris@gmail.com");
  const [subject, setSubject] = useState("Ernest Chris");
  const [text, setText] = useState("Enter subject...");


  return (
    <div className='form'>
      <form>
      <label>Your Name</label>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
        <label>Email</label>
        <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <label>Subject</label>
        <input type='text' value={subject} onChange={(e)=> setSubject(e.target.value)}/>
        <label>Message</label>
        <textarea rows='6' placeholder='Type your message here...' type='email' value={text} onChange={(e)=> setText(e.target.value)} />
        
        <Link to='https://github.com/ernestkris6/'>
        <button className='btn'>Submit</button>
        </Link>
      </form>
       
    </div>
  )
}

export default Form; 