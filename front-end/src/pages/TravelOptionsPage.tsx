import TravelOption from "../components/TravelOptions";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './TravelOptionsPage.module.css';


const TravelOptionsPage = () => {

  const drivers = { 
    name: "asdasd",
    description: "dasdas",
    vehicle: "asdsadas",
    rating: 3,
    price: 2
  }
 

  return (  
    <div className={style.divTravel}>
      <Container>
        <Row>
          <Col>
            <h1 className={style.titleTravel}>Escolha qual motorista fará a sua viagem!</h1>

            <TravelOption driver={drivers} onChoose={function (driverId: string): void {
              throw new Error("Function not implemented.");
            }}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
  
export default TravelOptionsPage;