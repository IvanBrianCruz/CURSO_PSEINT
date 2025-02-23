import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function BasicExample({ setCurrentTab }) {
  const logoStyle = {
    width: '150px',
    height: 'auto',
    filter: 'drop-shadow(0 0 15px red)',
    animation: 'cambioColores 5s infinite',
    cursor: 'pointer',
  };

  const navbarStyle = {
    backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/baner.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const keyframes = `
    @keyframes cambioColores {
      0% { filter: drop-shadow(0 0 15px red); }
      25% { filter: drop-shadow(0 0 15px blue); }
      50% { filter: drop-shadow(0 0 15px green); }
      75% { filter: drop-shadow(0 0 15px yellow); }
      100% { filter: drop-shadow(0 0 15px red); }
    }
  `;

  const handleLogoClick = () => {
    window.location.href = 'https://ivanbriancruz.github.io/CURSO_PSEINT/';
  };

  return (
    <>
      <style>{keyframes}</style>
      <Navbar expand="lg" style={navbarStyle} variant="dark">
        <Container>
          <Navbar.Brand onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img
              src='https://ivanbriancruz.github.io/CURSO-ATLAS/img/logo2025.png'
              alt="Logo Atlas"
              style={logoStyle}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setCurrentTab('Home')} className="text-white">INICIO</Nav.Link>
              <Nav.Link onClick={() => setCurrentTab('Videos')} className="text-white">VIDEOS</Nav.Link>
              <Nav.Link onClick={() => setCurrentTab('Contact')} className="text-white">DATOS</Nav.Link>
              {/* Descomentar para agregar más opciones en el futuro */}
              {/* <Nav.Link onClick={() => setCurrentTab('Contacto')} className="text-white">CONTACTO</Nav.Link> */}
              {/* <Nav.Link onClick={() => setCurrentTab('Nosotros')} className="text-white">NOSOTROS</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;
