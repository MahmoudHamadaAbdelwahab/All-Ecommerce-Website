import React from 'react'
import {Card, Col} from 'react-bootstrap';
 const BrandCard = ({img}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className='d-flex' style={{padding:'20px'}}>
      <Card className="my-1"  style={{border:'none'}}> 
          <Card.Img style={{width:'200px', height:'200px', borderRadius:'20%' }} variant="top" src={img} />
      </Card>
    </Col>
  )
}
export default BrandCard
