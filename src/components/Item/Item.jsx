import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = ({calls}) => {
  return (
    <>

    <Card border="dark" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={calls.img}/>
      <Card.Body>
        <Card.Title>{calls.articulo}</Card.Title>
        <Card.Text>
          ${calls.precio}
        </Card.Text>
        <Button variant="primary">Mas Detalles</Button>
      </Card.Body>
    </Card>
     
    </>

  )
}

export default Item