import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pizzacard from './Pizzacard'
import { useState } from 'react'

const Menu = () => {
    const [menu]=useState([1,2,3,4,5,6])
  return (
    <section id="menu"className='bg-light'>
        <Container>
            <div className="text-center">
               <h3 className='text-primary my-3 py-5'>Treat yourself <i className='bi bi-tiktok'></i></h3>
            </div>

            <Row>
                {
                    menu.map((item)=><Col md={6} lg={4} key={item}>
                                        <Pizzacard/>
                                    </Col>
                    )
                }
                
            </Row>
           
        </Container>

    </section>
  )
}

export default Menu