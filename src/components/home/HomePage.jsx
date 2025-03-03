import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ImageGridComponent from './gridComponent/imageGridComponent'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section style={{
        background: 'url("./assets/images/main_images/main_fund.jpg") center/cover no-repeat fixed #242424',
        height: '100vh', width: '100%', padding: 10, display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
        <Container fluid style={{ 
          display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <Col style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <h2 style={{ fontFamily: 'Bebas Neue', color: '#fff', fontSize: 50, textShadow: '0 0 10px #000' }}>
              treine do seu jeito!
            </h2>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{ borderRadius: 50}} variant="light">
              Faça Parte da Família!
            </Button>
          </Col>
        </Container>
      </section>
      <section style={{ backgroundColor: '#242424' }}>
        <Container>
          <Row style={{ paddingTop: 200, paddingBottom: 200 }}>
            <Col>
              <h2 style={{ fontFamily: 'Bebas Neue', color: '#fff', fontSize: 60 }}>
                somos uma academia de qualidade, 
                dedicada à sua saúde E bem-estar.
              </h2>
            </Col>
            <Col>
              <p style={{ fontFamily: 'Poppins', color: '#fff' }}>
                A Academy é uma academia para você frequentar
                do seu jeito, e fazer o seu melhor. 
                Ao entrar, você terá acesso a uma programação digital e presencial 
                para que você possa atingir seus objetivos de condicionamento físico. 
                Veja abaixo todos os serviços oferecidos pela academia.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ backgroundColor: '#242424' }}>
        <Container style={{ paddingTop: 0, paddingBottom: 200 }}>
          <Row className='no-gutters d-flex justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center'>
              <ImageGridComponent src="././assets/images/main_images/main_section.jpg"
              style={{ width: '25vw', height: 'auto' }} />
            </Col>
            <Col className='d-flex justify-content-center'>
              <ImageGridComponent src="././assets/images/main_images/main_section_2.jpg"
              style={{ width: '25vw', height: 'auto' }} />
            </Col>
          </Row>  
        </Container>
      </section>
      <section style={{ backgroundColor: '#242424' }}>
        <Container style={{ textAlign: 'center', marginBottom: 40, paddingBottom: 200}} >
          <Row>
            <h2 style={{ fontFamily: 'Bebas Neue', color: '#fff', fontSize: 60 }}>
              comodidades
            </h2>
          </Row>
          <Row>
            <p style={{ color: '#fff', fontFamily: 'Poppins' }}>
              Na Academy, sempre oferecemos novas estruturas para 
              atender às necessidades do público. Temos:
            </p>
          </Row>
          <Row>
            <ListGroup>
              <ListGroup.Item style={{ background: 'none', color: '#fff' }}>Instalações Modernas</ListGroup.Item>
              <ListGroup.Item style={{ background: 'none', color: '#fff' }}>Personal Trainers</ListGroup.Item>
              <ListGroup.Item style={{ background: 'none', color: '#fff' }}>Armários</ListGroup.Item>
              <ListGroup.Item style={{ background: 'none', color: '#fff' }}>Nutrição Pessoal</ListGroup.Item>
            </ListGroup>
          </Row>
        </Container>
      </section>
      <section style={{ backgroundColor: '#fff' }}>
        <Container style={{ paddingTop: 200, paddingBottom: 200 }} 
          className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <h2 style={{ fontFamily: 'Bebas Neue', color: '#242424', fontSize: 50 }}>
                Agende uma visita!
              </h2>
              <p style={{ fontFamily: 'Poppins' }}>
                Você poderá experimentar os equipamentos, 
                observar as aulas e receber respostas diretas para todas as suas perguntas.
              </p>
            </Col>
            <Col>
              <Form style={{ fontFamily: 'Poppins' }}>
                <Row>
                  <Form.Group as={Col} controlId="formGridName" className="mb-3">
                    <Form.Label>Primeiro Nome</Form.Label>
                    <Form.Control type="text" placeholder="Seu nome" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLastName" className="mb-3">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control type="text" placeholder="Seu sobrenome" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Seu email" />
                  </Form.Group>
                </Row>
                
                <Form.Group className="mb-3" controlId="formGroupDate">
                  <Form.Label>Data da Visita</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>    
      </section>
      <section style={{
        background: 'url("./assets/images/main_images/main_fund_2.png") center/cover no-repeat fixed #242424',
        textAlign: 'center'
      }}>
        <Container style={{ paddingTop: 200, paddingBottom: 200 }}>
          <h2 style={{ fontFamily: 'Bebas Neue', color: '#fff', fontSize: 50, textShadow: '0 0 10px #000' }}> 
            "a academy foi fundamental para o meu desenvolvimento físico.
            Sua estrutura oferece qualidade para que eu possa lidar melhor
            com o meu corpo."
          </h2>  
          <p style={{ fontFamily: 'Poppins', color: '#fff', textShadow: '0 0 10px #000' }}>- Cliente da Academia</p>
        </Container>
      </section>
      <section>
        <Container style={{ textAlign: 'center', paddingTop: 200, paddingBottom: 200 }}>
          <Row style={{ fontFamily: 'Poppins' }}>
            <Col >
              <h2 style={{ fontFamily: 'Bebas Neue', color: '#242424', fontSize: 50 }}>
                São Paulo
              </h2>
              <p>Rua XXXX</p>
              <p>São Paulo</p>
              <p>99999-99</p>
            </Col>
            <Col>
              <h2 style={{ fontFamily: 'Bebas Neue', color: '#242424', fontSize: 50 }}>
                Salvador
              </h2>
              <p>Rua YYYY</p>
              <p>Bahia</p>
              <p>88888-88</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ 
        display: 'flex', flexDirection: 'row', width: '100%', 
        height: '450px', overflow: 'hidden'  
      }}>
        <ImageGridComponent src="./assets/images/square_images/i1.jpg" />
        <ImageGridComponent src="./assets/images/square_images/i2.jpg" />
        <ImageGridComponent src="./assets/images/square_images/i3.jpg" />
        <ImageGridComponent src="./assets/images/square_images/i4.jpg" />
        <ImageGridComponent src="./assets/images/square_images/i5.jpg" />
        <ImageGridComponent src="./assets/images/square_images/i6.jpg" />
      </section>
      <Footer />
    </>
  )
}

export default HomePage