import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NavMenuWrapper = styled.div`
	font-family: 'Noto Sans TC';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 150%;
	width: 100%;
	button {
		color: black;
		font-size: 16px;
	}
`;
const StyleMenu = styled(Menu)`
	a {
		text-decoration: none;
		color: black;
		font-weight: 500;
		font-size: 14px;
		line-height: 150%;
	}
`;

export default function BasicMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<NavMenuWrapper>
			<Button
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				專欄文章
				<ExpandMoreIcon />
			</Button>
			<StyleMenu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<Link to='/blog'>
					<MenuItem>裝備介紹</MenuItem>
				</Link>
				<Link to='/blog'>
					<MenuItem>技巧介紹</MenuItem>
				</Link>
				<Link to='/blog'>
					<MenuItem>技術研究</MenuItem>
				</Link>
				<Link to='/blog'>
					<MenuItem>比賽介紹</MenuItem>
				</Link>
			</StyleMenu>
		</NavMenuWrapper>
	);
}
