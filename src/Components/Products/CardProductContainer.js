import React from 'react'
import SubTitle from '../Utility/Subtitle'
import { Container , Row} from 'react-bootstrap'
import computer from '../../Images/computer.jpg'
import iphone from '../../Images/iphone-x.png'
import tShirt from '../../Images/t-shirt.jpeg'
import fresh from '../../Images/fresh.jpg'
import ProductCard from './ProductCard'
 const CardProductContainer = ({Title,BtnTitle}) => {
  return (
    <Container>
        <SubTitle title={Title} btnTitle={BtnTitle} path="/AllProduct"/> 

        <Row>
            <ProductCard id="0" title='computer' pound='23000' img={computer} />
            <ProductCard id="1" title='iphone' pound='23000' img={iphone}/>
            <ProductCard id="2" title='tShirt' pound='23000' img={tShirt}/>
            <ProductCard id="3" title='fresh' pound='23000' img={fresh}/>
        </Row>
    </Container>
    )
}
export default CardProductContainer;