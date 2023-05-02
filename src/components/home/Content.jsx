import React, { useState } from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoIconSmall } from '../../assets/logo/NobodyClimb.svg';
import imgintro from '../../assets/photo/cont-intro.jpeg';
import imgabout from '../../assets/photo/cont-about.jpeg';
import PersonCard from './CardPerson';
import CardBlog from './CardBlog';
import PhotoAlbumList from '../photo-album/PhotoAlbumList';

const ContentWrapper = styled.div`
	@media (max-width: 767px) {
		width: 100%;
		img {
			max-width: 100%;
			height: auto;
		}
	}
`;
const ContIntro = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: linear-gradient(0deg, rgba(36, 36, 36, 0.4), rgba(36, 36, 36, 0.4)), url(${imgintro});
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	color: #ffffff;
	padding: 2%;
	h1 {
		font-family: 'Glow Sans TC';
		font-style: normal;
		font-weight: 700;
		font-size: 40px;
		line-height: 173.3%;
		padding-top: 128px;
	}
	p {
		max-width: 503px;
		font-family: 'Noto Sans CJK TC';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
		text-align: center;
		padding-top: 44px;
		padding-bottom: 195px;
		@media (max-width: 767px) {
			width: 300px;
		}
	}
`;
const ContPerson = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 40px;
	Button {
		margin-top: 40px;
		margin-bottom: 64px;
		background-color: #1b1a1a;
		border: 1px solid #1b1a1a;
		&:hover {
			background-color: #ffe70c;
			color: #1b1a1a;
			border: #1b1a1a;
			border: 1px solid #1b1a1a;
		}
	}
`;
const ContBlog = styled.div`
	border-top: 1px solid #d2d2d2;
	text-align: center;
	padding: 5%;

	h2 {
		font-family: 'Glow Sans TC';
		font-style: normal;
		font-weight: 700;
		font-size: 40px;
		line-height: 173.3%;
	}
	p {
		color: #6d6c6c;
		font-family: 'Noto Sans CJK TC';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
	}
`;

const ContPhoto = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top: 1px solid #d2d2d2;
	text-align: center;
	padding: 5%;
	h2 {
		font-family: 'Glow Sans TC';
		font-style: normal;
		font-weight: 700;
		font-size: 40px;
		line-height: 173.3%;
	}
	p {
		color: #6d6c6c;
		font-family: 'Noto Sans CJK TC';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 150%;
		margin-bottom: 28px;
	}
	Button {
		margin-top: 40px;
		margin-bottom: 64px;
		border: 1px solid #1b1a1a;
		color: #1b1a1a;
		&:hover {
			background-color: #dbd8d8;
			color: #1b1a1a;
			border: #1b1a1a;
			border: 1px solid #1b1a1a;
		}
	}
	@media (max-width: 767px) {
		margin: 5%;
	}
`;
const ContAbout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background-image: linear-gradient(180deg, #f5f5f5 1.35%, rgba(255, 255, 255, 0.33) 100%),
		url(${imgabout});
	background-size: cover;
	h2 {
		font-family: 'Noto Sans TC';
		font-style: normal;
		font-weight: 500;
		font-size: 32px;
		line-height: 150%;
		padding-top: 174px;
		padding-bottom: 8px;
	}
	p {
		font-family: 'Noto Sans TC';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 150%;
		text-align: center;
		max-width: 582px;
		padding-top: 16px;
		padding-bottom: 174px;
		@media (max-width: 767px) {
			width: 300px;
		}
	}
	svg {
		width: 40px;
		height: 4px;
	}
`;

const Content = () => {
	return (
		<ContentWrapper>
			<ContIntro>
				<Typography variant='h1'>小人物攀岩</Typography>
				<LogoIconSmall />
				<Typography variant='body1'>
					攀岩像是在牆上跳舞，像是在牆上即興演出，像是在走一條迷宮，起點終點很明確，過程自由發揮，你就是答案。
				</Typography>
			</ContIntro>
			<ContPerson>
				<PersonCard />
				<Link to='/biography' style={{ textDecoration: 'none' }}>
					<Button variant='contained' size='large'>
						認識小人物
					</Button>
				</Link>
			</ContPerson>
			<ContBlog>
				<Typography variant='h2'>探索攀岩</Typography>
				<Typography variant='body1'>關於攀岩的各種知識和故事</Typography>
				<CardBlog />
			</ContBlog>
			<ContPhoto>
				<Typography variant='h2'>精選影像</Typography>
				<Typography variant='body1'>看看小人物們攀岩的英姿吧</Typography>
				<PhotoAlbumList />
				<Link to='/photoalbum' style={{ textDecoration: 'none' }}>
					<Button variant='outlined' size='large'>
						看更多影像
					</Button>
				</Link>
			</ContPhoto>
			<ContAbout>
				<Typography variant='h2'>關於小人物攀岩</Typography>
				<svg>
					<rect id='box' x='0' y='0' width='40' height='4' />
				</svg>
				<Typography variant='body1'>
					緣起於一個 Nobody 很喜歡這項運動，希望有更多 Nobody 也能一起來 Climb
					<br />
					當然過程中一定會有一些疑惑，或許這裡能帶給你一些解答或收穫
				</Typography>
			</ContAbout>
		</ContentWrapper>
	);
};

export default Content;
