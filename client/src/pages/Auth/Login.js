import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/AuthStyles.css'
import { useAuth } from '../../context/auth';




 // Form function
 

const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
                email,
                password,
            });
    
            if (res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token,
                })
                localStorage.setItem('auth',JSON.stringify(res.data))
                navigate(location.state||'/'); // Navigate to login page
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

  return (
    <Layout title={'Login - BuyHive'}>
        <div className="form-container">
                
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>LOGIN FORM</h4>
                    
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter Password"
                            required
                        />
                    </div>

                    <div className="mb-3">

                    <button type="submit" className="btn btn-primary" onClick={() => {navigate('/forgot-password')}}>
                       Forgot Password
                    </button>
                    </div>
                    
    
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
    </Layout>
  )
}

export default Login