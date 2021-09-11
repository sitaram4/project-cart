import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
// import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app"


const firebaseConfig = {
  apiKey: "AIzaSyD5l5_RGrd-OsoytpdslAuQoC0P_8UeItk",
  authDomain: "cart-bf1da.firebaseapp.com",
  projectId: "cart-bf1da",
  storageBucket: "cart-bf1da.appspot.com",
  messagingSenderId: "55112807992",
  appId: "1:55112807992:web:d9276dd4580d49fd9318cd"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
