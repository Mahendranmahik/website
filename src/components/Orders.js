import React from 'react'
import { Badge, ListGroup } from 'react-bootstrap'

const Orders = () => {
  return (
    <ListGroup as="ol" numbered>

        <ListGroup.Item className='d-flex justify-content-between align-items-start'>
            <div className='me-auto ms-2'>
                <div className='fw-bold'>margarita</div>
                delicious
            </div>
            <Badge pill>5</Badge>
        </ListGroup.Item>

        <ListGroup.Item className='d-flex justify-content-between align-items-start'>
            <div className='me-auto ms-2'>
                <div className='fw-bold'>double cheese</div>
                delicious
            </div>
            <Badge pill>2</Badge>
        </ListGroup.Item>

        <ListGroup.Item className='d-flex justify-content-between align-items-start'>
            <div className='me-auto ms-2'>
                <div className='fw-bold'>pepproni</div>
                delicious 
            </div>
            <Badge pill>2</Badge>
        </ListGroup.Item>




        
    </ListGroup>
  )
}

export default Orders