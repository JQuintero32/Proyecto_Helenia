import "../Header.css"

export const Header = () => {
  return (
    <>
      <header class="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top py-3">
        <div class="container-fluid px-4">

          <a class="navbar-brand" href="#">
            <img src="tu-logo-dorado.png" alt="Helenia Logo" height="50" />
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav gap-4">
              <li class="nav-item"><a class="nav-link custom-nav-link" href="#">Proyecto</a></li>
              <li class="nav-item"><a class="nav-link custom-nav-link" href="#">Sobre nosotros</a></li>
              <li class="nav-item"><a class="nav-link custom-nav-link" href="#">Cómic</a></li>
              <li class="nav-item"><a class="nav-link custom-nav-link" href="#">Contacto</a></li>
            </ul>
          </div>

          <div class="d-flex align-items-center gap-3">
            <a href="#" class="text-dark"><i class="bi bi-bell"></i> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            </a>
            <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center shadow-sm" style="width: 35px; height: 35px; color: white; font-size: 0.8rem;">
              H
            </div>
          </div>

        </div>
      </header>

    </>

  )
}