import './App.css';
import Sidebar from './components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          
        </Col>
      </Row>
    </Container>
  );
}

export default App;





