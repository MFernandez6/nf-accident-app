import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-1">
            <Link className='navbar-brand' to="/">
                No-Fault Appcident
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
                </ul>
            </div>
        </nav>
    </div>
  )
}
