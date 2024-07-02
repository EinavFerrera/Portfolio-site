import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkwO76IRHnGsqO29EstBCLF638MPcYNZw",
  authDomain: "einavferrera-portfolio.firebaseapp.com",
  projectId: "einavferrera-portfolio",
  storageBucket: "einavferrera-portfolio.appspot.com",
  messagingSenderId: "909177387468",
  appId: "1:909177387468:web:c37c76bb22432e3d2cc569",
  measurementId: "G-JMD4TDYDQ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//eslint-disable-next-line
const analytics = getAnalytics(app);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
