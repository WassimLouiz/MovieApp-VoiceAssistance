import * as firebase from "firebase/app";
import 'firebase/storage'; 
import 'firebase/auth'; 
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyCP7YQ3Tzc4lh3ByMZFo0mL9w5PGJWvhfg",
  authDomain: "moviesalanauthentification.firebaseapp.com",
  projectId: "moviesalanauthentification",
  storageBucket: "moviesalanauthentification.appspot.com",
  messagingSenderId: "837758657647",
  appId: "1:837758657647:web:88454fa6de3ec85d17199a",
  measurementId: "G-5827P04W4Q"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;