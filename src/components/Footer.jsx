import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white p-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Recursos</h5>
          
          </Col>
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>Este sitio fue creado como una introducción al mundo del desarrollo, proporcionando recursos para principiantes.</p>
          </Col>
          <Col md={4}>
            <h5>Contáctanos</h5>
            <p>Email: ivan4912134@gmail.com</p>
            <p>Tel: +54 388 4211576</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2025 Desarrollado por Ivan Brian Cruz. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
