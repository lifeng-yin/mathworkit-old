import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createStyles, Paper, Title, Text, TextInput, PasswordInput, Button, Anchor } from '@mantine/core'
import { useForm, isEmail } from '@mantine/form';
import { useAuth } from '../../contexts/Auth';

export const Signup = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: {
      email: isEmail("Invalid email")
    }
  })
  

  const handleSubmit = async () => {
    const { error } = await signUp({ email: form.values.email, password: form.values.password })
    
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

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput 
            className={classes.input}
            size="md"
            label="Email"
            placeholder="Enter your email"
            required
            {...form.getInputProps("email")} 
          />
          <PasswordInput 
            className={classes.input}
            size="md"
            label="Password"
            placeholder="Create a password"
            required
            {...form.getInputProps("password")}
          />
          <Button className={classes.button} type="submit" fullWidth size="lg">Sign Up</Button>
        </form>
        <Text color="dimmed">Already have an account?&nbsp; <Anchor component={Link} to="/login">Log in instead</Anchor></Text>
      </Paper>
  );
};

export default Signup;