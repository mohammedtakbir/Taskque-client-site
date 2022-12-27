// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPPtZqqx6E9FeAEsJ6Ok_5nY8VbUFbXIo",
    authDomain: "taskque-87c94.firebaseapp.com",
    projectId: "taskque-87c94",
    storageBucket: "taskque-87c94.appspot.com",
    messagingSenderId: "14477555829",
    appId: "1:14477555829:web:12dbbff646d7f2715ce03c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
const db = getFirestore();

export { auth, db }