/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to="/"><img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png" alt="iiita logo" width="30"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#blogs">Blogs</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item dropdown mx-1">
                        <a className="nav-link dropdown-toggle btn btn-outline-success my-2 my-sm-0" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Login
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/studentlogin">Student</Link>
                            <Link className="dropdown-item" to="/emplogin">Faculty</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown mx-1">
                        <a className="nav-link dropdown-toggle btn btn-outline-success my-2 my-sm-0" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            SignUp
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/studentsignup">Student</Link>
                            <Link className="dropdown-item" to="/empsignup">Faculty</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar