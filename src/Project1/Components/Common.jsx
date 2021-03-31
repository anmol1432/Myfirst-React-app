import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Common = (props) => {
    return (
        <div>
            <h3 className="text-capitalize my-3 text-dark text-center mt-5 w-75 d-block m-auto">
                {props.optionaltext}
            </h3>
            <div className="main mt-lg-5">
                <div className="main">
                    <div className=" main-section-1 mt-3">
                        <h1 className="text-capitalize font-weight-bold">
                            { props.text1}<strong className="text-primary"> <br /> fox Security</strong>
                        </h1>
                        <h3 className="text-capitalize my-3">
                            We have talented team of <strong className="text-primary">cyber security</strong> experts
                        </h3>
                        <div className="mt-3">
                            <NavLink className="text-capitalize btn btn-outline-primary" exact to={props.path}>{ props.btnname}</NavLink>
                        </div>
                    </div>
                </div>
                <div className="header-img">
                    <img src={props.imgsrc} className="img-fluid animated_img order-1" alt="" width='250' height='300' />
                </div>
            </div>
        </div>
    )
}

export default Common
