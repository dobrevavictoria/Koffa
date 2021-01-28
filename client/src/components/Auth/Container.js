import React, { useState } from 'react';
import { withRouter } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Register from './Register';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage: `linear-gradient(180deg, #fff 0%, ${theme.palette.primary.dark} 150%)`,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    boxSizing: "border-box",
    background: "white",
    width: "90%",
    maxWidth: "32rem",
    padding: "2.5rem",
    borderRadius: "0.5rem",
    display: "grid"
  }
}));

function Container() {
  const classes = useStyles();

  const [register, setRegister] = useState(false);

  return (
    <main className={classes.main}>
      <form className={classes.container}>
        {register ?
          <Register onRegister={() => setRegister(false)} /> :
          <Login onRegister={() => setRegister(true)} />
        }
      </form>
    </main>
  )
};

export default withRouter(Container);