import React, { useState } from 'react'
import axios from '../axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const CreateUsers = () => {

       let navigator = useNavigate()
        let [state, setState] = useState({
           firstName: "",
           lastName:"",
           age:"",
           city:""
        }) 

        let {firstName, lastName, age, city} = state;

        let handleChange = (e)=>{
             let {name, value} = e.target;
             setState({...state, [name]:value})
        }

        let handleSubmit = (e)=>{
           e.preventDefault();
           let payload = {firstName,lastName,age,city}
           axios.post("/users", payload)
           .then(()=>{
            console.log("Data submitted");
           })
           navigator("/datausers")
            toast.success("User has been created")
        }


  return (
    <main className='content'>
       <section className='innerContent'>
        <h1>Create User</h1>

      <form onSubmit={handleSubmit}>
         <div className="form-group">
          <label >FirstName</label>
          <input type="text" name='firstName' placeholder='Enter firstName' value={firstName} onChange={handleChange}/>
         </div>

         <div className="form-group">
          <label >LastName</label>
          <input type="text" name='lastName' placeholder='Enter lastName'value={lastName} onChange={handleChange}/>
         </div>

         <div className="form-group">
          <label >Age</label>
          <input type="text" name='age' placeholder='Enter age' value={age} onChange={handleChange}/>
         </div>

         <div className="form-group">
          <label >City</label>
          <input type="text" name='city' placeholder='Enter city' value={city} onChange={handleChange}/>
         </div>

         <div className="form-group">
            <button>Create User</button>

         </div>
      </form>
       </section>
    </main>
  )
}

export default CreateUsers