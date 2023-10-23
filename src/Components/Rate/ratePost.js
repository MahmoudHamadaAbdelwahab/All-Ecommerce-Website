import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Row , Col} from 'react-bootstrap'
export default function RatePost() {
    const setting = {
        size: 20,
        count: 5,
        color: "black",
        activeColor: "yellow",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
          console.log(`Example 2: new value is ${newValue}`);
        }
      };
  return (
    <div className='RatePost'>
        <Row>
            <Col>
                <div>محمد علي </div>
                <ReactStars {...setting}/>,
            </Col>
        </Row>
        <Row>
            <Col className='me-4 pd-2'>
                <textarea className='input-form-area p-2 mt-2' rows='2'
                cols='20' placeholder='اكتب تعليق ...'/>
                <div className='d-flex justify-content-end al'>
                    <button style={{backgroundColor:"#333",color:'white'}}>اضف تعليق</button>
                </div>
            </Col>
        </Row>
    </div>
  )
}
