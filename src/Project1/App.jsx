import React from 'react'
import "./css/Project.css"
import Nvabar from "./Components/Nvabar";
import { Route, Switch, Redirect } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const App = () => {
    return (
        <>
            <Nvabar />
            <Switch>
                <Route exact path='/' render={() => <Home />}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/contact' component={Contact}></Route>
                <Route exact path='/service' render={() => <Service />}></Route>
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    )
}

export default App;
