import React from 'react'
import  {Container , Row}  from 'react-bootstrap'
import SubTitle from "../Utility/Subtitle"
import CategoryCard from '../Category/CategoryCard'

import img1 from "../../Images/hallat.jpg"
import img2 from "../../Images/fresh.jpg"
import img3 from "../../Images/frezar.webp"
import img4 from "../../Images/tv.webp"

const HomeCategory = () => {
  return (
    <Container>

        <SubTitle title="التصنيفات" btnTitle="المزيد" path="/AllCategory"/>

        <Row className="my-3 d-flex justify-content-between">
            <CategoryCard title="الاجهزه المنزلية" img={img1} background="red"/>
            <CategoryCard title="الاجهزه المنزلية" img={img2} background="green"/>
            <CategoryCard title="الاجهزه المنزلية" img={img3} background="blue"/>
            <CategoryCard title="الاجهزه المنزلية" img={img4} background="yellow"/>
        </Row>

    </Container>

)
}
export default HomeCategory