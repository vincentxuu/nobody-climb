import React, { useEffect, useRef, useState } from 'react';
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
import ImageSlider from '../../components/blog/ImageSlider';
import { useLocation } from 'react-router-dom';
import firebase from '../../utilis/firebase';

const BlogWapper = styled.div`
	background: #f5f5f5;
`;

const containerStyles = {
	maxWidth: '1120px',
	height: '460px',
	margin: '64px auto 0 auto',
};

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
				<Box sx={containerStyles}>
					<ImageSlider />
				</Box>
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
