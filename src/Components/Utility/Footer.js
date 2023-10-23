import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
 const Footer = () => {
  return (
    <div style={{backgroundColor:"#333" , color:'white',padding:'5px'}}>
        <Container>
            <Row className='d-flex justify-content-between align-item-center'>
                <Col sm="6" className='d-flex align-item-center'>
                    <div className='footer-shroot' style={{cursor:'pointer'}}>الشروط ولاحكام</div>
                    <div className='footer-shroot mx-2' style={{cursor:'pointer'}}>سياسه الخصوصية</div>
                    <div className='footer-shroot mx-2' style={{cursor:'pointer'}}>اتصل بنا</div>
                </Col>
                <Col sm="6" className='d-flex justify-content-end'>
                        <div style={{cursor:'pointer' , marginLeft:'10px'}}>
                            <i class="fa-brands fa-whatsapp"></i>
                        </div>
                        <div style={{cursor:'pointer' , marginLeft:'10px'}}>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div style={{cursor:'pointer' , marginLeft:'10px'}}>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div style={{cursor:'pointer' , marginLeft:'10px'}}>
                             <i class="fa-brands fa-youtube"></i>
                        </div>
                        <div style={{cursor:'pointer' , marginLeft:'10px'}}>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                </Col>
            </Row>
        </Container>
        </div>
  )
}
export default Footer
