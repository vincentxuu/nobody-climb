import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BlogLeft from '../../assets/photo/blog-left.jpeg';
import BlogMidLeft from '../../assets/photo/blog-mid-left.jpeg';
import BlogMidRight from '../../assets/photo/blog-mid-right.jpeg';
import BlogRight from '../../assets/photo/blog-right.jpeg';

const CardBlogWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 40px;
	@media (max-width: 767px) {
		img {
			width: 50%;
		}
	}
`;
const CardBlogLeft = styled.div`
	width: 265px;
	height: 184px;
	background-image: url(${BlogLeft});
	background-color: rgba(0, 0, 0, 0.2);
	background-blend-mode: multiply;
	background-size: cover;
	border-radius: 8px;
	color: #ffff;
	text-align: center;
	margin: 10px 10px 10px 10px;
	h2 {
		font-family: 'Noto Sans CJK TC';
		font-style: normal;
		font-weight: 500;
		font-size: 26px;
		line-height: 150%;
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
	}
`;
const CardBlogMidLeft = styled.div`
	width: 265px;
	height: 184px;
	background-image: url(${BlogMidLeft});
	background-color: rgba(0, 0, 0, 0.2);
	background-blend-mode: multiply;
	background-size: cover;
	border-radius: 8px;
	color: #ffff;
	text-align: center;
	margin: 10px 10px 10px 10px;
	h2 {
		font-family: 'Noto Sans CJK TC';
		font-style: normal;
		font-weight: 500;
		font-size: 26px;
		line-height: 150%;
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
	}
`;
const CardBlogMidRight = styled.div`
	width: 265px;
	height: 184px;
	background-image: url(${BlogMidRight});
	background-color: rgba(0, 0, 0, 0.4);
	background-blend-mode: multiply;
	background-size: cover;
	border-radius: 8px;
	color: #ffff;
	text-align: center;
	margin: 10px 10px 10px 10px;
	h2 {
		font-family: 'Noto Sans CJK TC';
		font-style: normal;
		font-weight: 500;
		font-size: 26px;
		line-height: 150%;
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
	}
`;
const CardBlogRight = styled.div`
	width: 265px;
	height: 184px;
	background-image: url(${BlogRight});
	background-color: rgba(0, 0, 0, 0.3);
	background-blend-mode: multiply;
	background-size: cover;
	border-radius: 8px;
	color: #ffff;
	text-align: center;
	margin: 10px 10px 10px 10px;
	h2 {
		font-family: 'Noto Sans CJK TC';
		font-style: normal;
		font-weight: 500;
		font-size: 26px;
		line-height: 150%;
		position: relative;
		top: 50%;
		transform: translate(0, -50%);
	}
`;

const CardBlog = () => {
	return (
		<CardBlogWrapper>
			<CardBlogLeft>
				<Typography variant='h2'>裝備介紹</Typography>
			</CardBlogLeft>
			<CardBlogMidLeft>
				<Typography variant='h2'>技巧介紹</Typography>
			</CardBlogMidLeft>
			<CardBlogMidRight>
				<Typography variant='h2'>技術研究</Typography>
			</CardBlogMidRight>
			<CardBlogRight>
				<Typography variant='h2'>比賽介紹</Typography>
			</CardBlogRight>
		</CardBlogWrapper>
	);
};

export default CardBlog;
