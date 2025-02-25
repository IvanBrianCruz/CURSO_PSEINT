import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Videos = () => {
  const videoList = [
    "https://www.youtube.com/embed/DhnM-jEJCUE?si=0lcev_YiIh3KDuj8",
    "https://www.youtube.com/embed/Yxez6Gito7k?si=3MzVE_XLckEewyit",
    "https://www.youtube.com/embed/cFjfCzWvvGI?si=P2uxn8R4ubArlpyY",
  ];

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
        <h2 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>🎥 Clases Grabadas </h2>
        <Row>
          {videoList.map((video, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '1rem', borderRadius: '8px' }}>
                <iframe
                  width="100%"
                  height="250px"
                  src={video}
                  title={`YouTube video ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ borderRadius: '8px' }}
                ></iframe>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Videos;
