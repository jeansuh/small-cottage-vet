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
import Staff1 from './img/staff1.png';
import Staff2 from './img/staff2.jpg';
import Staff3 from './img/staff3.jpg';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


function Home(){

	function handleScroll() {
	    window.scroll({
	      top: document.body.offsetHeight,
	      left: 0, 
	      behavior: 'smooth',
	    });
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
					mt:{xs:'400px', md:'100px'}, 
					mb:{xs:'100px',md:'50x'},
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
					onClick={handleScroll}
					sx={{
						width:300, 
						borderRadius:'50%',
						display:'flex',
						justifyContent:'center',
						alignItems:'center',
						my:'50px',
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
						alignItems:'center',
						my:'50px',
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
				sx={{
					width:'100%',
					height:{xs:'1050px',sm:'900px', md:'500px'},
					backgroundColor:'#FFEBEE',
					display:'flex',
					alignItems:'center',
					justifyContent:'center',
					flexDirection:{xs : 'column',sm:'column', md:'row'},
				}}>
				<Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
					<Box sx={{m:5, display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',}}>
						<Box sx={{
							height:'300px',
							width:{xs:'300px',sm:'450px'},
						}}>
							<Box component='img' 
								sx={{
									display:'flex',
									overflow: 'hidden',
									height: '100%',
									width:'100%',
									objectFit: 'cover',
									flexGrow:{xs:0,sm:0,md:1},
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
						At Small Cottage Veterinary, we believe that every pet deserves compassionate and comprehensive care. Our team of skilled veterinarians and staff are dedicated to providing personalized and high-quality care for all types of animals, from cats and dogs to exotic pets and farm animals. <br /><br />We offer a wide range of services, from preventative care and routine check-ups to specialized treatments and emergency services. Our state-of-the-art facility is equipped with the latest technology to ensure accurate diagnoses and effective treatments for all of our patients. Whether you're bringing in your beloved companion or a barnyard friend, we are committed to providing the best possible care to help them lead happy and healthy lives.
					</Typography>
				</Box>
			</Container>
			<Container disableGutters
				maxWidth={false}
				sx={{
					width:'100%',
					height:{sm:'2200px',md:'900px'},
					backgroundColor:'#FFF3E0',
					display:'flex',
					flexDirection:'column',
					justifyContent:'center',
					alignItems:'center',
					p:10
				}}>
				<Box 
					sx={{
						p:3,
					}}>
					<Typography variant = "h6">
					Meet our Staff
					</Typography>
				</Box>
				<Box 
					sx={{
						display:'flex',
						flexDirection:{xs:'column',sm:'column',md:'row'}
					}}>
					<Card sx={{
						height:'600px',
						width: '300px',
						m:2
					}}>
						<CardMedia sx={{
							height:'72%',
						}}
						image={Staff1}>
						</CardMedia>
						<CardContent align='left'>
							<Typography variant = "h2">
								Mateo, DVM
							</Typography>
							<Typography variant = "h3" sx={{my:1}}>
								Experience : 8 Years<br />
								Alma mater : UC Davis<br />
								Specialization : Household pets
							</Typography>
						</CardContent>
						<CardActions sx={{my:-2, mx:0}}>
							<Box sx={{flexGrow:1}} /><Button size="small" color='secondary' component={RouterLink} to="https://www.petfinder.com/dog/mateo-60524776/ny/new-york/love-of-all-dogs-pr38/">Link</Button>
						</CardActions>
					</Card>
					<Card sx={{
						height:'600px',
						width: '300px',
						m:2,
					}}>
						<CardMedia sx={{
							height:'72%',
						}}
						image={Staff2}>
						</CardMedia>
						<CardContent align='left'>
							<Typography variant = "h2">
								Winnifred, DVM
							</Typography>
							<Typography variant = "h3" sx={{my:1}}>
								Experience : 8 Years<br />
								Alma mater : University of London<br />
								Specialization : Reptiles and insects
							</Typography>
						</CardContent>
						<CardActions sx={{my:-2, mx:0}}>
							<Box sx={{flexGrow:1}} /><Button component={RouterLink} to="https://www.petfinder.com/dog/winnifred-61702966/ny/new-york/aspca-ny29/" size="small" color='secondary'>Link</Button>
						</CardActions>
					</Card>
					<Card sx={{
						height:'600px',
						width: '300px',
						m:2
					}}>
						<CardMedia sx={{
							height:'72%',
						}}
						image={Staff3}>
						</CardMedia>
						<CardContent align='left'>
							<Typography variant = "h2">
								Sani, DVM
							</Typography>
							<Typography variant = "h3" sx={{my:1}}>
								Experience : 2 Years<br />
								Alma mater : Cornell University Ithaca<br />
								Specialization : Farm Animals
							</Typography>
						</CardContent>
						<CardActions sx={{my:-2, mx:0}}>
							<Box sx={{flexGrow:1}} /><Button size="small" color='secondary' component={RouterLink} to="https://www.petfinder.com/dog/mateo-60524776/ny/new-york/love-of-all-dogs-pr38/">Link</Button>
						</CardActions>
					</Card>
				</Box>
			</Container>
		</>
	)
}

export default Home;