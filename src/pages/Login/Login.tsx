import { Container, Paper, PasswordInput, TextInput, Title, Button, Text, createStyles, Anchor } from '@mantine/core';
import React, { useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';

export const Login = () => {
  const { signInWithPassword } = useAuth();
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

    const { error } = await signInWithPassword({ email, password })
    
    if (error) {
      alert('Error logging in: ' + error);
    }
    else {
      navigate('/', { replace: true });
    }
  };

  const useStyles = createStyles((theme) => ({
    title: {
      marginBottom: theme.spacing.lg
    },
    input: {
      marginBottom: theme.spacing.md
    },
    button: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.lg
    }
  }))

  const { classes } = useStyles()

  return (
      <Paper withBorder shadow="md" radius="md" p={30} sx={{ width: "max(40%, 400px)", margin: "5% auto"}}>
        <Title className={classes.title}>Log In</Title>

        <form onSubmit={handleSubmit}>
          <TextInput className={classes.input} size="md" label="Email" placeholder="Enter your email" required />
          <PasswordInput className={classes.input} size="md" label="Password" placeholder="Your secret password" required />
          <Button className={classes.button} type="submit" fullWidth size="lg">Log In</Button>
        </form>

        <Text color="dimmed">Don&apos;t have an account?&nbsp; <Anchor component={Link} to="/signup">Sign Up</Anchor></Text>
      </Paper>
  );
};

export default Login;