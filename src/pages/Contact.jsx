import React, { useState } from 'react';
import '../styles/Contact.css';

/**
 * Componente Contact: Gestiona los formularios de contacto,
 * temas de interés, suscripción y caja de mensaje libre interactiva.
 */
function Contact() {
  // Estado para controlar el botón de motivo seleccionado ('A', 'B', 'C', 'D')
  const [motivo, setMotivo] = useState('B'); 

  // Estado para controlar los campos del formulario principal
  const [formData, setFormData] = useState({
    tema: '',
    detalles: ''
  });

  // Estado para el correo de suscripción
  const [emailSuscripcion, setEmailSuscripcion] = useState('');

  // NUEVO: Estado para el mensaje libre de la columna derecha
  const [mensajeLibre, setMensajeLibre] = useState('');

  // Manejador para actualizar los campos de texto y select del formulario principal
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejador del envío del formulario de contacto principal
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

  // Manejador del envío de suscripción
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

  // NUEVO: Manejador para enviar el mensaje libre
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
    <div className="contacto-page py-5">
      <div className="container custom-container py-5">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-5">
          <h1 className="titulo-seccion-lobster-xl">Contáctanos</h1>
        </div>

        <div className="row justify-content-center g-5 mt-4">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO PRINCIPAL */}
          <div className="col-lg-6">
            <div className="form-container-crema-xl p-4 p-md-5 shadow-sm">
              <h2 className="titulo-formulario-xl text-center mb-3">Queremos saber de ti</h2>
              <p className="texto-descripcion-lg text-center mb-5">
                Completa este formulario y te responderemos lo más pronto posible
              </p>

              <form onSubmit={handleSubmitForm}>
                
                {/* Selección interactiva de motivo */}
                <label className="label-dorado-lg mb-3">¿Cuál es el motivo de tu contacto?</label>
                <div className="row g-3 mb-5">
                  {[
                    { key: 'A', label: 'A. Información' },
                    { key: 'B', label: 'B. Sugerencias' },
                    { key: 'C', label: 'C. Colaboración' },
                    { key: 'D', label: 'D. Otro' }
                  ].map((item) => (
                    <div key={item.key} className="col-6 col-sm-3">
                      <button
                        type="button"
                        className={`w-100 ${motivo === item.key ? 'btn-opcion-active-xl shadow-sm' : 'btn-opcion-xl'}`}
                        onClick={() => setMotivo(item.key)}
                      >
                        {item.label}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Desplegable de temas */}
                <div className="mb-5">
                  <label className="label-dorado-lg mb-3">Selecciona los temas</label>
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
                <div className="mb-5">
                  <label className="label-dorado-lg mb-3">Cuéntanos más detalles</label>
                  <textarea 
                    className="form-control custom-input-lg" 
                    rows="5"
                    name="detalles"
                    value={formData.detalles}
                    onChange={handleChange}
                    placeholder="Escribe tus comentarios aquí..."
                  ></textarea>
                </div>

                {/* Botón de envío */}
                <div className="text-center">
                  <button type="submit" className="btn-dorado-rect-xl">
                    Enviar Formulario
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* COLUMNA DERECHA: SUSCRIPCIÓN Y CAJA DE MENSAJE LIBRE */}
          <div className="col-lg-5 ps-lg-5">
            
            {/* Formulario de Suscripción */}
            <div className="text-center mb-5">
              <h2 className="titulo-seccion-lobster-xl fs-1">Suscripción</h2>
              
              <form onSubmit={handleSuscripcion} className="input-group mb-4 custom-search-bar-xl mt-4 shadow-sm">
                <span className="input-group-text bg-white border-0 px-4">
                  <i className="bi bi-envelope text-muted fs-4"></i>
                </span>
                <input 
                  type="email" 
                  className="form-control border-0 py-3 fs-5" 
                  placeholder="Ingresa tu correo"
                  value={emailSuscripcion}
                  onChange={(e) => setEmailSuscripcion(e.target.value)}
                />
                <button className="btn btn-dorado-send-xl px-4" type="submit">
                  Enviar
                </button>
              </form>
            </div>

            {/* CAJA INTERACTIVA DE MENSAJE LIBRE (EDITABLE) */}
            <div className="shadow-sm">
              <textarea
                className="form-control caja-mensaje-libre-xl texto-dorado-libre-xl p-4 text-center fst-italic w-100"
                rows="5"
                placeholder="Escribe aquí tu mensaje, sugerencia o reacción a los capítulos..."
                value={mensajeLibre}
                onChange={(e) => setMensajeLibre(e.target.value)}
                style={{ resize: 'none', border: 'none', outline: 'none' }}
              ></textarea>
            </div>
            
            {/* Botón para enviar el mensaje libre */}
            <div className="text-center mt-5">
              <button 
                type="button" 
                className="btn-dorado-pill-xl px-5 shadow"
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