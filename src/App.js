

import React from 'react'; 

import './App.css'; 

import Navbar from './componets/Navbar/NavbarElements'; 
import { BrowserRouter as Router, Routes, Route} 

    from 'react-router-dom'; 

import Home from './componets/pages'; 

import About from './componets/pages/about'; 

import Blogs from './componets/pages/blogs'; 

import SignUp from './componets/pages/signup'; 

import Contact from './componets/pages/contact'; 

  

function App() { 

return ( 

    <Router> 

    <Navbar /> 

    <Routes> 

        <Route exact path='/' exact element={<Home />} /> 

        <Route path='/about' element={<About/>} /> 

        <Route path='/contact' element={<Contact/>} /> 

        <Route path='/blogs' element={<Blogs/>} /> 

        <Route path='/sign-up' element={<SignUp/>} /> 

    </Routes> 

    </Router> 
); 
} 

  

export default App; 
 