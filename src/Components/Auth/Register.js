import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
 const RegisterPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
    <Container style={{minHeight:'600px'}}>
        <Row className='py-5 d-flex justify-content-center'> 
            <Col sm="12" className='d-flex flex-column'>
                <label className='mx-auto title-login'>تسجيل حساب جديد</label>
                <input 
                    type='text'
                    placeholder='اسم المستخدم'
                    className='user-input my-3 text-center mx-auto'
                    />
                <input 
                    type='text'
                    placeholder='الايميل'
                    className='user-input my-3 text-center mx-auto'
                    />
                <input 
                    type='password'
                    placeholder='كلمه السر'
                    className='user-input my-3 text-center mx-auto'
                    />
                <button className='btn-login mx-auto mt-4' >تسجيل الدخول</button>
            </Col>
        </Row>
    </Container>
    </div>

    )
}

export default RegisterPage