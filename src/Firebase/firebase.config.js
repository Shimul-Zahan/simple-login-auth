// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDk5J8CbdkM7G9DTJBcb4D9poIzBl85ZCo",
    authDomain: "login-auth-c2b8f.firebaseapp.com",
    projectId: "login-auth-c2b8f",
    storageBucket: "login-auth-c2b8f.appspot.com",
    messagingSenderId: "49501960149",
    appId: "1:49501960149:web:46fc7e846b3d33e61e6f5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;