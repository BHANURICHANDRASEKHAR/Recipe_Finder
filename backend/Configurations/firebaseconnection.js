const  admin =require('firebase-admin');

const firebaseConfig =require('../firebase.json')

exports.firebase=()=>{

    admin.initializeApp({
        credential: admin.credential.cert(firebaseConfig),
        storageBucket:'gs://react-647c1.appspot.com/'
    });
    console.log("FireBase Connected");
}