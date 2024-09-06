import React from 'react';
import './index.css';
import Home from './pages/Home';
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return (
   <>
   <Routes>
    <Route index element={<Home />} />
    <Route path='project' element={<Project />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
   </Routes>
   
   </>
  )
}

export default App