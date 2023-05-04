import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as SearchIcon } from '../../assets/icon/icon_search.svg';
import { Input, InputBase, TextField } from '@mui/material';
import { onSearch, selectSearch } from '../../redux/searchSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchWrapper = styled.div``;

const StylePaper = styled(Paper)`
	@media (max-width: 767px) {
		box-shadow: none;
	}
`;

const Search = () => {
	const inputRef = useRef();
	const dispatch = useDispatch();
	const onSubmit = (e) => {
		const values = inputRef.current.value;
		dispatch(onSearch(values));
	};

	const handleSearch = (e) => {
		e.key === 'Enter' && onSubmit();
	};
	return (
		<SearchWrapper>
			<StylePaper
				elevation={2}
				sx={{
					p: '2px 4px',
					display: 'flex',
					alignItems: 'center',
					width: 240,
					boxShadow: 'none',
				}}
			>
				<IconButton onClick={onSubmit} type='button' sx={{ p: '10px' }} aria-label='search'>
					<SearchIcon />
				</IconButton>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder='請輸入關鍵字'
					inputRef={inputRef}
					onChange={() => onSubmit}
					onKeyDown={handleSearch}
				/>
			</StylePaper>
		</SearchWrapper>
	);
};
export default Search;
