import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from '@emotion/styled';

const StyleImageList = styled(ImageList)`
	overflow-y: unset;
	height: unset;
	@media (max-width: 767px) {
		grid-template-columns: unset !important;
		width: 100%;
	}
`;

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export default function QuiltedImageList() {
	return (
		<StyleImageList sx={{ width: 800, height: 800 }} variant='quilted' cols={4} rowHeight={121}>
			{itemData.map((item) => (
				<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
					<img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading='lazy' />
				</ImageListItem>
			))}
		</StyleImageList>
	);
}

const itemData = [
	{
		img: 'https://i.imgur.com/LyfwLGy.jpg',
		title: 'Breakfast',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://i.imgur.com/jYA7WJP.jpg',
		title: 'Burger',
	},
	{
		img: 'https://i.imgur.com/AgQpro0.jpg',
		title: 'Camera',
	},
	{
		img: 'https://i.imgur.com/pmhwVbf.jpg',
		title: 'Coffee',
		cols: 2,
	},
	{
		img: 'https://i.imgur.com/GC6VD5A.jpg',
		title: 'Hats',
		cols: 2,
	},
	{
		img: 'https://i.imgur.com/K25stCr.jpg',
		title: 'Honey',
		author: '@arwinneil',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://i.imgur.com/YrVFXHg.jpg',
		title: 'Basketball',
	},
	{
		img: 'https://i.imgur.com/BSidoFY.jpg',
		title: 'Fern',
	},
	{
		img: 'https://i.imgur.com/AwJ83FD.jpg',
		title: 'Mushrooms',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://i.imgur.com/3ovqKED.jpg',
		title: 'Tomato basil',
	},
	{
		img: 'https://i.imgur.com/KtEugIY.jpg',
		title: 'Sea star',
	},
	{
		img: 'https://i.imgur.com/sHnwfGV.jpg',
		title: 'Bike',
		cols: 2,
	},
];
