import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CoverPhoto from '../../assets/photo/cover-photo.jpeg';
import Search from '../../components/search/Search';
import Footer from '../../shared/components/Footer';
import Navigation from '../../shared/components/nav/Navigation';
import { motion } from 'framer-motion';
import { Box, Stack } from '@mui/material';
import BioCard from '../../components/biography/BioCard';

const PersonWrapper = styled.div`
	background: #f5f5f5;
	@media (max-width: 767px) {
		width: 100%;
		img {
			max-width: 100%;
			height: auto;
		}
	}
`;
const Cover = styled.div`
	background-image: url(${CoverPhoto});
	background-color: rgba(0, 0, 0, 0.3);
	background-blend-mode: multiply;
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
	color: #ffff;
	height: 520px;
	position: relative;
	h1 {
		font-family: 'Noto Sans TC';
		font-style: normal;
		font-weight: 500;
		font-size: 40px;
		line-height: 150%;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		position: absolute;
		top: 70%;
		left: 8%;
	}
	p {
		font-family: 'Noto Sans TC';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		position: absolute;
		top: 82%;
		left: 8%;
	}
`;
const StyleButton = styled.div`
	text-align: center;
	button {
		margin-top: 40px;
		margin-bottom: 64px;
		border: 1px solid #1b1a1a;
		color: #1b1a1a;
		&:hover {
			background-color: #dbd8d8;
			color: #1b1a1a;
			border: #1b1a1a;
			border: 1px solid #1b1a1a;
		}
	}
`;

function Person() {
	return (
		<motion.div
			initial={{ opacity: 0, x: -200, y: 0 }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			exit={{ opacity: 0, x: window.innerWidth }}
			transition={{ duration: 0.5, type: 'linear' }}
		>
			<PersonWrapper>
				<Navigation />
				<Cover>
					<Typography variant='h1'>人物誌</Typography>
					<Typography variant='body1'>記載了 Nobody 們的攀岩小故事</Typography>
				</Cover>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						padding: '5%',
						' @media (max-width: 767px)': {
							paddingTop: '10%',
						},
					}}
				>
					<Box sx={{ m: 2 }}>
						<Search />
					</Box>
					<BioCard />
				</Box>
				<StyleButton>
					<Button variant='outlined' size='large'>
						看更多
					</Button>
				</StyleButton>
				<Footer />
			</PersonWrapper>
		</motion.div>
	);
}
export default Person;
