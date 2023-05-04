import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	search: '',
};

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		onSearch: (state, action) => {
			state.search = action.payload;
		},
		noSearch: (state) => {
			state.search = '';
		},
	},
});

export const { onSearch, noSearch } = searchSlice.actions;
export const selectSearch = (state) => state.search;
export const searchReducer = searchSlice.reducer;
