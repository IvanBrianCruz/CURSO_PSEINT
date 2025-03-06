import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Contact = () => {
  const userInfo = {
    name: "Iván Brian Cruz",
    dni: "20419957616",
    cbu: "0000003100089818162601",
    alias: "ivancruz2023"
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copiado al portapapeles: " + text);
  };

  return (
    <div style={{
      backgroundImage: 'url(https://IvanBrianCruz.github.io/ATLAS/img/fondo.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-y',
      minHeight: '100vh',
      color: '#fff',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <Container>
        <h2 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>📞 Contacto</h2>
        <Row>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Button variant="primary" onClick={() => window.location.href = 'mailto:ivan4912134@gmail.com'}>
              📧 Enviar Email
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Button variant="success" onClick={() => window.open('https://wa.me/5493884211576', '_blank')}>
              📲 Hablar por WhatsApp
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} className="mb-4">
            <Button variant="warning" onClick={() => window.open('https://drive.google.com/drive/folders/15pmcbgvW-8ORhqSdFSUuBhiAECEFkH0p?usp=sharing', '_blank')}>
              📂 Abrir Google Drive
            </Button>
          </Col>
        </Row>

        <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#fff', padding: '1rem', borderRadius: '8px' }}>
          <Card.Body>
            <Card.Title>📄 Mis Datos</Card.Title>
            <Card.Text>
              <strong>Nombre:</strong> {userInfo.name} 
            </Card.Text>
            <Card.Text>
              <strong>CUIL:</strong> {userInfo.dni} 
            </Card.Text>
            <Card.Text>
              <strong>CBU:</strong> {userInfo.cbu} <Button size="sm" onClick={() => copyToClipboard(userInfo.cbu)}>📋 Copiar</Button>
            </Card.Text>
            <Card.Text>
              <strong>Alias:</strong> {userInfo.alias} <Button size="sm" onClick={() => copyToClipboard(userInfo.alias)}>📋 Copiar</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
