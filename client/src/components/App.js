import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Reduce from './Reduce/Reduce';
import Reuse from './Reuse/Reuse';
import Recycle from './Recycle/Recycle';
import HomePage from './HomePage';
import { PrivateRoute } from './Auth/PrivateRoute';
import Container from './Auth/Container';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#80e27e',
      main: '#4caf50',
      dark: '#087f23',
      contrastText: '#fff',
    },
    secondary: {
      light: '#60ad5e',
      main: '#2e7d32',
      dark: '#005005',
      contrastText: '#fff',
    },
  },
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/login" component={Container} />

        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/reduce" component={Reduce} />
        <PrivateRoute exact path="/reuse" component={Reuse} />
        <PrivateRoute exact path="/recycle" component={Recycle} />
      </Switch>
    </ThemeProvider>
  )
}
