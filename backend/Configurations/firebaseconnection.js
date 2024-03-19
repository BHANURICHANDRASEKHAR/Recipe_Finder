const admin = require('firebase-admin');
const {initializeApp} = require('firebase/app')
const firebaseConfig = {
  apiKey: "AIzaSyBAGZERfY5vn3QPDxYllzVzm3tY70vwF3c",
  authDomain: "react-647c1.firebaseapp.com",
  databaseURL: "https://react-647c1-default-rtdb.firebaseio.com",
  projectId: "react-647c1",
  storageBucket: "react-647c1.appspot.com",
  messagingSenderId: "287239545051",
  appId: "1:287239545051:web:52c98cb072d2256dac2cfe"
};

// Initialize Firebase
exports.firebase=()=>{
    initializeApp({
                credential: firebaseConfig,
                storageBucket: "react-647c1.appspot.com"
            });
    console.log("FireBase Connected");

}