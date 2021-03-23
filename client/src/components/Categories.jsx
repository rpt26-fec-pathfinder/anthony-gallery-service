import React, { useState } from 'react';
import styled from 'styled-components';

const AllCategories = styled.div`
  margin-bottom: -15px;
  margin-top: -25px;
`

const Category = styled.a`
  color: #9c9b93;
  font-size: 11px;
  text-decoration: none;
  margin-bottom: 50px;
`

const Categories = () => {
  const [category, setCategory] = useState('')

  return (
    <AllCategories >
      <Category href="">All Games<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Strategy Games<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Age of Empires Franchise Franchise<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Age of Empires II: Definitive Edition</Category>
    </AllCategories >
  )
}

export default Categories;