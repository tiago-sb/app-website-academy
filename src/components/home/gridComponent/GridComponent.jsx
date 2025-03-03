import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImageGridComponent from './imageGridComponent'

const GridComponent = () => {
  return (
    <section>
      <Container style={{ overflow: 'hidden'}} className="d-flex align-items-center p-0">
        <Row className="w-100 no-gutters d-flex" style={{ flexWrap: 'wrap' }}>
          <Col className="d-flex justify-content-center">
            <ImageGridComponent src="./assets/images/square_images/i1.jpg" />
          </Col>
          <Col className="d-flex justify-content-center">
            <ImageGridComponent src="./assets/images/square_images/i2.jpg" />
          </Col>
          <Col className="d-flex justify-content-center">
            <ImageGridComponent src="./assets/images/square_images/i3.jpg" />
          </Col>
          <Col className="d-flex justify-content-center">
            <ImageGridComponent src="./assets/images/square_images/i4.jpg" />
          </Col>
          <Col className="d-flex justify-content-center">
            <ImageGridComponent src="./assets/images/square_images/i5.jpg" />
          </Col>
          <Col className="d-flex justify-content-center">
            <ImageGridComponent src="./assets/images/square_images/i6.jpg" />
          </Col>
        </Row>
      </Container>
    </section>

  )
}

export default GridComponent
