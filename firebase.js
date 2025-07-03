// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBeXYnx6xJLK6qaJvjCeaD__FhcFpMPFEo",
    authDomain: "react-front-9b549.firebaseapp.com",
    projectId: "react-front-9b549",
    storageBucket: "react-front-9b549.firebasestorage.app",
    messagingSenderId: "224354416225",
    appId: "1:224354416225:web:8ac6aae9ba6119ce3bdc20"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log("Firebase Config: ", firebaseConfig);


export { auth };

