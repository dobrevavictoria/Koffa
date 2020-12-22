import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Reduce from './Reduce/Reduce';
import Reuse from './Reuse/Reuse';
import Recycle from './Recycle/Recycle';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import HomePage from './HomePage';

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
      <TopBar />
      <Switch>
        <Route exact from="/" render={() => <HomePage />} />
        <Route exact path="/reduce" render={() => <Reduce />} />
        <Route exact path="/reuse" render={() => <Reuse />} />
        <Route exact path="/recycle" render={() => <Recycle />} />
      </Switch>
      <BottomBar />
    </ThemeProvider>
  )
}
