import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { Grid, Select, SearchBar, Input, Button } from '../styling/NavBarStyled.jsx';


const NavBar = () => {
  return (
    <div>
      <br />
      <br />
      <Grid>
        <Select >Your Store&nbsp;<IoMdArrowDropdown /></Select>
        <Select >Browse&nbsp;<IoMdArrowDropdown /></Select>
        <Select >Points Store</Select>
        <Select>News</Select>
        <Select >Steam Labs</Select>
        <SearchBar style={{ float: 'right' }} >
          <Input type='text' placeholder='search the store' />
          <Button ><FaSearch /></Button>
        </SearchBar>
      </Grid>
      <br />
      <br />
    </div >
  )
}

export default NavBar;