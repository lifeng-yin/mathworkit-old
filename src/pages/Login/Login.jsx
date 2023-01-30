import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField/FormField';
import { useAuth } from '../../contexts/Auth';
import './Login.css';

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
      <div className="login">
        <h1>Log In</h1>
        <FormField onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={emailRef} required/>

            <label htmlFor="password">Password</label>
            <input id="password" type="password" ref={passwordRef} required/>

            <button type="submit">Log In</button>
        </FormField>

        <p>Don&apos;t have an account?&nbsp; <Link to="/signup">Sign Up</Link></p>
      </div>
    </main>
  );
};

export default Login;