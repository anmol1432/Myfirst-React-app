import React from 'react'
import { NavLink } from "react-router-dom";


const Nvabar = () => {
    return (
        <>
            <div className="my-Nav">
                <nav className="navbar navbar-expand-lg  bg-light navbar-light  nav_bg ml-lg-5">
                    <div className="container-fluid ml-lg-5">
                        <NavLink exact className="nav-link active ml-lg-5" to="/">
                            <a class="navbar-brand" >
                                <img src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_960_720.png" width="35" height="30" />
                                <span className="ml-3 font-weight-bolder">Fox Security </span>
                            </a>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="menu-active" className="nav-link active" to="/" araia-currentpage="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="menu-active" className="nav-link " to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="menu-active" className="nav-link " to="/contact">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="menu-active" className="nav-link " to="/Service">Service</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nvabar
