import React, {useState} from "react"
import { Link } from 'react-router-dom'
import About from "./About"

export default function Navbar() {
    return (
      
<div class="main">
    <>
        <nav className="navbar">
            <div className="top-nav">
                <Link to="/About.js" className="nav-links" onClick={About}>
                    About
                </Link>
                <Link to="/Quiz.js" className="nav-links" onClick={About}>
                    Quiz
                </Link>
                <Link to="/Calculator.js" className="nav-links" onClick={About}>
                    Carbon Footprint Calculator
                </Link>
                <Link to="/GetInvolved.js" className="nav-links" onClick={About}>
                    Get Involved
                </Link>
            </div>
        </nav>
    </>

</div>

    )
}