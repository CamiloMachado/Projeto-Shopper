import FormRequestTravel from "../components/FormRequestTravel";
import styles from "./RequestTravelPage.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const RequestTravelPage = () => {

  return (
    <div className={styles.divRequest}>
      <Container>
        <Row>
          <Col>
            <h1 className={styles.titleRequest}> Bem vindo!</h1>

            <p className={styles.info}>Somos uma empresa que fornece serviços de motoristas.</p>
            <p className={styles.info}>Onde celebridades farão a sua corrida até o seu destino.</p>
          </Col>
          <Col>
            <FormRequestTravel />
          </Col>
        </Row>
      </  Container>
    </div>

  );
};

export default RequestTravelPage;