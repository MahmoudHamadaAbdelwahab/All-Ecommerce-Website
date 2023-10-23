import React from 'react'
import { Container , Col} from 'react-bootstrap'
import RateItem from './rateItem'
import RatePost from './ratePost'
import PaginationPage from '../Utility/Pagination'

export default function RateContainer() {
    
  return (
    <div>
        <Container className='rateContainer'>
            <Col className='d-flex'>
                <div className='d-inline p-1'>التقيمات</div>
                <i class="fa-solid fa-star" style={{color:"yellow" , marginTop:'10px'}}></i>
                <div className='d-inline p-1 pt-2'>4.3</div>
                <div className='d-inline p-1 pt-2'>(التقيم 160)</div>
            </Col>
            <Col className='gap-10'> 
                <RatePost/>
                <RateItem/>
                <RateItem/>
                <RateItem/>
                <PaginationPage/>
            </Col>
        </Container>
    </div>
    )
}
