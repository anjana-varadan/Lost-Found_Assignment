import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./ProductCard.css"

function ProductCard(props) {
    const { product } = props
    const navigate = useNavigate()
    const handleSelection = () => {
        //navigating from one page to another 
        navigate(`/product?id=${product.id}`, { state: { product } })
    }
    return (
        <button className='productCards' onClick={() => handleSelection()}>
            <h2>{product.name}</h2>
            <h3>{product.Country}</h3>
            <img src={product.imageURL}/>
            <div className='leftStyle'>
                <p className='styleCode'>{product.StyleCode}</p>
                <p className='catogery'>{product.category}</p>
            </div>
            <div className='priceTag'>${product.price}</div>
        </button>
        // <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src={product.imageURL} />
        //     <Card.Body>
        //         <Card.Title>{product.name}</Card.Title>
        //         <Card.Text>
        //             $ {product.price}
        //         </Card.Text>
        //         <Button onClick={() => handleSelection()} variant="danger">View Details</Button>
        //     </Card.Body>
        // </Card>
    );
}

export default ProductCard;