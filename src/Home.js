import React from 'react';
import {ThemeProvider } from '@mui/material/styles';
import { Box, Button, Container, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import MainImage from './img/vet-and-dog.jpg';
import Image from 'mui-image';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardImage1 from './img/animals.jpg';
import CardImage2 from './img/cow-cat.jpg';
import CardImage3 from './img/kittens2.jpg';
import AboutImage from './img/pig.webp';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import {
	Link as RouterLink,
	LinkProps as RouterLinkProps,
	 MemoryRouter,
} from 'react-router-dom';
import Logo from './img/logo.png';



function Home(){
	const aboutRef = React.useRef();
	const onClick = () => {
		aboutRef.current.scrollIntoView();
	}

	return(
		<>	
			<Container disableGutters maxWidth={false} sx = {{ boxShadow: 5, display: {sm:'block', md:'flex'},width: '100%', height:'450px', m:0,p:0, maxWidth:'false'}}>
				<Box
					component= 'img'
					sx={{
						display:'flex',
						overflow: 'hidden',
						height: '100%',
						width: '100%',
						objectFit: 'cover',
						flexGrow:1
						}}
					src={MainImage}
				/>
				<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems:'center',
							width: {sm:'100%',md:'60%'},
							height: {xs:'25vh',sm:'25vh', md:'100%'},
							// bgcolor: '#EFD886'
						}}>
					<Box component='img' sx={{height:{xs:150,sm:150}, my:{xs:2,sm:2,md:2}}} src={Logo} />
					<Typography variant='h5'>
						Come to Small Cottage
					</Typography>
					<Typography variant='h2'>
						for 
					</Typography>
					<Typography variant='h5'>
					All Your Animals' Needs
					</Typography>
					<br />
					<Typography variant='h4'>
						392 Dennytown Rd
					</Typography>
					<Typography variant='h4'>
					Putnam Valley, NY 10579
					</Typography>
					<br />
					<Typography variant='h4'>
						646-123-4567
					</Typography>
				</Box>
			</Container>
			<Container disableGutters 
				sx={{
					width:'100%',
					my:{xs:'400px', md:'50px'}, 
					display:'inline-flex', 
					flexDirection:{xs:'column', sm:'column', md:'row'}, 
					justifyContent:'space-around',
					alignItems:'center',
				}}>
				<Card 
					component={RouterLink} to="https://www.yelp.com/biz/peter-luger-brooklyn-2"
					sx={{width:300, 
					borderRadius:'50%',
					display:'flex',
					justifyContent:'center',
					alignItems:'center',
					my:'50px',
				}}>
					<Typography variant='h5' sx={{position:'absolute',}}>
						Read the Reviews
					</Typography>
					<CardMedia
						sx={{height:300,width:300,opacity:'30%'}}
						image={CardImage1}
					/>
				</Card>
				<Card
					component={RouterLink}
					onClick={onClick}
					sx={{
						width:300, 
						borderRadius:'50%',
						display:'flex',
						justifyContent:'center',
						alignItems:'center'
					}}>
					<Typography variant='h5' sx={{position:'absolute',}}>
						Meet the Staff
					</Typography>
					<CardMedia
						sx={{height:300,width:300,opacity:'30%'}}
						image={CardImage2}
					/>
				</Card>
				<Card 
					component={RouterLink} to="https://docs.google.com/forms/d/e/1FAIpQLSfEZvvbbmcLu1Eqevr50-H7afnAwtYnyUwpFuMjALpJ92dSug/viewform?usp=sf_link"
					sx={{
						width:300, 
						borderRadius:'50%',
						display:'flex',
						justifyContent:'center',
						alignItems:'center'
					}}>
					<Typography variant='h5' sx={{position:'absolute',}}>
						Make an Appointment
					</Typography>
					<CardMedia
						sx={{height:300,width:300,opacity:'30%'}}
						image={CardImage3}
					/>
				</Card>
			</Container>
			<Container disableGutters
				maxWidth={false}
				ref={aboutRef}
				sx={{
					width:'100%',
					height:{xs:'500px',sm:'450px'},
					backgroundColor:'#FFEBEE',
					display:'flex',
					alignItems:'center',
					justifyContent:'center',
				}}>
				<Box>
					<Box sx={{m:10, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',}}>
						<Box sx={{
							height:'300px',
							width:'450px',
						}}>
							<Box component='img' 
								sx={{
									display:'flex',
									overflow: 'hidden',
									height: '100%',
									width: '100%',
									objectFit: 'cover',
									flexGrow:1,
									borderRadius:'2%'
									}}
									src={AboutImage} />
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						width:{xs:'300px',sm:'400px', md:'550px', lg:'700px'}
					}}>
					<Typography variant='h6' align='left'>
						About us
					</Typography>
					<Typography variant='h3' align='left'>
						At the Animal Kingdom Veterinary Clinic, we believe that every pet deserves compassionate and comprehensive care. Our team of skilled veterinarians and staff are dedicated to providing personalized and high-quality care for all types of animals, from cats and dogs to exotic pets and farm animals. <br /><br />We offer a wide range of services, from preventative care and routine check-ups to specialized treatments and emergency services. Our state-of-the-art facility is equipped with the latest technology to ensure accurate diagnoses and effective treatments for all of our patients. Whether you're bringing in your beloved companion or a barnyard friend, we are committed to providing the best possible care to help them lead happy and healthy lives.
					</Typography>
				</Box>
			</Container>
			<Container disableGutters
				maxWidth={false}
				ref={aboutRef}
				sx={{
					width:'100%',
					height:'500px',
					backgroundColor:'#FFF3E0',
					display:'flex',
					flexDirection:'column'
					,justifyContent:'center'
					,alignItems:'center'
				}}>
				<Box 
					sx={{
						p:10,
					}}>
					<Typography variant = "h6">
					Meet our Staff
					</Typography>
				</Box>
				<Box>
					<Card>
						asd
					</Card>
				</Box>
			</Container>
		</>
	)
}

export default Home;