import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import styled from '@emotion/styled';
import { selectSearch } from '../../redux/searchSlice';
import { useSelector } from 'react-redux';

const StyledImageList = styled(ImageList)`
	overflow-y: unset;
	height: unset;
	@media (max-width: 767px) {
		grid-template-columns: unset !important;
	}
`;
const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'pogo',
		location: '台北',
	},
	{
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
		location: '新北',
	},
	{
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
		location: '桃園',
	},
	{
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
		location: '新竹',
	},
	{
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
		location: '台南',
	},
	{
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
		location: '高雄',
	},
	{
		img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
		title: 'Basketball',
		location: '新北',
	},
	{
		img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
		title: 'Fern',
		location: '台北',
	},
	{
		img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
		title: 'Mushrooms',
		location: '台中',
	},
	{
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
		location: '台中',
	},
	{
		img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
		title: 'Sea star',
		location: '花蓮',
	},
	{
		img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
		title: 'Bike',
		location: '台北',
	},
];

export default function TitlebarImageList() {
	const search = useSelector(selectSearch);
	const keys = ['title', 'location'];
	const itemDataList = itemData.filter((item) =>
		keys.some((key) => item[key].toLowerCase().includes(search.search.toLowerCase())),
	);
	return (
		<StyledImageList
			sx={{
				maxWidth: 1120,
				height: 336,
			}}
			cols={3}
		>
			{itemDataList.map((item) => (
				<ImageListItem key={item.img}>
					<img
						src={`${item.img}?w=400&fit=crop&auto=format`}
						srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
						alt={item.title}
						loading='lazy'
					/>
					<ImageListItemBar
						title={item.title}
						subtitle={<span>地點: {item.location}</span>}
						position='below'
					/>
				</ImageListItem>
			))}
		</StyledImageList>
	);
}
