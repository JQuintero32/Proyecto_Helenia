import React from 'react';
import '../styles/Comic.css';

export const Comic = () => {
  return (
    <section className="capitulos-section py-5">
      <div className="container text-center">
        <h2 className="titulo-dorado mb-5">Capítulos</h2>
        
        <div className="row g-4 justify-content-center">
          {/* Capítulo 1 */}
          <div className="col-12 col-md-4">
            <div className="capitulo-card">
              <div className="img-container mb-3 shadow">
                <img src="/capitulo1.jpg" alt="Capítulo 1" className="img-fluid rounded" />
                <div className="overlay-text">CAPÍTULO 1</div>
              </div>
              <button className="btn btn-dorado rounded-0 px-4">Ver episodio 1</button>
            </div>
          </div>

          {/* Capítulo 2 */}
          <div className="col-12 col-md-4">
            <div className="capitulo-card">
              <div className="img-container mb-3 shadow">
                <img src="/capitulo2.jpg" alt="Capítulo 2" className="img-fluid rounded" />
                <div className="overlay-text">CAPÍTULO 2</div>
              </div>
              <button className="btn btn-dorado rounded-0 px-4">Ver episodio 2</button>
            </div>
          </div>

          {/* Capítulo 3 */}
          <div className="col-12 col-md-4">
            <div className="capitulo-card">
              <div className="img-container mb-3 shadow">
                <img src="/capitulo3.jpg" alt="Capítulo 3" className="img-fluid rounded" />
                <div className="overlay-text">CAPÍTULO 3</div>
              </div>
              <button className="btn btn-dorado rounded-0 px-4">Ver episodio 3</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};