import React from 'react'
import { Col, Container, FloatingLabel, Form, InputGroup, Row } from 'react-bootstrap'

const Comments = () => {
  return (
    <section id="contact" className='bg-light py-4'>
        <div className='text-center my-2 py-3'>
            <h2 className='display-5 text-primary'>Comments <i className='bi bi-chat-left-heart'></i></h2>

        </div>
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Form>
                        <InputGroup className='mb-3'>

                            <InputGroup.Text id="basic-addon1"><i className='bi bi-envelope-open'></i></InputGroup.Text>

                            <FloatingLabel controlId='floatinginput'label="email address">
                                <Form.Control type="email"  placeholder='email address'/>
                            </FloatingLabel>

                        </InputGroup>
                        <InputGroup className='mb-3'>
                            
                            <InputGroup.Text id="basic-addon1"><i className='bi bi-person-fill'></i></InputGroup.Text>

                            <FloatingLabel controlId='floatinginput'label="user name">
                                <Form.Control type="text"  placeholder='user name'/>
                            </FloatingLabel>

                            </InputGroup>

                             <FloatingLabel controlId='floatingtext'label="comment here..." className='mb-3'>
                                <Form.Control as="textarea"  placeholder='comment here...'/>
                            </FloatingLabel>
                    </Form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Comments