import React, { useState } from 'react';
import { withRouter } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: "2rem"
  },
  submitContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingTop: "2rem"
  },
  link: {
    margin: "1rem 0 0"
  }
}));

function Register(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const inputEmail = event => {
    setEmail(event.target.value);
  };

  const inputPassword = event => {
    setPassword(event.target.value);
  };

  const inputConfirmPassword = event => {
    setConfirmPassword(event.target.value);
  };

  const register = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          alert("You have registered successfully to Koffa!");
          props.onRegister();
        } else if (res.status === 409) {
          alert("This email has been already registered.");
        } else {
          throw new Error(res.error);
        }
      })
      .catch(err => {
        console.error(err);
        alert('Something went wrong on our side. Please try again.');
        reset();
      });
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <header className={classes.header}>
        <Typography variant="h2">Koffa</Typography>
        <Typography variant="h5" color="textSecondary">Register</Typography>
      </header>
      <TextField margin="normal" fullWidth type="Email" label="Email" value={email} onChange={inputEmail} />
      <TextField margin="normal" fullWidth type="Password" label="Password" value={password} onChange={inputPassword} />
      <TextField margin="normal" fullWidth type="Password" label="Confirm Password" value={confirmPassword} onChange={inputConfirmPassword} />
      <div className={classes.submitContainer}>
        <Button variant="contained" color="secondary" type="Submit" onClick={register}>Register</Button>
      </div>
    </>
  )
};

export default withRouter(Register);