import React from 'react';
import Logo from '../../logo.svg'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ query, setQuery }) => {

  const handleChange =(e) => {
    setQuery(e.target.value)
    console.log(query)
  }

    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="Logo" className="logo" />
          <input type="text" placeholder="Search" onChange={handleChange} className="search-bar" />
        </div>
      </nav>
    );
}

export default NavBar;
