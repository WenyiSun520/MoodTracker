import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import './css/style.css';
import "animate.css";
import App from './components/App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkBNH1HlmfVkpW9UbTXJ2iS45Y73PmVyM",
  authDomain: "moodtracker-9df4e.firebaseapp.com",
  databaseURL: "https://moodtracker-9df4e-default-rtdb.firebaseio.com",
  projectId: "moodtracker-9df4e",
  storageBucket: "moodtracker-9df4e.appspot.com",
  messagingSenderId: "636643815953",
  appId: "1:636643815953:web:a16f7b10ce4ac3d57a37b0",
  measurementId: "G-T1BWYQ004F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// sample login user data
const user = {
  name: "wenyi",
  email: "winnieee.sun@gmail.com"
};
const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App user={user} />
    </BrowserRouter>
  </React.StrictMode>
);

