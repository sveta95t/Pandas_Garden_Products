import React from 'react'
import { logo } from '../icons/Logo';
import { Link, useLocation } from 'react-router-dom';
import { backet } from '../icons/Backet';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../store/actions/navActions';
import { menu } from '../icons/Menu';

function Nav() {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  const location = useLocation();
  const currentPage = location.pathname;

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div id='navigation'>
      <div id='navigation-list'>
        <Link to={"/"}>{logo}</Link>

        <div id='nav-links'>
          <Link className={currentPage === "/" ? "active" : "nav-link"} to={"/"}>Main Page</Link>
          <Link className={currentPage === "/AllCategories" ? "active" : "nav-link"} to={"/AllCategories"}>Categories</Link>
          <Link className={currentPage === "/AllProducts" ? "active" : "nav-link"} to={"/AllProducts"}>All products</Link>
          <Link className={currentPage === "/AllSales" ? "active" : "nav-link"} to={"/AllSales"}>All sales</Link>
        </div>

        <Link id='nav-backet' to={"/"}>{backet}</Link>
      </div>
      <div id='nav-line'></div>

      <div className="menu">
        <div className="menu-icon" onClick={handleToggleMenu}>
          {menu}
        </div>
        {isOpen && (
          <div className={`${isOpen ? 'show' : 'dropdown-menu'}`}>
            <Link className='menu-nav' to={"/"}>Main Page</Link>
            <Link className='menu-nav' to={"/AllCategories"}>Categories</Link>
            <Link className='menu-nav' to={"/AllProducts"}>All products</Link>
            <Link className='menu-nav' to={"/AllSales"}>All sales</Link>
          </div>
        )}
        </div>
    </div>
  )
}

export default Nav;