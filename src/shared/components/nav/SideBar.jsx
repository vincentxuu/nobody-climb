import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import SideBarItem from './SideBarItem';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../redux/userSlice';
import firebase from '../../../utilis/firebase';
import { Button } from '@mui/base';

const Container = styled.div`
	z-index: 2;
	background-color: white;
	position: absolute;
	height: 600px;
	top: 0px;
	left: 0px;
	width: 300px;
	left: ${(props) => (props.sidebar ? '0' : '-100%')};
	animation: showSidebar 0.4s;
	> svg {
		position: absolute;
		width: 30px;
		height: 30px;
		margin-top: 32px;
		margin-left: 32px;
		cursor: pointer;
	}
	@keyframes showSidebar {
		from {
			opacity: 0;
			width: 0;
		}
		to {
			opacity: 1;
			width: 300px;
		}
	}
`;

const Content = styled.div`
	margin-top: 100px;
	a {
		text-decoration: none;
		color: black;
		font-weight: 500;
		font-size: 14px;
		line-height: 150%;
	}
`;

const SignIn = styled.div``;

const StyleButton = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	font-weight: 500;
	font-size: 14px;
	line-height: 150%;
	border-radius: 10px;
	&:hover {
		background-color: black;
		color: white;
		padding: 2 px;
	}
`;

const Sidebar = ({ active }) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const closeSidebar = () => {
		active(false);
	};

	const handleLogout = () => {
		dispatch(logout());
		firebase.auth().signOut();
	};
	const handlePost = () => {
		navigate('/new-post');
	};
	return (
		<Container sidebar={active}>
			<CloseIcon onClick={closeSidebar} />
			<Content>
				<Link to='/home'>
					<SideBarItem Text='Home' />
				</Link>
				<Link to='/biography'>
					<SideBarItem Text='人物誌' />
				</Link>
				<Link to='/climbSpot'>
					<SideBarItem Text='岩場介紹' />
				</Link>
				<Link to='/photoalbum'>
					<SideBarItem Text='攝影集' />
				</Link>
				<Link to='/blog'>
					<SideBarItem Text='專欄文章' />
				</Link>
				<SignIn>
					{user ? (
						<>
							<StyleButton onClick={handlePost}>
								<SideBarItem Text='發表文章' />
							</StyleButton>
							<StyleButton onClick={handleLogout}>
								<SideBarItem Text='登出' />
							</StyleButton>
						</>
					) : (
						<Link to='/login' sx={{ textDecoration: 'none' }}>
							<SideBarItem Text='登入' />
						</Link>
					)}
				</SignIn>
			</Content>
		</Container>
	);
};

export default Sidebar;
