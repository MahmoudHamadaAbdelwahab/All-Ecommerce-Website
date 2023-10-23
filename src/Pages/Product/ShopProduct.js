import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/Utility/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../Components/Utility/SideFilter'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import PaginationPage from '../../Components/Utility/Pagination'

 const ShopProductPage = () => {
  return (
    <div style={{minHeight:'670px'}}>

        <CategoryHeader/>

        <Container>

          <SearchCountResult title="نتيجه بحث 456"/>
          
            <Row className='d-flex flex-row'>
              
                <Col sm="2" xs="2" md="1" className="d-flex">
              
                <SideFilter/>

                </Col>

                <Col sm="10" xs="10" md="11">
                  <CardProductContainer title="" btnTitle=""/>
                </Col>

            </Row>
      
            <PaginationPage/>


        </Container>

    </div>
  )
}

export default ShopProductPage