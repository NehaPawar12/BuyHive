import React, { useState } from 'react';
import Layout from './../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import '../../styles/AuthStyles.css'


const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [question, setQuestion] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/forgot-password", {
                email,
                newpassword,
                question
            });
    
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate('/login'); // Navigate to login page
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

  return (
    <Layout title={'Forgot Password - BuyHive'}>
<div className="form-container">
                
                <form onSubmit={handleSubmit}>
                    <h4 className='title'>Reset Password</h4>
                    
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
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="form-control"
                            placeholder="Enter your Favorite sports"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={newpassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter Password"
                            required
                        />
                    </div>    
    
                    <button type="submit" className="btn btn-primary">
                        RESET
                    </button>
                </form>
            </div>
    </Layout>
  )
}

export default ForgotPassword