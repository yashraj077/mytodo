import logo from './../logo.svg';
import React from 'react'

export default function About() {
    let aboutcss = {
        width: "18rem"
    }
    return (
        <div className="d-flex justify-content-center mt-5 mb-5 pt-5 pb-5">
            <div className="card" style={aboutcss}>
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">About Todos App</h5>
                    <p className="card-text text-center">This todos app is made using React js. It uses Bootstrap. It uses localstorage for storing todos. </p>
                </div>
            </div>
        </div>
    )
}
