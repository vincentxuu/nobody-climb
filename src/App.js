import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AnimatedRoutes from './AnimatedRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './redux/userSlice';
import firebase from './utilis/firebase';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		firebase.auth().onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
					}),
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);
	return (
		<Router>
			<AnimatedRoutes />
		</Router>
	);
}
export default App;
