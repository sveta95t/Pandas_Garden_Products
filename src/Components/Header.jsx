import React from 'react';
import { Link } from 'react-router-dom';
import mainBack from '../images/mainBack.svg'

function Header() {
  const backgroundStyle = {
    backgroundImage: `url(${mainBack})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div 
    id='header' 
    style={ backgroundStyle }>
      <h2 id='header-h2'>Amazing Discounts on Garden Products!</h2>
      <Link id='header-b'>Check out</Link>
    </div>
  )
}

export default Header;