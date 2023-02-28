import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createStyles, Paper, Title, Text, TextInput, PasswordInput, Button, Anchor } from '@mantine/core'
import { useAuth } from '../../contexts/Auth';

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
        <Title className={classes.title}>Sign Up</Title>

        <TextInput className={classes.input} size="md" label="Email" placeholder="Enter your email" required />
        <PasswordInput className={classes.input} size="md" label="Password" placeholder="Your secret password" required />
        <Button className={classes.button} fullWidth size="lg">Sign Up</Button>

        <Text color="dimmed">Already have an account?&nbsp; <Anchor component={Link} to="/login">Log in instead</Anchor></Text>
      </Paper>
  );
};

export default Signup;