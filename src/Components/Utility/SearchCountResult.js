import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Dropdown} from 'react-bootstrap';  
 const SearchCountResult = ({title}) => {
  return (
    <div className='d-flex justify-content-between pt-3 px-2'>
     
        <h1 className='sub-title'>{title}</h1>
            <Dropdown style={{marginTop:'10px'}}>  

              <Dropdown.Toggle variant="primary" id="dropdown-basic-button" style={{backgroundColor:'#222',color:'#fff'}}>  
                ترتيب حسب
              </Dropdown.Toggle>  
         
        
              
              <Dropdown.Menu>  
                <Dropdown.Item href="#/action-1">الاكثر مبيعا</Dropdown.Item>  
                <Dropdown.Item href="#/action-2">الاكثر تقيما</Dropdown.Item>  
                <Dropdown.Item href="#/action-3">عرض الاسعار من الاسفل للاعلي </Dropdown.Item>  
                <Dropdown.Item href="#/action-3">عرض الاسعار من الاعلي للاسفل</Dropdown.Item>  
              </Dropdown.Menu>  
            </Dropdown>  
    
        </div>
  )
}

export default SearchCountResult