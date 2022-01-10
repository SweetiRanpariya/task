import React from 'react'
import homeimg from '../img/home.png'

export default function Home() {
    return (
        <div className="container">
            <div className="my-5">
                <div className="card shadow-sm" style={{width:"500px"}} >
                <img src={homeimg} alt="" style={{width:"100%"}}  />
                <div className="card-body">
                    <h5 className="card-title">Hello</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis</p>
                    
                </div>
                </div>
            </div>
        </div>
    )
}
