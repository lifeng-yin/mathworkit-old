import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormField from '../../components/FormField/FormField';
import { useAuth } from '../../contexts/Auth';
import './Signup.css';

export const Signup = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

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
            <input id="email-input" type="email" ref={emailRef} required/>

            <label htmlFor="password">Password</label>
            <input id="password-input" type="password" ref={passwordRef} required/>

            <br />

            <button type="submit">Sign up</button>
        </FormField>

        <p>Already have an account?&nbsp; <Link to="/login">Log In</Link></p>
      </div>
    </main>
  );
};

export default Signup;