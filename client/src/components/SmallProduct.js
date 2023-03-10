import { Button, Card } from 'react-bootstrap';

function SmallProduct(props) {
    return (
        <Card border="secondary">
            <Card.Img className="p-2" variant="top" src={ "/images/" + props.data.image } />
            <Card.Body>
                <Card.Title>{ props.data.brand } { props.data.model } { props.data.display } { props.data.resolution }</Card.Title>
                <Card.Text className="mb-1">{ props.data.size }cm</Card.Text>
                <Card.Text className="text-danger"><h5><strong>{ props.data.price } lei</strong></h5></Card.Text>
                <Card.Text>
                    { props.data.shortDescription }
                </Card.Text>
                <Button variant="primary" href={ props.data.url }>Go somewhere</Button>
            </Card.Body>
        </Card>
    );
  }
  
  export default SmallProduct;