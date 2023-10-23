import React from 'react'
import { Row } from 'react-bootstrap';
const SideFilter = () => {
  return (
    <div className='SideFilter'>
        <Row className='d-flex flex-column py-3'>
            <div className='category'>
                <h3>الفئة</h3>
                <div className='info'>
                    <input type='checkbox'/>
                    <p>الكل</p>
                </div>
                <div className='info'>
                    <input type='checkbox'/>
                    <p>اجهزه منزليه</p>
                </div>
                <div className='info'>
                    <input type='checkbox'/>
                    <p>اجهزه كهربائية</p>
                </div>
                <div className='info'>
                    <input type='checkbox'/>
                    <p>تليفونات</p>
                </div>
                <div className='info'>
                    <input type='checkbox'/>
                    <p>ملابس</p>
                </div>
            </div>
            <div className='brand'>
            <h3>الماركة</h3>
            <div className='info'>
                    <input type='checkbox'/>
                    <p>العربي</p>
                </div>
                <div className='info'>
                    <input type='checkbox'/>
                    <p>ايفون & اندرويد</p>
                </div>
                <div className='info'>
                    <input type='checkbox'/>
                    <p>زارا</p>
                </div>
            </div>
            <div className='price'>
            <h3>السعر</h3>

            <div className='info'>
                    <p>من</p>
                    <input type='text'/>
                </div>
                <div className='info'>
                    <p>الي</p>
                    <input type='text'/>
                </div>
            </div>
        </Row>
    </div>
  )
}

export  default SideFilter;