import React from 'react'
import Card from "./Card";
import ServiceData from "./ServiceData";

function Service() {
    return (
        <div>
            <h2 className="text-center mt-4">Service</h2>
            <hr className="w-50 mx-auto" id="hr" />
            <div className="card-container">
                {ServiceData.map((val,index) => {
                    return (<Card
                        imgsrc={val.imgsrc}
                        sometext={val.sometext}
                        title={val.title}
                        btnname={val.btnname}
                        key={index}
                    />)
                })
                }
                
            </div>
            
        </div>
    )
}

export default Service;
