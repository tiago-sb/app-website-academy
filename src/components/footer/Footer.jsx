import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#242424' }} className="text-white py-3">
      <Container>
        <Row>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue' }}>
              fique por dentro, siga-nos!
            </h2>
            <a href="#" style={{ color: 'white' }}>
              <FaInstagram size={24} style={{ margin: 5 }} />
            </a>
            <a href="#" style={{ color: 'white' }}>
              <FaTwitter size={24} style={{ margin: 5 }} />
            </a>
            <a href="#" style={{ color: 'white' }}>
              <FaFacebook size={24} style={{ margin: 5 }} />
            </a>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue' }}>
              suporte
            </h2>
            <Col>
              <a href="#" style={{ color: 'white', fontFamily: 'Poppins' }}>
                Termos e Condições
              </a>
            </Col>
            <Col>
              <a href="#" style={{ color: 'white', fontFamily: 'Poppins' }}>
                Politica de Privacidade
              </a>
            </Col>
          </Col>
          <Col>
            <h2 style={{ fontFamily: 'Bebas Neue' }}>
              contato
            </h2>
            <Col>
              <a href="https://api.whatsapp.com/send?phone=5577999662311&text=Ola" 
                style={{ color: 'white', fontFamily: 'Poppins' }}>
                +55 77 999662311
              </a>
            </Col>
            <Col>
              <a href="https://criarmeulink.com.br/u/1690329618" 
                style={{ color: 'white', fontFamily: 'Poppins' }}>
                belatiago72@gmail.com
              </a>
            </Col>
          </Col>
          <Col className="text-end">
            <h2 style={{ fontFamily: 'Bebas Neue' }}>
              Academy
            </h2>
          </Col>

        </Row>
        <Row>
          <Col className="text-center" style={{ fontFamily: 'Poppins', marginTop: 20 }}>
            <p >© Tiago Bela Produções</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer