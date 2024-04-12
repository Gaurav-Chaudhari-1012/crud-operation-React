import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = loginData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please enter email and password');
            return;
        }
        try {
            const { data } = await axios.get('http://localhost:5000/registeruser');
            const filteredData = data.filter((emp) => {
                return emp.email === email && emp.password === password;
            });
            if (filteredData.length > 0) {
                const token = uuidv4(); // Generate a token upon successful login
                localStorage.setItem('TOKEN', token);
                navigate('/datausers');
                toast.success('Successfully logged in');
            } else {
                navigate('/register');
                toast.error('Invalid credentials');
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('Something went wrong');
        }
    };

    return (
        <main className="login-container"> {/* Add the login-container class here */}
            <div className="login-form"> {/* Add the login-form class here */}
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Login;
