import React from 'react'
import { Container , Row} from 'react-bootstrap'
import zara from '../../Images/Zara-icon.jpg'
import iphone from '../../Images/iphone-icon.png'
import dell from '../../Images/dell-icon.png'
import lg from '../../Images/lg-icon.png'
import BrandCard from './BrandCard'
 const BrandContainer = () => {
  return (
    <div>
        <Container>

            <Row className="my-3 d-flex justify-content-between">
                <BrandCard img={zara} />
                <BrandCard img={iphone} />
                <BrandCard img={dell} />
                <BrandCard img={lg} />
            </Row>

        </Container>
    </div>
  )
}

export default BrandContainer