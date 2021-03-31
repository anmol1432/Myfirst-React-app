import React from 'react'
import { NavLink } from "react-router-dom";


const Card = (props) => {
    return (
        <div className=" m-2 CARD ">
            <div className="card" >
                <img src={props.imgsrc} className="card-img-top" alt="..." width='200' height='150'/>
                <div className="card-body">
                    <h5 className="card-title text-capitalize">{props.title}</h5>
                    <p className="card-text text-capitalize">{props.sometext}</p>
                    <NavLink to="/" className="btn btn-primary d-block m-auto">{props.btnname}</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card
