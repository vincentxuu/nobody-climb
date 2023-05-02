import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import BioContText from '../../components/biography/BioContText';
import CardPerson from '../../components/home/CardPerson';
import Footer from '../../shared/components/Footer';
import Navigation from '../../shared/components/nav/Navigation';
import { ReactComponent as ArrowIconLeft } from '../../assets/icon/arrow-left.svg';

const PersonWrapper = styled.div`
	background: #f5f5f5;
	position: relative;
`;
const BackIcon = styled.div`
	background-color: #f5f5f5;
	padding: 1%;
	position: absolute;
	top: 4%;
	left: 21%;
	@media (max-width: 767px) {
		top: 4%;
		left: 4%;
	}
	button {
		display: flex;
		border: 0px solid #1b1a1a;
		background-color: #f5f5f5;
		color: #1b1a1a;
		&:hover {
			background-color: #dbd8d8;
			color: #1b1a1a;
			border: #1b1a1a;
			border: 0px solid #1b1a1a;
		}
		svg {
			padding-right: 8px;
		}
	}
`;

const ContentTop = styled.div`
	background: #f5f5f5;
	padding-top: 112px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ContentBottom = styled.div`
	background-color: #dbd8d8;
	h2 {
		font-family: 'Noto Sans CJK TC';
		font-style: normal;
		font-weight: 500;
		font-size: 26px;
		line-height: 150%;
		padding: 40px 0px 24px 0px;
	}
	text-align: center;
	button {
		margin-top: 40px;
		margin-bottom: 104px;
		border: 1px solid #1b1a1a;
		color: #1b1a1a;
		&:hover {
			background-color: #dbd8d8;
			color: #1b1a1a;
			border: #1b1a1a;
			border: 1px solid #1b1a1a;
		}
	}
`;

function Person() {
	return (
		<PersonWrapper>
			<Navigation />
			<BackIcon>
				<Link to='/biography' style={{ textDecoration: 'none' }}>
					<Button>
						<ArrowIconLeft />
						<Typography variant='body1' component='p'>
							人物誌
						</Typography>
					</Button>
				</Link>
			</BackIcon>
			<ContentTop>
				<BioContText />
			</ContentTop>
			<ContentBottom>
				<Typography variant='h2'>相關文章</Typography>
				<CardPerson />
				<Link to='/biography' style={{ textDecoration: 'none' }}>
					<Button variant='outlined' size='large'>
						更多小人物
					</Button>
				</Link>
			</ContentBottom>
			<Footer />
		</PersonWrapper>
	);
}
export default Person;
