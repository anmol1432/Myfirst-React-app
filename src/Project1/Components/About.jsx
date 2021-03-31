import React from 'react'
import Common from "./Common";
import about from "../img/About.svg"


const About = () => {
    return (
        <>
            <h2 className="text-center mt-4">About</h2>
            <hr className="w-25 mx-auto" id="hr" />
            
            <Common
                text1="Grow with us"
                path="/contact"
                btnname="Contact Now"
                imgsrc={about}
                optionaltext="Hello i am anmol singh i am self taught developer
                 i learn programming with the help of youtube and google and free pdf books. i can solve your problems just contact us"
            />
        </>
    )
}

export default About
