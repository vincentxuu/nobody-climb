import { Box, Button, Input, MenuItem, Select, TextareaAutosize, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../utilis/firebase';
import Navigation from '../../shared/components/nav/Navigation';
import Footer from '../../shared/components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, selectLoading } from '../../redux/loadingSlice';
import { LoadingButton } from '@mui/lab';

function NewPost() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [topic, setTopic] = useState([]);
	const [topicName, setTopicName] = useState('');
	const [file, setFile] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoading);

	useEffect(() => {
		firebase
			.firestore()
			.collection('topic')
			.get()
			.then((collectionSnapshot) => {
				const data = collectionSnapshot.docs.map((doc) => {
					return doc.data();
				});
				setTopic(data);
			});
	}, []);
	const options = topic.map((topic) => {
		return {
			text: topic.name,
			value: topic.name,
			id: topic.id,
		};
	});
	console.log(options);
	const preViewURl = file
		? URL.createObjectURL(file)
		: 'https://source.unsplash.com/random/400x250/?article';

	function onSubmit() {
		dispatch(setLoading());
		const documentRef = firebase.firestore().collection('posts').doc();
		const fileRef = firebase.storage().ref('post-images/' + documentRef.id);
		const metadata = {
			contentType: file.type,
		};
		fileRef.put(file, metadata).then(() => {
			fileRef.getDownloadURL().then((imageURL) => {
				documentRef
					.set({
						title,
						content,
						topic: topicName,
						createdAt: firebase.firestore.Timestamp.now(),
						author: {
							displayName: firebase.auth().currentUser.displayName || '',
							photoURL: firebase.auth().currentUser.photoURL || '',
							uid: firebase.auth().currentUser.uid,
							email: firebase.auth().currentUser.email,
						},
						imageURL,
					})
					.then(() => {
						navigate('/blog');
					});
			});
		});
		dispatch(setLoading());
	}
	console.log(topicName);
	const onClose = () => {
		navigate('/blog');
	};
	return (
		<Box>
			<Navigation />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					margin: '0 auto',
					background: '#F5F5F5',
					'@media (max-width: 767px)': {
						maxWidth: '100%',
					},
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '930px',
						margin: '40px auto 0 auto',
						'@media (max-width: 767px)': {
							maxWidth: '100%',
							margin: '40px auto 0 auto',
						},
					}}
				>
					<Typography
						variant='h1'
						sx={{
							fontSize: '40px',
							fontWeight: 500,
							'@media (max-width: 767px)': {
								fontSize: '30px',
							},
						}}
					>
						發表文章
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							width: '930px',
							background: '#FFFF',
							padding: '40px 64px',
							margin: '40px auto 98px auto',
							'@media (max-width: 767px)': {
								width: '100%',
								padding: '5% 0',
							},
						}}
					>
						<input
							placeholder='輸入文章標題'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							style={{
								background: '#F5F5F5',
								marginBottom: '24px',
								padding: '30px',
								border: 'none',
							}}
						/>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Box
								sx={{
									width: '50%',
									display: 'flex',
									flexDirection: 'column',
									mr: '12px',
								}}
							>
								<Button
									as='label'
									htmlFor='post-image'
									sx={{ color: 'black', '&:hover': { borderColor: 'white' } }}
								>
									上傳圖片
								</Button>
								<img
									src={preViewURl}
									size='small'
									style={{
										height: '100%',
										width: '100%',
									}}
								/>
								<Input
									type='file'
									id='post-image'
									style={{ display: 'none' }}
									onChange={(e) => setFile(e.target.files[0])}
								/>
							</Box>

							<Select
								sx={{ height: '44px', width: '50%', ml: '12px' }}
								value={topicName || origin}
								onChange={(e) => setTopicName(e.target.value)}
							>
								<MenuItem disabled value={origin}>
									<em>請輸入文章主題</em>
								</MenuItem>
								{options.map((item) => (
									<MenuItem key={item.id} value={item.value}>
										{item.text}
									</MenuItem>
								))}
							</Select>
						</Box>
						<textarea
							placeholder='輸入文章內容'
							value={content}
							onChange={(e) => setContent(e.target.value)}
							style={{
								height: '400px',
								background: '#F5F5F5',
								padding: '30px',
								borderRadius: '4px',
								border: 'none',
								margin: '24px 0',
							}}
						/>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Button
								variant='outlined'
								loading={isLoading}
								onClick={onClose}
								sx={{
									color: 'black',
									borderColor: 'black',
									width: '255px',
									height: '44px',
									mr: '12px',
									'&:hover': { borderColor: 'black' },
									'@media (max-width: 767px)': {
										width: '200px',
										height: '44px',
									},
								}}
							>
								取消
							</Button>
							<LoadingButton
								variant='outlined'
								loading={isLoading}
								onClick={onSubmit}
								sx={{
									width: '255px',
									height: '44px',
									color: 'white',
									backgroundColor: 'black',
									ml: '12px',
									'&:hover': { borderColor: 'black', color: 'black' },
									'.MuiLoadingButton-loadingIndicator': {
										color: 'white',
									},
									'@media (max-width: 767px)': {
										width: '200px',
										height: '44px',
									},
								}}
							>
								發布文章
							</LoadingButton>
						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
}
export default NewPost;
