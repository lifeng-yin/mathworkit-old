import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';

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
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email-input">Email</label>
            <input id="email-input" type="email" ref={emailRef} />

            <label htmlFor="password">Password</label>
            <input id="password-input" type="password" ref={passwordRef} />

            <br />

            <button type="submit">Sign up</button>
        </form>

        <p>Already have an account? <Link to="/login">Log In</Link></p>
    </main>
  );
};

export default Signup;