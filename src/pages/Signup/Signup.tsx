import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';
import './Signup.css';

export const Signup = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await signUp({ email, password })
    
    if (error) {
      alert('Error signing up.')
    }
    else {
      navigate('/', { replace: true });
    }
  };

  return (
    <main>
      <div className="signup">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email-input">Email</label>
            <input id="email-input" type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" required/>

            <label htmlFor="password">Password</label>
            <input id="password-input" type="password" value={password} onChange={handlePasswordChange} placeholder="Create a password" required/>

            <br />

            <button type="submit" disabled={!email || !password}>Sign up</button>
        </form>

        <p>Already have an account?&nbsp; <Link to="/login">Log In</Link></p>
      </div>
    </main>
  );
};

export default Signup;