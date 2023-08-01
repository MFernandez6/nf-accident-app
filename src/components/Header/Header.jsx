import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/claimsaver.png'
import './header.css';

export const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mx-1">
            <div className='container'>
                <Link className='navbar-brand' to="/">
                    <img className='logo' src={logo}/>
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
