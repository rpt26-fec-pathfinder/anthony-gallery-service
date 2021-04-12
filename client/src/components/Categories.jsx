import React, { useState } from 'react';
import { AllCategories, Category } from '../styling/CategoriesStyled.jsx'



const Categories = () => {
  const [category, setCategory] = useState('')

  return (
    <AllCategories >
      <br />
      <Category href="">All Games<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Strategy Games<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Age of Empires Franchise Franchise<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Age of Empires II: Definitive Edition</Category>
      <br />
    </AllCategories >
  )
}

export default Categories;