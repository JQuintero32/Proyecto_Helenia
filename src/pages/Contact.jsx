import React, { useState } from 'react';
import '../styles/Contact.css';

/**
 * Componente Contact: Gestiona el formulario principal de contacto,
 * la selección interactiva de motivos, el registro de suscripción por correo 
 * y la caja de comentarios libres para Helenía.
 */
function Contact() {
  // Estado para el motivo seleccionado ('A', 'B', 'C', 'D')
  const [motivo, setMotivo] = useState('B'); 

  // Estado para los campos del formulario principal
  const [formData, setFormData] = useState({
    tema: '',
    detalles: ''
  });

  // Estado para el correo de suscripción
  const [emailSuscripcion, setEmailSuscripcion] = useState('');

  // Estado para el mensaje libre interactivo
  const [mensajeLibre, setMensajeLibre] = useState('');

  // Actualiza los campos de texto y select del formulario principal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Procesa el envío del formulario principal
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formData.detalles.trim()) {
      alert("Por favor escribe un mensaje o detalle antes de enviar.");
      return;
    }
    
    console.log("Datos del formulario enviados:", { motivo, ...formData });
    alert("¡Gracias por escribirnos! Hemos recibido tu mensaje.");
    
    setFormData({ tema: '', detalles: '' });
  };

  // Procesa el envío de la suscripción
  const handleSuscripcion = (e) => {
    e.preventDefault();
    if (!emailSuscripcion.trim()) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }
    console.log("Suscripción registrada:", emailSuscripcion);
    alert(`¡Gracias por suscribirte con el correo: ${emailSuscripcion}!`);
    setEmailSuscripcion('');
  };

  // Procesa el envío del mensaje libre
  const handleEnviarMensajeLibre = () => {
    if (!mensajeLibre.trim()) {
      alert("Por favor escribe tu mensaje o reacción antes de enviar.");
      return;
    }
    console.log("Mensaje libre enviado:", mensajeLibre);
    alert("¡Gracias! Tu mensaje y reacción han sido enviados exitosamente.");
    setMensajeLibre('');
  };

  return (
    <div className="contacto-page py-4 py-md-5">
      <div className="container custom-container py-3 py-md-4">
        
        {/* ENCABEZADO PRINCIPAL */}
        <div className="text-center mb-4 mb-md-5">
          <h1 className="titulo-seccion-lobster-xl">Contáctanos</h1>
        </div>

        <div className="row justify-content-center g-4 g-lg-5 align-items-start">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO PRINCIPAL */}
          <div className="col-12 col-lg-6">
            <div className="form-container-crema-xl p-4 p-md-5 shadow-sm">
              <h2 className="titulo-formulario-xl text-center mb-2">Queremos saber de ti</h2>
              <p className="texto-descripcion-lg text-center mb-4">
                Completa este formulario y te responderemos lo más pronto posible
              </p>

              <form onSubmit={handleSubmitForm}>
                
                {/* Selección interactiva de motivo */}
                <label className="label-dorado-lg mb-3 d-block">¿Cuál es el motivo de tu contacto?</label>
                <div className="row g-2 g-sm-3 mb-4">
                  {[
                    { key: 'A', label: 'A. Información' },
                    { key: 'B', label: 'B. Sugerencias' },
                    { key: 'C', label: 'C. Colaboración' },
                    { key: 'D', label: 'D. Otro' }
                  ].map((item) => (
                    <div key={item.key} className="col-6 col-sm-3">
                      <button
                        type="button"
                        className={`w-100 ${motivo === item.key ? 'btn-opcion-active-xl' : 'btn-opcion-xl'}`}
                        onClick={() => setMotivo(item.key)}
                      >
                        {item.label}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Desplegable de temas */}
                <div className="mb-4">
                  <label className="label-dorado-lg mb-2 d-block">Selecciona los temas</label>
                  <select 
                    className="form-select custom-input-lg"
                    name="tema"
                    value={formData.tema}
                    onChange={handleChange}
                  >
                    <option value="">Elige entre las siguientes opciones:</option>
                    <option value="Historia">Historia</option>
                    <option value="Diseño">Diseño</option>
                    <option value="Interactividad">Interactividad</option>
                  </select>
                </div>

                {/* Área de texto para detalles */}
                <div className="mb-4">
                  <label className="label-dorado-lg mb-2 d-block">Cuéntanos más detalles</label>
                  <textarea 
                    className="form-control custom-input-lg" 
                    rows="4"
                    name="detalles"
                    value={formData.detalles}
                    onChange={handleChange}
                    placeholder="Escribe tus comentarios aquí..."
                  ></textarea>
                </div>

                {/* Botón de envío principal */}
                <div className="text-center mt-4">
                  <button type="submit" className="btn-dorado-rect-xl">
                    Enviar Formulario
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* COLUMNA DERECHA: SUSCRIPCIÓN Y CAJA DE MENSAJE LIBRE */}
          <div className="col-12 col-lg-5 ps-lg-4">
            
            {/* Sección Suscripción */}
            <div className="text-center mb-4">
              <h2 className="subtitulo-suscripcion-lobster text-center mb-3">Suscripción</h2>
              
              <form onSubmit={handleSuscripcion} className="custom-search-bar-xl shadow-sm d-flex align-items-center">
                <span className="ps-3 pe-2 text-muted">
                  <i className="bi bi-envelope fs-5"></i>
                </span>
                <input 
                  type="email" 
                  className="form-control border-0 bg-transparent py-2 fs-6" 
                  placeholder="Ingresa tu correo"
                  value={emailSuscripcion}
                  onChange={(e) => setEmailSuscripcion(e.target.value)}
                />
                <button className="btn btn-dorado-send-xl" type="submit">
                  Enviar
                </button>
              </form>
            </div>

            {/* Caja de mensaje libre */}
            <div className="caja-contenedor-libre position-relative my-4">
              <textarea
                className="form-control caja-mensaje-libre-xl texto-dorado-libre-xl p-4 text-center fst-italic"
                rows="6"
                placeholder="Escribe aquí tu mensaje, sugerencia o reacción a los capítulos..."
                value={mensajeLibre}
                onChange={(e) => setMensajeLibre(e.target.value)}
              ></textarea>
            </div>
            
            {/* Botón de envío de mensaje libre */}
            <div className="text-center mt-4">
              <button 
                type="button" 
                className="btn-dorado-pill-xl shadow"
                onClick={handleEnviarMensajeLibre}
              >
                Enviar Mensaje
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;