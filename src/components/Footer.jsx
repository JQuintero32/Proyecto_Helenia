import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import logoFooter from '../assets/logo.png'; 

function Footer() {
  return (
    <footer className="footer-helenia">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-md-6 text-center text-md-start">
            <img src={logoFooter} alt="Helenia Logo" className="f-logo" />
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <span className="siguenos-label me-3">Siguenos</span>
            <div className="d-inline-block">
              <a href="#" className="f-social"><i className="bi bi-facebook"></i></a>
              <a href="#" className="f-social"><i className="bi bi-instagram"></i></a>
              <a href="#" className="f-social"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="f-social"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        <hr className="f-divider" />

        
        <div className="row py-3 align-items-center">
          <div className="col-md-8">
            <ul className="nav f-nav justify-content-center justify-content-md-start">
              <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
              <li className="nav-item"><Link to="/proyecto" className="nav-link">Proyecto</Link></li>
              <li className="nav-item"><Link to="/comic" className="nav-link">Cómic</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">Nosotros</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contacto</Link></li>
            </ul>
          </div>
          <div className="col-md-4 text-center text-md-end mt-2 mt-md-0">
            <p className="f-copy mb-0">© 2026 Helenía. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;