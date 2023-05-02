import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navigation from '../../shared/components/nav/Navigation';
import Footer from '../../shared/components/Footer';
import PhotoAlbumList from '../../components/photo-album/PhotoAlbumList';
import { motion } from 'framer-motion';

const PhotoWapper = styled.div`
	background: #f5f5f5;

	h1 {
		font-family: 'Noto Sans TC';
		font-style: normal;
		font-weight: 500;
		font-size: 40px;
		line-height: 150%;
		color: #1b1a1a;
		padding: 40px 0px 8px 0px;
		@media (max-width: 767px) {
			margin-left: 15px;
		}
	}
	p {
		font-family: 'Noto Sans CJK TC';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
		color: #6d6c6c;
		padding-bottom: 24px;
		@media (max-width: 767px) {
			margin-left: 15px;
		}
		ul {
			column-count: unset;
		}
	}
`;

function Photo() {
	return (
		<motion.div
			initial={{ opacity: 0, x: -200, y: 0 }}
			animate={{ opacity: 1, x: 0, y: 0 }}
			exit={{ opacity: 0, x: window.innerWidth }}
			transition={{ duration: 0.5, type: 'linear' }}
		>
			<PhotoWapper>
				<Navigation />
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						padding: '5%',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Typography variant='h1'>攝影集</Typography>
						<Typography variant='body1'>欣賞小人物們攀岩的英姿</Typography>
						<PhotoAlbumList />
					</Box>
				</Box>
				<Footer />
			</PhotoWapper>
		</motion.div>
	);
}
export default Photo;
