import { useState } from 'react';
import { estimateTravelCost } from '../services/api';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./FormRequestTravel.module.css";

const FormRequestTravel = () => {
  const [userId, setUserId] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await estimateTravelCost(userId, origin, destination);
      // Redirecionar para a página de opções de viagem com a resposta da API
      window.location.href = `/traveloption/${response.routeId}`;
    } catch (error) {
      console.error('Erro ao estimar viagem:', error);
    }
  };

  return (
    <div className={styles.container}>
      <FloatingLabel controlId="floatingInput" label="ID do Usuário" className="mb-3"
      >
        <Form.Control type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="ID do Usuário" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Endereço de Origem" className="mb-3">
        <Form.Control type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="Endereço de Origem" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Endereço de Destino" className="mb-3">
        <Form.Control type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Endereço de Destino" />
      </FloatingLabel>
      <Button variant="secondary" onClick={handleSubmit}>Estimar valor da viagem</Button>{' '}
    </div>
    
  );
};

export default FormRequestTravel;
