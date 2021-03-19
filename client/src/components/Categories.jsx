import React, { useState } from 'react';



const Categories = () => {

  const [category, setCategory] = useState('')

  return (
    <div >
      <a className="category" href="">All Games<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></a>
      <a className="category" href="">Strategy Games<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></a>
      <a className="category" href="">Age of Empires Franchise Franchise<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></a>
      <a className="category" href="">Age of Empires II: Definitive Edition</a>
    </div>
  )
}

export default Categories;