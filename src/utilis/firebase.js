import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAsZwMPB_ehkABjlo7hf91iP9iyaENKFoY',
	authDomain: 'nobodyclimb.firebaseapp.com',
	projectId: 'nobodyclimb',
	storageBucket: 'nobodyclimb.appspot.com',
	messagingSenderId: '190697952536',
	appId: '1:190697952536:web:845476bd4d75ec05557a6d',
	measurementId: 'G-WY1778JGQT',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
