import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {ThemeProvider } from '@mui/material/styles';
import { Box, Button, Container, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Logo from './img/logo.png';
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
	 MemoryRouter,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import PropTypes from 'prop-types';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};

function Header(){
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
}

	return(
		<>
			<AppBar position="static" height="64px">
				<Toolbar>
					<Box
						component ='img'
						sx={{
							height:50,
							display: {xs: 'flex'},
							mr:2,
						}}
						src={Logo}
					/>
					<Box sx={{
						display:{ xs:'inline-flex', md: 'none'},
						height: '64px',
						flexGrow:1,
					}}/>
					<Box 
						sx={{
							display:{ xs:'none', md: 'inline-flex'},
							flexGrow:1,
						}}>
						<Typography variant='h2'>
							SMALL COTTAGE VETERINARY
						</Typography>
					</Box>
					<Box>
						<Button component={RouterLink} to="/" color="neutral" sx={{flexGrow : 0, mr:2,   display:{xs:'none', sm:'inline-flex'}}}>
							<Typography variant="h3">
								Home
							</Typography>
						</Button>
						<Button onClick={handleScroll} color="neutral" sx={{flexGrow : 0, mr:2,  display:{xs:'none', sm:'inline-flex'}}}>
							<Typography variant="h3">
								About
							</Typography>
						</Button>
						<Button component={RouterLink} to="https://www.yelp.com/biz/peter-luger-brooklyn-2" color="neutral" sx={{flexGrow : 0, mr:2, display:{xs:'none', sm:'inline-flex'}}}>
							<Typography variant="h3">
								Reviews
							</Typography>
						</Button>
						<Button variant="contained" disableElevation component={RouterLink} to="https://docs.google.com/forms/d/e/1FAIpQLSfEZvvbbmcLu1Eqevr50-H7afnAwtYnyUwpFuMjALpJ92dSug/viewform?usp=sf_link" color="secondary" sx={{flexGrow : 0, mr:2, display:{xs:'inline-flex', sm:'inline-flex'}}}>
							<Typography variant="h3">
								Make Appointment
							</Typography>
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	)
}

export default Header;