import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductDetailsItem from '../../Components/Products/productDetailsItem'
import RateContainer from '../../Components/Rate/rateContainer'
import CardProductContainer from '../../Components/Products/CardProductContainer'

 const ProductDetailsPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
    <CategoryHeader/>

    <Container>
        <ProductDetailsItem/>
        <RateContainer/>
    </Container>

    <CardProductContainer Title='منتجات قد تعجبك'/>
    </div>
  )
}
export default ProductDetailsPage