import React from 'react'
import SubTitle from '../Utility/Subtitle'
import { Container , Row} from 'react-bootstrap'
import zara from '../../Images/Zara-icon.jpg'
import iphone from '../../Images/iphone-icon.png'
import dell from '../../Images/dell-icon.png'
import lg from '../../Images/lg-icon.png'
import BrandCard from './BrandCard'
 const BrandFeature = ({Title,BtnTitle}) => {
  return (
    <Container>

        <SubTitle title={Title} btnTitle={BtnTitle} path="/AllBrands"/>

        <Row className="my-3 d-flex justify-content-between">
            <BrandCard img={zara} />
            <BrandCard img={iphone} />
            <BrandCard img={dell} />
            <BrandCard img={lg} />
        </Row>

    </Container>  
    )
}
export default BrandFeature
