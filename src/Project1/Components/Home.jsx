import React from 'react'
import Common from "./Common";
import home from "../img/home.svg"


function Home() {
    return (
        <>
            <section id="header" className="">
                <Common
                    text1="Secure your bussines with "
                    path="/service"
                    btnname="Get start"
                    imgsrc={home}
                />
            </section>
        </>
    )
}

export default Home
