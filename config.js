import * as firebase from 'firebase'
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyAcH1OdHPuJH2asbriG8aJwrXMcm0B_7TY",
    authDomain: "wireless-library-8ab14.firebaseapp.com",
    projectId: "wireless-library-8ab14",
    storageBucket: "wireless-library-8ab14.appspot.com",
    messagingSenderId: "381256722662",
    appId: "1:381256722662:web:90f973a42a9d78afdaf327"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();