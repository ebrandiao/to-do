import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar () {
  return (
    <nav className="navbar">
      <NavLink to="/" className="link">
        <span className="logo"> To-do </span>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/todolist" className="link">
          List of to-do
        </NavLink>
        <NavLink to="/addtodo" className="link">
          Add to-do
        </NavLink>
      </div>
    </nav>
  );

};
export default Navbar;
