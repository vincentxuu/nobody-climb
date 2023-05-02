import React from 'react';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { ReactComponent as SearchIcon } from '../../assets/icon/icon_search.svg';

const SearchWrapper = styled.div``;

const StylePaper = styled(Paper)`
	@media (max-width: 767px) {
		box-shadow: none;
	}
`;

const Search = () => {
	return (
		<SearchWrapper>
			<StylePaper
				elevation={2}
				component='form'
				sx={{
					p: '2px 4px',
					display: 'flex',
					alignItems: 'center',
					width: 240,
					boxShadow: 'none',
				}}
			>
				<IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
					<SearchIcon />
				</IconButton>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder='請輸入關鍵字'
					inputProps={{ 'aria-label': 'search google maps' }}
				/>
			</StylePaper>
		</SearchWrapper>
	);
};
export default Search;
