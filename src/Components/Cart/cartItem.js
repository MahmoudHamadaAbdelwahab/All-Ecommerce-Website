import React from 'react'
import { Col } from 'react-bootstrap'
import img1 from './../../Images/vegetables.jpg'
export default function CartItem() {
  return (
    <div>
        <Col className='CartItem'>
        <div className='CartItem-one'>

            <div className='imgItem'>
            <img src={img1} style={{width:'100px' , height:'100%'}}/>
            </div>

            <div className='textItem'>
              <h2>الاكترونيات</h2>
              <p>لاب ديل سعته 1000 تيرا بايت معالجه بووووم ي جمدان</p>
              <p> الماركة:-<b>ديل</b></p>

              <div className='mach'>

                <div className='machItem'>
                    <p>الكمية</p>
                    <input type='text' style={{width:'60px' , height:'30px'}}/>
                </div>
              </div>
            </div>

        </div>
        <div className='delete'>
            <div className='deleteItem'>
                <i class="fa-solid fa-trash-can"></i>
                <p>ازالة</p>
            </div>
            
            <div className='price'>
                    <p>300 جنية</p>
            </div>
        </div>
        </Col>
    </div>
  )
}
