import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../Components/Cart/cartItem'
import CartChickOut from '../../Components/Cart/cartChickOut'

export default function CartPage() {
  return (
    <Container style={{minHeight:'676px'}}>
        <Row>
            <h2 mt='2'>عربة التسوق</h2>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Col xs='12' md='9'>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </Col>
            <Col xs='6' md='3'>
            <CartChickOut/>
            </Col>
        </Row>
    </Container>
  )
}

/*
xl => Extra large ≥ 1200px
lg => Large ≥992px
md => Medium ≥768px
sm => Small ≥576px
*/
