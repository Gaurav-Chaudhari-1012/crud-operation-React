import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from '../crud/Navbar'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Toaster/>
    <main className='sidebar'>
      <div className="layout">
        <ul>
          <li>
            <NavLink to='/createusers' style={({isActive})=>{
              return {
                color : isActive? "#ff6f3c" : "",
                backgroundColor: isActive? "#27296d" : ""
              }
            }}>Create Users </NavLink>
            
          </li>
          
          <li>
          <NavLink to='/datausers' style={({isActive})=>{
            return {
              color : isActive? "#ff6f3c" : "",
              backgroundColor: isActive? "#27296d" : ""
            }
          }}>Users </NavLink>
          </li>

          <li>
          <NavLink to='/allusers' style={({isActive})=>{
            return {
              color : isActive? "#ff6f3c" : "",
              backgroundColor: isActive? "#27296d" : ""
            }
          }}>All Users </NavLink>
          </li>


          <li>
          <NavLink to='/profile' style={({isActive})=>{
            return {
              color : isActive? "#ff6f3c" : "",
              backgroundColor: isActive? "#27296d" : ""
            }
          }}>Profile </NavLink>
          </li>
          
        </ul>
      </div>
      <Outlet/>
    </main>
    </>
  )
}

export default Layout