import React, { useState } from 'react';
import { AllCategories, Category } from '../styling/CategoriesStyled.jsx'



const Categories = () => {
  return (
    <AllCategories >
      <br />
      <Category href="#">
        {window.location.pathname === '/1' ? 'All Games' : null}<span>&nbsp;&nbsp;{window.location.pathname === '/1' ? '>' : null}&nbsp;&nbsp;</span>
      </Category>
      < Category href="#">
        {window.location.pathname === '/1' ? 'Strategy Games' : null}<span>&nbsp;&nbsp;{window.location.pathname === '/1' ? '>' : null}&nbsp;&nbsp;</span>
      </Category>
      <Category href="#">
        {window.location.pathname === '/1' ? 'Age of Empires Franchise Franchise' : null}<span>&nbsp;&nbsp;{window.location.pathname === '/1' ? '>' : null}&nbsp;&nbsp;</span>
      </Category>
      <Category href="#">
        {window.location.pathname === '/1' ? 'Age of Empires II: Definitive Edition' : null}
      </Category>
      <br />
    </AllCategories >
  )
}

export default Categories;