// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqwNiJkt8MSWbSwfj4YfkYsi7XIJhsOYg",
  authDomain: "disneyplus-clone-95352.firebaseapp.com",
  projectId: "disneyplus-clone-95352",
  storageBucket: "disneyplus-clone-95352.appspot.com",
  messagingSenderId: "921359786766",
  appId: "1:921359786766:web:4520044988694738c0ad5f",
  measurementId: "G-7EDP3KYCSK"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

