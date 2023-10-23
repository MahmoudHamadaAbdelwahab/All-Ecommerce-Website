import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function RateItem() {
  return (
    <div>
        <Row className='mt-2'>
            <Col className='d-flex me-4' >
                <div>محمد جودي</div>
                <i class="fa-solid fa-star" style={{color:"yellow" , marginTop:'10px'}}></i>
                <div>4.5</div>
            </Col>
        </Row>
        <Row className='border-bottom mx-2'>
            <Col className='d-flex me-4 pd-2'>
             <div>افضل الاسعار لدينا حالين وتنافسيه ولا يوجد هذه مره اخر لوقت محدود </div>
            </Col>
        </Row>
    </div>
  )
}
