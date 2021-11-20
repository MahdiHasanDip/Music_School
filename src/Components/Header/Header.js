import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"


const Header = () => {
    return (
        <div className="Header-Container">
     {/* Navbar       */}
<nav className="navbar navbar-expand-md navbar-dark bg-dark mx-auto h-50 ">
  <div className="container-fluid">
 
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item ">
        <Link className="navbar-brand"  to ="/Home"> Home</Link>
        </li>
        <li className="nav-item ">
        <Link className="navbar-brand" to="/About">About</Link>
        </li>
        <li className="nav-item ">
        <Link className="navbar-brand" to ="/Services">Services</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand"  to ="/Contact">Contact</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

<h1>MUSIC SCHOOL</h1>

        </div>
    );
};

export default Header;