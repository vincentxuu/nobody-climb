import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactComponent as LogoIconWhite } from '../../assets/logo/Nobodylimb-white.svg';
import { ReactComponent as IconFacebook } from '../../assets/icon/icon-facebook.svg';
import { ReactComponent as IconInstagram } from '../../assets/icon/icon-instagram.svg';
import { ReactComponent as IconMail } from '../../assets/icon/icon-mail.svg';

const FooterWapper = styled.div`
	height: 160px;
	background: rgb(27, 26, 26);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 160px 0px 160px;
	@media (max-width: 767px) {
		padding: 0px 20px 0px 20px;
	}
	h6 {
		color: #8e8c8c;
		font-family: 'Noto Sans CJK TC';
		font-style: normal;
		font-weight: 350;
		font-size: 14px;
		line-height: 150%;
		padding: 0px 30px 0px 30px;
	}
	@media (max-width: 767px) {
		svg {
			//padding: 60px 20px 60px 20px;
		}
	}
`;
const FooterIcon = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	//margin-right: 160px;
	//margin-left: 65px;
	@media (max-width: 767px) {
		//margin-right: 20px;
		margin-left: 10px;
	}
	svg {
		height: 30px;
		width: 30px;
		background-color: #dbd8d8;
		border-radius: 31px;
		padding: 5px;
		margin: 3px;
		@media (max-width: 767px) {
			max-width: 20px;
			max-height: 20px;
		}
	}
`;

const Footer = () => {
	return (
		<FooterWapper>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
			>
				<LogoIconWhite />
				<Typography variant='subtitle1'>NobodyClimb © 2022.</Typography>
			</Box>
			<FooterIcon>
				<IconFacebook />
				<IconInstagram />
				<IconMail />
			</FooterIcon>
		</FooterWapper>
	);
};

export default Footer;
