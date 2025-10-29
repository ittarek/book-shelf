import React from 'react';
import { Link, NavLink } from 'react-router';

// nav items
const navItems = (
  <ul
    tabIndex="-1"
    className="menu menu-sm dropdown-content bg-base-50 rounded-box  mt-3 w-52 p-2 shadow z-50">
    <li>
      <Link to={'/'}>Home</Link>
    </li>
    <li>
      <Link to="/listedBooks">Listed Books</Link>
    </li>
    <li>
      <a>pages to Read</a>
    </li>
  </ul>
);

const desktopNavItems = (
  <ul className="menu menu-horizontal px-1 primary-text">
    <li>
      <NavLink to="/"> Home</NavLink>
    </li>
    <li>
      <NavLink to="/listedBooks">Listed Books</NavLink>
    </li>
    <li>
      <NavLink to="/pageToReads">pages to Read</NavLink>
    </li>
  </ul>
);

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-black mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            {navItems}
          </div>
          <Link to={'/'} className="primary-btn">
            Book Shelf
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">{desktopNavItems}</div>
        <div className="navbar-end text-black gap-3">
          <a className="primary-btn">Sign In</a>
          <a className=" secondary-btn">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};
