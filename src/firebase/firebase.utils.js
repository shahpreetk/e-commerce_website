import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDxLjEUd6PZvn723PDOK1WtUgLTg-OSEzc",
    authDomain: "crwn-db-e9ca8.firebaseapp.com",
    databaseURL: "https://crwn-db-e9ca8.firebaseio.com",
    projectId: "crwn-db-e9ca8",
    storageBucket: "crwn-db-e9ca8.appspot.com",
    messagingSenderId: "503905027218",
    appId: "1:503905027218:web:86767bddbe2c235ec0924b",
    measurementId: "G-7LRHM9GQ96"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 