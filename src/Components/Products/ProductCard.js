import React from 'react'
import {Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 const ProductCard = ({id,title,pound,img}) => {
  return (
    <Col key={id} xs="6" sm="6" md="4" lg="3" className='d-flex'>
        <Card > 
            <Link to="/AllProduct/:id" style={{textDecoration:'none'}}>
                 <Card.Img style={{height:'250px'}} variant="top" src={img} />
            </Link>
            <Card.Body>
            <i class="fa-solid fa-heart"style={{display:'flex',justifyContent:'flex-end'}}></i>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-between text-center'>
                    <div style={{display:'flex',gap:'10px'}}>
                        <i class="fa-solid fa-star"style={{color:'yellow',marginTop:'5px'}}></i>
                        <p style={{color:'yellow'}}>4.3</p>
                    </div>

                    <p>{pound}</p>
            </div>
            <div  className='d-flex justify-content-center' style={{marginBottom:'10px'}}>
                <Link to="/item">
                  <button >Add To Cart </button>
                 </Link>
            </div>
        </Card>
    </Col>

  )
}
export default ProductCard