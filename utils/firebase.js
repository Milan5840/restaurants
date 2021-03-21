import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCxR_iu7-GRVX_5YXHIfpZWkeeKSCczkRo",
    authDomain: "restaurants-159ea.firebaseapp.com",
    projectId: "restaurants-159ea",
    storageBucket: "restaurants-159ea.appspot.com",
    messagingSenderId: "941595234312",
    appId: "1:941595234312:web:2c04fb0a18b2ecd51b41bd"
  };
  
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
