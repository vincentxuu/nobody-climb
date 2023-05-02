import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BiographyList from '../../constants/BiographyList.json';
import PersonLeft from '../../assets/photo/personleft.jpeg';
import { ReactComponent as ArrowRightCircle } from '../../assets/icon/arrow-right-circled.svg';

const BioCard = () => {
	return (
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
			{BiographyList.map((item) => (
				<Grid item xs={4} sm={4} md={4} key={item.name}>
					<Link to='/biography/content' style={{ textDecoration: 'none' }}>
						<Card sx={{ m: 2 }}>
							<CardMedia sx={{ height: 248 }} image={PersonLeft} title='green iguana' />
							<CardContent sx={{ width: 360, height: 150, pdding: '5px' }}>
								<Box>
									<Typography gutterBottom variant='h2' component='div' sx={{ fontSize: '26px' }}>
										{item.name}
									</Typography>
									<Typography variant='subtitle1' color='#8E8C8C'>
										攀岩年資 | 3年
									</Typography>
								</Box>
								<Typography variant='body1' color='#1B1A1A'>
									攀岩對你來說，是什麼樣的存在
								</Typography>
								<Typography variant='body2' color='#1B1A1A'>
									{item.why}
								</Typography>
							</CardContent>
						</Card>
					</Link>
				</Grid>
			))}
		</Grid>
	);
};

export default BioCard;
