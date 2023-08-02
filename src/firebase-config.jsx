// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpBjJcyMSjqb0TgjYUpFi6PS155Kl6kWM",
  authDomain: "vinctagram-b23ee.firebaseapp.com",
  projectId: "vinctagram-b23ee",
  storageBucket: "vinctagram-b23ee.appspot.com",
  messagingSenderId: "563955450706",
  appId: "1:563955450706:web:5d544573f4a6f2fcdbf08b",
  measurementId: "G-D6BRCV99HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



