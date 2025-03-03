import { Container, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import NavBar from '../../navBar/NavBar'
import Footer from '../../footer/Footer'

const Instrutores = () => {

  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: 100, paddingBottom: 100 }}>
        <Row style={{ paddingBottom: 40 }}>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="../../../../public/assets/images/teaches_images/t1.jpg" />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Bebas Neue' }}>Carlos - Salvador</Card.Title>
                <Card.Text style={{ fontFamily: 'Poppins' }}>
                  Boxe, Força
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="../../../../public/assets/images/teaches_images/t3.jpg" />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Bebas Neue' }}>Ana - Salvador</Card.Title>
                <Card.Text style={{ fontFamily: 'Poppins' }}>
                  Pilares, Ioga
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="../../../../public/assets/images/teaches_images/t4.jpg" />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Bebas Neue' }}>Carla - Salvador</Card.Title>
                <Card.Text style={{ fontFamily: 'Poppins' }}>
                  Ioga, Cardio
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="../../../../public/assets/images/teaches_images/t5.jpg" />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Bebas Neue' }}>Romário - São Paulo</Card.Title>
                <Card.Text style={{ fontFamily: 'Poppins' }}>
                  Boxe, Cardio
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="../../../../public/assets/images/teaches_images/t2.jpg" />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Bebas Neue' }}>Eduardo - São Paulo</Card.Title>
                <Card.Text style={{ fontFamily: 'Poppins' }}>
                  Ioga
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="../../../../public/assets/images/teaches_images/t6.jpg" />
              <Card.Body>
                <Card.Title style={{ fontFamily: 'Bebas Neue' }}>Maria - São Paulo</Card.Title>
                <Card.Text style={{ fontFamily: 'Poppins' }}>
                  Pilates
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Instrutores
