import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({remeras}) => {


  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={remeras.img}/>
      <Card.Body>
        <Card.Title>{remeras.articulo}</Card.Title>
        <Card.Text>
          ${remeras.precio}
        </Card.Text>
        <Link to={`/remeras/${remeras.id}`} className='ms-2  me-1'>
          <Button variant="primary">Mas Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemDetail