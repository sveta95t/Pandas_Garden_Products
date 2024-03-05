import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/actions/productsActions';
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';

const URLIMAGE = 'http://localhost:3333'; 

function AllProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getProducts());
  }, []);


  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div className='buttons'>
        <Link className='pages-button' to={"/"}>Main page</Link>
        <div className='all-line'></div>
        <Link className='pages-button' to={"/AllProducts"}>All products</Link>
      </div>
      <h3 id='products-h3'>All products</h3>

      <div className='products-list'>
        {products.map(item => <ProductCard product={item}/>)}
      </div>
    </div>
  )
}

export default AllProducts;