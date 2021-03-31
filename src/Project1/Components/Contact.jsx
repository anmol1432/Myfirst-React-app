import React, { useState } from 'react'


function Contact() {
    const [fullName, setfullName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Message, setMessage] = useState("")
    let Submit = (event) => {
        event.preventDefault();
        alert(`hii ${fullName} nice to meet u your Email is ${Email} and PhoneNumber  is ${Phone} and message is ${Message} sent`)
    }
    let InputEvent = (event) => {
        if (event.target.name == "FullName"){
            setfullName(event.target.value)
        }
        if (event.target.name == "email"){
            setEmail(event.target.value)
        }
        if (event.target.name == "Phone"){
            setPhone(event.target.value)
        }
        if (event.target.name == "Message"){
            setMessage(event.target.value)
        }
        
    }
    return (
        <div>
            <h2 className="text-center mt-4">Contact</h2>
            <hr className="w-50 mx-auto" id="hr" />
            <div className="contactbox d-block m-auto">
                <form action="" onSubmit={Submit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control"
                            id="exampleFormControlInput1"
                            name="FullName"
                            value={fullName}
                            onChange={InputEvent}
                            placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control"
                            id="exampleFormControlInput1"
                            name="email"
                            value={Email}
                            onChange={InputEvent}
                            placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 ">
                        <label for="exampleFormControlTextarea1" className="form-label">Phone Number</label>
                        <input className="form-control" id="exampleFormControlTextarea1" rows="3" type="number"
                            name="Phone"
                            value={Phone}
                            onChange={InputEvent}
                            placeholder="Phone Number" />
                    </div>
                    <div className="mb-3 ">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            type="text"
                            name="Message"
                            value={Message}
                            onChange={InputEvent}
                        />
                    </div>
                    <button className="text-capitalize btn btn-outline-primary px-4" type="submit" onSubmit={Submit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
