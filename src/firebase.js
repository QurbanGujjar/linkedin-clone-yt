// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACkbWz9RdUWUnrLa10kv0eJhujk6soPtk",
    authDomain: "linkedin-clone-736e7.firebaseapp.com",
    projectId: "linkedin-clone-736e7",
    storageBucket: "linkedin-clone-736e7.appspot.com",
    messagingSenderId: "562977075555",
    appId: "1:562977075555:web:fb8b59f52a22021c7ee356"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };