// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6fVop5a5uu2OcIiqejXtFJOvjtiwWRI4",
  authDomain: "cuestionario035-9394f.firebaseapp.com",
  projectId: "cuestionario035-9394f",
  storageBucket: "cuestionario035-9394f.appspot.com",
  messagingSenderId: "582518003771",
  appId: "1:582518003771:web:95318937914874d4ec241e",
  measurementId: "G-KEB8Z4GBS2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;