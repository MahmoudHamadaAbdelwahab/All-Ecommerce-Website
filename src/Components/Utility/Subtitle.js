import React from "react"
import { Link } from "react-router-dom"
const SubTitle = ({title,btnTitle,path})=>{
    return(
        <div className="d-flex justify-content-between pt-4 p-15 m-5">
            <h3 className="sub-title">{title}</h3>
            {
                    btnTitle ? (
                        <Link to={`${path}`} style={{textDecoration:'none'}}>

                            <button className="shopping-now">{btnTitle}</button>
                            
                        </Link>
                    ) : null
             
            }
        </div>
    )
}
export default SubTitle