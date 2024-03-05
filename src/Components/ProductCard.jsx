import React from 'react';

const URLIMAGE = 'http://localhost:3333'; 

function ProductCard({ product }) {  

  return (
    <div className='product'>

      <div>
        {product.discont_price ? (
          <div className='discount'>
              {product.discont_price ? (
                "-" + Math.round(((product.price - product.discont_price) / product.price) * 100) + "%"
              ) : ""}
          </div>
        ) : ""}
      </div>

      
      <img 
        className='product-img' 
        src={`${URLIMAGE}${product.image}`} 
        alt={product.title}
      />

      <button className='add-card-b'>Add to cart</button>

      <p className='product-title'>{product.title}</p>

      {product.discont_price ? (
        <div className='product-prices'>
          <p className='price'>${product.discont_price}</p>
          <p className='old-price'>${product.price}</p>
        </div>
      ) : (
        <p className='price'>${product.price}</p>
      )}
    </div>
  )
}

export default ProductCard;