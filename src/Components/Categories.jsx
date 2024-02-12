import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
 
const URLIMAGE = 'http://localhost:3333/'; 
 
function Categories() { 
  const [categories, setCategories] = useState([]); 
 
  useEffect(() => { 
    async function fetchData() { 
      try { 
        const response = await axios.get('http://localhost:3333/categories/'); 
        setCategories(response.data); 
      } catch (error) { 
        console.error('Error fetching categories:', error); 
      } 
    } 
 
    fetchData(); 
  }, []); 
 
  return ( 
    <div className='categories-block'> 
      <div className='categories'>
        <h3 className='categories-h3'>Categories</h3> 
        <div className="line"></div> 
        <button className='categories-b'>All categories</button> 
      </div>
 
      <div className='categories-list'> 
        {categories.slice(0, 4).map((category) => ( 
          <div key={category.id}> 
            <img className='category-img' src={`${URLIMAGE}${category.image}`} alt={category.title} /> 
            <p className="category-title">{category.title}</p> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
} 
 
export default Categories;