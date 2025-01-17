import React from 'react'
import '../Css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link className='link' to="/"><h1>MovieX</h1></Link>
            <div className='navbar-right'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/favorie">Topics</Link>
            </div>
        </div>
    )
}

export default Navbar
