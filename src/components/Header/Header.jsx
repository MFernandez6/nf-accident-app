import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/claimsaver.png';
import './header.css';
import {navigate, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

// functions
import { logout } from "../../api/user";

export const Header = () => {

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        logout().then((res) => {
            toast.success(res.message);
            navigate.push("/login");
        })
        .catch((err) => console.error(err));
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mx-1">
                <div className='container'>
                    <Link className='navbar-brand' to="/welcome">
                        <img className='logo' src={logo} alt="logo"/>
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav ms-auto'>
                            <li className="nav-item active">
                                <Link className='nav-link' to="/signup">
                                    Sign Up
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/login">
                                    Login
                                </Link>
                            </li>
                            <li class="nav-item">
                                <span 
                                    className="nav-link"
                                    styles={{ cursor: "pointer" }}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </span>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/attorney-network">
                                    Attorney Network
                                </Link>
                            </li>
                        </ul>
                    </div>`
                </div>
            </nav>
        </div>
    )
}
