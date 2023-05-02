import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
	name: 'loading',
	initialState: false,
	reducers: {
		setLoading: (state) => !state,
	},
});

export const { setLoading } = loadingSlice.actions;
export const selectLoading = (state) => state.loading;
export const loadingReducer = loadingSlice.reducer;
