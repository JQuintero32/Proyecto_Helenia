import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contacto-page py-5">
      <div className="container custom-container py-5">
        
        <div className="text-center mb-5">
          <h1 className="titulo-seccion-lobster-xl">Contáctanos</h1>
        </div>

        <div className="row justify-content-center g-5 mt-4">
          
          <div className="col-lg-6">
            <div className="form-container-crema-xl p-4 p-md-5 shadow-sm">
              <h2 className="titulo-formulario-xl text-center mb-3">Queremos saber de ti</h2>
              <p className="texto-descripcion-lg text-center mb-5">
                Completa este formulario y te responderemos lo más pronto posible
              </p>

              <form>
                
                <label className="label-dorado-lg mb-3">¿Cuál es el motivo de tu contacto?</label>
                <div className="row g-3 mb-5">
                  <div className="col-6 col-sm-3">
                    <button type="button" className="btn-opcion-xl w-100">A. Información</button>
                  </div>
                  <div className="col-6 col-sm-3">
                    <button type="button" className="btn-opcion-active-xl w-100 shadow-sm">B. Sugerencias</button>
                  </div>
                  <div className="col-6 col-sm-3">
                    <button type="button" className="btn-opcion-xl w-100">C. Colaboración</button>
                  </div>
                  <div className="col-6 col-sm-3">
                    <button type="button" className="btn-opcion-xl w-100">D. Otro</button>
                  </div>
                </div>

                
                <div className="mb-5">
                  <label className="label-dorado-lg mb-3">Selecciona los temas</label>
                  <select className="form-select custom-input-lg">
                    <option defaultValue>Elige las siguientes opciones:</option>
                    <option value="1">Historia</option>
                    <option value="2">Diseño</option>
                    <option value="3">Interactividad</option>
                  </select>
                </div>

                
                <div className="mb-5">
                  <label className="label-dorado-lg mb-3">Cuéntanos más detalles</label>
                  <textarea className="form-control custom-input-lg" rows="5"></textarea>
                </div>

                
                <div className="text-center">
                  <button type="submit" className="btn-dorado-rect-xl">Enviar Formulario</button>
                </div>
              </form>
            </div>
          </div>

          
          <div className="col-lg-5 ps-lg-5">
            <div className="text-center mb-5">
              <h2 className="titulo-seccion-lobster-xl fs-1">Suscripción</h2>
              
              <div className="input-group mb-4 custom-search-bar-xl mt-4 shadow-sm">
                <span className="input-group-text bg-white border-0 px-4">
                  <i className="bi bi-arrow-left text-muted fs-4"></i>
                </span>
                <input type="email" className="form-control border-0 py-3 fs-5" placeholder="Ingresa tu correo" />
                <button className="btn btn-dorado-send-xl px-4" type="button">Enviar</button>
              </div>
            </div>

           
            <div className="caja-mensaje-libre-xl p-5 d-flex align-items-center justify-content-center shadow-sm">
              <p className="text-center fst-italic texto-dorado-libre-xl m-0">
                Escribe aquí tu mensaje, sugerencia o reacción a los capítulos...
              </p>
            </div>
            
            <div className="text-center mt-5">
              <button className="btn-dorado-pill-xl px-5 shadow">Enviar Mensaje</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;