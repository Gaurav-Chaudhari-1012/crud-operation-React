//  import axios from 'axios'
import { Link } from 'react-router-dom'
import axios from '../axios'
import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import toast from 'react-hot-toast';

const Users = () => {
  let [usersInfo , setUserInfo] = useState([])

  function getData(){
    axios.get("/users")
    .then((response)=>{
      console.log(response.data);
      setUserInfo(response.data)
    })
  }

  useEffect(()=>{
    getData()
  },[])

  let handleDelete = (id) => {
    axios.delete(`/users/${id}`)
    .then(()=>{
      getData()
    })
    toast.success("users has been deleted")
  }
     
  useEffect(()=>{
      axios.get("/users") 
      .then((response)=>{
            console.log(response.data);
            setUserInfo(response.data)
      })

  },[])  
 
  
  return (
    <section className='userBlock'>
        <article className='container'>
          <h1>Users</h1>

          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>LastName</th>
                <th>Age</th>
                <th>City</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {usersInfo.map((user)=>{
                return <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td><Link to={`/editusers/${user.id}`}><MdOutlineEdit /></Link> </td>
                  <td><div onClick={() => handleDelete(user.id)}><MdDeleteOutline /></div></td>
                </tr>
              })}
            </tbody>
          </table>
        </article>
    </section>
  )
}

export default Users