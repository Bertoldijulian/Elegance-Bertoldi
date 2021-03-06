import {Link} from 'react-router-dom'
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
        <Link to={`/detalle/${calls.id}`} className='ms-2  me-1'>
          <Button variant="primary">Mas Detalles</Button>
        </Link>
        
      </Card.Body>
    </Card>
     
    </>

  )
}

export default Item