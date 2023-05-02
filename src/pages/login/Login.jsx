import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import {
	Button,
	Box,
	Typography,
	Divider,
	TextField,
	InputAdornment,
	IconButton,
} from '@mui/material';
import imgintro from '../../assets/photo/cont-intro.jpeg';
import Navigation from '../../shared/components/nav/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../../redux/userSlice';
import { setLoading, selectLoading } from '../../redux/loadingSlice';
import firebase from '../../utilis/firebase';
import Footer from '../../shared/components/Footer';
import { Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

const LoginWrapper = styled.div`
	background-color: #f9f9f9;
`;
const Content = styled.div`
	width: 930px;
	height: 581px;
	background-color: #ffffff;
	margin: 64px auto 64px auto;
	display: flex;
	@media (max-width: 767px) {
		width: 100%;
	}
`;

const DisplayButton = {
	width: '50%',
	color: 'black',
};

const ActiveButton = {
	width: '50%',
	color: 'black',
	borderBottom: '1.5px solid black',
	borderRadius: '0',
};

const Login = () => {
	const [activeItem, setActiveItem] = useState('login');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoading);
	const [showPassword, setShowPassword] = useState(false);

	const googleLogin = async () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		await firebase
			.auth()
			.signInWithPopup(provider)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
					}),
				);
				navigate('/');
			})
			.catch((error) => alert(error.message));
		navigate('/');
	};

	const onSubmit = () => {
		dispatch(setLoading());
		if (activeItem === 'register') {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then((userAuth) => {
					dispatch(
						login({
							email: userAuth.user.email,
							uid: userAuth.user.uid,
						}),
					);
					navigate('/');
				})
				.catch((error) => alert(error.message));
		} else if (activeItem === 'login') {
			dispatch(login());
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((userAuth) => {
					dispatch(
						login({
							email: userAuth.user.email,
							uid: userAuth.user.uid,
						}),
					);
					navigate('/');
				})
				.catch((error) => alert(error.message));
		}
		dispatch(setLoading());
	};
	const handleClick = () => {
		setShowPassword(!showPassword);
	};
	const handleMouseDown = (e) => {
		e.preventDefault();
	};
	return (
		<LoginWrapper>
			<Navigation />
			<Content>
				<Box sx={{ '@media (max-width: 767px)': { display: 'none' } }}>
					<img
						src={imgintro}
						alt=''
						style={{
							width: '464px',
							height: '581px',
							objectFit: 'cover',
						}}
					/>
				</Box>
				<Box
					sx={{
						width: '100%',
						typography: 'body1',
						padding: '5%',
					}}
				>
					<Box
						sx={{
							borderBottom: 1,
							borderColor: 'divider',
						}}
					>
						<Button
							variant='text'
							sx={activeItem === 'login' ? ActiveButton : DisplayButton}
							active={activeItem ? 'login' : undefined}
							onClick={() => {
								setActiveItem('login'), setEmail(''), setPassword('');
							}}
						>
							登入
						</Button>
						<Button
							variant='text'
							sx={activeItem === 'register' ? ActiveButton : DisplayButton}
							active={activeItem ? 'register' : undefined}
							onClick={() => {
								setActiveItem('register'), setEmail(''), setPassword('');
							}}
						>
							註冊
						</Button>
					</Box>
					<Box>
						<Box component='form' noValidate autoComplete='off'>
							<Typography>E-mail</Typography>
							<TextField
								fullWidth
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='請輸入信箱'
							/>
							<Typography>密碼</Typography>
							<TextField
								fullWidth
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='請輸入密碼'
								required
								type={showPassword ? 'text' : 'password'}
								InputProps={{
									endAdornment: (
										<InputAdornment>
											<IconButton
												aria-label='Toggle Password visibility'
												onClick={handleClick}
												onMouseDown={handleMouseDown}
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
							<LoadingButton
								variant='contained'
								loading={isLoading}
								sx={{
									width: '100%',
									height: '44px',
									color: 'white',
									backgroundColor: 'black',
									margin: '20px 0 32px 0',
									'&:hover': {
										backgroundColor: 'black',
									},
								}}
								onClick={onSubmit}
							>
								{activeItem === 'register' && '註冊'}
								{activeItem === 'login' && '登入'}
							</LoadingButton>
						</Box>
						<Divider>或</Divider>
						<Box
							sx={{
								height: '108px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								color: 'black',
								mt: '32px',
							}}
						>
							<Button
								variant='outlined'
								onClick={googleLogin}
								color='inherit'
								startIcon={<Google />}
								sx={{ color: 'black' }}
							>
								使用Google登入
							</Button>
						</Box>
					</Box>
				</Box>
			</Content>
			<Footer />
		</LoginWrapper>
	);
};
export default Login;
