import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from '@emotion/styled';

const StyledImageList = styled(ImageList)`
	@media (max-width: 767px) {
		column-count: unset !important;
	}
`;
const itemData = [
	{
		img: 'https://i.imgur.com/pmhwVbf.jpg',
		title: 'Bed',
	},
	{
		img: 'https://i.imgur.com/BSidoFY.jpg',
		title: 'Books',
	},
	{
		img: 'https://i.imgur.com/K25stCr.jpg',
		title: 'Sink',
	},
	{
		img: 'https://i.imgur.com/3ovqKED.jpg',
		title: 'Kitchen',
	},
	{
		img: 'https://i.imgur.com/KtEugIY.jpg',
		title: 'Blinds',
	},
	{
		img: 'https://i.imgur.com/sHnwfGV.jpg',
		title: 'Chairs',
	},
	{
		img: 'https://i.imgur.com/AwJ83FD.jpg',
		title: 'Laptop',
	},
	{
		img: 'https://i.imgur.com/YrVFXHg.jpg',
		title: 'Doors',
	},
	{
		img: 'https://i.imgur.com/GC6VD5A.jpg',
		title: 'Coffee',
	},
	{
		img: 'https://i.imgur.com/LyfwLGy.jpg',
		title: 'Storage',
	},
	{
		img: 'https://i.imgur.com/jYA7WJP.jpg',
		title: 'Candle',
	},
	{
		img: 'https://i.imgur.com/AgQpro0.jpg',
		title: 'Coffee table',
	},
];

export default function MasonryImageList() {
	return (
		<Box sx={{ maxwidth: 1120 }}>
			<StyledImageList variant='masonry' cols={3} gap={8}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<img
							src={`${item.img}?w=248&fit=crop&auto=format`}
							srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
							alt={item.title}
							loading='lazy'
						/>
					</ImageListItem>
				))}
			</StyledImageList>
		</Box>
	);
}
