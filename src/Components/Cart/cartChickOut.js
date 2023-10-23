import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CartChickOut() {
  return (
    <div>

        <Row className='CartChickOut d-flex justify-content-center pt-3 my-1'>
            <Col xs='12' className='d-flex flex-column'>
                <div className='d-flex'>
                    <input className='d-inline text-center w-100' placeholder='كود الخصم'/>
                    <button className='input-click d-inline'>تطبيق</button>
                </div>
                <div className='product-price d-inline w-100 my-3'>3600 جنية</div>
                <Link
                to='/order/paymethoud'
                style={{textDecoration:'none'}}
                className='product-cart-add d-inline'
                >
                    <button className='input-click w-100 px-2'>اتمام الشراء</button>
                </Link>
            </Col>
        </Row>

    </div>
    )
}
