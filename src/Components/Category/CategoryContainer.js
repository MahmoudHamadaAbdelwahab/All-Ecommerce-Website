import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import fresh from '../../Images/fresh.jpg'
import laptob from '../../Images/computer.jpg'
import iphone from '../../Images/iphone-x.png'
import tshirt from '../../Images/t-shirt.jpeg'
import tve from '../../Images/tv.webp'
import food from '../../Images/food.jpg'
import vegetables from '../../Images/vegetables.jpg'
import shoes from '../../Images/shoes.jpeg'
import short from '../../Images/short.jpg'
 const CategoryContainer = () => {
  return (
    <Container> 
        <h1>كل التصنيفات</h1>
        <Row className='my-2 d-flex justify-content-center'>
            <CategoryCard title="الاجهزه المنزليه" img={fresh}/>
            <CategoryCard title="تلفزيونات" img={tve}/>
            <CategoryCard title="لابتوب" img={laptob}/>
            <CategoryCard title="فون" img={iphone}/>
            <CategoryCard title="تشرتات" img={tshirt}/>
            <CategoryCard title="طعام" img={food}/>
            <CategoryCard title="خضروات" img={vegetables}/>
            <CategoryCard title="احزية" img={shoes}/>
            <CategoryCard title="شوراته" img={short}/>
        </Row>
    </Container>
    )
}
export default CategoryContainer