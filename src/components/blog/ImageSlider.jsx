import styled from '@emotion/styled';
import { Chip, CircularProgress, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import firebase from '../../utilis/firebase';

const slideStyles = {
	width: '100%',
	height: '100%',
	borderRadius: '10px',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
};

const rightArrowStyles = {
	position: 'absolute',
	top: '50%',
	transform: 'translate(0, -50%)',
	right: '32px',
	fontSize: '45px',
	color: '#fff',
	zIndex: 1,
	cursor: 'pointer',
};

const leftArrowStyles = {
	position: 'absolute',
	top: '50%',
	transform: 'translate(0, -50%)',
	left: '32px',
	fontSize: '45px',
	color: '#fff',
	zIndex: 1,
	cursor: 'pointer',
};

const sliderStyles = {
	position: 'relative',
	height: '100%',
};

const dotsContainerStyles = {
	display: 'flex',
	justifyContent: 'center',
};

const dotStyle = {
	margin: '10px 3px',
	cursor: 'pointer',
	fontSize: '20px',
};

const dot = {
	cursor: 'pointer',
	height: '1rem',
	width: '1rem',
	margin: '0px 3px',
	borderRadius: '50%',
	display: 'inline-block',
};

const Dot = styled.div`
	cursor: pointer;
	height: 1rem;
	width: 1rem;
	margin: 0px 3px;
	background-color: ${(props) =>
		props.position ? 'rgba(75, 70, 70, 0.918)' : 'rgba(0, 0, 0, 0.149)'};
	border-radius: 50%;
	display: inline-block;
	&:hover {
		background-color: rgba(75, 70, 70, 0.918);
	}
`;

const ImageSlider = () => {
	const [posts, setPosts] = useState([]);
	const location = useLocation();
	const urlSearchParams = new URLSearchParams(location.search);
	const currentTopic = urlSearchParams.get('topic');
	const lastPodtSnapshotRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentTopic) {
			firebase
				.firestore()
				.collection('posts')
				.where('topic', '==', currentTopic)
				.orderBy('createdAt', 'desc')
				.get()
				.then((collectionSnapshot) => {
					const data = collectionSnapshot.docs.map((docSnapshot) => {
						const id = docSnapshot.id;
						return { ...docSnapshot.data(), id };
					});
					lastPodtSnapshotRef.current = collectionSnapshot.docs[collectionSnapshot.docs.length - 1];
					setPosts(data);
				});
		} else {
			firebase
				.firestore()
				.collection('posts')
				.orderBy('createdAt', 'desc')
				.get()
				.then((collectionSnapshot) => {
					const data = collectionSnapshot.docs.map((docSnapshot) => {
						const id = docSnapshot.id;
						return { ...docSnapshot.data(), id };
					});
					lastPodtSnapshotRef.current = collectionSnapshot.docs[collectionSnapshot.docs.length - 1];
					setPosts(data);
				});
		}
	}, [currentTopic]);

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? posts.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const goToNext = () => {
		const isLastSlide = currentIndex === posts.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	const postList = posts && posts.length > currentIndex;
	const slideStylesWidthBackground = {
		...slideStyles,
		backgroundImage: postList && `url(${posts[currentIndex].imageURL})`,
	};

	return (
		<>
			<div style={sliderStyles}>
				<div>
					<div onClick={goToPrevious} style={leftArrowStyles}>
						❰
					</div>
					<div onClick={goToNext} style={rightArrowStyles}>
						❱
					</div>
				</div>
				<div style={slideStylesWidthBackground}>
					{postList && (
						<Stack ml='24px'>
							<Stack direction='row' spacing={2}>
								<Chip
									label={`${posts[currentIndex].topic}`}
									sx={{
										fontWeight: 500,
										fontSize: '14px',
										lineHeight: '150%',
										width: '57px',
										height: '21px',
										color: 'white',
										backgroundColor: 'black',
										borderRadius: '2px',
										m: 2,
									}}
								/>
								<Typography
									gutterBottom
									variant='body1'
									component='div'
									sx={{
										fontSize: '12px',
										color: 'white',
										backgroundColor: 'rgba(0, 0, 0, 0.5);',
										lineHeight: '150%',
										fontWeight: 500,
										width: '50px',
										height: '18px',
										borderRadius: '8px',
										m: '13px  5px !important',
										p: '4px',
									}}
								>
									{`${posts[currentIndex].createdAt?.toDate().toLocaleDateString()}`}
								</Typography>
							</Stack>
							<Typography
								gutterBottom
								variant='h2'
								component='div'
								sx={{
									fontSize: '26px',
									color: 'white !important',
									backgroundColor: 'rgba(0, 0, 0, 0.5)',
									lineHeight: '150%',
									fontWeight: 500,
									width: '300px',
									height: '70px',
									borderRadius: '8px',
									p: 1,
									ml: 2,
									' @media (max-width: 767px)': {
										fontSize: '20px',
										width: '200px',
										height: '60px',
									},
								}}
							>
								{`${posts[currentIndex].title}`}
							</Typography>
						</Stack>
					)}
					{/* <Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
						}}
					>
						<CircularProgress />
					</Box> */}
				</div>

				<div style={dotsContainerStyles}>
					{posts.map((slide, slideIndex) => (
						<div style={dotStyle} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
							<Dot key={slideIndex} position={slideIndex === currentIndex}></Dot>
						</div>
					))}
				</div>
			</div>
			<img src={posts.imageURL} alt='' />
		</>
	);
};

export default ImageSlider;
