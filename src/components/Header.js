import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {

  const s = {
    marginRight: '1rem'
  };
  return (<header style={{
      marginLeft: '0.5rem'
    }}>
    <h1>Bloggerino</h1>
    <div>
      <NavLink to='/' activeClassName='is-active' exact={true} style={s}>Home</NavLink>
      <NavLink to='/login' activeClassName='is-active' style={s}>Login</NavLink>
      <NavLink to='/add' activeClassName='is-active' style={s}>Add</NavLink>
      <NavLink to='/edit' activeClassName='is-active' style={s}>Edit</NavLink>
    </div>
  </header>)
};

export default Header;
