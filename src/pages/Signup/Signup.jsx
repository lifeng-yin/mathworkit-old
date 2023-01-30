import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from '../../components/FormField/FormField';
import { useAuth } from '../../contexts/Auth';
import './Signup.css';

export const Signup = () => {
  const { signUp } = useAuth();
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
        <FormField onSubmit={handleSubmit}>
            <label htmlFor="email-input">Email</label>
            <input id="email-input" type="email" value={email} onChange={handleEmailChange} required/>

            <label htmlFor="password">Password</label>
            <input id="password-input" type="password" value={password} onChange={handlePasswordChange} required/>

            <br />

            <button type="submit" disabled={!email || !password}>Sign up</button>
        </FormField>

        <p>Already have an account?&nbsp; <Link to="/login">Log In</Link></p>
      </div>
    </main>
  );
};

export default Signup;