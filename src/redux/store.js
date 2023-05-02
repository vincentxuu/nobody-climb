import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { loadingReducer } from './loadingSlice';
import storage from 'redux-persist/lib/storage';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer,);

export const store = configureStore({
	reducer: {
		user: persistedReducer,
		loading: loadingReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
