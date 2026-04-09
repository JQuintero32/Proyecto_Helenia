import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar sticky-top">
      <div className="container px-4">
       
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Helenia" className="nav-logo" />
        </Link>

        
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link h-link" to="/proyecto">Proyecto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h-link" to="/about">Sobre nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h-link" to="/comic">Cómic</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link h-link" to="/contact">Contacto</Link>
            </li>
            
            
            <li className="nav-item ms-lg-4 d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <i className="bi bi-bell h-nav-icon"></i>
              <div className="nav-profile-circle">
                <i className="bi bi-person-fill"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;