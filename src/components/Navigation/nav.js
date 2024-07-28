import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiHeart, FiSearch } from "react-icons/fi";
import { SiNike } from "react-icons/si";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import {selectExtractedUsername} from '../../store/auth-slice';
import './nav.css';
import { useSelector } from 'react-redux';

function Nav({query, handleInputChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const extractedUsername = useSelector(selectExtractedUsername);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div>
        <SiNike className='nav-icon' />
      </div>
      <div className={`navContainer ${isOpen ? 'open' : ''}`}>
        <a href="#" >New & Featured</a>
        <a href="#" >Men</a>
        <a href="#" >Women</a>
        <a href="#" >Kids</a>
        <a href="#" >Jordan</a>
      </div>
      <div className='profile-container'>
        <div>
          <FiSearch className='nav-iconss' />
          <input 
            type='text'
            className='search-input'
            placeholder='Enter your search' 
            value={query}
            onChange={handleInputChange}
          />
        </div>
        <a onClick={()=> navigate('favourites')}>
          <FiHeart className='nav-icons' />
        </a>
        <button onClick={()=>navigate('cart')}>  <IoBagOutline className='nav-icons'/> </button>
       
        <a href='#'>
          <AiOutlineUserAdd className='nav-icons'onClick={()=>navigate('auth')} />
          {extractedUsername && <span className='username'>Hi,{extractedUsername}</span>}
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Nav;

