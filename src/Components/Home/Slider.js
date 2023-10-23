import React , {useState}from 'react'
import Carousel from 'react-bootstrap/Carousel';

import img1 from "../../Images/perfumes.jpg"
import img2 from "../../Images/caver-realme.jpg"
import img3 from "../../Images/caver-Zara.jpg"

 const Slider = () => {
  const [index , setIndex] = useState(0)

  const handleSelect = (selectIndex) =>{
    setIndex(selectIndex)
  }  
  return (
   <Carousel className='carousel-slider' activeIndex={index} onSelect={handleSelect}> 

      <Carousel.Item className="slider-background" interval={2000}>
        <div className="d-flex justify-content-evenly alignItem-center ">
          <img
          style={{}}
          className='perfumes'
          src={img1}
          alt=''
          />

          <div style={{marginTop:"50px"}}>
            <h3 className='slider-title'>هناك خصم كبير</h3>
            <p className='slider-text'>خصم يصل 50% عند الشراء </p>
          </div>
        </div>
      </Carousel.Item>

       <Carousel.Item className="slider-background" interval={2000}>
        <div className="d-flex justify-content-evenly alignItem-center">
          <img
          style={{}}
          className='caver-realme'
          src={img2}
          alt=''
          />

          <div style={{marginTop:"50px"}}>
            <h3 className='slider-title'>هناك خصم كبير</h3>
            <p className='slider-text'>خصم يصل 50% عند الشراء </p>
          </div>
        </div>
      </Carousel.Item> 

     ` <Carousel.Item className="slider-background" interval={2000}>
        <div className="d-flex justify-content-evenly alignItem-center">
          <img
          style={{}}
          className='caver-Zara'
          src={img3}
          alt=''
          />

          <div style={{marginTop:"50px"}}>
            <h3 className='slider-title'>هناك خصم كبير</h3>
            <p className='slider-text'>خصم يصل 50% عند الشراء </p>
          </div>
        </div>
      </Carousel.Item> 

  </Carousel> 
    )
}

export default Slider;
