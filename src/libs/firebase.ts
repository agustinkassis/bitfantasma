// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC9NNqRBWfEbxguMz_Gfu8v5lKN0iuF2JA',
  authDomain: 'bitfantasma.firebaseapp.com',
  projectId: 'bitfantasma',
  storageBucket: 'bitfantasma.appspot.com',
  messagingSenderId: '1014361469824',
  appId: '1:1014361469824:web:e05ebf835a5f3395ebc765',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth, firebaseApp };
