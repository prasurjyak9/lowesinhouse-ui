import {Link} from "react-router-dom";
import "./Navbar.css"
import React from 'react';
export default function Navbar(){

    return (

        <div className='outer-nav'data-testid="navbar-test">

            <Link to = "/"  className='LandingPage' >

            <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lowes_Companies_Logo.svg/1200px-Lowes_Companies_Logo.svg.png" className="loweslogo" alt="Lowes" id="logo"></img> 

            </Link>

            <h1 className='inhouse'><b>In House</b></h1>

        </div>

    )

};
