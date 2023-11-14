import React, { useState } from 'react'
import { Col, Container, Row,Image, Button, ToastContainer, Toast } from 'react-bootstrap'

const Picofweek = () => {
    const [show,setshow]=useState(false)
  return (
    <section id="service" className='my-3'>
        <div className="text-center m-5 p-3">
            <h2 className='display-5 text-primary'>Pick of the Week <i className='bi bi-search-heart'></i></h2>
        </div>
        <Container>
            <Row className='align-items-center'>
                <Col md={7}>
                    <Image alt="pizza" src={require('../assets/three.jpg')} rounded fluid></Image>
                </Col>
                <Col md={5}>
                <div className='py-3'>
                    <h2 className='h1'>take the pizza now with amazing offers!</h2>
                    <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, numquam!</p>
                    <Button variant="primary" onClick={()=>setshow(true)}><i className='bi bi-basket'></i> Buy Now</Button>
                </div>
                </Col>
            </Row>

            <ToastContainer className='position-fixed bottom-0 end-0 p-3'>
                <Toast onClose={()=>setshow(false)} show={show} delay={3000} autohide>
                    <Toast.Header closeButton={false}>
                        <img src="" alt="" />
                        <strong>added</strong>
                        <small className='m-auto'>5 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                        item added to cart
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    </section>
  )
}

export default Picofweek