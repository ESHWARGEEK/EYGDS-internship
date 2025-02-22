import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>QUICK</h2>
            </Link>
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="userAuth">
            <Link to='../components/Login.jsx' className='link'>
            <h3>Login</h3>
            </Link>
            <Link to='../components/Register.jsx' className='link'>
            <h3>Register</h3>
            </Link>
        </div>
   </section>
  )
}

export default TopBar