import logo from './img/logo.ico';
import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#000000',
    },
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#DF1B1B'
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Caveat',
      fontSize: "1.75rem",
      fontWeight: 900,
      fontStyle: 'Bold',
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: "1Rem",
      fontWeight:400,
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize:'1Rem',
      fontWeight:600,
    },
    h5: {
      fontFamily: 'Caveat',
      fontSize: "2rem",
      fontWeight: 900,
      fontStyle: 'Bold',
    },
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <title>Small Cottage Veterinary</title>
          <Header />
          <Routes>
            <Route path = "/" element = {<Home />}>
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}


export default App;
