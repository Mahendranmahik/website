import React from 'react'
import { CarouselItem, Col, Container, Row } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'

const Banner = () => {
  return (
   <Container fluid className='mt-4' >
    <Row className='justify-content-center align-items-center'>
        <Col lg={8}>
            <Carousel>
                <CarouselItem interval={2000}>
                    <img src={require('../assets/one.jpg')} alt="" className='d-block w-100' />

                <Carousel.Caption>
                    <h3>margaritta</h3>
                    <p className='d-none d-sm-block'>its delicious pizza</p>
                </Carousel.Caption>

                </CarouselItem>

                <CarouselItem interval={2000}>
                    <img src={require('../assets/two.jpg')}  alt="" className='d-block w-100' />

                <Carousel.Caption>
                    <h3>double cheese</h3>
                    <p className='d-none d-sm-block'>its delicious pizza</p>
                </Carousel.Caption>

                </CarouselItem>

                <CarouselItem interval={2000}>
                    <img src={require('../assets/three.jpg')}  alt="" className=' d-block w-100' />

                <Carousel.Caption>
                    <h3>spicy</h3>
                    <p className='d-none d-sm-block'>its delicious pizza</p>
                </Carousel.Caption>

                </CarouselItem>

                <CarouselItem interval={2000}>
                    <img src={require('../assets/four.jpg')}  alt="" className='d-block w-100' />

                <Carousel.Caption>
                    <h3>diet option</h3>
                    <p className='d-none d-sm-block'>its delicious pizza</p>
                </Carousel.Caption>

                </CarouselItem>
            </Carousel>
            
        </Col>
    </Row>
    <div className="text-center ">
        <h2 className='display-5 mt-3'>pizza for occasions</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, distinctio!</p>
    </div>
    
   </Container>
  )
}

export default Banner