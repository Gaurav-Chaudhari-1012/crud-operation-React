import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigator = useNavigate();
    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
        prof_pic: ""
    });

    const { email, password, prof_pic } = registerData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation check
        if (!email || !password || !prof_pic) {
            toast.error('Please fill in all fields');
            return;
        }

        const payload = { email, password, prof_pic };
        try {
            await axios.post("http://localhost:5000/registeruser", payload);
            navigator("/login");
            toast.success("Successfully Registered");
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('Something went wrong');
        }
    };

    return (
        <main className="register-container"> 
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="register-form"> 
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name='password'
                        value={password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Profile Pic</label>
                    <input
                        type="text"
                        name='prof_pic'
                        value={prof_pic}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <button type="submit">Register</button>
                </div>
            </form>
        </main>
    );
};

export default Register;
