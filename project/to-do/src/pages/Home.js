import React from 'react';
import { NavLink } from 'react-router-dom';



const Home = () => {
  return (
    <section className="home">
      <div className="title-space">
        <span className="title">My list to-dos</span>
      </div>
      <div className="search-area">aqui terá o campo de busca</div>
      <div className="home-links">
        <NavLink to="/todolist" className="link">
          List of to-do
        </NavLink>
        <NavLink to="/addtodo" className="link">
          Add to-do
        </NavLink>
      </div>
    </section>
  );
}
export default Home;
