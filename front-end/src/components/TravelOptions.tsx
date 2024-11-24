import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './TravelOptions.module.css'

interface Driver {
  name: string;
  description: string;
  vehicle: string;
  rating: number;
  price: number;
}

interface TravelOptionProps {
  driver: Driver;
  onChoose: (driverId: string) => void;
}

const TravelOption: React.FC<TravelOptionProps> = ({ driver, onChoose }) => {
  return (
    <div>
      <h3 className={style.name}>{driver.name}</h3>
      <p>{driver.description}</p>
      <p>Veículo: {driver.vehicle}</p>
      <p>Avaliação: {driver.rating}/5</p>
      <p>Preço: R$ {driver.price}</p>
      <Button variant="secondary" onClick={() => onChoose(driver.name)}>Escolher</Button>{' '}
    </div>
  );
};

export default TravelOption;
