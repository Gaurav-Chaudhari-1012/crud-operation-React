import axios from '../axios'
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useState } from "react";


const EditUsers = () => {
  let navigator = useNavigate()
  let {id} = useParams()
  let [state, setState] = useState({
    firstName: "",
    lastName: "",
    age: "",
    city: "",
  });

  let { firstName, lastName, age, city} = state;

  let handleChange = (e) => {
    let {name, value} = e.target;
    setState({...state, [name]: value}); 
  };

  useEffect(()=>{
    axios.get(`/users/${id}`).then((response)=>{
      console.log(response.data);
      setState({
        ...state,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        age: response.data.age,
        city: response.data.city
      })
    })
  },[])

  let handleSubmit = (e) => {
    e.preventDefault();
    let Payload = {firstName,lastName,age,city}
    axios.put(`/users/${id}`, Payload)
    .then(()=>{
      console.log("Data is updated");
    })
    navigator("/datausers")
    toast.success("Data has been updated")
  }
  return (
    <main className="content">
      <section className="innerContent">
        <h1>Edit User</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>FirstName</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>LastName</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              name="age"
              placeholder="Enter age"
              value={age}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              value={city}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button>Edit User</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default EditUsers;
