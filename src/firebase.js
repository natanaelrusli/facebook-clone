// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYIeoIvgX6iV3cYJncmDWFgMDyS2h1YkY",
  authDomain: "facebook-clone-896a2.firebaseapp.com",
  databaseURL: "https://facebook-clone-896a2.firebaseio.com",
  projectId: "facebook-clone-896a2",
  storageBucket: "facebook-clone-896a2.appspot.com",
  messagingSenderId: "357053954329",
  appId: "1:357053954329:web:a60468639e868f6b1eed88",
  measurementId: "G-62PH8MTWWR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
