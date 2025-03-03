import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

const Agenda = () => {
  return (
    <>
      <Container>
        <Row style={{ paddingTop: 100, paddingBottom: 100 }}>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 50, color: '#242424' }} >
              segunda-feira
            </h2>
          </Col>
          <Col>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                ioga 16h - 17h30
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: Salvador
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Carlos
              </p>
            </Row>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                pilates 17h30 - 19h00
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: Salvador
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Ana
              </p>
            </Row>
            <Row>
              <Button variant="outline-dark" className="w-50" style={{ borderRadius: 50 }}>
                Agendar Visita
              </Button>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row style={{ paddingTop: 100, paddingBottom: 100 }}>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 50, color: '#242424' }} >
              terça-feira
            </h2>
          </Col>
          <Col>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                ioga 16h - 17h30
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: Salvador
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Carlos
              </p>
            </Row>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                boxe 17h30 - 19h00
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: São Paulo
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Romário
              </p>
            </Row>
            <Row>
              <Button variant="outline-dark" className="w-50" style={{ borderRadius: 50 }}>
                Agendar Visita
              </Button>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row style={{ paddingTop: 100, paddingBottom: 100 }}>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 50, color: '#242424' }} >
              quarta-feira
            </h2>
          </Col>
          <Col>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                pilates 16h - 17h30
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: São Paulo
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Romário
              </p>
            </Row>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                boxe 17h30 - 19h00
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: São Paulo
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Romário
              </p>
            </Row>
            <Row>
              <Button variant="outline-dark" className="w-50" style={{ borderRadius: 50 }}>
                Agendar Visita
              </Button>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row style={{ paddingTop: 100, paddingBottom: 100 }}>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 50, color: '#242424' }} >
              quinta-feira
            </h2>
          </Col>
          <Col>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                cardio 16h - 17h30
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: Salvador
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Carlos
              </p>
            </Row>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                força 17h30 - 19h00
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: Salvador
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Carlos
              </p>
            </Row>
            <Row>
              <Button variant="outline-dark" className="w-50" style={{ borderRadius: 50 }}>
                Agendar Visita
              </Button>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row style={{ paddingTop: 100, paddingBottom: 100 }}>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 50, color: '#242424' }} >
              sexta-feira
            </h2>
          </Col>
          <Col>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                ioga 16h - 17h30
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: Salvador
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Carlos
              </p>
            </Row>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                cardio 17h30 - 19h00
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: Salvador
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Carlos
              </p>
            </Row>
            <Row>
              <Button variant="outline-dark" className="w-50" style={{ borderRadius: 50 }}>
                Agendar Visita
              </Button>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row style={{ paddingTop: 100, paddingBottom: 100 }}>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 50, color: '#242424' }} >
              sábado
            </h2>
          </Col>
          <Col>
            <Row>
              <h3 style={{ fontFamily: 'Bebas Neue', color: '#242424' }}>
                ioga 16h - 17h30
              </h3>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                localização: Salvador
              </p>
              <p style={{ fontFamily: 'Poppins', color: '#242424' }}>
                Instrutor: Carlos
              </p>
            </Row>
            <Row>
              <Button variant="outline-dark" className="w-50" style={{ borderRadius: 50 }}>
                Agendar Visita
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Agenda