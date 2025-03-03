import { Col, Container, Nav, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'

const Preco = () => {
  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: 100, paddingBottom: 100 }}>
      <Row>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', color: '#242424', fontSize: 100 }}>
              R$ 80 Mensal
            </h2>
            <Button style={{ borderRadius: 50 }} variant="outline-dark">Adquirir</Button>
          </Col>
          <Col>
            <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
              Plano padrão, você poderá usar as nossas instalações durante a semana.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', color: '#242424', fontSize: 100 }}>
              R$ 150 Mensal
            </h2>
            <Button style={{ borderRadius: 50 }} variant="outline-dark">Adquirir</Button>
          </Col>
          <Col>
            <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
              Plano Vip, você poderá usar as nossas instalações durante a semana
              e poderá participar de uma das aulas da nossa grade de modalidades.
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', color: '#242424', fontSize: 100 }}>
              R$ 200 Mensal
            </h2>
            <Button style={{ borderRadius: 50 }} variant="outline-dark">Adquirir</Button>
          </Col>
          <Col>
            <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
              Plano Vip Master, você poderá usar as nossas instalações durante a semana
              e poderá participar de todas as aulas da nossa grade de modalidades.
            </p>
          </Col>
        </Row>  
      </Container>
      <Footer />
    </>
  )
}

export default Preco