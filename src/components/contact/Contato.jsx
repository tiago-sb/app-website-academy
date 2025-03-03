import { Container, Col, Row } from 'react-bootstrap'
import Mapa from './Mapa'  

const Contato = () => {
  return (
    <>
      <Container style={{ paddingTop: 100, paddingBottom: 100 }}>  
        <Row>
          <Col>
            <Row>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 50 }}>
                salvador
              </h2>
              <p>Rua XXXX</p>
              <p>Bahia</p>
              <p>99999-99</p>
            </Row>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', fontSize: 40 }}  >
                contato
              </h3>
              <p>...@gmail.com</p>
              <p>99 99999-9999</p>
            </Row>
          </Col>
          <Col>
            <Mapa coord={[-38.5014, -12.9714]}/>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Row>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 50 }}>
                são paulo
              </h2>
              <p>Rua YYYY</p>
              <p>São Paulo</p>
              <p>99999-99</p>
            </Row>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', fontSize: 40 }}  >
                contato
              </h3>
              <p>...@gmail.com</p>
              <p>99 99999-9999</p>
            </Row>
          </Col>
          <Col>
            <Mapa coord={[-46.6333, -23.5505]}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contato