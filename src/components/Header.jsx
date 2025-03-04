import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container'>
               
            <Link to="/" className='navbar-brand'>Movies Management</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
            <li className='nav-item'>
                <Link className='nav-link' to="/">Movies</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to="/addMovie">Add Movie</Link>
            </li>
           
        </ul>
    </div>
            </div>
        </nav>
    </>
  )
}