import React, { useState, useEffect } from 'react'
import { Card, Button } from "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
const axios = require('axios').default;

// https://pokeapi.co/api/v2/pokemon/ditto
const App = () => {
    const s = {
        width: '18rem',
    }
    const [num, setnum] = useState()
    const [name, setname] = useState("")
    const [move, setmove] = useState("")
    const a = useEffect(() => {
        async function getdata(params) {
            const req = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(req);
            setname(req.data.name)
            let Movess = req.data.moves[0].move.name
            setmove(Movess)
        }
        return getdata();
    })
    return (
        <>
            <h1 className="text-danger text-center p-4">🐟We are going to learn the fetch Api 🗼 boom
                <span className="text-success">
                    {"  "} {num} <hr />
                </span>
            </h1>
            <div className="card" style={s}>
                <img src="https://th.bing.com/th/id/OIP.wyZPtpFKF7HQW2fFIRWB1wHaDt?w=330&h=175&c=7&o=5&dpr=1.12&pid=1.7" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-capitalize text-danger">{name}</h5>
                    <p className="card-text text-danger">{move}</p>
                    <select name="" id="" value={num} onChange={(event) => {
                        setnum(event.target.value);
                        return a;
                    }} className='btn-outline-dark'>
                        <option value="100" className='btn btn-dark text-center '>1</option>
                        <option value="35" className='btn btn-dark text-center '>5</option>
                        <option value="25" className='btn btn-dark text-center '>25</option>
                        <option value="80" className='btn btn-dark text-center '>8</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default App;
