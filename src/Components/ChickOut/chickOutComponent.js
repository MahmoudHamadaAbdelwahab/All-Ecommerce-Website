import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function ChickOutComponent() {
  return (
    <Container className='ChickOutComponent'>
        <h5 className='admin-content-text'>اختر طريقة الدفع</h5>
        <div className='user-address-card'>
            <Row className='d-flex justify-context-between'>
                <Col className='my-3' xs='12'>
                    <input name='group' value='الدفع عن طريق البطاقة الأتماني' id='group1' type='radio'/>
                    <label for='group1'>الدفع عن طريق البطاقة الأتمانية</label>
                </Col>
            </Row>

            <Row className='mt-3'>
                <Col className='d-flex' xs='12'>
                     <input name='group' value="الدفع عند الاستلام" id='group1' type='radio'/>
                    <label for='group1'>الدفع عند الاستلام</label>
                </Col>
            </Row>
        </div>
        <Row>
            <Col xs='12' className='d-flex justify-content-end'>
                <div className='product-price d-inline'>34000 جنية</div>
                <div className='product-cart-add d-inline me-2'>اتمام الشراء</div>
            </Col>
        </Row>
    </Container>
  )
}
