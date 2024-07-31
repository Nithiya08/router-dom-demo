import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CardComp({product}){
    return(<>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image}  style={{width:"140px", height:"140px"}}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
    </>)
}
export default CardComp