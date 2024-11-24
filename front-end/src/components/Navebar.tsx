import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navebar = () => {
 
  return ( 
    <Navbar className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/carro.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        Celebridades
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
 
export default Navebar;