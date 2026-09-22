import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container px-4">
        
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Helenia" className="nav-logo" />
        </Link>

        {/* BOTÓN HAMBURGUESA (MÓVIL) */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon custom-toggler-icon"></span>
        </button>

        {/* MENÚ DE NAVEGACIÓN */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            
            {/* LAS 4 SECCIONES ORIGINALES */}
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
            
            {/* BOTÓN DESTACADO PARA IR DIRECTO AL CÓMIC */}
            <li className="nav-item mt-2 mt-lg-0 ms-lg-2">
              <Link className="btn-comic-nav" to="/comic">
                Ver Cómic
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;