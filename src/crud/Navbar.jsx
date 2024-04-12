import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navigator = useNavigate()
  let token = localStorage.getItem("TOKEN")
  console.log(token);

  let handleLogout = () => {
    localStorage.removeItem("TOKEN")
    navigator("/login")
  }
  return (
    <nav>
      <div className='navbar'>
        <div>
            <span className='crud'>Crud </span>
            <span className='operation'>Operation</span>
        </div>

        {
          token ? (
            <button onClick={handleLogout}>Logout</button>
          ) : <div className='regilogin'>
          <Link to='./register'>Register</Link>
          <Link to='./login'>Login</Link>
        </div>
        }
        </div>
    </nav>
  )
}

export default Navbar