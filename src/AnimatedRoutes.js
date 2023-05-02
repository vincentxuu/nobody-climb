import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Biography from './pages/biography/Biography';
import BioContent from './pages/biography/BioContent';
import ClimbSpot from './pages/climspot/ClimbSpot';
import PhotoAlbum from './pages/photo-album/PhotoAlbum';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import { AnimatePresence } from 'framer-motion';
import NewPost from './pages/blog/NewPost';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/userSlice';

const AnimatedRoutes = () => {
	const location = useLocation();
	const user = useSelector(selectUser);
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/biography' element={<Biography />}>
					<Route path='content' element={<BioContent />} />
				</Route>
				<Route path='/climbspot' element={<ClimbSpot />} />
				<Route path='/photoalbum' element={<PhotoAlbum />} />
				<Route path='/blog' element={<Blog />}></Route>
				<Route path='/new-post' element={<NewPost />} />
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
