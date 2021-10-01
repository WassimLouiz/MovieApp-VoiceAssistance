import * as firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAnwrX0Sa6oLx_yxn_94oYOqltZO9jaVO4",
  authDomain: "movieauthentication-a12cb.firebaseapp.com",
  databaseURL: "https://movieauthentication-a12cb-default-rtdb.firebaseio.com",
  projectId: "movieauthentication-a12cb",
  storageBucket: "movieauthentication-a12cb.appspot.com",
  messagingSenderId: "198218473298",
  appId: "1:198218473298:web:1f8deacfe7d833f450648b",
  measurementId: "G-76W5V7MLGR"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire