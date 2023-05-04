import { List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import firebase from '../../utilis/firebase';

function Topics() {
	const location = useLocation();
	const urlSearchParams = new URLSearchParams(location.search);
	const currentTopic = urlSearchParams.get('topic');
	const [topic, setTopic] = useState([]);
	useEffect(() => {
		firebase
			.firestore()
			.collection('topic')
			.get()
			.then((collectionSnapshot) => {
				const data = collectionSnapshot.docs.map((doc) => {
					return doc.data();
				});
				setTopic(data);
			});
	}, []);
	return (
		<List animated selection>
			{topic.map((topic) => {
				return (
					<List.Item
						key={topic.id}
						as={Link}
						to={`?topic=${topic.name}`}
						active={currentTopic === topic.name}
					>
						{topic.name}
					</List.Item>
				);
			})}
		</List>
	);
}
export default Topics;
