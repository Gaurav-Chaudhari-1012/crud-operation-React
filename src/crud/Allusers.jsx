import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from '../axios'
import DisplayUsers from './DisplayUsers'

const Allusers = () => {

    let [state,setState] = useState(null)
    let [searchTerm, setSearchTerm] = useState("")

    let handleSearch = (term)=>{
        setSearchTerm(term)
    }

    let fetchUsers = async()=>{
        // let responce = await axios.get("/users")
        // console.log(responce.data);
        // let {data} = response;

        let {data} = await axios.get("/users")
        console.log(data);
        setState(data)
    }

    let filteredUsers = state?.filter(value=>{
        if(searchTerm==""){
            return value;
        } else if (value.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
            return value
        }
    }).map(users=> <DisplayUsers key={users.id} {...users}/>)

    useEffect(()=>{
        fetchUsers()
    },[])

  return (
    <main className="allusers">
        <h1>All Users</h1>
        <Search handleSearch={handleSearch}/>
        {
            state===null? "Loading...." : filteredUsers
        }
    </main>
  )
}

export default Allusers