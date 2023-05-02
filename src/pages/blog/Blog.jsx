import React, { useState } from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Navigation from '../../shared/components/nav/Navigation';
import Footer from '../../shared/components/Footer';
import Search from '../../components/search/Search';
import { motion } from 'framer-motion';
import CoverPhoto from '../../assets/photo/cover-photo.jpeg';
import { Typography } from '@mui/material';
import BlogList from '../../constants/BlogList.json';
import Posts from '../../components/blog/Posts';

const BlogWapper = styled.div`
	background: #f5f5f5;
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

function Blog() {
	return (
		<motion.div
			initial={{ opacity: 0, x: -200, y: 0 }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			exit={{ opacity: 0, x: window.innerWidth }}
			transition={{ duration: 0.5, type: 'linear' }}
		>
			<BlogWapper>
				<Navigation />
				<Cover>
					<Typography variant='h1'>{BlogList[0].title}</Typography>
					<Typography variant='body1'>{BlogList[0].type}</Typography>
				</Cover>

				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						padding: '3% 15%',
						' @media (max-width: 767px)': {
							padding: '3% 10%',
						},
					}}
				>
					<Box sx={{ m: 2 }}>
						<Search />
					</Box>
					<Posts />
				</Box>
				<Footer />
			</BlogWapper>
		</motion.div>
	);
}
export default Blog;
