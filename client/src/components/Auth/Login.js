import React, { useState } from 'react';
import { withRouter } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
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

function Login(props) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputEmail = event => {
    setEmail(event.target.value);
  };

  const inputPassword = event => {
    setPassword(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();

    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          const state = props.location.state;
          props.history.push((state && state.referrer) || '/');
        } else if (res.status === 401) {
          alert('The email or password don\'t seem to match any of our records. Try again.');
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
  };

  return (
    <>
      <header className={classes.header}>
        <Typography variant="h2">Koffa</Typography>
        <Typography variant="h5" color="textSecondary">Login</Typography>
      </header>
      <TextField margin="normal" fullWidth type="Email" label="Email" value={email} onChange={inputEmail} />
      <TextField margin="normal" fullWidth type="Password" label="Password" value={password} onChange={inputPassword} />
      <div className={classes.submitContainer}>
        <Button variant="contained" color="secondary" type="Submit" onClick={login}>Login</Button>
        <Link onClick={props.onRegister} className={classes.link}>Join Koffa</Link>
      </div>
    </>
  )
};

export default withRouter(Login);