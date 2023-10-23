import React from 'react'
import { Container ,Row , Col } from 'react-bootstrap'
import zara from '../../Images/caver-Zara.jpg'
 const DiscountSection = () => {
  return (
    <Container className='d-flex justify-content-around text-center' style={{backgroundColor:'#6f677c' , padding:'20px'}}>
        <Row>
      
            <Col sm="6">
                <img style={{width:'500px',height:'200px'}} src={zara}/>
            </Col>
            <Col sm="6">
                <div style={{color:'red',fontSize:'30px' , marginTop:'60px'}}>
                    خصم يصل الي 40 % علي جميع ملابس زارا 
                </div>
            </Col>

        </Row>
    </Container>
    )
}

export default DiscountSection