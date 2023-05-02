import React, { useState } from 'react';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { ReactComponent as LogoIcon } from '../../../assets/logo/Nobodylimb-black.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icon/icon_search.svg';
import NavMenu from '../../components/nav/NavMenu';
import SideBar from '../../components//nav/SideBar';
import { motion, useScroll, useSpring } from 'framer-motion';
import { List, ListItem, Menu, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../redux/userSlice';
import firebase from '../../../utilis/firebase';

const NavigationWrapper = styled.div`
	height: 83px;
	background-color: #ffffff;
	display: flex;
	justify-content: space-between;
	@media (max-width: 767px) {
		background-color: #ffe70c;
		flex-direction: column;
		height: auto;
		width: 100%;
		img {
			max-width: 100%;
			height: auto;
		}
	}
`;
const NavigationRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 767px) {
		background-color: #ffffff;
		display: none;
	}
`;
const NavigationLeft = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Logo = styled.div`
	background-color: #ffe70c;
	padding: 18px 32px;
	@media (max-width: 767px) {
		padding: 23px 8px;
	}
`;
const Search = styled.div`
	padding: 20px 20px;
	@media (max-width: 767px) {
		background-color: #ffe70c;
		padding: 20px 32px;
		display: none;
		form {
			background-color: #ffe70c;
		}
	}
`;
const StyleList = styled(List)`
	display: flex;
	width: 500px;
`;
const SignIn = styled.div`
	padding: 28px 32px;
`;
const ProgressBar = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 15px;
	background: #ffe70c;
	transform-origin: 0%;
	z-index: 9999;
`;

const text = {
	color: '#1B1A1A',
	fontWeight: 500,
	fontSize: '16px',
	lineHeight: '150%',
};

const Navigation = () => {
	const [sidebar, setSidebar] = useState(false);
	const showSiderbar = () => setSidebar(!sidebar);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 30,
	});
	const location = useLocation();
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		firebase.auth().signOut();
	};
	const handlePost = () => {
		navigate('/new-post');
	};

	return (
		<>
			<NavigationWrapper>
				<NavigationLeft>
					<Box
						sx={{
							display: 'none',
							'@media (max-width: 767px)': {
								display: 'contents',
							},
						}}
					>
						<MenuIcon onClick={showSiderbar} />
						{sidebar && <SideBar active={setSidebar} />}
					</Box>
					<Link to='/' style={{ textDecoration: 'none' }}>
						<Logo>
							<LogoIcon />
						</Logo>
					</Link>
					<Search>
						<Paper
							elevation={2}
							component='form'
							sx={{
								p: '2px 4px',
								display: 'flex',
								alignItems: 'center',
								maxWidth: 400,
								boxShadow: 'none',
							}}
						>
							<IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
								<SearchIcon />
							</IconButton>
							<InputBase sx={{ ml: 2, flex: 1 }} />
						</Paper>
					</Search>
				</NavigationLeft>
				<NavigationRight>
					<StyleList>
						<ListItem sx={{ p: 0 }}>
							<Link to='/biography'>
								<Button variant='text' sx={text}>
									人物誌
								</Button>
							</Link>
						</ListItem>
						<ListItem sx={{ p: 0 }}>
							<Link to='/climbSpot'>
								<Button variant='text' sx={text}>
									岩場介紹
								</Button>
							</Link>
						</ListItem>
						<ListItem sx={{ p: 0 }}>
							<Link to='/photoalbum'>
								<Button variant='text' sx={text}>
									攝影集
								</Button>
							</Link>
						</ListItem>
						<ListItem sx={{ p: 0 }}>
							<NavMenu />
						</ListItem>
					</StyleList>
					<SignIn>
						{user ? (
							<>
								<Button
									variant='outlined'
									color='inherit'
									size='large'
									sx={{ width: '120px', color: 'black', mr: '5px' }}
									onClick={handlePost}
								>
									發表文章
								</Button>
								<Button
									variant='outlined'
									color='inherit'
									size='large'
									sx={{ width: '104px', color: 'black' }}
									onClick={handleLogout}
								>
									登出
								</Button>
							</>
						) : (
							<Link to='/login' sx={{ textDecoration: 'none' }}>
								<Button
									variant='outlined'
									color='inherit'
									size='large'
									sx={{ width: '104px', color: 'black' }}
								>
									登入
								</Button>
							</Link>
						)}
					</SignIn>
				</NavigationRight>
			</NavigationWrapper>
			{location.pathname === '/login' ? (
				''
			) : location.pathname === '/new-post' ? (
				''
			) : (
				<ProgressBar style={{ scaleX }} />
			)}
		</>
	);
};
export default Navigation;
