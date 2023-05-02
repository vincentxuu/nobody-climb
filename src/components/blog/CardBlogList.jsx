import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import BlogList from '../../constants/BlogList.json';
import img from '../../assets/photo/blog-mid-left.jpeg';

const CardWrapper = styled.div`
	padding: 12px;
	background-color: #f5f5f5 !important;
	display: flex;
`;

export default function ActionAreaCard() {
	return (
		<CardWrapper>
			{BlogList.map((item) => (
				<Card
					key={item.title}
					sx={{ margin: '10px' }}
					// sx={{
					//   display: "flex",
					//   margin: "2%",
					//   padding: "2%",
					//   " @media (max-width: 767px)": {
					//     display: "flex",
					//     flexDirection: "column",
					//   },
					// }}
				>
					<Link to={`/blog/${item.id}`} style={{ textDecoration: 'none' }}>
						<CardActionArea
							sx={{
								padding: '5%',
							}}
						>
							<CardMedia component='img' height='140' image={img} alt='green iguana' />
							<CardContent>
								<Typography gutterBottom variant='h5' component='div' color='#000' fontSize='14px'>
									{item.title}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									{item.summary}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Link>
				</Card>
			))}
		</CardWrapper>
	);
}
