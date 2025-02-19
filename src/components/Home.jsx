import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  // Detectar la tecla "Esc" para cerrar el modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', // Asegura que el div cubra toda la altura de la pantalla
      color: '#fff', // Color del texto blanco para el contraste
    }}>
      <br />
      {/* Sección de bienvenida */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '8px',
        margin: '0rem auto',
        maxWidth: '800px',
      }}>
        <h1>👋 ¡Bienvenidos a mi curso de Algoritmos y Estructuras!</h1>
        <p>
          En este curso aprenderemos a diseñar algoritmos y estructuras de control usando PSeInt 🖥️📊.
        </p>

        <img
          src="https://ivanbriancruz.github.io/CURSO-ATLAS/img/lenguajes-de-programacion.png" // Reemplaza con la URL de tu imagen
          alt="Modelo del proyecto a lograr"
          style={{ width: '80%', margin: '1rem auto', borderRadius: '8px', cursor: 'pointer' }}
          onClick={openModal}
        />
      </section>

      {/* Modal para mostrar la imagen en pantalla completa */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <img
            src="https://ivanbriancruz.github.io/CURSO-ATLAS/img/lenguajes-de-programacion.png" // Reemplaza con la URL de tu imagen
            alt="Modelo del proyecto ampliado"
            style={{ width: '90%', maxWidth: '800px', borderRadius: '8px' }}
          />
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'none',
              color: '#fff',
              fontSize: '2rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        </div>
      )}

      {/* Sección de programas necesarios */}
      <section style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
        borderRadius: '8px',
        margin: '1rem auto',
        maxWidth: '800px',
      }}>
        <h2>🛠️ Programas que Necesitaremos Instalar</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '1rem 0' }}>
            <button
              onClick={() => window.open('https://pseint.sourceforge.net/', '_blank')}
              style={{
                padding: '0.5rem 2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#007ACC',
                color: '#fff',
                border: 'none',
                fontSize: '16px',
              }}
            >
              📘 Pseint
            </button>
          </li>
        </ul>
      </section>



    </div>
  );
};

export default Home;
