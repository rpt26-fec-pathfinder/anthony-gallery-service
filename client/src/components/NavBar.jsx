import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import '../styling/NavBar.css';


const NavBar = () => {
  return (
    <div>
      <br />
      <br />
      <div id="navbar">
        <span className="navbar-selections"><a className="nav-select" href="">Your Store&nbsp;<IoMdArrowDropdown /></a></span>
        <span className="navbar-selections"><a className="nav-select" href="">Browse&nbsp;
        <IoMdArrowDropdown /></a></span>
        <span className="navbar-selections"><a className="nav-select" href="">Points Shop</a></span>
        <span className="navbar-selections"><a className="nav-select" href="">News</a></span>
        <span className="navbar-selections"><a className="nav-select" href="">Steam Labs</a></span>
        <span id="store_nav_search_term" >
          <input type='text' placeholder='search the store' id='search-text-input' />
          <button id="search-button"><FaSearch /></button>
        </span>
      </div>
      <br />
      <br />
    </div >
  )
}

export default NavBar;