import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
    <Link to="/homepage" className='logo'>Logo</Link>
    <Link to="/homepage">Home</Link>
    <Link to="/taskpage">Task</Link>
    <Link to="/userpage">User</Link>
  </div>
    )
}

export default Navbar