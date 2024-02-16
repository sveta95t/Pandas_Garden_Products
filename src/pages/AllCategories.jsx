import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contact from '../Components/Contact';
import { Link } from 'react-router-dom'


const URLIMAGE = 'http://localhost:3333/'; 

function AllCategories() {
    const [categories, setCategories] = useState([]); 
 
    useEffect(() => { 
      async function fetchData() { 
        try { 
          const response = await axios.get('http://localhost:3333/categories/all'); 
          setCategories(response.data); 
        } catch (error) { 
          console.error('Error fetching categories: ', error); 
        } 
      } 
   
      fetchData(); 
    }, []); 

  return (
    <div>
      <div className='categories-nav'>
        <Link to={"/"}>
        <button className='all-categories-b'>Main page</button>
        </Link>
        <div className='all-line'></div>
        <button className='all-categories-b'>Categories</button>
      </div>

    <div className='all-categories'>
        <h3 className='all-categories-h3'>Categories</h3> 

        <div className='all-categories-list'> 
        {categories.map((category) => ( 
          <div key={category.id}> 
          <Link to={"categories/:id"} className='categories-link'>
            <img 
              className='all-category-img' 
              src={`${URLIMAGE}${category.image}`} 
              alt={category.title} 
            /> 
            <p className="all-category-title">{category.title}</p> 
          </Link>
          </div> 
        ))} 
      </div> 
    </div>

    <Contact />
    </div>
  )
}

export default AllCategories;