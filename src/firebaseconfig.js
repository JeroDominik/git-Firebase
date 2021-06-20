import firebase from 'firebase';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAVe0__hB-x9LuQE3PhIOm_RYhymfMKhB4",
    authDomain: "fir-auth-830e8.firebaseapp.com",
    projectId: "fir-auth-830e8",
    storageBucket: "fir-auth-830e8.appspot.com",
    messagingSenderId: "668481418428",
    appId: "1:668481418428:web:f5743be86b2df72d7bccb9",
    measurementId: "G-M10C871P4X"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const auth = fire.auth();

  
  export {auth}