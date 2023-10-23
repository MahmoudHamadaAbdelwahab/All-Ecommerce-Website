import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './productGallery'
import ProductText from './productText'

export default function ProductDetailsItem() {
  return (
    <div>
        <Row className='py-3'>
            <Col lg="4">
                <ProductGallery/>
            </Col>

            <Col lg="8">
                <ProductText/>
            </Col>
        </Row>

    </div>
  )
}
