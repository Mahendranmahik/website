import React from 'react'
import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'

const Pizzacard = () => {
    const [modalshow,setmodalshow]=useState(false)

    function MyVerticalCenteredModal(props){
        return(
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-hcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-hcenter">heading</Modal.Title>    
                </Modal.Header>

                <Modal.Body>
                    <p>your item is added in cart list <i className='bi bi-arrow-up-circle-fill'></i></p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.onHide}>close</Button>
                </Modal.Footer>


            </Modal>
        )
    }
  return (
    <>
    <Card className='m-3'>
        <Card.Img variant="top"src={require('../assets/small.jpg')}/>

        <Card.Body>
            <Card.Title>pizza</Card.Title>
            <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Similique sapiente beatae officia ab velit? Rem dolor non
                    numquam impedit reiciendis nisi maxime, omnis harum 
                    exercitationem.
            </Card.Text>
            <div className="text-center">
             <Button variant='primary'onClick={()=>setmodalshow(true)}>click here</Button>
            </div>
           
        </Card.Body>
        <MyVerticalCenteredModal
          show={modalshow}
          onHide={()=>setmodalshow(false)}
          />
          
    </Card>
    </>
  )
}

export default Pizzacard