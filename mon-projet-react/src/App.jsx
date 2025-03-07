import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import Name from './assets/components/Name';
import Price from './assets/components/Price';
import Description from './assets/components/Description';
import Image from './assets/components/Image.jsx';
import './App.css'; // Importez votre fichier CSS personnalisé

const firstName = "John"; // Remplacez par votre prénom ou laissez vide

function App() {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center justify-center">
      <Card className="shadow-lg" style={{ width: '22rem', borderRadius: '15px', overflow: 'hidden' }}>
        <Image />
        <Card.Body className="text-center">
          <Name />
          <Price />
          <Description />
          <Button variant="primary" className="mt-3">Acheter maintenant</Button>
        </Card.Body>
      </Card>
      <div id='d1' className="mt-4 text-center">
        <p className="h4">{firstName ? `Bonjour, ${firstName} !` : "Bonjour !"}</p>
        {firstName && (
          <img
            src="https://via.placeholder.com/100"
            alt="User"
            className="mt-2 rounded-circle"
            style={{ border: '3px solid #0d6efd' }}
          />
        )}
      </div>
    </Container>
  );
}

export default App;