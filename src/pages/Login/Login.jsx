import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth'

export const Login = () => {
  const { signIn } = useAuth()

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async e => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const { error } = await signIn({ email, password })
    
    if (error) {
      alert('Error logging in.')
    }
    else {
      navigate('/', { replace: true });
    }
  };

  return (
    <main>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={emailRef} />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" ref={passwordRef} />

            <button type="submit">Log In</button>
        </form>

        <p>Don&apos;t have an account? <Link to="/signup">Sign Up</Link></p>
    </main>
  );
};

export default Login;