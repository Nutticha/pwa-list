// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe6PtKMXKfkwFXn5B9f-1i_x6qZdhDoRE",
  authDomain: "pwa-list-2630e.firebaseapp.com",
  projectId: "pwa-list-2630e",
  storageBucket: "pwa-list-2630e.appspot.com",
  messagingSenderId: "105227789891",
  appId: "1:105227789891:web:5bf2aa1473fd1eabee96f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = {firebase};