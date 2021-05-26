//import firebase from "firebase";
import firebase from "firebase/app"
import "firebase/auth"

 
    // paste your firebase config object here
const firebaseConfig = ({
  apiKey: "AIzaSyA7svA8v0YvWHno0gXsmFv9NJ_3dfWJxSU",
  authDomain: "clone-1ad6b.firebaseapp.com",
  projectId: "clone-1ad6b",
  storageBucket: "clone-1ad6b.appspot.com",
  messagingSenderId: "1024146397889",
  appId: "1:1024146397889:web:ee4701935435f9a9055240",
  measurementId: "G-84268D6MQF"
});
 
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
export { auth };