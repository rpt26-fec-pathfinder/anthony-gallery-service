import React, { useState } from 'react';
import styled from 'styled-components';

const Category = styled.a`
  color: #9c9b93;
  font-size: 11px;
  text-decoration: none;
`

const Categories = () => {
  const [category, setCategory] = useState('')

  return (
    <div >
      <Category href="">All Games<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Strategy Games<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Age of Empires Franchise Franchise<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Age of Empires II: Definitive Edition</Category>
    </div >
  )
}

export default Categories;