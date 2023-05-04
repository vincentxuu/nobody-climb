import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import Topics from './Topics';
import firebase from '../../utilis/firebase';
import { Box, Card, CardContent, CardMedia, Grid, ListItem, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectSearch } from '../../redux/searchSlice';

function Posts() {
	const [posts, setPosts] = useState([]);
	const location = useLocation();
	const urlSearchParams = new URLSearchParams(location.search);
	const currentTopic = urlSearchParams.get('topic');
	const lastPodtSnapshotRef = useRef();
	useEffect(() => {
		if (currentTopic) {
			firebase
				.firestore()
				.collection('posts')
				.where('topic', '==', currentTopic)
				.orderBy('createdAt', 'desc')
				.limit(4)
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
				.limit(4)
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

	const search = useSelector(selectSearch);
	const keys = ['title', 'topic', 'content'];
	const filteredPost = posts.filter((item) =>
		keys.some((key) => item[key].toLowerCase().includes(search.search.toLowerCase())),
	);
	return (
		<Box>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }}>
					{filteredPost.map((post) => {
						return (
							<Grid item xs={4} md={6} key={post.title}>
								<Card sx={{ m: 2 }}>
									<CardMedia sx={{ height: 248 }} image={post.imageURL} title='green iguana' />
									<CardContent sx={{ width: 360, height: 160, pdding: '5px' }}>
										<Box>
											<Typography
												gutterBottom
												variant='h2'
												component='div'
												sx={{ fontSize: '26px' }}
											>
												{post.title}
											</Typography>
											<Typography variant='subtitle1' color='#8E8C8C'>
												{post.topic}
											</Typography>
										</Box>
										<Typography variant='body2' color='#1B1A1A'>
											{post.content}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Box>
			<Waypoint
				onEnter={() => {
					console.log('test');
					if (lastPodtSnapshotRef.current) {
						if (currentTopic) {
							firebase
								.firestore()
								.collection('posts')
								.where('topic', '==', currentTopic)
								.orderBy('createdAt', 'desc')
								.startAfter(lastPodtSnapshotRef.current)
								.limit(4)
								.get()
								.then((collectionSnapshot) => {
									const data = collectionSnapshot.docs.map((docSnapshot) => {
										const id = docSnapshot.id;
										return { ...docSnapshot.data(), id };
									});
									lastPodtSnapshotRef.current =
										collectionSnapshot.docs[collectionSnapshot.docs.length - 1];
									setPosts([...posts, ...data]);
								});
						} else {
							firebase
								.firestore()
								.collection('posts')
								.orderBy('createdAt', 'desc')
								.startAfter(lastPodtSnapshotRef.current)
								.limit(4)
								.get()
								.then((collectionSnapshot) => {
									const data = collectionSnapshot.docs.map((docSnapshot) => {
										const id = docSnapshot.id;
										return { ...docSnapshot.data(), id };
									});
									lastPodtSnapshotRef.current =
										collectionSnapshot.docs[collectionSnapshot.docs.length - 1];
									setPosts([...posts, ...data]);
								});
						}
					}
				}}
			/>
		</Box>
	);
}

export default Posts;
