import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import Orders from './Orders'

const Cart = () => {
    const [show,setshow]=useState(false)
  return (
    <>
    <Button variant='info'className='me-2 position-relative' onClick={()=>setshow(!show)}>
      <i className='bi bi-cart4'></i>
      <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>3+
      <span class="visually-hidden">cart</span>
      </span>
    </Button>

    <Offcanvas show={show} onHide={()=>setshow(!show)} placement={'end'}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Orders/>
            <div className="text-end mt-3">
              <Button variant='danger'>Check list</Button>
            </div>
        </Offcanvas.Body>
    </Offcanvas>
    </>
  )
}

export default Cart