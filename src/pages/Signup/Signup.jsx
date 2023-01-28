import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    
  };

  return (
    <main>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={emailRef} />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" ref={passwordRef} />

            <br />

            <button type="submit">Sign up</button>
        </form>

        <p>Already have an account? <Link to="/login">Log In</Link></p>
    </main>
  );
};

export default Signup;