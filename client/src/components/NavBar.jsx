import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { Nav, NavSelect, NavSelection, Input, Button } from '../styling/NavBarStyled.jsx';


const NavBar = () => {
  return (
    <div>
      <br />
      <br />
      <Nav>
        <NavSelection>
          <NavSelect href="#">Your Store&nbsp;<IoMdArrowDropdown /></NavSelect>
        </NavSelection>
        <NavSelection>
          <NavSelect href="#">Browse&nbsp;
        <IoMdArrowDropdown /></NavSelect>
        </NavSelection>
        <NavSelection>
          <NavSelect href="#">Points Shop</NavSelect>
        </NavSelection>
        <NavSelection>
          <NavSelect href="#">News</NavSelect>
        </NavSelection>
        <NavSelection>
          <NavSelect href="#">Steam Labs</NavSelect>
        </NavSelection>
        <span style={{ float: 'right' }} >
          <Input type='text' placeholder='search the store' />
          <Button ><FaSearch /></Button>
        </span>
      </Nav>
      <br />
      <br />
    </div >
  )
}

export default NavBar;