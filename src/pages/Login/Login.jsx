import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from '../../components/FormField/FormField';
import { useAuth } from '../../contexts/Auth';
import './Login.css';

export const Login = () => {
  const { signInWithPassword } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
    console.log(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const { error } = await signInWithPassword({ email, password })
    
    if (error) {
      alert('Error logging in: ' + error);
    }
    else {
      navigate('/', { replace: true });
    }
  };

  return (
    <main>
      <div className="login">
        <h1>Log In</h1>
        <FormField onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required/>

            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" required/>

            <button type="submit" disabled={!email || !password}>Log In</button>
        </FormField>

        <p>Don&apos;t have an account?&nbsp; <Link to="/signup">Sign Up</Link></p>
      </div>
    </main>
  );
};

export default Login;