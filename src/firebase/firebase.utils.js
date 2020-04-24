import firebase from "firebase/app";
import "firebase/firebase";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBqTBOL4Tm_i4IiIXl1hREPPriK8e5yOT0",
    authDomain: "crwn-db-59fdd.firebaseapp.com",
    databaseURL: "https://crwn-db-59fdd.firebaseio.com",
    projectId: "crwn-db-59fdd",
    storageBucket: "crwn-db-59fdd.appspot.com",
    messagingSenderId: "381830005349",
    appId: "1:381830005349:web:5cf6b011d249b90c39fc8c",
    measurementId: "G-L9KT966QSK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;