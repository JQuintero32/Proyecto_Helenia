import "../styles/Header.css"

export const Header = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
        <div className="container">

          <a className="navbar-brand" href="#">
            <img src="tu-logo.png" alt="Helenia" height="40" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="menuPrincipal">
            <ul className="navbar-nav gap-3 text-center">
              <li className="nav-item"><a className="nav-link text-dark" href="#">Proyecto</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Sobre nosotros</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Cómic</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="d-none d-lg-flex align-items-center">
            <span className="me-3">🔔</span> <div className="rounded-circle bg-light border text-center" style={{ width: "35px", height: "35px", lineHeight: "35px" }}>
              H
            </div>
          </div>

        </div>
      </nav>


      <section className="py-5" style={{ backgroundColor: "#eee9df" }}>
  <div className="container">
    <div className="row text-center">
      
      <div className="col-md-6 mb-4">
        <div className="bg-white p-4 shadow-sm h-100">
          <img src="icono-proyecto.png" alt="Icono" width="40" className="mb-2" />
          <h5 className="fw-bold">Proyecto</h5>
          <p className="small text-muted">Descubre la historia y propósito detrás de Helenia.</p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="bg-white p-4 shadow-sm h-100">
          <img src="icono-nosotros.png" alt="Icono" width="40" className="mb-2" />
          <h5 className="fw-bold">Sobre nosotros</h5>
          <p className="small text-muted">Conoce a los personajes.</p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="bg-white p-4 shadow-sm h-100">
          <img src="icono-comic.png" alt="Icono" width="40" className="mb-2" />
          <h5 className="fw-bold">Cómic</h5>
          <p className="small text-muted">Explora los capítulos y sumérgete en la narrativa.</p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="bg-white p-4 shadow-sm h-100">
          <img src="icono-contacto.png" alt="Icono" width="40" className="mb-2" />
          <h5 className="fw-bold">Contacto</h5>
          <p className="small text-muted">Escríbenos tus dudas o sugerencias directamente.</p>
        </div>
      </div>

    </div>
  </div>
</section>
    </>

  )
}